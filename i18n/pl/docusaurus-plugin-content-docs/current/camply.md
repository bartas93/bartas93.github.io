---
sidebar_position: 3
---

# Camply.pl
## Polski marketplace kolonii i obozów
![Strona główna Camply.pl](/docs_img/camply/camply.webp)

### Moja rola

Aplikację współtworzyło 3 współzałożycieli. Byłem właścicielem firmy i odpowiadałem za: backend aplikacji, bazę danych, finanse, rozliczenia oraz część kontaktów z klientami i partnerami. Aktywnie uczestniczyłem w działaniach sprzedażowych i marketingowych.

### Więcej szczegółów na temat platformy

Camply to platforma, na której można było zapoznać się z ofertami wielu biur podróży organizujących wakacje dla dzieci i młodzieży. Oferty były jednolicie skonstruowane, co pozwoliło na łatwe porównanie wielu ofert. Oceny poprzednich klientów pomogły w wyborze wycieczki. Klienci mogli łatwo i szybko zarezerwować miejsce na wycieczce, wpłacić zaliczkę lub opłacić całą rezerwację, a także skontaktować się z organizatorem w celu wyjaśnienia wszelkich nieścisłości.

Camply to platforma internetowa, która została uruchomiona w marcu 2020. Platforma została zawieszona 09.2023. Aktualnie jest w trakcie sprzedaży. W lipcu 2023 r. możliwe było porównanie 318 ofert od 73 partnerów biznesowych, którzy byli organizatorami kolonii i obozów. Na platformie zarejestrowało się 1028 użytkowników i sprzedano 331 rezerwacji. Platforma co roku notowała wzrosty sprzedaży. Głównymi podpisanymi organizatorami byli: Kompas, Fun Club, BUT, Magic Sport, Cogito, ATJ Lingwista, Via Camp, Krystad, Czerwiński Travel i wielu innych.

### Podstawowe informacje:

- Rok wprowadzenia: **2020**
- Oferty na stronie w lipcu 2023: **318**
- Zarejestrowani użytkownicy: **1028**
- **331** sprzedanych rezerwacji
- Data zakończenia: **08.2023**

### Zaufały nam 73 biura podróży

Mieliśmy integrację z trzema większymi biurami (automatyczna aktualizacja ofert) - udostępniliśmy im API i dokumentację w postaci [OpenApi wraz z Postmanem](https://gitlab.com/bart_as93/camply-integration-docs/-/blob/master/openApi.yaml?ref_type=heads) dokumentacji

![Partnerzy Camply](/docs_img/camply/Partnerzy.png)

### Technologie

- Kubernetes (GKE), Google Storage, MySql (GCP), Google functions, RabbitMq
- Java 15, Spring Boot, Liquibase
- Dokumentacja OpenAPI + Postman
- Tooljet - panel administracyjny
- Frontend (stworzony przez współzałożyciela): Typescript, React, NextJS

### Wyszukiwarka oparta na ponad 10 kryteriach. W tym celu wykorzystano Query DSL.

Główną trudnością wyszukiwarki było wyszukiwanie na podstawie miejsca wyjazdu na podstawie współrzędnych geograficznych w połączeniu z przedziałami cenowymi (Ceny zależne od kosztu podstawowej ceny wycieczki oraz od kosztów transportu w zależności od lokalizacji użytkownika)

**Funkcjonalność**

- Integracja z systemem fakturowym - [fakturownia.pl](http://kontaktownia.pl/)
- Panel administracyjny do zarządzania rezerwacjami, organizatorami itp. - Tooljet
- Kody promocyjne
- Współpraca z kafeteriami - Nais

### Mailing systemowy

Mailing w aplikacji został zaprojektowany od podstaw i opiera się na kolejkowaniu rabbitMq w celu zabezpieczenia przed ewentualnymi błędami systemu. Dzięki tej procedurze mieliśmy pewność, że wszystkie e-maile dotarły do klientów, a nasze mailingi nie zostaną zakwalifikowane jako spam.

![Poczta Camply](/docs_img/camply/Camply_mailing.png)

### Integracja z polskim systemem płatniczym Paynow (mbank)

![Bramka płatnicza Camply](/docs_img/camply/Camply_platnosci.png)

### OAuth — autoryzacja za pomocą Google i Facebooka

![Logowanie Camply](/docs_img/camply/Camply_OAuth.png)

### Czat oparty na Google functions i bazie danych Firebase

### I więcej:

![Panel administracyjny Camply](/docs_img/camply/Camply_tooljet_zarzadzanie.png)
![Recenzje Camply](/docs_img/camply/Camply_opinie.png)
![Camply, jak to działa dla partnerów](/docs_img/camply/Jak_dziala_Camply.png)

### Demonstracja rezerwacji

![Demo rezerwacji](/docs_img/camply/Camply_rezerwacja_i_platnosc.gif)

### Demo dodawania ofert

![Dodawanie wersji demonstracyjnej oferty](/docs_img/camply/Camply_adding_offer_demo.gif)

### Demo czatu

![Demo czatu Camply](/docs_img/camply/chat.gif)

### Demo wyszukiwarki

![Demo wyszukiwarki Camply](/docs_img/camply/Camply_wyszukiwanie.gif)