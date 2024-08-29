require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const connectDB = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');

const corsOptions = {
    origin: 'http://localhost:5173', // Frontend URL
    optionsSuccessStatus: 200, // For legacy browser compatibility
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed HTTP methods
    credentials: true, // Enable credentials
};

app.use(cors(corsOptions)); // Use cors

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
