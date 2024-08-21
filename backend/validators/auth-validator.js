const { z } = require('zod');

const SignUpSchema = z.object({
    username: z
        .string({ required_error: "Username is required" })
        .trim()
        .min(3, { message: "Username must be at least 3 characters long" })
        .max(255, { message: "Username must be at most 255 characters long" }),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .min(3, { message: "Email must be at least 3 characters long" })
        .max(255, { message: "Email must be at most 255 characters long" })
        .email({ message: "Invalid email address", tldWhitelist: ["com", "net"] }),

    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be at least 10 characters long" })
        .max(15, { message: "Phone must be at most 15 characters long" })
        .regex(/^\d+$/, { message: "Phone must contain only digits" }),

    password: z
        .string({ required_error: "Password is required" })
        .min(6, { message: "Password must be at least 6 characters long" })
        .max(255, { message: "Password must be at most 255 characters long" }),
});



const LoginSchema = z.object({
    
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .min(3, { message: "Email must be at least 3 characters long" })
        .max(255, { message: "Email must be at most 255 characters long" })
        .email({ message: "Invalid email address", tldWhitelist: ["com", "net"] }),

    
    password: z
        .string({ required_error: "Password is required" })
        .min(6, { message: "Password must be at least 6 characters long" })
        .max(255, { message: "Password must be at most 255 characters long" }),
});

module.exports = { SignUpSchema, LoginSchema };
