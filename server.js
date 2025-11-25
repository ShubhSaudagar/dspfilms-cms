import express from 'express';
import payload from 'payload';
import config from './payload.config.js';

const app = express();

const start = async () => {
  // FINAL FIX: Hardcoded secret to bypass environment variable issue
  // MONGODB_URL is mapped, matching the variable name in the Render Dashboard
  
  await payload.init({
    config,
    secret: 'FINAL_DEFINITIVE_SECRET_1234567890', // Guaranteed string value
    mongoURL: process.env.MONGODB_URL, // Uses the new MONGODB_URL
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
