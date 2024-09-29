const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization');

        if (!token) {
            return res.status(401).json({ message: "Unauthorized User, Token Not Found" });
        }

        console.log("Raw token: ", token);

        // Remove the 'Bearer' from the token
        const jwtToken = token.replace('Bearer', '').trim();

        console.log("JWT token without Bearer: ", jwtToken);

        // Verify the token
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

        console.log("Decoded JWT payload: ", decoded); // Check what's inside decoded

        // Find the user by decoded email
        const userData = await User.findOne({ email: decoded.email }).select({ password: 0 });

        if (!userData) {
            return res.status(404).json({ message: `User with email ${decoded.email} not found` });
        }

        console.log("User found: ", userData);

        req.user = userData;
        req.token = jwtToken;
        req.userID = userData._id;

        next();
    } catch (error) {
        const status = 400;
        const message = error.errors;

        const err = {
            status,
            message,
        }
        next(err)
    }
};

module.exports = authMiddleware;
