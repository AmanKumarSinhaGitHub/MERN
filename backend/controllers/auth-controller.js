const User = require('../models/user-model');
const bcrypt = require('bcryptjs');

const home = async (req, res) => {
    try {
        res.send("Welcome to the home page using controller");
    } catch (error) {
        console.error(error);
    }
}

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

        // Hashing the password
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(String(password), saltRound);

        // Create a new user
        const user = await User.create({
            username,
            email,
            phone,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User registered successfully",
            createdUser: user,
            token: await user.generateToken(),
            userId: user._id.toString(),
          });

        console.log(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
}

module.exports = { home, register };
