# MERN Stack

Welcome to the MERN Stack! This guide will help you set up a MERN stack application step-by-step.

## Prerequisites

- **Node.js and npm**: Ensure that Node.js and npm (Node Package Manager) are installed on your machine. These are essential for running JavaScript on the server and managing dependencies.
- **Basic knowledge of JavaScript**: Familiarity with JavaScript syntax and concepts will help you follow along more easily.

## Folder Structure

We'll start by organizing our project into two main folders:

1. **`frontend`**: This folder will contain all the files related to the client-side of our application, which is built using React.js.
2. **`backend`**: This folder will contain the server-side code, where we'll handle data processing, business logic, and communication with the database.

## Day 1: Backend Setup

### Introduction

The backend of a MERN application is where the core logic resides. It handles tasks such as processing requests, interacting with databases, and sending responses. We'll use **Express.js**, a fast and minimalist web framework for Node.js, to build our server.

### Step 1: Navigate to the Backend Folder

Start by navigating to the `backend` folder where we'll set up our server:

```bash
cd backend
```

### Step 2: Initialize a Node.js Project

We need to initialize our backend project by creating a `package.json` file. This file keeps track of our project's metadata and dependencies.

```bash
npm init -y
```

### Step 3: Install Express.js

**Express.js** is a popular framework for building web servers in Node.js. It simplifies the process of handling HTTP requests, routing, and middleware.

```bash
npm install express
```

### Step 4: Create the Server

Now, create a file named `index.js`. This file will contain the code to set up a basic Express server. The server listens for incoming requests and responds with a simple message.

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### Step 5: Run the Server

To start the server, we'll use **Nodemon**, a tool that automatically restarts the server whenever you make changes to your code. This makes the development process more efficient.

```bash
nodemon index.js
```

If you haven't installed `nodemon`, you can do so globally with:

```bash
npm install -g nodemon
```

Open your browser and navigate to `http://localhost:3000` to see the "Hello World" message from your server.

## Day 2: Router in Express.js

### Introduction

Routing is a critical aspect of any web application. It determines how an application responds to different HTTP requests (e.g., GET, POST) for specific endpoints (URLs). **Express.js** provides a powerful and flexible routing system that helps you manage the different parts of your application more effectively.

### Creating and Organizing Routes

Routes help you define specific endpoints in your application and map them to the corresponding logic. This makes your code more modular and easier to maintain.

#### Step 1: Create Router Folder and File

To keep our routes organized, we'll create a new folder named `router` inside the `backend` folder. Within this folder, create a file named `auth-router.js`. This file will handle the routes related to authentication.

Add the following code to `auth-router.js`:

```js
const express = require("express");
const router = express.Router();

// Basic route setup using Router
router.route("/").get((req, res) => {
  res.send("Hello World using Router");
});

module.exports = router;
```

#### Step 2: Update `index.js`

Now, we'll modify `index.js` to include our new router. This allows us to separate concerns and keep our main server file clean.

```js
const express = require("express");
const app = express();

const router = require("./router/auth-router");
app.use("/api/auth", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

With these changes:

- Visiting `http://localhost:3000` will still display "Hello World".
- Visiting `http://localhost:3000/api/auth` will display "Hello World using Router", showcasing our new route setup.

## Day 3: Controllers in Express.js

### Introduction

Controllers are a key part of the **MVC (Model-View-Controller)** design pattern. They are responsible for processing incoming requests, interacting with the data layer (models), and sending responses back to the client. By using controllers, we can keep our application logic organized and modular.

### Step 1: Create Controllers Folder and File

In the `backend` folder, create a new folder named `controllers` and a file named `auth-controller.js`. This file will contain the logic for handling authentication-related requests.

Add the following code to `auth-controller.js`:

```js
const home = async (req, res) => {
  try {
    res.send("Welcome to the home page using controllers");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    res.send("Welcome to the register page using controller");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register };
```

### Step 2: Update `auth-router.js`

Next, update the `auth-router.js` file to use the new controller functions. This will link the routes to the appropriate logic in the controllers.

```js
const express = require("express");
const router = express.Router();
const { home, register } = require("../controllers/auth-controller");

router.route("/").get(home);
router.route("/register").post(register);

module.exports = router;
```

### Final Check

- Visit `http://localhost:3000` to see the basic "Hello World" message.
- Visit `http://localhost:3000/api/auth` to see the "Hello World using Router" message.
- Visit `http://localhost:3000/api/auth/register` to see the "Welcome to the register page using controller" message.

## Day 4: Middlewares and Testing API using Postman

### Introduction

Middlewares are functions that execute during the lifecycle of a request to the Express server. They have access to the request object, response object, and the next middleware function in the application’s request-response cycle. Middlewares are crucial for adding functionality such as parsing request bodies, handling authentication, or logging requests.

