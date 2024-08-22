const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    },
});

const ContactForm = mongoose.model('ContactForm', contactFormSchema);
module.exports = ContactForm;
