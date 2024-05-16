---
slug: string-in-jvm-memory
title: Calculating the memory usage by a String in JVM - JOL Footprint
authors: bjab
tags: [jvm, jol, string, memory]
---
# Calculating memory usage by String in JVM - JOL Footprint
## In short:

- The memory of the String object consists of 24 bytes for metadata + the number of characters times 1 byte or 2 bytes depending on the coder value
  - Metadata: mark word x2 (4 bytes x2 = 8 bytes), class word (4 bytes), array reference byte[] or char[] (4 byte), hash (4 byte), hashIsZero (1 byte), coder (1 byte), padding (2 byte)
- The String object has 2 additional flags:
  - when `coder =1` then UTF-16 encoding (2 bytes per character)
  - when `coder = 0` then LATIN-1 encoding (1 byte per character)
  - hashIsZero is a flag that tells whether the hash calculation has already been performed

## JOL - String

Since Java 9 we use Compact String, i.e. if possible, we use LATIN-1 encoding, and if not, coder=1 is set and we use UTF-16.

(Before Java 9, everything was char[] and each letter was equal to 2 byte Utf-16.)

If at least one character is other than latin-1 (1 byte), each character in the String is encoded in utf16 (2 byte).

```java
String utf16String = "Bartosz Jabłoński"; // 17 znaków x 2 bytes = 34 bytes
System.out.println(ClassLayout.parseInstance(utf16String).toPrintable());
System.out.println(GraphLayout.parseInstance(utf16String).toFootprint());
System.out.println(ClassLayout.parseInstance(utf16String.getBytes()).toPrintable());
System.out.println(ClassLayout.parseInstance(utf16String.toCharArray()).toPrintable());
       
String latin1String = "Bartosz Jablonski"; // 17 znaków x 1 bytes = 17 bytes
System.out.println(ClassLayout.parseInstance(latin1String).toPrintable());
System.out.println(GraphLayout.parseInstance(latin1String).toFootprint());
System.out.println(ClassLayout.parseInstance(latin1String.getBytes()).toPrintable());
System.out.println(ClassLayout.parseInstance(latin1String.toCharArray()).toPrintable());
```

```
#### Bartosz Jabłoński - UTF-16 - coder:1
java.lang.String object internals:
 OFFSET  SIZE      TYPE DESCRIPTION                               VALUE
      0     4           (object header)                           01 00 00 00 (00000001 00000000 00000000 00000000) (1)
      4     4           (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)
      8     4           (object header)                           d8 e8 00 00 (11011000 11101000 00000000 00000000) (59608)
     12     4       int String.hash                               0
     16     1      byte String.coder                              1
     17     1   boolean String.hashIsZero                         false
     18     2           (alignment/padding gap)                  
     20     4    byte[] String.value                              [66, 0, 97, 0, 114, 0, 116, 0, 111, 0, 115, 0, 122, 0, 32, 0, 74, 0, 97, 0, 98, 0, 66, 1, 111, 0, 68, 1, 115, 0, 107, 0, 105, 0]
Instance size: 24 bytes
Space losses: 2 bytes internal + 0 bytes external = 2 bytes total

java.lang.String@7dc222aed footprint:
     COUNT       AVG       SUM   DESCRIPTION
         1        56        56   [B
         1        24        24   java.lang.String
         2                  80   (total)

[B object internals:
 OFFSET  SIZE   TYPE DESCRIPTION                               VALUE
      0     4        (object header)                           01 00 00 00 (00000001 00000000 00000000 00000000) (1)
      4     4        (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)
      8     4        (object header)                           c0 22 00 00 (11000000 00100010 00000000 00000000) (8896)
     12     4        (object header)                           13 00 00 00 (00010011 00000000 00000000 00000000) (19)
     16    19   byte [B.<elements>                             N/A
     35     5        (loss due to the next object alignment)
Instance size: 40 bytes
Space losses: 0 bytes internal + 5 bytes external = 5 bytes total

[C object internals:
 OFFSET  SIZE   TYPE DESCRIPTION                               VALUE
      0     4        (object header)                           01 00 00 00 (00000001 00000000 00000000 00000000) (1)
      4     4        (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)
      8     4        (object header)                           f0 1c 00 00 (11110000 00011100 00000000 00000000) (7408)
     12     4        (object header)                           11 00 00 00 (00010001 00000000 00000000 00000000) (17)
     16    34   char [C.<elements>                             N/A
     50     6        (loss due to the next object alignment)
Instance size: 56 bytes
Space losses: 0 bytes internal + 6 bytes external = 6 bytes total
```

In the first case, for `Bartosz Jabłoński`, where we included Polish characters not included in LATIN-1, you can see that the String has the `coder` flag set to `1`, i.e. it uses the `UTF-16` encoding type (2 bytes per character).

