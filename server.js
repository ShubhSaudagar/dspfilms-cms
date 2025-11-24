import express from 'express';
import payload from 'payload';
import config from './payload.config.js';

const app = express();

const start = async () => {
  // Humne secret yahan direct likh diya hai taaki deploy fail na ho
  const secretKey = 'dsp_films_secret_key_temporary_fix_123';

  await payload.init({
    config,
    secret: secretKey,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  app.listen(3000, () => {
    console.log('Server starting on port 3000');
  });
};

start();
