// Custom error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log error stack
    res.status(500).json({
        message: 'Internal Server Error',
        error: err.message,
    });
};

module.exports = errorHandler;