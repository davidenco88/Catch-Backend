// Import config elements express
const express = require('express');
const configExpress = require('./config/express');
const configRoutes = require('./routes');

// Setup express server
const app = express();
configExpress(app);
configRoutes(app);

module.exports = app;
