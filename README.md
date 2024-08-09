# MERN Stack

Welcome to the MERN Stack! This guide will help you set up a MERN stack application step-by-step.

## Prerequisites

- Node.js and npm installed
- Basic knowledge of JavaScript

## Folder Structure

First, create two folders:

1. `frontend`
2. `backend`

## Day 1: Backend Setup

In this section, we'll set up the backend of your MERN application. The backend is responsible for handling data processing, managing business logic, and communicating with the database. We'll use **Express.js**, a fast and minimalist web framework for Node.js, to create our server.

### Step 1: Navigate to the Backend Folder

Navigate to the `backend` folder where we will set up our server:

```bash
cd backend
```

### Step 2: Initialize a Node.js Project

Initialize your project with a `package.json` file. This file will store metadata about your project and track its dependencies.

```bash
npm init -y
```

### Step 3: Install Express.js

Express.js is the web framework we'll use to handle requests and responses in our server. Install it with the following command:

```bash
npm install express
```

### Step 4: Create the Server

Now, create a file named `index.js` and set up a basic server using Express. This server will listen for incoming requests and respond with a simple message.

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

To start the server, we'll use **Nodemon**, a tool that automatically restarts the server when file changes are detected. Run the following command to start the server:

```bash
nodemon index.js
```

If you haven't installed `nodemon`, you can do so globally with:

```bash
npm install -g nodemon
```

Visit `http://localhost:3000` in your browser to see the "Hello World" message from your server.



## Day 2: Router in Express.js

In a web application, routing is the mechanism by which requests are routed to the appropriate code or controller based on the request's URL and HTTP method. **Express.js** provides a powerful routing system that helps you define routes and manage different parts of your application efficiently.

### Creating and Organizing Routes

Routes help you define the paths in your application and map them to specific logic. This allows you to handle various endpoints and organize your code more effectively.

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

Controllers are responsible for handling the app's logic. They process incoming requests, interact with models (data sources), and send responses back to clients. By using controllers, we follow the MVC (Model-View-Controller) design pattern, which helps organize code by separating concerns.

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
router.route("/register").get(register);

module.exports = router;
```

### Final Check

- Visit `http://localhost:3000` to see the basic "Hello World" message.
- Visit `http://localhost:3000/api/auth` to see the "Hello World using Router" message.
- Visit `http://localhost:3000/api/auth/register` to see the "Welcome to the register page using controller" message.


