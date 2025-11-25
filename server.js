import express from 'express';
import payload from 'payload';
import config from './payload.config.js';

const app = express();

const start = async () => {
  // FINAL FIX: Secret aur Database URL ko pass kiya ja raha hai
  await payload.init({
    config,
    secret: 'FINAL_JUGADU_SECRET_FOR_RENDER_12345', // Guaranteed string value
    mongoURL: process.env.MONGO_URL, // Render se MONGO_URL uthega
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
