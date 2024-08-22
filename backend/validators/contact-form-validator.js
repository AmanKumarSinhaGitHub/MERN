const { z } = require('zod');

const ContactFormSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .min(3, { message: "Email must be at least 3 characters long" })
        .max(255, { message: "Email must be at most 255 characters long" })
        .email({ message: "Invalid email address", tldWhitelist: ["com", "net"] }),

    subject: z
        .string({ required_error: "Subject is required" })
        .trim()
        .min(3, { message: "Subject must be at least 3 characters long" })
        .max(255, { message: "Subject must be at most 255 characters long" }),

    message: z
        .string({ required_error: "Message is required" })
        .trim()
        .min(3, { message: "Message must be at least 3 characters long" })
        .max(255, { message: "Message must be at most 255 characters long" }),
});

module.exports = { ContactFormSchema };
