const express = require('express');

// Import middlewares
const cors = require('cors');
const morgan = require('cors');

// Configura los middlewares utilizados por la app express
function configExpress(app) {
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));
}

module.exports = configExpress;
