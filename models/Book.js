const mongoose = require('mongoose');

// Define Book schema
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    publishedDate: { type: Date, default: Date.now },
});

// Create and export Book model
module.exports = mongoose.model('Book', bookSchema);