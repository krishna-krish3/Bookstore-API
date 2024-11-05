import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use for redirection
import { Row, Col, Container, Button } from 'react-bootstrap';
import { getBooks, addBook, updateBook, deleteBook } from '../services/api';
import BookCard from './BookCard';
import BookFormModal from './BookFormModal';

function BookList() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ title: '', author: '', price: '', publishedDate: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const books = await getBooks();
      setBooks(books);
    } catch (err) {
      setError('Failed to fetch books. Please try again later.');
    }
  };

  const handleOpenModal = (book = null) => {
    // Check if user is authenticated before allowing modifications
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login page if not authenticated
      navigate('/login');
      return;
    }

    setSelectedBook(book);
    setFormData(book || { title: '', author: '', price: '', publishedDate: '' });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedBook) {
        await updateBook(selectedBook._id, formData);
      } else {
        await addBook(formData);
      }
      fetchBooks(); // Refresh the book list
      handleCloseModal();
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Unauthorized. Please log in to modify books.');
        navigate('/login'); // Redirect to login if unauthorized
      } else {
        setError('Failed to modify book. Please try again.');
      }
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect to login if not authenticated
      return;
    }
    try {
      await deleteBook(id);
      fetchBooks(); // Refresh the book list
    } catch (err) {
      setError('Failed to delete book. Please try again.');
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Books</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button onClick={() => handleOpenModal()}>Add Book</Button>
      <Row className="mt-3">
        {books.map((book) => (
          <Col md={4} key={book._id}>
            <BookCard book={book} onEdit={handleOpenModal} onDelete={handleDelete} />
          </Col>
        ))}
      </Row>
      <BookFormModal
        show={showModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        isEditing={!!selectedBook}
      />
    </Container>
  );
}

export default BookList;
