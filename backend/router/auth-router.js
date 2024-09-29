const express = require('express');
const router = express.Router();
const { home, register, login, user } = require('../controllers/auth-controller');
const { SignUpSchema, LoginSchema } = require('../validators/auth-validator');
const validate = require('../middlewares/validate-middleware');
const authMiddleware = require('../middlewares/auth-middleware');

router.route('/')
    .get(home);

router.route('/register')
    .post(validate(SignUpSchema), register); 

router.route('/login')
    .post(validate(LoginSchema), login);


router.route('/user')
    .get(authMiddleware, user);

module.exports = router;