The footprint shows the deep size of the String object (17 characters) is 80 bytes. It consists of String and its metadata and the String object, i.e. the char[] array in UTF-16 encoding (2 byte per character).
To sum up:

- 24 bytes - String with a reference takes 24 bytes (12 bytes for metadata (headers) + 4 bytes for hash(int) + 1 byte for coder, + 1 byte for hashIsZero + 4 bytes of references to the char array + 2 bytes for alligment padding ).
  - Where the coder is responsible for: This value is closely related to the JVM implementation (hotspot). This is the encoding identifier used to encode bytes. Supported values are LATIN1 (coder=0) and UTF16(coder=1).
         If at least one letter **is not included in LATIN1**, then coder=1 and the entire String will be encoded to UTF-16, i.e. it will take up (n letters * 2 bytes) in memory.
        
     - Where hashIsZero is responsible for: This field tells the JVM whether it can bypass hash recalculation. (this kind of cache)

- 56 bytes - The byte[] array occupies 56 bytes, which consists of: 12 bytes of metadata (headers) + 4 bytes of metadata about the array (length) + data 17 characters * 2 bytes (34 bytes) = 50 bytes + 6 bytes for alignment . This is non-intuitively illustrated by the line of code: `System.out.println(ClassLayout.parseInstance(utf16String.toCharArray()).toPrintable());`
```java
#### Bartosz Jablonski - LATIN-1 - coder:0
java.lang.String object internals:
 OFFSET  SIZE      TYPE DESCRIPTION                               VALUE
      0     4           (object header)                           01 00 00 00 (00000001 00000000 00000000 00000000) (1)
      4     4           (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)
      8     4           (object header)                           d8 e8 00 00 (11011000 11101000 00000000 00000000) (59608)
     12     4       int String.hash                               0
     16     1      byte String.coder                              0
     17     1   boolean String.hashIsZero                         false
     18     2           (alignment/padding gap)                  
     20     4    byte[] String.value                              [66, 97, 114, 116, 111, 115, 122, 32, 74, 97, 98, 108, 111, 110, 115, 107, 105]
Instance size: 24 bytes
Space losses: 2 bytes internal + 0 bytes external = 2 bytes total

java.lang.String@48a242ced footprint:
     COUNT       AVG       SUM   DESCRIPTION
         1        40        40   [B
         1        24        24   java.lang.String
         2                  64   (total)

[B object internals:
 OFFSET  SIZE   TYPE DESCRIPTION                               VALUE
      0     4        (object header)                           01 00 00 00 (00000001 00000000 00000000 00000000) (1)
      4     4        (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)
      8     4        (object header)                           c0 22 00 00 (11000000 00100010 00000000 00000000) (8896)
     12     4        (object header)                           11 00 00 00 (00010001 00000000 00000000 00000000) (17)
     16    17   byte [B.<elements>                             N/A
     33     7        (loss due to the next object alignment)
Instance size: 40 bytes
Space losses: 0 bytes internal + 7 bytes external = 7 bytes total

[C object internals:
 OFFSET  SIZE   TYPE DESCRIPTION                               VALUE
      0     4        (object header)                           01 00 00 00 (00000001 00000000 00000000 00000000) (1)
      4     4        (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)
      8     4        (object header)                           f0 1c 00 00 (11110000 00011100 00000000 00000000) (7408)
     12     4        (object header)                           11 00 00 00 (00010001 00000000 00000000 00000000) (17)
     16    34   char [C.<elements>                             N/A
     50     6        (loss due to the next object alignment)
Instance size: 56 bytes
Space losses: 0 bytes internal + 6 bytes external = 6 bytes total
```

In the second case for `Bartosz Jablonski`, where we did not include Polish characters, you can see that String has the coder flag set to 0, i.e. it uses LATIN-1 encoding (1 byte per character).

The footprint shows the deep size of the String object (17 characters) is 64 bytes. It consists of String and its metadata and the String object, i.e. the byte[] array in LATIN-1 encoding (1 byte per character).

- String with a reference takes 24 bytes (12 bytes for metadata (headers) + 4 bytes for hash(int) + 1 byte for coder + 1 byte for hashIsZero + 4 bytes for references to the array of entities + 2 bytes for alligment padding).
- The byte[] array takes 40 bytes, which consists of: 12 bytes of metadata (headers) + 4 bytes of metadata about the array (length) + 17 character data * 1 byte (17 bytes) = 33 bytes + 7 bytes for alignment.

This is illustrated by the line of code: `System.out.println(ClassLayout.parseInstance(latin1String.getBytes()).toPrintable());`

Thanks to the `coder` flag and the lack of special characters, we have a gain of 16 bytes in less memory consumption - which happens without our programming intervention.