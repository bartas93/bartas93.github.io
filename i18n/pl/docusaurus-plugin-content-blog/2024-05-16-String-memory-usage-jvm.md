---
slug: string-in-jvm-memory
title: Obliczanie pamięci zajmowanej przez String - JOL Footprint
authors: bjab
tags: [jvm, jol, string, memory]
---
# Obliczanie pamięci zajmowanej przez String - JOL Footprint
## W skrócie:

- Na pamięć obiektu String składa się 24 byte na metadane + ilość znaków razy 1 byte lub 2 byte w zależności od wartości coder
    - Metadane : mark word x2 (4 bytes x2 = 8 bytes), klass word (4 bytes), referencja do tablicy byte[] lub char[] (4 byte), hash (4 byte), hashIsZero (1 byte), coder (1 byte),  padding (2 byte)
- Obiekt String ma 2 dodatkowe flagi:
    - gdy `coder =1` to kodowanie UTF-16 (2 bytes na znak)
    - gdy `coder = 0` to kodowanie LATIN-1 (1 byte na znak)
    - hashIsZero jest to flaga która mówi czy obliczenie hasha zostało już wykonane

## JOL - String

Od Java 9 używamy Compact String czyli jeśli to możliwe to używamy kodowania LATIN-1 a jak nie to ustawiany jest coder=1 i używamy UTF-16.

(Przed Java 9 wszystko sprowadzało się do char[] i każda literka była równa 2 byte Utf-16.)

Jeśli chociaż jeden znak będzie inny niż latin-1 (1 byte) to każdy znak w Stringu jest kodowany w utf16 (2 byte).

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

W pierwszym przypadku dla `Bartosz Jabłoński` gdzie zawarliśmy polskie znaki niezawierające się w LATIN-1 widać, że String ma flagę `coder` ustawioną na `1` czyli używa kodowania typu `UTF-16` (2 byte per znak).

Footprint pokazuje deep size obiektu String (17 znakowy) wynosi 80 bytes. Na to składa się String i jego metadane i pod obiekt Stringa czyli tablica char[] w kodowaniu UTF-16 (2byte per znak).
Podsumowując:

- 24 bytes - String z referencją zajmuje 24 bytes (12 bytes na metadane (headery) + 4 bytes na hash(int) + 1 byte na coder, + 1 byte na hashIsZero + 4 bytes referencji do tablicy charów  + 2 byte na alligment padding).
    - Gdzie coder odpowiada za:


        Jest to wartość związana ściśle z implementacją JVM (hotspot). Jest to identyfikator kodowania używany do kodowania bajtów. Obsługiwane wartości to LATIN1 (coder=0) i UTF16(coder=1).
        Jeśli chociaż jedna literka **nie zawiera się w LATIN1** to coder=1 i cały String będzie kodowany do UTF-16 czyli w pamięci zajmie (n literek * 2 bytes).
        
    - Gdzie hashIsZero odpowiada za:
        
        
        To pole mówi JVM czy można ominąć ponownemu obliczaniu hashu. (taki rodzaj cachu)

- 56 bytes - Tablica byte[] zajmuje 56 bytes na co składa się: 12 byte metadanych (headerów) + 4 byte metadane dotyczące tablicy (length) + dane 17 znaków * 2 byte (34 byte) = 50 byte + 6 bytów na wyrównanie. Obrazuje to nieintuicyjnie linia kodu: `System.out.println(ClassLayout.parseInstance(utf16String.toCharArray()).toPrintable());`

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

W drugim przypadku dla `Bartosz Jablonski` gdzie nie zawarliśmy polskich znaków, widać, że String ma flagę coder ustawioną na 0 czyli używa kodowania typu LATIN-1 (1 byte per znak).

Footprint pokazuje deep size obiektu String (17 znakowy) wynosi 64 bytes. Na to składa się String i jego metadane i pod obiekt Stringa czyli tablica byte[] w kodowaniu LATIN-1 (1 byte per znak) .

- String z referencją zajmuje 24 bytes (12 bytes na metadane (headery) + 4 bytes na hash(int) + 1 byte na coder + 1 byte na hashIsZero + 4 bytes referencji do tablicy bytów + 2 byte na alligment padding).
- Tablica byte[] zajmuje 40 bytes na co składa się: 12 byte metadanych (headerów) + 4 byte metadane dotyczące tablicy (length) + dane 17 znaków * 1 byte (17 byte) = 33 byte + 7 bytów na wyrównanie.

Obrazuje to linia kodu: `System.out.println(ClassLayout.parseInstance(latin1String.getBytes()).toPrintable());`

Dzięki fladze `coder` i braku znaków specjalnych mamy zysk w mniejszej ilości zajmowanej pamięci równy 16 bytów - co dzieje się bez naszej ingerencji programistycznej.