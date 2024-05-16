---
slug: jvm-memory-allocation-of-objects
title: Sprawdzenie dokładnej alokacji pamięci JVM - biblioteka jol (Java Object Layout)
authors: bjab
tags: [jvm, jol, heap, memory, references]
---
# W skrócie

- Każdy obiekt ma narzut pamięci (metadane) (12-16 bajtów na metadane - referencja, headery + pamięć na dane).
- Procesory (CPU) mogą być 32 bitowe (4 byte - maxymalnie 4 GB pamięci RAM) lub 64 bitowe (8 byte). To oznacza tyle, że CPU ma dostęp do tyłu adresów ile można zapisać w 4 lub 8 bytach. Dodatkowo CPU pobiera paczkami dane z RAM po 8 bytów naraz.
- Padding - wyrównanie do 8 bajtów - czyli obiekty zajmują pamięć równą wielokrotności 8 bajtów. Można to zwiększyć bo ogranicza to użycie maksymalnego heapa na poziomie 32 GB.
- Referencja zajmuje 4 (32bit CPU lub 64bit CPU z Compressed References (default)) lub 8 bajtów (64bit CPU).
  - Maksymalny heap dla Compressed References = 32 GB - wykorzystanie przesunięcia bitowego o 3 miejsca ze względu na to że zapis 8 byte zawsze po prawej stronie ma trzy zera. (8 byte bo jest wyrównanie do 8 bytów). Dlatego możemy użyć 32 GB heapa zamiast 4 GB.
  - Gdy używamy 64bit CPU z Compressed References i zwiększymy Pamięć heapa powyżej 32 GB możemy mieć problemy z aplikacją i znaczący wzrost zajmowanego heapa ze względu na zmianę pamięci referencji z 4 bytes do 8 bytes - np. zmiana z -Xmx31g do -Xmx33g może spowodować wzrost zajęcia danych o 40% (w zależności od danych)
<!-- truncate -->
# Konfiguracja

Aby sprawdzić jak wygląda układ pamięci (memory layout) użyjemy biblioteki:

```xml
<dependency>
    <groupId>org.openjdk.jol</groupId>
    <artifactId>jol-core</artifactId>
    <version>0.10</version>
</dependency>
```

Jol to taki toolbox do analizowania układu obiektów w JVM. Te narzędzia używają (w celu dekodowania rzeczywistego układu obiektu (object layout), jego zajmowanej pamięci (footprint) i referencji (references)). Jol używa takich narzędzi jak:

- Unsafe
- JVMTI
- Serviceability Agent (SA)

# Dostępne metody

## Detale VM - `VM.current().details()` - Podstawowe dane związane z naszą JVM

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

