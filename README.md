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
   - If you want to access your database from any computer, then add this IP also `0.0.0.0/0`

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
const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

const connectDB = async () => {
  if (!URI) {
    console.error("MongoDB URI is not defined");
    process.exit(1); // Exit if URI is not set
  }

  try {
    const conn = await mongoose.connect(URI, {
      dbName: "mern", // Replace with your actual database name
    });
    console.log("MongoDB Database Connected Successfully");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

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

## Day 5 - User Model and Schema

### Understanding Schema and Model:

- **Schema**:
  - Defines the structure of the documents within a MongoDB collection.
  - Specifies the fields, their types, and additional constraints or validation rules.
- **Model**:
  - A higher-level abstraction that interacts with the database based on the defined schema.
  - Represents a collection and provides an interface for querying, creating, updating, and deleting documents in that collection.
  - Models are created from schemas and enable you to work with MongoDB data in a more structured manner in your application.

### Steps:

1. **Create the `model` Folder**:

   - In the `backend` directory, create a new folder named `model`.

2. **Create the `user-model.js` File**:
   - Inside the `model` folder, create a file named `user-model.js`.
   - Define the `userSchema` and `User` model as follows:

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
```

### Explanation:

- **Fields**:
  - `username`, `email`, `phone`, and `password` are required fields.
  - `email` is also unique, meaning no two users can have the same email address.
  - `isAdmin` is a boolean field with a default value of `false`, indicating whether the user has admin privileges.

## Day 6 - Storing Registered User Data in MongoDB Using Postman

In this step, we will update our `auth-controller.js` to store registered user data in the MongoDB database. We'll validate the input data, check if the user already exists, and then create a new user record if everything is valid.

### Step 1: Update `auth-controller.js`

Make the following changes to your `auth-controller.js`:

```js
const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.send("Welcome to the home page using controller");
  } catch (error) {
    console.error(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);

    const { username, email, phone, password } = req.body;

    // Check if any field is empty
    if (!username || !email || !phone || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    // Check if the user already exists (email)
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const user = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({ message: "User registered successfully", user });
    console.log(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = { home, register };
```

### Explanation:

1. **Field Validation**: The code first checks if all required fields (`username`, `email`, `phone`, and `password`) are provided. If any field is missing, it returns a `400 Bad Request` response with a message indicating that all fields must be filled.

2. **User Existence Check**: It then checks if a user with the same email already exists in the database. If the user is found, it returns a `400 Bad Request` response with a message indicating that the user already exists.

3. **User Creation**: If the user does not exist, the code creates a new user document in the database with the provided data and returns a `201 Created` response, indicating that the user was successfully registered.

4. **Error Handling**: Any errors during the process are caught, logged, and a `500 Internal Server Error` response is sent to the client.

### Step 2: Test the Registration Endpoint Using Postman

Now, you can test the registration functionality using Postman:

1. **Open Postman**:

   - Set the request type to `POST`.
   - Enter the URL: `http://localhost:3000/api/auth/register`.

2. **Headers**:

   - Ensure the `Content-Type` header is set to `application/json`.

3. **Body**:

   - Select `raw` and choose `JSON` from the dropdown.
   - Enter the following JSON data in the body:
     ```json
     {
       "username": "aman",
       "email": "amankrsinha07@gmail.com",
       "phone": "9876543210",
       "password": "12345"
     }
     ```

4. **Send the Request**:
   - Click `Send` to register the new user.
   - If successful, you should see a response with the message "User registered successfully" and the user data.

#### Screenshot References:

- **Register Using Postman**:

  - ![Register using Postman](./screenshots/user_register_using_postman.png)

- **User Data in MongoDB Atlas**:

  - ![User data in Atlas](./screenshots/user_in_atlas.png)

- **User Data in MongoDB Compass**:
  - ![User data in Compass](./screenshots/user_in_compass.png)

### Conclusion:

By following these steps, you've successfully implemented a feature to store registered user data in MongoDB. You've also learned how to validate input data, check for existing users, and handle errors, all while testing the functionality using Postman.

This is a crucial step in building your MERN stack application, as user registration is often the first interaction users have with your backend system.

## Day 7 - Secure User Password Using Bcrypt.js

To enhance the security of your application, it is crucial to hash passwords before storing them in the database. This ensures that even if your database is compromised, the stored passwords remain secure.

### Step 1: Install Bcrypt.js

First, you'll need to install the `bcryptjs` package, which will help you hash passwords.

```bash
npm i bcryptjs
```

### Step 2: Update `auth-controller.js`

Now, modify your `auth-controller.js` to hash the user's password before saving it to the database:

```js
const bcrypt = require("bcryptjs");

// Hashing the password before creating user
const saltRounds = 10;
const hashedPassword = await bcrypt.hash(String(password), saltRounds);

// Create a new user with the hashed password
const user = await User.create({
  username,
  email,
  phone,
  password: hashedPassword,
});
```

### Explanation:

1. **Bcrypt.js Import**: We first import `bcryptjs` to use its hashing functionality.

2. **Salt Rounds**: The `saltRounds` variable defines the cost factor, which is the number of times the hashing algorithm will be applied. A higher number increases the computation time, making it harder for attackers to crack the password.

3. **Hashing the Password**:

   - The `bcrypt.hash()` method takes two arguments: the password to hash and the number of salt rounds.
   - The `String(password)` ensures that the password is converted to a string before hashing.
   - The hashed password is then stored in the `hashedPassword` variable.

4. **Creating the User**:
   - Instead of storing the plain password, we store the `hashedPassword` in the database when creating a new user.

### Step 3: Testing the Hashed Password

After implementing the changes, you can test the registration functionality again using Postman, as you did in Day 6. This time, when you check the user data in MongoDB Atlas or Compass, you should see the password field containing a hashed value instead of the plain text password.

#### Screenshot Reference:

- **Hashed Password in Database**:
  - ![Hashed Password](./screenshots/hashedPassword.png)

### Conclusion:

By hashing passwords before storing them, you've taken an essential step toward securing user data in your application. Bcrypt.js is a widely-used and trusted library for password hashing, making it an excellent choice for this task.

## Day 8 - Secure User Authentication with JSON Web Token (JWT)

JSON Web Tokens (JWT) are an open standard (RFC 7519) that defines a compact and self-contained way of securely transmitting information between parties as a JSON object. JWTs are widely used for authentication and authorization in web applications.

### Why Use JWT?

1. **Authentication**: JWTs help verify the identity of a user or a client.
2. **Authorization**: JWTs determine what actions a user or client is allowed to perform.

### Components of a JWT

- **Header**: Contains metadata about the token, such as the type of token and the signing algorithm being used.
- **Payload**: Contains claims or statements about an entity (typically the user) and additional data. Common claims include user ID, username, and expiration time.
- **Signature**: Ensures that the sender of the JWT is who they claim to be and that the message has not been altered.

### Important Note:

Tokens like JWTs are typically not stored in the database along with other user details. Instead, they are issued by the server during the authentication process and then stored on the client side (e.g., in cookies or local storage) for later use.

### Step 1: Install JWT

To start using JWT, install the `jsonwebtoken` package:

```bash
npm i jsonwebtoken
```

### Step 2: Modify `auth-controller.js` to Generate JWT

Now, update the `auth-controller.js` file to generate and send a JWT when a user registers:

```js
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    if (!username || !email || !phone || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(String(password), saltRounds);

    // Create a new user
    const user = await User.create({
      username,
      email,
      phone,
      password: hashedPassword,
    });

    // Generate JWT Token
    const token = await user.generateToken();

    res.status(201).json({
      message: "User registered successfully",
      createdUser: user,
      token: token,
      userId: user._id.toString(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { register };
```

### Step 3: Add `generateToken` Method in `user-model.js`

Next, head over to `user-model.js` and add a method to generate a JWT:

```js
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

userSchema.methods.generateToken = function () {
  try {
    const token = jwt.sign(
      { _id: this._id, email: this.email, isAdmin: this.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
```

### Step 4: Add JWT Secret Key to `.env` File

Finally, add your JWT secret key to your `.env` file:

```bash
JWT_SECRET=your_secret_key
```

Note : A **secret key** is a unique string used to sign and verify JWTs, ensuring their authenticity and integrity. It protects against unauthorized access by allowing the server to confirm that the token hasn't been tampered with.

### Step 5: Testing JWT in Postman

After these changes, you can register a user via Postman. The response should include a JWT token, which you can use for authentication in future requests.

#### Screenshot Reference:

- **JWT Token in Postman**:
  - ![JWT Token](./screenshots/jwt.png)

### Conclusion:

By using JSON Web Tokens (JWT), you've added an extra layer of security to your user authentication process. JWTs are an effective and scalable solution for managing user sessions in modern web applications.


## Day 9 - User Login Route

To implement user login functionality, add the following route in `auth-router.js`:

```js
router.route("/login").post(login);
```

In `auth-controller.js`, define the `login` function:

```js
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if any field is empty
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(String(password), user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Username or Password is Incorrect" });
    }

    // Successful login, return JWT
    res.status(200).json({
      message: "User logged in successfully",
      token: await user.generateToken(),
      userId: user._id.toString(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = { home, register, login };
```

### Screenshot of the Login Route in Action
- ![Login](./screenshots/login_route.png)



