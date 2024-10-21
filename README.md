Bookstore API
A RESTful API built with Node.js, Express, and MongoDB to manage a bookstore. This backend service includes secure user authentication and book CRUD operations with JWT-based authorization.

Features
User authentication and registration with password hashing.
JWT-based authentication for protected routes.
CRUD operations on books (Create, Read, Update, Delete).
Bulk book upload support.
CORS handling, request logging, and error management.
Technologies Used
Node.js: JavaScript runtime for backend development.
Express: Fast and lightweight web framework for Node.js.
MongoDB: NoSQL database for storing books and user data.
Mongoose: ODM for MongoDB to manage data models.
JWT: JSON Web Tokens for secure authentication.
bcrypt: For password hashing.
Postman: API testing and interaction.
Getting Started
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/bookstore-api.git
cd bookstore-api
2. Install Dependencies
bash
Copy code
npm install
3. Set Up Environment Variables
Create a .env file in the root directory with the following contents:

makefile
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/bookstore
JWT_SECRET=your-secret-key
4. Run the Server
bash
Copy code
npx nodemon server.js
5. Test the API Endpoints
Use Postman or any API client to test the endpoints. Make sure MongoDB is running locally or in the cloud.

API Endpoints
Method	Endpoint	Description	Protected
POST	/api/auth/register	Register a new user	No
POST	/api/auth/login	Login and get a JWT token	No
GET	/api/books	Get all books	No
POST	/api/books	Add a new book	Yes
DELETE	/api/books/:id	Delete a book by ID	Yes
PUT	/api/books/:id	Update a book by ID	Yes

