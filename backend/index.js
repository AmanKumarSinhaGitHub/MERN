require('dotenv').config();
const express = require('express');
const app = express();
const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const connectDB = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');

// Middleware
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/form', contactRoute);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(errorMiddleware); // This must be just above the connection

// Connect to the database and start the server
connectDB()
    .then(() => {
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Database connection failed', err);
        process.exit(1);
    });
