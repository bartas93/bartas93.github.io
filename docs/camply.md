---
sidebar_position: 3
---

# Camply.pl
## Polish marketplace for camps and semi-camps

### My role

The application was co-created by 3 co-founders. I was the owner of the company and was responsible for: application backend, database, finances, settlements and for some contacts with customers and partners. I actively participated in sales and marketing activities.

### More details about platform

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/28a59233-3701-4968-bcfd-52f1146605f0/e54287dc-5cd5-46a4-8bd3-fbbcd45e6cf8/Untitled.png)

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

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/28a59233-3701-4968-bcfd-52f1146605f0/970bd347-9668-4094-83a8-66c5af48949e/Untitled.png)

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

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/28a59233-3701-4968-bcfd-52f1146605f0/7ea9ffba-1888-4147-a429-6c2f5866caad/Untitled.png)

### Integration with the polish payment systemPaynow (mbank)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/28a59233-3701-4968-bcfd-52f1146605f0/e33bc8c6-3a77-49c6-a969-6efb54219eab/Untitled.png)

### OAuth - Login with Google and Facebook

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/28a59233-3701-4968-bcfd-52f1146605f0/407b2a35-b808-40bf-b949-9daad8159f11/Untitled.png)

### Chat based on google functions and firebase database and react components

### And more:

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/28a59233-3701-4968-bcfd-52f1146605f0/4f268663-cf04-4bb7-90e3-17ae2c400823/Untitled.png)

TODO - 5 innych zdjeć

### Demo

- Reservation demonstration

- Demonstration of adding offers