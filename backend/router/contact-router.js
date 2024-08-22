const express = require('express');
const router = express.Router();
const { contactForm } = require('../controllers/contact-controller');
const { ContactFormSchema } = require('../validators/contact-form-validator');
const validate = require('../middlewares/validate-middleware');

router.route('/contact')
    .post(validate(ContactFormSchema), contactForm); // Middleware to validate the request body

module.exports = router;
