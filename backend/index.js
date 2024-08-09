const express = require('express');
const app = express();

const router = require('./router/auth-router');

// Middleware
app.use(express.json());

app.use('/api/auth', router);

app.get('/', (req, res) => {
    res.send('Hello World');
})

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})