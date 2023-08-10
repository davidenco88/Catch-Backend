const Router = require('express');

// Create a new router instance
const checkRouter = Router();

// GET --> /api/check
checkRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'La API funciona correctamente' });
});

module.exports = checkRouter;
