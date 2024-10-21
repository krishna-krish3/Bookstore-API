# Bookstore API
A RESTful API built with Node.js, Express, and MongoDB to manage a bookstore. This backend service includes user authentication with JWT-based authorization and provides CRUD operations on books. Ideal for learning backend development with secure API design.

# Features
User authentication and registration with password hashing.
JWT-based authentication for protected routes.
CRUD operations on books (Create, Read, Update, Delete).
Bulk book upload support.
CORS handling, request logging, and error management.

# Technologies Used
Node.js: JavaScript runtime for backend development.
Express: Fast and lightweight web framework for Node.js.
MongoDB: NoSQL database for storing books and user data.
Mongoose: ODM for MongoDB to manage data models.
JWT: JSON Web Tokens for secure authentication.
bcrypt: For password hashing.
Postman: API testing and interaction.

# Getting Started
1. Clone the Repository
git clone https://github.com/your-username/bookstore-api.git
cd bookstore-api

3. Install Dependencies
npm install

5. Set Up Environment Variables
Create a .env file in the root directory with the following contents:

PORT=5000
MONGO_URI=mongodb://localhost:27017/bookstore
JWT_SECRET=your-secret-key

4. Run the Server
npx nodemon server.js

6. Test the API Endpoints
Use Postman or any API client to test the endpoints. Make sure MongoDB is running locally or in the cloud.

# API Endpoints
Method	Endpoint	Description	Protected
POST	/api/auth/register	Register a new user	No
POST	/api/auth/login	Login and get a JWT token	No
GET	/api/books	Get all books	No
POST	/api/books	Add a new book	Yes
DELETE	/api/books/:id	Delete a book by ID	Yes
PUT	/api/books/:id	Update a book by ID	Yes

