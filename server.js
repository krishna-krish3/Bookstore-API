const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const { corsMiddleware, logger, errorHandler } = require('./middleware');

const app = express();

// use middleware
app.use(corsMiddleware); // Enable CORS
app.use(logger); // Log HTTP requests
app.use(express.json()); // Parse JSON requests
// Login route to generate JWT token
app.use('/api/auth', require('./routes/authRoutes'));

// Protected book routes
app.use('/api/books', require('./routes/bookRoutes')); // Book routes

// Error handling middleware
app.use(errorHandler);

// MongoDB connection and server setup
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/bookstore'; // Default MongoDB URI

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('MongoDB connected successfully');
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    });