const morgan = require('morgan');

// Set up request logging
const logger = morgan('dev'); // 'dev' shows concise colored logs

module.exports = logger;