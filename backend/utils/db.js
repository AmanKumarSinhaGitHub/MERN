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
