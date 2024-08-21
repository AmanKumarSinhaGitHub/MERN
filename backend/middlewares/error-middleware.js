const errorMiddleware = (err, req, res, next) => {
    
    const status = err.status || 500;
    const message = err.message || "Something went wrong. Server error. Please try again later.";

    res.status(status).json({ message });

}


module.exports = errorMiddleware;