# Node.js CRUD API with MongoDB

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
This project is a simple CRUD (Create, Read, Update, Delete) API built using Node.js and MongoDB. It provides endpoints to manage student records and demonstrates how to implement RESTful APIs with Node.js and MongoDB.

## Features
- Create new student records
- Read existing student records
- Update existing student records
- Delete student records
- Error handling and validation
- MongoDB integration using Mongoose

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js installed
- MongoDB installed and running
- Git installed

## Installation
To install and run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/vamsimunagala/nodejs-crud-api.git
    ```

2. Navigate to the project directory:
    ```bash
    cd nodejs-crud-api
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
    ```
    URL=mongodb://localhost:27017/test
    ```

5. Start the server:
    ```bash
    npm run dev
    ```

## Usage
Once the server is running, you can interact with the API using tools like Postman or curl. The base URL for the API is `http://localhost:3000/api/students`.

## API Endpoints
Here are the available API endpoints:

- **Create a student**
    - `POST /api/students`
    - Request body: `{ "name": "Student Name", "regdno": "Registration Number", "mobile": "Mobile Number", "email": "Email Address" }`

- **Read all students**
    - `GET /api/students`

- **Read a single student**
    - `GET /api/students/:id`

- **Update a student**
    - `PUT /api/students/:id`
    - Request body: `{ "name": "Updated Name", "regdno": "Updated Registration Number", "mobile": "Updated Mobile Number", "email": "Updated Email Address" }`

- **Delete a student**
    - `DELETE /api/students/:id`

## Contributing
If you would like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact
If you have any questions or suggestions, feel free to contact me at munagalavamsi37@gmail.com.