1. Uruchamiamy nasz program na **64** bitowej wersji **JVM – HotSpot**
2. `Using compressed oop with 3-bit shift.` - [więcej](#compressed-vs-uncompressed-references)
3. `Using compressed klass with 3-bit shift.` - [więcej](#compressed-vs-uncompressed-references)
4. `Objects are 8 bytes aligned.` - Obiekty będą wyrównane do **8** bajtów - oznacza to tyle, że każdy obiekt nawet jak powinien zajmować 20 bytów to i tak zajmuje wielokrotność 8 bajtów czyli w tym przypadku 24 bajty. Zawsze idzie w górę do wielokrotności 8 bajtów.
  1. Dlaczego?
     Procesory są 32 lub 64 bitowe (32 bit CPU może użyć max 4 GB pamięci). Czyli 4 lub 8 bytowe. Co oznacza, że odczytują (z rejestru pamięci poprzez zewnętrzną magistralę) po 4 lub 8 bytów pamięci naraz. CPU nie pobiera pojedynczych bitów lub bytów. Pobiera paczkami. Jest to spowodowane tym że CPU (np. 3GHz) jest szybsze niż pamięć (400MHz). Wykorzystując to że CPU jest szybsze pobieramy paczkami dane. Aby ułatwić (i przyspieszyć) to wyciąganie danych, JVM grupuje te dane po 8 bytów dla 64 bitowej maszyny (czyli większość współczesnych).

  1. Można to zmienić flagą JVM: `*-XX:ObjectAlignmentInBytes=16` (Dostępne wartości 8,16,32,64,128,256, inaczej JVM rzuci błąd i nie uruchomi aplikacji). Flaga, przez którą większość obiektów będzie zajmowało dużo więcej nieużytej pamięci. Zalętą tego rozwiązania jest że możemy wtedy użyć 64 GB Heap z skompresowanymi referencjami. (Ponieważ 3 bit shifting zmieni się na 4 bit shifting - 16 byte zawsze ma 4 zera po prawej stronie)*
5. Następnie są pokazane rozmiary typów w naszej JVM
  1. Referencja obiektu: 4 bytes - w tym przypadku jest włączona domyślnie flaga Compressed References - dlatego w 64 bitowej JVM referencja zajmuje 4 bytes a nie tak jak powinien 8 bytes. Aby zajmowało 8 bytes to nalezy uruchomić JVM z flagą: *`-XX:-UseCompressedOops`*

     Dodatkowo należy pamiętać że 4 bytes to 32 bitów czyli 2^32 możliwych unikalnych adresów referencji do zapisania (przy compressed oops wykorzystywane jest przesunięcie o e bity co efektywnie daje nam aż 8 razy więcej możliwych adresów)

  2. boolean i byte: 1 byte
  3. short and char: 2bytes
  4. int and float: 4 bytes
  5. long and double 8 bytes

## Typy określeń zajmowanej pamięci:

- Shallow size - to co nam ClassLayout mówi
- Deep size - to co nam footprint mówi
- Retained size - to co zwalnia GC - np. te wielkości pokazywane są w heapdump

![Typy plików](/blog/size-types.png)

Na powyższym przykładzie - Retained size to zwolniona pamięć po usunięciu referencji Triple - tylko Ai + Ci jest zwalniane a Bi jest używane przez Pair. Te dodatkowe referencje komplikują retained size. Retained size jest zawsze pomiędzy shallow a deep size.

## Układ klasy - ClassLayout (shallow size)

`ClassLayout.parseClass(Basket.class).toPrintable(b1))`

Wszystkie obiekty przechowują dane typu podstawowego. Mają swój dodatkowy narzut pamięci (metadane). Układ klasy pokazuje nam ile bajtów zajmują headery, ile zajmują pola typu prostego danej klasy, ile zajmują referencje do innych pod obiektów (ale nie pokazuje ile pod obiekt zajmuje pamięci). Dodatkowo pokazuje przesunięcie (np. 4 bytes external) - czyli przesunięcie do 8 bajtów

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

### **Metadane:**

- headery:
  - flagi (0→4 bajtów) (mark word)- przechowują informacje o stanie obiektu. Między innymi shape obiektu, czyli czy jest to klasa czy tablica oraz hash code oraz ilość przetrwań GC do promocji do OldGeneration- 4 bajty
  - lock (4→8 bajtów) (mark word) - monitor, który będzie wykorzystywany do mutexów - 4 bajty

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

  - class (8→12 bajtów) (klass word)- wskaźnik do typu w naszym przypadku 4 bajty
  - size - rozmiar tablicy (wartość ta obecna jest tylko dla typów tablicowych) - w przykładzie powyżej tego nie ma (4 byte)


- Dane
  - pola klasy - reszta bajtów w naszym przykładzie 2x4 bajty na pola int.
- + ewentualne przesunięcie do 8 bajtów (w naszym przypadku 4 bajty przesunięcia )

## Footprint (Deep size)

Jeśli mamy jakieś odniesienia do innych obiektów w naszym analizowanym obiekcie to ClassLayout pokaże tylko dodatkowe 4 bajty na referencję (Nie weźmie pod uwagę zawartości obiektu do którego się odnosimy) - w takim przypadku warto wykorzystać FootPrint który pokaże ile zajmuje pamięci cały obiekt razem z obiektem wewnątrz.

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

Powyżej mamy porównanie Footprint i ClassLayout. W Footprint widzimy dokładnie ile bajtów zajmuje obiekt z jego podobiektami (56 bajtów). A w ClassLayout widzimy tylko przegląd danej klasy bez pod obiektów (32 bytes i 24 bytes).

Rozbijmy footprint aby jeszcze bardziej było to zrozumiałe:

Na 56 bytes skłąda się:
ExampleClass: 12 bajtów na metadane + 3x 4 bajty na inta + 4 bajty na referencje = 28 bajtów
28 bajtów + 4bajtów (wyrównanie do 8 bajtów) = **32 bajtów**
InnerClass: 12 bajtów na metadane + 2x 4 bajty na inta = 20 bajtów - nie jest to wielokrotność 8 bajtów (wyrównanie) więc: 20 bajtów + 4 bajtów = 24 bajty.

## Compressed vs Uncompressed References

Dzięki temu że jest wyrównanie do wielokrotności 8 byte, możemy wykorzystać pewną ciekawą własność jaką jest zapis takich liczb w formie binarnej. Wszystkie wielokrotności liczby 8 w formie binarnej kończą się minimum trzema zerami (z prawej strony). Znając tą prawidłowość programiści JVM wykorzystali tą własność tak że robią przesunięcie o 3 bity w prawo co powoduje że do zapisu adresów pamięci mamy dodatkowe 3 bity. Co zwiększa nam zakres z 2^32~4GB do 2^(32+3)~32GB. (8 razy więcej możliwych adresów)

**Dzięki temu pozwalamy na więcej niż 4 GB przestrzeni na stercie z referencjami 32-bitowymi na maszynach 64-bitowych!**

![Bit shifting](/blog/bit-shifting.png)

Domyślnie uruchomiona jest kompresja referencji. To oznacza tyle, że klass word zajmuje 4 bytów oraz każda referencja zajmuje 4 bytów. Takie ustawienia mają limit **32 GB heapa.** Gdy używamy więcej niż 32 GB heapa to automatycznie kompresja jest wyłączana. Ewentualnie możemy ręcznie wyłączyć kompresje referencji poprzez *`-XX:-UseCompressedOops`- gdzie takie ustawienie wyłącza kompresowanie referencji i wtedy rozmiar referencji wynosi 8 bytów.*

### Powyżej 32 GB

Jeśli chcemy użyć więcej niż 32 GB heapa i chcemy używać compressed reference:

Wzór na maxymalny heap size: 4GB * ObjectAlignmentInBytes. - ale należy pamiętać, że allignments wzrasta dla każdego istniejącego obiektu co w konsekwencji zwiększa rozmiar każdego obiektu. Nie zawsze się to opłaci.

## Co to jest padding/alligment gap (internal space losses)

Dopełnienie bajtów do wielokrotności 8 bajtów może przyjąć 2 formy

- internal space losses
- external space losses

Procesor pobiera dane po 8 bytów naraz. Aby ułatwić pobieranie danych robimy przesunięcia. Przykład ułatwienia pobierania danych z internal space losses - dla łatwiejszego ukazania przykładu wykorzystano flagę JVM *`-XX:ObjectAlignmentInBytes=16`*:

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

Po 12 bajtach związanych z headerem dodany został internal aligment/padding gap = 4 bajty. tak aby wyciąganie longa było w jednym procesie CPU. (tak aby long variable było w offsecie 16)

## Field Packing - Upakowanie pól

O kolejności upakowania pól w pamięci decyduje JVM a nie deklaracja pól w implementacji klasy. Jest to po to aby właśnie ułatwić kondensowanie wielokrotności 8 bajtów tak aby np. int nie był rozdzielony na 2 wyciągnięcia danych po 8 bajtów.

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

---

# Inne przykłady - Sprawdzanie rozmiaru pamięci dla obiektów

### Array:

- Array booleanów

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

- Array intów

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


### Pamięć dla ArrayListy:

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

2 026 880 bytes = 2mb 27kb dla 100 000 intów. (100 000 * 4=400 000 bytes.)
Gdy zainicjalizujemy initial capacity ArrayListy to wartość pamięci jest mniejsza o 26880 bytes (26kb)

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

### Boolean - Przykład układu pamięci klasy osłonowej

- Boolean 16 bytes - szczegóły układu pamięci poniżej:

  Wywołujemy linię kodu: `System.*out*.println(ClassLayout.*parseClass*(Boolean.class).toPrintable());`

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

  Wartość danych zajmuje 1 byte (8 bitów) a nie 1 bit jakby mogło się wydawać.
  12 bytes na metadane + 1 byte na dane booleana + 3 bytes przesunięcia (aby była wielokrotność 8)=16bytów


### String - [Obliczanie pamięci zajmowanej przez String - JOL  Footprint](2024-05-16-String-memory-usage-jvm.md)