---
slug: jvm-memory-allocation-of-objects
title: Checking memory alocation of Objects - JOL library (Java Object Layout)
authors: bjab
tags: [jvm, jol, heap, memory, references]
---
# In short

- Each object has memory overhead (from 12 to 16 bytes for metadata headers, references (4 bytes), memory for simple data type.
- Processors (CPU) can be 32 bit (4 byte - supporting a maximum of 4 GB RAM) or 64 bit (8 byte). This means that the CPU downloads data from RAM in batches of 4 or 8 bytes at a time.
- Padding - alignment to 8 bytes - i.e. objects occupy memory equal to a multiple of 8 bytes. This can be increased because it limits the use of the maximum heap to 32 GB.
- The reference takes 4 bytes (32bit CPU or 64bit CPU with Compressed References (default)) or 8 bytes (64bit CPU).
  - Maximum heap for Compressed References = 32 GB - use of bit shift by 3 places due to the fact that the 8 byte always has three zeros on the right side. (8 byte because it is aligned to 8 byte padding). Therefore we can use 32 GB heap instead of 4 GB.
  - When we use a 64-bit CPU with Compressed References and increase the heap memory above 32 GB, we may have problems with the application and a significant increase in the heap occupied due to the change in reference memory from 4 bytes to 8 bytes for every object on our heap- e.g. a change from -Xmx31g to -Xmx33g may result in an increase in data seizure by 40% (depending on the data)
<!-- truncate -->

# Configuration

To check what the memory layout looks like, we will use the library:

```xml
<dependency>
    <groupId>org.openjdk.jol</groupId>
    <artifactId>jol-core</artifactId>
    <version>0.10</version>
</dependency>
```

Jol is a toolbox for analyzing the layout of objects in the JVM. These tools use (to decode the actual layout of an object, its memory footprint (footprint) and references). Jol uses tools such as:

- Unsafe
- JVMTI
- Serviceability Agent (SA)

# Available methods

## VM Details - `VM.current().details()` - Basic data related to our JVM

```
# Running 64-bit HotSpot VM.
# Using compressed oop with 3-bit shift.
# Using compressed klass with 3-bit shift.
# WARNING | Compressed references base/shifts are guessed by the experiment!
# WARNING | Therefore, computed addresses are just guesses, and ARE NOT RELIABLE.
# WARNING | Make sure to attach Serviceability Agent to get the reliable addresses.
# Objects are 8 bytes aligned.
# Field sizes by type: 4, 1, 1, 2, 2, 4, 4, 8, 8 [bytes]
# Array element sizes: 4, 1, 1, 2, 2, 4, 4, 8, 8 [bytes]
```

1. We run our program on the **64** bit version of **JVM – HotSpot**
2. `Using compressed oop with 3-bit shift.` - [more info](#compressed-vs-uncompressed-references)
3. `Using compressed classes with 3-bit shift.` - [more info](#compressed-vs-uncompressed-references)
4. `Objects are 8 bytes aligned.` - Objects will be aligned to **8** bytes - this means that each object, even if it should occupy 20 bytes, will still occupy a multiple of 8 bytes, i.e. in this case 24 bytes. It always goes up to a multiple of 8 bytes.
  1. Why?
     Processors are 32 or 64 bit (32 bit CPU can use max 4 GB of memory) . That is, 4 or 8 rooms. Which means that they read (from the memory register via an external bus) 4 or 8 memory bytes at a time. The CPU does not fetch individual bits or entities. Delivers in parcels. This is because the CPU (e.g. 3GHz) is faster than the memory (400MHz). Taking advantage of the fact that the CPU is faster, we download data in batches. To make this data extraction easier (and faster), the JVM groups this data into 8 bytes for a 64-bit machine (which is most modern ones).
  2. This can be changed with the JVM flag: `-XX:ObjectAlignmentInBytes=16` (Available values 8,16,32,64,128,256, otherwise the JVM will throw an error and will not run the application). A flag that will cause most objects to take up much more unused memory. The advantage of this solution is that we can then use 64 GB Heap with compressed references.
5. Next, the type sizes in our JVM are shown
  1. Object reference: 4 bytes - in this case, the Compressed References flag is enabled by default - therefore, in a 64-bit JVM, the reference takes up 4 bytes and not 8 bytes as it should. To make it take up 8 bytes, you need to run the JVM with the flag: *`XX:-UseCompressedOops`*

     Additionally, remember that 4 bytes is 32 bits, i.e. 2^32 possible unique reference addresses to be saved - but we use 3 bit shifting

  2. boolean and byte: 1 byte
  3. short and char: 2bytes
  4. int and float: 4 bytes
  5. long and double 8 bytes

## Types of memory usage determinations:

- Shallow size - what the ClassLayout tells us
- Deep size - what the footprint tells us
- Retained size - what slows down the GC - e.g. these sizes are shown in heapdump

![Size types](/blog/size-types.png)

In the above example - Retained size is the memory freed after removing the Triple reference - only Ai + Ci is freed and Bi is used by Pair. These additional references complicate the retained size. Retained size is always between shallow and deep size.

## Class layout - ClassLayout (shallow size)

`ClassLayout.parseClass(Basket.class).toPrintable(b1))`

All objects store data of a base type. They have their own additional memory overhead (metadata). The class layout shows us how many bytes the headers take up, how much simple type fields of a given class take up, how much references to other sub-objects take up (but it does not show how much memory a sub-object takes up). Additionally, it shows the offset (e.g. 4 bytes external) - that is, an offset to 8 bytes (padding)

```java
@Data
@AllArgsConstructor
public class ExampleClass {
    private int a;
    private int b;
}
...
ExampleClass b1 = new ExampleClass(1232132, 123);
System.out.println(ClassLayout.parseClass(ExampleClass.class).toPrintable(b1));
```

```
com.example.demo.ExampleClass object internals:
 OFFSET  SIZE   TYPE DESCRIPTION                               VALUE
      0     4        (object header)                           01 ed d3 b0 (00000001 11101101 11010011 10110000) (-1328288511)
      4     4        (object header)                           6f 00 00 00 (01101111 00000000 00000000 00000000) (111)
      8     4        (object header)                           78 f2 01 01 (01111000 11110010 00000001 00000001) (16904824)
     12     4    int ExampleClass.a                            1232132
     16     4    int ExampleClass.b                            123
     20     4        (loss due to the next object alignment)
Instance size: 24 bytes
Space losses: 0 bytes internal + 4 bytes external = 4 bytes total
```

### **Metadata:**

- headers:
  - flags (0→4 bytes) (mark word) - store information about the state of the object. Among other things, the shape of the object, i.e. whether it is a class or an array and hash code and the number of GC survivals to be promoted to OldGeneration- 4 bytes
  - lock (4→8 bytes) (mark word) - monitor that will be used for mutexes - 4 bytes

      ```java
      public class Lock {}
      ...
      Lock lock = new Lock();
      /*
      Lock object internals:
       OFFSET  SIZE   TYPE DESCRIPTION                               VALUE
            0     4        (object header)                           01 00 00 00 
            4     4        (object header)                           00 **00** 00 00
            8     4        (object header)                           85 23 02 f8
           12     4        (loss due to the next object alignment)
      Instance size: 16 bytes
      */
      synchronized (lock) {
          System.out.println(ClassLayout.parseInstance(lock).toPrintable());
      }
      /*
      Pierwszy header się zmienił ponieważ przeliczony został domyślny hashCode()
      Drugi header się zmienił ze względu na lock!
      Lock object internals:
       OFFSET  SIZE   TYPE DESCRIPTION                               VALUE
            0     4        (object header)                           f0 78 12 03
            4     4        (object header)                           00 **70** 00 00
            8     4        (object header)                           85 23 02 f8
           12     4        (loss due to the next object alignment)
      */
      ```

  - class (8→12 bytes) (class word) - pointer to the type in our case 4 bytes
  - array size (4 byte) - the size of the array (this value is present only for array types) - in the example above it is not there

  More information about headers: OOPs - Ordinary Object Pointers

- Data
  - class fields - the rest of the bytes in our example 2x4 bytes for int fields.
- optional shift to 8 bytes (in in our case 4 bytes of offset)

## Footprint (Deep size)

If we have any references to other objects in our analyzed object, the ClassLayout will only show an additional 4 bytes per reference (It will not take into account the content of the object we are referring to) - in this case, it is worth using FootPrint which will show how much memory the entire object takes up, including the object inside .

```java
@Data
@AllArgsConstructor
public class ExampleClass {
    private int a;
    private int b;
    private int c;
    private InnerClass d;

    @Data
    @AllArgsConstructor
    public static class InnerClass {
        private int a;
        private int b;
    }
}
...
ExampleClass.InnerClass inner = new ExampleClass.InnerClass(10, 12);
ExampleClass b1 = new ExampleClass(1232132, 123,111, inner);

System.out.println(GraphLayout.parseInstance(b1).toFootprint());
System.out.println(ClassLayout.parseClass(ExampleClass.class).toPrintable(b1));
System.out.println(ClassLayout.parseClass(ExampleClass.InnerClass.class).toPrintable(inner));
```

```java
### FOOTPRINT
com.example.demo.ExampleClass@6dde5c8cd footprint:
     COUNT       AVG       SUM   DESCRIPTION
         1        32        32   com.example.demo.ExampleClass
         1        24        24   com.example.demo.ExampleClass$InnerClass
         2                  56   (total)

### CLASSLAYOUT
com.example.demo.ExampleClass object internals:
 OFFSET  SIZE                                       TYPE DESCRIPTION                               VALUE
      0     4                                            (object header)                           01 8c 5c de (00000001 10001100 01011100 11011110) (-564360191)
      4     4                                            (object header)                           6d 00 00 00 (01101101 00000000 00000000 00000000) (109)
      8     4                                            (object header)                           a0 f4 01 01 (10100000 11110100 00000001 00000001) (16905376)
     12     4                                        int ExampleClass.a                            1232132
     16     4                                        int ExampleClass.b                            123
     20     4                                        int ExampleClass.c                            111
     24     4   com.example.demo.ExampleClass.InnerClass ExampleClass.d                            (object)
     28     4                                            (loss due to the next object alignment)
Instance size: 32 bytes
Space losses: 0 bytes internal + 4 bytes external = 4 bytes total

com.example.demo.ExampleClass$InnerClass object internals:
 OFFSET  SIZE   TYPE DESCRIPTION                               VALUE
      0     4        (object header)                           01 5b 3e 5b (00000001 01011011 00111110 01011011) (1530813185)
      4     4        (object header)                           01 00 00 00 (00000001 00000000 00000000 00000000) (1)
      8     4        (object header)                           78 f2 01 01 (01111000 11110010 00000001 00000001) (16904824)
     12     4    int InnerClass.a                              10
     16     4    int InnerClass.b                              12
     20     4        (loss due to the next object alignment)
Instance size: 24 bytes
Space losses: 0 bytes internal + 4 bytes external = 4 bytes total
```

Above we have a comparison of Footprint and ClassLayout. In Footprint we see exactly how many bytes the object and its sub-objects occupy (56 bytes). And in ClassLayout we only see an overview of a given class without any sub-objects (32 bytes and 24 bytes).

Let's break down the footprint to make it even clearer:

56 bytes consists of:
ExampleClass: 12 bytes for metadata + 3x 4 bytes for int + 4 bytes for references = 28 bytes
28 bytes + 4 bytes (8 byte alignment) = **32 bytes**
InnerClass: 12 bytes for metadata + 2x 4 bytes for inte = 20 bytes - it is not a multiple of 8 bytes (alignment), so: 20 bytes + 4 bytes = 24 bytes.

## Compressed vs Uncompressed References

Due to the fact that it is aligned to multiples of 8 bytes, we can use an interesting property of writing such numbers in binary form. All multiples of 8 in binary form end with a minimum of three zeros (on the right). Knowing this regularity, JVM programmers took advantage of this property by shifting it 3 bits to the left, which gives us an additional 3 bits to write memory addresses. Which increases the range from 2^32~4GB to 2^(32+3)~32GB.

**This allows for more than 4GB of heap space with 32-bit references on 64-bit machines!**

![Bit shifting](/blog/bit-shifting.png)

By default, reference compression is enabled. This means that the class word takes 4 entities and each reference takes 4 entities. Such settings have a limit of **32 GB heap.** When we use more than 32 GB heap, compression is automatically turned off. Alternatively, we can manually disable reference compression via *`-XX:-UseCompressedOops`- where this setting disables reference compression and then the reference size is 8 bytes.*

### Above 32 GB

If we want to use more than 32 GB of heap and we want to use compressed reference:

1. This can be changed with the JVM flag: `-XX:ObjectAlignmentInBytes=16` (Available values 8,16,32,64,128,256, otherwise the JVM will throw an error and will not run the application). A flag that will cause most objects to take up much more unused memory. The advantage of this solution is that we can then use 64 GB Heap with compressed references.*

Formula for maximum heap size: 4GB * ObjectAlignmentInBytes. - but remember that allignments increases for each existing object which consequently increases the size of each object. It won't always pay off.

## What is padding/alligment gap (internal space losses)

Byte padding to a multiple of 8 bytes can take 2 forms

- internal space losses
- external space losses

The processor retrieves data 8 bytes at a time. To make it easier to download data, we make shifts. An example of making it easier to retrieve data from internal space losses - the JVM flag *`-XX:ObjectAlignmentInBytes=16`* was used to make the example easier:

```
SimpleLong object internals:
 OFFSET  SIZE   TYPE DESCRIPTION                               VALUE
      0    12        (object header)                           N/A
     12     4        (alignment/padding gap)                  
     16     8   long SimpleLong.state                          N/A
     24     8        (loss due to the next object alignment)
Instance size: 32 bytes
Space losses: 4 bytes internal + 8 bytes external = 12 bytes total
```

After 12 bytes related to the header, an internal alignment/padding gap = 4 bytes was added. so that extracting the long takes place in one CPU process. (so that the long variable is at offset 16)

## Field Packing - Packing of fields

The order in which fields are packed in memory is determined by the JVM, not the declaration of fields in the class implementation. This is to make it easier to condense multiples of 8 bytes so that, for example, an int is not split into 2 data extracts of 8 bytes each.

```
public class FieldsArrangement {
    private boolean first;
    private char second;
    private double third;
    private int fourth;
    private boolean fifth;
}
...
OFFSET  SIZE      TYPE DESCRIPTION                               VALUE
      0    12           (object header)                           N/A
     12     4       int FieldsArrangement.fourth                  N/A
     16     8    double FieldsArrangement.third                   N/A
     24     2      char FieldsArrangement.second                  N/A
     26     1   boolean FieldsArrangement.first                   N/A
     27     1   boolean FieldsArrangement.fifth                   N/A
     28     4           (loss due to the next object alignment)
```

# Other examples - Checking memory size for objects

### Array:

- Array of booleans

    ```java
    boolean[] booleans = new boolean[3];
    System.out.println(ClassLayout.parseInstance(booleans).toPrintable());
    System.out.println(GraphLayout.parseInstance(booleans).toFootprint());
    /* Output
    [Z object internals:
     OFFSET  SIZE      TYPE DESCRIPTION                               VALUE
          0     4           (object header)                           01 00 00 00 (00000001 00000000 00000000 00000000) (1)
          4     4           (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)
          8     4           (object header)                           00 1b 00 00 (00000000 00011011 00000000 00000000) (6912)
         12     4           (object header)                           03 00 00 00 (00000011 00000000 00000000 00000000) (3)
         16     3   boolean [Z.<elements>                             N/A
         19     5           (loss due to the next object alignment)
    Instance size: 24 bytes
    Space losses: 0 bytes internal + 5 bytes external = 5 bytes total
    
    [Z@1068e947d footprint:
         COUNT       AVG       SUM   DESCRIPTION
             1        24        24   [Z
             1                  24   (total)
    */
    ```

- Array of ints

    ```java
    int[] ints = new int[4];
    System.out.println(ClassLayout.parseInstance(ints).toPrintable());
    System.out.println(GraphLayout.parseInstance(ints).toFootprint());
    /* Output
    [I object internals:
     OFFSET  SIZE   TYPE DESCRIPTION                               VALUE
          0     4        (object header)                           01 00 00 00 (00000001 00000000 00000000 00000000) (1)
          4     4        (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)
          8     4        (object header)                           a0 26 00 00 (10100000 00100110 00000000 00000000) (9888)
         12     4        (object header)                           04 00 00 00 (00000100 00000000 00000000 00000000) (4)
         16    16    int [I.<elements>                             N/A
    Instance size: 32 bytes
    Space losses: 0 bytes internal + 0 bytes external = 0 bytes total
    
    [I@5f71c76ad footprint:
         COUNT       AVG       SUM   DESCRIPTION
             1        32        32   [I
             1                  32   (total)
    */
    ```

- ArrayList:

```java
ArrayList<Integer> integers = new ArrayList<>();
System.out.println(GraphLayout.parseInstance(integers).toFootprint());
/*
java.util.ArrayList@185a6e9d footprint:
     COUNT       AVG       SUM   DESCRIPTION
         1        16        16   [Ljava.lang.Object;
         1        24        24   java.util.ArrayList
         2                  40   (total)
*/
for(int i=0; i<100000; i++){
            integers.add(i);
}
System.out.println(GraphLayout.parseInstance(integers).toFootprint());

//output:
/*
java.util.ArrayList@185a6e9d footprint:
     COUNT       AVG       SUM   DESCRIPTION
         1    426856    426856   [Ljava.lang.Object;
    100000        16   1600000   java.lang.Integer
         1        24        24   java.util.ArrayList
    100002             2026880   (total)
*/
```

2,026,880 bytes = 2mb 27kb for 100,000 ints. (100,000 * 4=400,000 bytes.)
When we initialize the initial capacity of ArrayList, the memory value is smaller by 26880 bytes (26kb)

```java
ArrayList<Integer> integers = new ArrayList<>(100000);
System.out.println(GraphLayout.parseInstance(integers).toFootprint());
/*
java.util.ArrayList@179ece50d footprint:
     COUNT       AVG       SUM   DESCRIPTION
         1    400016    400016   [Ljava.lang.Object;
         1        24        24   java.util.ArrayList
         2              400040   (total)
*/
for(int i=0; i<100000; i++){
            integers.add(i);
}
System.out.println(GraphLayout.parseInstance(integers).toFootprint());
/*
java.util.ArrayList@179ece50d footprint:
     COUNT       AVG       SUM   DESCRIPTION
         1    400016    400016   [Ljava.lang.Object;
    100000        16   1600000   java.lang.Integer
         1        24        24   java.util.ArrayList
    100002             2000040   (total)
*/
```

- Boolean Wrapper class
  - Boolean 16 bytes - details below:

  line of code: `System.*out*.println(ClassLayout.*parseClass*(Boolean.class).toPrintable());`

  Output:

    ```
    # WARNING: Unable to get Instrumentation. Dynamic Attach failed. You may add this JAR as -javaagent manually, or supply -Djdk.attach.allowAttachSelf
    # WARNING: Unable to attach Serviceability Agent. sun.jvm.hotspot.memory.Universe.getNarrowOopBase()
    java.lang.Boolean object internals:
     OFFSET  SIZE      TYPE DESCRIPTION                               VALUE
          0    12           (object header)                           N/A
         12     1   boolean Boolean.value                             N/A
         13     3           (loss due to the next object alignment)
    Instance size: 16 bytes
    Space losses: 0 bytes internal + 3 bytes external = 3 bytes total
    ```

  The data value takes up 1 byte (8 bits), not 1 bit as it might seem.
  12 bytes for metadata + 1 byte for boolean data + 3 bytes of offsets (to be a multiple of 8) = 16 bytes

- [String is very interesting so I created another post for this Object type](2024-05-16-String-memory-usage-jvm.md)