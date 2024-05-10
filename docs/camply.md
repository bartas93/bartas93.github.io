---
sidebar_position: 3
---

# Camply.pl
## Polish marketplace for camps and semi-camps
![Camply.pl home page](/docs_img/camply/camply.webp)

### My role

The application was co-created by 3 co-founders. I was the owner of the company and was responsible for: application backend, database, finances, settlements and for some contacts with customers and partners. I actively participated in sales and marketing activities.

### More details about platform

Camply is a platform where you could get to know the offers of many travel agencies organizing holidays for children and teenagers. The offers were uniformly constructed, which allowed for easy comparison of many offers. Ratings from previous customers helped when choosing a trip. Customers could easily and quickly book a place on the trip, pay an advance payment or the entire reservation, and contact the organizer to clarify any inaccuracies.

Camply is an online platform that was launched in production in March 2020. The platform was suspended in 09/2023. It is currently in the sales process. In July 2023, it was possible to compare 318 offers from 73 business partners who were the organizers of colonies and camps. 1,028 users registered on the platform and 331 reservations were sold. The platform recorded increases in sales every year. The main signed organizers were: Kompas, Fun Club, BUT, Magic Sport, Cogito, ATJ Lingwista, Via Camp, Krystad, Czerwiński Travel and many others.

### Basic information:

- Launch year: **2020**
- Offers on the website in July 2023: **318**
- Registered users: **1028**
- **331** reservations sold
- Closing date: **08.2023**

### 73 travel agencies have trusted us

We had integration with three larger offices (automatic update of offers) - we provided them with API and documentation in the form of [OpenApi along with Postman](https://gitlab.com/bart_as93/camply-integration-docs/-/blob/master/openApi.yaml?ref_type=heads) documentation

![Camply partners](/docs_img/camply/Partnerzy.png)

### Technologies

- Kubernetes (GKE), Google Storage, MySql (GCP), Google functions, RabbitMq
- Java 15, Spring Boot, Liquibase
- OpenAPI + Postman documentation
- Tooljet - admin panel
- Frontend (created by co-founder): Typescript, React, NextJS

### Search engine based on over 10 criteria. Query DSL was used for this purpose.

The main difficulty of the search engine was the search based on the place of departure based on geographical coordinates combined with price ranges (Prices depended on the cost of the basic trip price and on transport costs depending on the user's location)

**Functionalities**

- Integration with the invoice system - [fakturownia.pl](http://kontaktownia.pl/)
- Admin panel for managing reservations, organizers, etc. - Tooljet
- Discount codes
- Cooperation with cafeterias - Nais

### System mailing

Mailing in the application was designed from scratch and is based on rabbitMq queuing to protect against possible system errors. Thanks to this procedure, we were sure that all e-mails were sent to customers and that our mailing would not be classified as spam.

![Camply mail](/docs_img/camply/Camply_mailing.png)

### Integration with the polish payment system Paynow (mbank)

![Camply payment gateway](/docs_img/camply/Camply_platnosci.png)

### OAuth - Login with Google and Facebook

![Camply login](/docs_img/camply/Camply_OAuth.png)

### Chat based on google functions and firebase database and react components

### And more:

![Camply admin pannel](/docs_img/camply/Camply_tooljet_zarzadzanie.png)
![Camply reviews](/docs_img/camply/Camply_opinie.png)
![Camply how it works for partners](/docs_img/camply/Jak_dziala_Camply.png)

### Demo Reservation

![Reservation demo](/docs_img/camply/Camply_rezerwacja_i_platnosc.gif)

### Demo of adding offers

![Adding offer demo](/docs_img/camply/Camply_adding_offer_demo.gif)

### Demo of chat

![Camply chat demo](/docs_img/camply/chat.gif)

### Demo of search engine

![Camply search engine demo](/docs_img/camply/Camply_wyszukiwanie.gif)
