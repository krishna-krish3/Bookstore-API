// services/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/books';

// Create an Axios instance
const api = axios.create({
    baseURL: BASE_URL,
});

// Interceptor to add Authorization header to each request if token is present
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Add Bearer token to Authorization header
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// API functions
export const getBooks = async() => {
    const response = await api.get('/');
    return response.data;
};

export const addBook = async(bookData) => {
    return await api.post('/', bookData);
};

export const updateBook = async(id, bookData) => {
    return await api.put(`/${id}`, bookData);
};

export const deleteBook = async(id) => {
    return await api.delete(`/${id}`);
};