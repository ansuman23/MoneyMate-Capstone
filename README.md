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

## Deployment 📦

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

- **Eureka Dashboard**: View of all services registered and running.
- **React UI**: Interface showcasing transaction and survey features.
- **CI/CD Pipeline**: Automated workflow for builds and deployments.

---

🖋️ **Author**: This project is created and maintained by [Your Name]. For inquiries or contributions, feel free to reach out.
