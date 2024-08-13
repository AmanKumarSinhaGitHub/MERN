const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

// Genetate token
userSchema.methods.generateToken = async () => {
    try {
        const token = jwt.sign(
            { _id: this._id, email: this.email, isAdmin: this.isAdmin },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
        return token;
    } catch (error) {
        console.error(error);
    }
};


const User = mongoose.model('User', userSchema);
module.exports = User;