### Step 1: Add JSON Middleware

To test API requests, we'll need to parse incoming JSON data. Express provides a built-in middleware `express.json()` that parses incoming requests with JSON payloads. It should be added at the beginning of your middleware stack to ensure it is available for all subsequent route handlers.

```js
const express = require("express");
const app = express();

const router = require("./router/auth-router");

// Middleware
app.use(express.json());

app.use("/api/auth", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### Step 2: Update the Register Route

Ensure the register route is set to handle POST requests, as this is the standard for creating resources or submitting data.

```js
const express = require("express");
const router = express.Router();
const { home, register } = require("../controllers/auth-controller");

router.route("/").get(home);
router.route("/register").post(register);

module.exports = router;
```

### Step 3: Handle the Register Logic

Modify the `register` function in `auth-controller.js` to handle and respond with the JSON data:

```js
const home = async (req, res) => {
  try {
    res.send("Welcome to the home page using controller");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body); // Log the incoming request body
    res.json({ message: "User registered successfully", data: req.body });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register };
```

### Step 4: Test with Postman

To test the API with Postman:

1. Set the request type to `POST`.
2. Enter `http://localhost:3000/api/auth/register` in the URL.
3. In the Headers tab, add `Content-Type` as the key and `application/json` as the value.
4. In the Body tab, select `raw` and `JSON` from the dropdown, then enter the following JSON:

```json
{
  "email": "amankrsinha07@gmail.com",
  "password": 12334
}
```

5. Click `Send` to make the request. You should see the response containing the JSON data you sent.

- For visual reference, check the screenshots provided:

 - ![Header-Postman](./screenshots/auth-register-header.png)
 - ![Body-Postman](./screenshots/auth-register-body.png)


## Day 4: Connecting Backend with MongoDB

In this section, we'll connect our backend to MongoDB, a NoSQL database that stores data in flexible, JSON-like documents. We will use **Mongoose**, an ODM (Object Data Modeling) library, to interact with MongoDB in a more structured and efficient way.

### Step 1: Install Required Packages

First, install the necessary packages for MongoDB connection and environment variable management:

```bash
npm install mongodb mongoose dotenv
```

### Step 2: Set Up MongoDB Atlas

To use MongoDB in a cloud environment, follow these steps to set up MongoDB Atlas:

1. **Create a MongoDB Atlas Account:**
   - Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and log in or sign up for an account.

2. **Create a New Project:**
   - After logging in, create a new project in MongoDB Atlas.

   - ![create project](./screenshots/create_project.png)
   - ![create project](./screenshots/create_project2.png)
   - ![create project](./screenshots/create_project3.png)

3. **Configure Network Access:**
   - In the security section, open the **Network Access** tab.
   - Add your current IP address to allow access from your machine.

   - ![network access](./screenshots/network_access.png)

4. **Create a Database User:**
   - In the **Database Access** tab, add a new user with `Read and Write` permissions.

   - ![databse project](./screenshots/database_access.png)

5. **Create a Cluster:**
   - Go to the **Deployment** section and create a new cluster. Choose your preferred configuration.

   - ![create cluster](./screenshots/creating_cluster.png)


6. **Connect to Your Cluster:**
   - After the cluster is created, click on the **Connect** button.

   - ![connect](./screenshots/connecting.png)

   - Choose a connection method 
   
    - ![connect method](./screenshots/connect_using.png)

    - Get the connection string, which will look something like this:

     ```
     mongodb+srv://<username>:<password>@<cluster_name>.mongodb.net
     ```
     - ![connection string](./screenshots/connection_string.png)
    
    

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory of the `backend` folder and add the following content:

```bash
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster_name>.mongodb.net
```

Replace `<username>`, `<password>`, and `<cluster_name>` with the actual values from your MongoDB Atlas connection string.

### Step 4: Create a Database Utility File

To manage the MongoDB connection, create a new folder named `utils` in the `backend` directory and inside it, create a file named `db.js` with the following code:

```js
const mongoose = require('mongoose');

const URI = process.env.MONGO_URI;

const connectDB = async () => {
    if (!URI) {
        console.error('MongoDB URI is not defined');
        process.exit(1); // Exit if URI is not set
    }
    
    try {
        const conn = await mongoose.connect(URI);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;
```

This utility file will handle the connection to the MongoDB database.

### Step 5: Integrate MongoDB Connection into the Server

Now, modify your `index.js` file to use the `connectDB` function for connecting to MongoDB before starting the server:

```js
require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDB = require("./utils/db");

// Middleware
app.use(express.json());
app.use("/api/auth", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Connect to the database and start the server
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Database connection failed", err);
    process.exit(1);
  });
```

This setup ensures that your server only starts after a successful connection to MongoDB.
