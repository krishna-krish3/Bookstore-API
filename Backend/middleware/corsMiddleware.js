const cors = require('cors');

// Configure CORS settings
const corsOptions = {
    origin: "*", // Allow all origins
    methods: 'GET,POST,PUT,DELETE',
};

module.exports = cors(corsOptions);