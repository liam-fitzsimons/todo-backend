# Node.js To-Do List App (Backend)

This is the backend API for a To-Do List application built with Node.js, Express, and MongoDB. It provides RESTful endpoints to manage tasks, supporting full CRUD operations including task creation, updating, deletion, and retrieval.\
\
The frontend React app that consumes this API is available here: https://github.com/liam-fitzsimons/todo-frontend

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Task Object Schema](#task-object-schema)
- [Folder Structure](#folder-structure)
- [License](#license)
- [Contact](#contact)

---

## Features

- Create, read, update, and delete tasks
- Mark tasks as completed or active
- Validate input data
- CORS enabled for cross-origin requests
- MongoDB database integration

---

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose ODM
- dotenv for environment variables
- CORS middleware

## Demo

Demo: https://todo-frontend-theta-bice.vercel.app/

---

## Prerequisites

- Node.js (v14+ recommended)
- npm 
- Running backend API with endpoints for task management (see API Endpoints section)

---

## Getting Started

1. Clone the repo:

   ```bash
   git clone https://github.com/your_username/your_repo_name.git
   cd your_repo_name
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a .env file in the root directory with the following variables:

   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. The API will be available at http://localhost:5000.

   
## Environment Variables
| Variable    | Description                  | Example                                              |
| ----------- | ---------------------------- | ---------------------------------------------------- |
| `PORT`      | Port for server to listen on | `5000`                                               |
| `MONGO_URI` | MongoDB connection string    | `mongodb+srv://user:pass@cluster.mongodb.net/dbname` |

## API Endpoints (Backend)
| Method | Endpoint         | Description        | Request Body                             | Response              |
| ------ | ---------------- | ------------------ | ---------------------------------------- | --------------------- |
| GET    | `/api/tasks`     | Retrieve all tasks | None                                     | Array of task objects |
| POST   | `/api/tasks`     | Create a new task  | `{ text: string }`                       | Created task object   |
| PUT    | `/api/tasks/:id` | Update a task      | `{ text?: string, completed?: boolean }` | Updated task object   |
| DELETE | `/api/tasks/:id` | Delete a task      | None                                     | Status message        |


## Task Object Schema
{
  "_id": "string",
  "text": "string",
  "completed": "boolean"
}

## Folder Structure
todo-backend/
├── models/
│   └── Task.js           # Mongoose Task schema and model
├── .env                  # Environment variables
├── server.js             # Express server and route handlers
├── package.json
└── README.md

## Licence
This project is licensed under the MIT License.
