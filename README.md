# MoneyMate Banking Application 📊

Welcome to the MoneyMate Banking Application! This project showcases a modern banking platform with a React-based frontend and multiple backend services handling transactions, user management, feedback, and surveys. The services are seamlessly integrated using Eureka Server for service discovery.


## Key Features 🌟

- **React Frontend**: Dynamic and responsive user interface built with React, Axios, and React-Charts.js.
- **Transaction Service**: Node.js and Express service for managing transactions with MongoDB, JWT authentication, and more.
- **User Service**: Python and Flask service for user management with SQLite3 database.
- **Feedback Service**: Python and Flask service for collecting user feedback stored in SQLite3.
- **Survey Service**: Spring Boot service using H2 database to handle user surveys.
- **Service Discovery**: Spring Eureka server for monitoring and integrating all backend services.

## Table of Contents 📑

1. [Project Setup](#project-setup)
2. [Technologies Used](#technologies-used)
3. [Setup Instructions](#setup-instructions)
4. [Frontend Setup](#frontend-setup)
5. [Backend Services](#backend-services)
6. [Service Discovery with Eureka](#service-discovery-with-eureka)
7. [Deployment](#deployment)
8. [Contributing](#contributing)
9. [Snapshots](#snapshots)

## Project Setup ⚙️

1. **Clone the Repository**  
   Begin by cloning the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/moneymate-banking-app.git
   cd moneymate-banking-app
   ```

2. **Install Dependencies**  
   Navigate to each service's directory and install the required dependencies:

   ```bash
   cd frontend
   npm install
   cd ../transaction-service
   npm install
   cd ../user-service
   pip install -r requirements.txt
   cd ../feedback-service
   pip install -r requirements.txt
   cd ../survey-service
   ./mvnw clean install
   ```

## Technologies Used ⚡

- **React**: JavaScript library for building user interfaces.
- **Node.js & Express**: JavaScript runtime and framework for building the transaction service.
- **MongoDB**: NoSQL database for storing transactions.
- **Python & Flask**: Language and framework for user and feedback services.
- **SQLite3**: Lightweight database for user and feedback data.
- **Spring Boot**: Java framework for building the survey service.
- **H2 Database**: In-memory database used by the survey service.
- **Eureka Server**: Service discovery platform for integrating microservices.

## Setup Instructions 🔧

### Frontend Setup 🌐

1. **React Application**  
   - Navigate to the `frontend` directory and start the development server:

     ```bash
     npm start
     ```

   - Open the application in your browser at `http://localhost:3000`.

### Backend Services 🔙

1. **Transaction Service**  
   - Navigate to `transaction-service` and run:

     ```bash
     npm start
     ```

   - Access the service at `http://localhost:3000/transactions`.

2. **User Service**  
   - Navigate to `user-service` and run:

     ```bash
     python app.py
     ```

   - Access the service at `http://localhost:3000/users`.

3. **Feedback Service**  
   - Navigate to `feedback-service` and run:

     ```bash
     python app.py
     ```

   - Access the service at `http://localhost:3000/feedback`.

4. **Survey Service**  
   - Navigate to `survey-service` and run:

     ```bash
     ./mvnw spring-boot:run
     ```

   - Access the service at `http://localhost:3000/surveys`.

### Service Discovery with Eureka 🔍

1. **Eureka Server**  
   - Navigate to `eureka-server` and start the server:

     ```bash
     mvn spring-boot:run
     ```

   - Access the Eureka dashboard at `http://localhost:8761` to view registered services.

## Deployment in Future Scope 📦

- **Docker**: Containerize each service for consistent deployment across environments.
- **Kubernetes**: Use Kubernetes for orchestrating containers and ensuring high availability.
- **AWS**: Deploy using AWS services for CI/CD and scalability.

## Contributing 🤝

We welcome contributions to enhance MoneyMate! To contribute:

1. Fork the repository.
2. Create a new branch.
3. Implement your changes.
4. Submit a pull request.

## Snapshots 📸

# Frontend

   ![Home](https://github.com/user-attachments/assets/b8c78fd6-9726-4a7b-8aee-d1690512fc6c)

- **Home Page** : Find all the list of all services in our Banking Application

- <div align='center'> ![StartPage](https://github.com/user-attachments/assets/30af76de-b631-4cd1-ba90-5f9be9126fd0) </div>
- **Landing Page**: Choose Register/Login to enter into Application

- <div align='center'> ![Register](https://github.com/user-attachments/assets/8cce9fe5-6541-4e93-bf56-88fbde8bc4ad) </div>
- **Register Page**: Register as new user

- <div align='center'>!![Login](https://github.com/user-attachments/assets/e7c5d79a-95a3-4495-acf6-b5851438ec36)</div>
- **Login Page**: Login as registered user

- <div align='center'>![transactions](https://github.com/user-attachments/assets/2b36331b-7961-4f46-a8fb-f16aea3e418c)</div> 
- **Transaction-Dashboard**: Add, Update, delete and view your Transactions

- <div align='center'>![users](https://github.com/user-attachments/assets/90830bc5-63dd-4c25-99b6-2edae2156c3a)</div>
- **User-Dashboard**: Get the list of all registered Users

- <div align='center'>![Submit Feedback](https://github.com/user-attachments/assets/c59bf9c1-2dcc-47e8-a86d-117eab11dc57)</div>
- **Feedback Form**: Provide Feedback for Application Improvements

- <div align='center'>![surveyform](https://github.com/user-attachments/assets/45460a35-8511-44dc-a020-f0db667d67d2)</div>
- **Survey Form**: Participate in Money Mate's Survey

- <div align='center'>!![fedbackanalysis](https://github.com/user-attachments/assets/e61318f6-b399-4f2c-aad2-2bc063e2455f)</div>
- **Feedback Visualization**: View the Customer Feedbacks through Graph Visualization

- <div align='center'>![survey-reviews](https://github.com/user-attachments/assets/e47eb071-bad7-4633-9809-389b3b63e4a2)</div>
- **Survey Visulaization**: View the responses in Money Mate's Survey

# Backend

- <div align='center'>![eureka](https://github.com/user-attachments/assets/7a12c799-06f2-468f-9bd1-bfc6c932d37e))</div>
- **Eureka Dashboard**: View of all services registered and running.
  
- <div align='center'>![sqlite3](https://github.com/user-attachments/assets/08f630da-f851-4fff-a7fb-ac8c3a0e9718)</div>
- **Sqlite3 Database**: Stores Data for users and feedbacks.
  
- <div align='center'>![h2db](https://github.com/user-attachments/assets/c08d9d09-f5b2-41b2-9f73-de64e24d3b61)</div>
- **H2 Database**: Stores Data for Survey form
  
- <div align='center'>![swaggerapi](https://github.com/user-attachments/assets/7b0ac4d0-2c11-48d6-9ffd-6d0487298719)</div>
- **Swagger API Documentation (Survey)**: API Documentation for Survey-Service
  
- <div align='center'>![mongo](https://github.com/user-attachments/assets/786669fc-804b-43c0-939a-393909bc4fad))</div>
- **Mongo Database**: Stores data for all Transactions (TransactionId, Account No, Amount, Type(Debit/Credit), Balance, Date Entered, Description)

- <div align='center'>![bruno](https://github.com/user-attachments/assets/bf3ec4b2-438b-46d4-932a-3ee6287e18be)</div>
- **Bruno Testing**: Tests API for Transaction-Service and Survey-Service 
---


## ✍🏼 Contributing


Interested in contributing to the MoneyMate? Thanks so much for your interest! We are always looking for improvements to the project and contributions from open-source developers are greatly appreciated.

If you have a contribution in mind, please check out our `Contribution Guide` for information on how to do so. Also, make sure you read our `Code of Conduct` to foster an encouraging sense of community.

&nbsp;

## 👨🏻‍💻 Contributors

<div align="center">

<p>
  
[@Atasi](https://github.com/sys-atasi) &nbsp; [@Thanishka](https://github.com/Thanishkak) &nbsp; [@Ansuman](https://github.com/ansuman23){_Team Leader_}
  
</p>

Thanks You !

