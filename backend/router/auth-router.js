const express = require('express');
const router = express.Router();
const { home, register, login } = require('../controllers/auth-controller');
const { SignUpSchema, LoginSchema } = require('../validators/auth-validator');
const validate = require('../middlewares/validate-middleware');

router.route('/')
    .get(home);


router.route('/register')
    .post(validate(SignUpSchema), register); // Middleware to validate the request body

router.route('/login')
    .post(validate(LoginSchema), login);


module.exports = router;