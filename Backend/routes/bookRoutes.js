const express = require('express');
const Book = require('../models/Book');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// GET all books
router.get('/', async(req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//Add a new book (Protected route)
router.post('/', authMiddleware, async(req, res) => {
    try {
        const books = req.body;
        const savedBooks = await Book.insertMany(books); // Insert multiple books at once
        res.status(201).json(savedBooks); // Respond with the saved books
    } catch (err) {
        console.error('Error saving books:', err);
        res.status(400).json({ error: err.message });
    }
});

// Delete a book by ID (Protected route)
router.delete('/:id', authMiddleware, async(req, res) => {
    try {
        // const { id } = req.query; // Extract the ID from the query parameters

        // if (!id) {
        //     return res.status(400).json({ message: 'Book ID is required.' }); // Handle missing ID

        const { id } = req.params; // Extract the book ID from the route parameter
        const deletedBook = await Book.findByIdAndDelete(id); // Delete book from the database

        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found.' }); // Handle case where book doesn't exist
        }

        res.status(200).json({ message: 'Book deleted successfully.', deletedBook });
    } catch (err) {
        console.error('Error deleting book:', err);
        res.status(500).json({ error: 'Failed to delete book.' });
    }
});

// Update a book by ID (Protected route)
router.put('/:id', authMiddleware, async(req, res) => {
    try {
        const { id } = req.params; // Extract the book ID from the route parameter
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found.' }); // Handle case where book doesn't exist
        }

        res.status(200).json(updatedBook); // Return the updated book
    } catch (err) {
        console.error('Error updating book:', err);
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;