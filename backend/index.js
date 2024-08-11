require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router/auth-router');
const connectDB = require('./utils/db');

// Middleware
app.use(express.json());
app.use('/api/auth', router);

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Connect to the database and start the server
connectDB()
    .then(() => {
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        console.log('Database connected');
    })
    .catch((err) => {
        console.error('Database connection failed', err);
        process.exit(1);
    });
