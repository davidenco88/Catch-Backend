const checkRouter = require('./api_modules/check/check.router');

// Config API routes
function configRoutes(app) {
  app.use('/api/check', checkRouter);
}

module.exports = configRoutes;
