const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization'); // Get 'Authorization' header
    const token = authHeader && authHeader.split(' ')[1]; // Extract token

    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = decoded; // Add decoded payload to request object
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        console.error('Invalid token:', err);
        return res.status(401).json({ message: 'Invalid or expired token. Please log in again.' });
    }
};

module.exports = authMiddleware;