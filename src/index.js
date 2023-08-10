const app = require('./app');

// Configuración dotenv para las variables de entorno
require('dotenv').config();

const { PORT } = process.env;

function startServer() {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.info(`Server running at http://localhost:${PORT}`);
  });
}

setImmediate(startServer);
