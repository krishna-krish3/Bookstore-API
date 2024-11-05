// components/BookCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function BookCard({ book, onEdit, onDelete }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>By {book.author}</Card.Text>
        <Card.Text>Price: ${book.price}</Card.Text>
        <Card.Text>Published: {book.publishedDate}</Card.Text>
        <Button variant="info" className="me-2" onClick={() => onEdit(book)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => onDelete(book._id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
