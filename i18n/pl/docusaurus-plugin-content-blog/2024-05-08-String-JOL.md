---
slug: calculating-string-footprint
title: Calculating PL TODO
authors: bjab
tags: [jvm, jol, footprint, string]
---
### Short:

- Na pamięć obiektu String składa się 24 byte na metadane + ilość znaków razy 1 byte lub 2 byte w zależności od wartości coder
    - Metadane : mark word x2 (4 bytes x2 = 8 bytes), klass word (4 bytes), referencja do tablicy byte[] lub char[] (4 byte), hash (4 byte), hashIsZero (1 byte), coder (1 byte),  padding (2 byte)
- Obiekt String ma dodatkowW Stringu poza podstawowymi flagami w pamięci (mark word 4 bytes x2, klass word), referencją
- gdy `coder =1` to kodowanie UTF-16 (2 bytes na znak)
- gdy `coder = 0` to kodowanie LATIN-1 (1 byte na znak)
- hashIsZero jest to flaga która mówi czy obliczenie hasha zostało już wykonane

### JOL - String

Od Java 9 używamy Compact String czyli jeśli to możliwe to używamy kodowania LATIN-1 a jak nie to ustawiany jest coder=1 i używamy UTF-16. 

(Przed Java 9 wszystko sprowadzało się do char[] i każda literka była równa 2 byte Utf-16.) 

Jeśli chociaż jeden znak będzie inny niż latin-1 (1 byte) to każdy znak w Stringu jest kodowany w utf16 (2 byte).
