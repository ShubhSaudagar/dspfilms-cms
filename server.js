import express from 'express';
import payload from 'payload';
import config from './payload.config.js';

const app = express();

const start = async () => {
  // 1. Secret hardcode kar rahe hain taaki 'missing key' error kabhi na aaye
  const secretKey = 'dsp_films_urgent_secret_key_123';

  // 2. Screenshot wala 'MONGO_URL' use kar rahe hain
  const mongoURL = process.env.MONGO_URL || 'mongodb://false-fallback-url';

  await payload.init({
    config,
    secret: secretKey,
    mongoURL: mongoURL, // Ye line database connect karegi
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
