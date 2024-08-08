# MERN Stack

Welcome to the MERN Stack! This guide will help you set up a MERN stack application step-by-step.

## Prerequisites
- Node.js and npm installed
- Basic knowledge of JavaScript

## Folder Structure
First, create two folders:
1. `frontend`
2. `backend`

## Backend Setup

### Step 1: Navigate to the Backend Folder
```bash
cd backend
```

### Step 2: Initialize a Node.js Project
Create a `package.json` file:
```bash
npm init -y
```

### Step 3: Install Express.js
Install Express.js, a web application framework for Node.js:
```bash
npm install express
```

### Step 4: Create the Server
Create a file named `index.js` and set up a basic server using Express.

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```

### Step 5: Run the Server
To run the server, use the following command:
```bash
nodemon index.js
```

If you haven't installed `nodemon`, you can install it using:
```bash
npm install -g nodemon
```

Open your browser and navigate to `http://localhost:3000` to see the server in action.

---

Continue with the frontend setup and further steps in your MERN stack journey. Stay tuned for more updates!