const User = require('../models/user-model');

const getAllUsers = async (req, res, next) => { 
    try {
        const users = await User.find({}, { password: 0 });
        if(!users) {
            return res.status(404).json({ message: 'No users found' });
        }
        res.status(200).json(users);
    } catch (error) {
        next(error); 
    }
}

module.exports = getAllUsers;
