const Contact = require('../models/contact-form-model');

const contactForm = async (req, res, next) => {
    try {
        console.log(req.body);

        const { email, subject, message } = req.body;

        // Check if any field is empty
        if (!email || !subject || !message) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        // Create a new form data
        const contactData = await Contact.create({
            email,
            subject,
            message
        });

        res.status(201).json({
            message: "Form Submitted Successfully",
            formData: contactData,
        });

        console.log(contactData);

    } catch (error) {
        console.error(error);
        next(error); // Pass the error to the middleware
    }
};

module.exports = { contactForm };
