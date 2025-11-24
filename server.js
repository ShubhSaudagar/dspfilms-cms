import express from 'express';
import payload from 'payload';
import config from './payload.config.js';

const app = express();

const start = async () => {
  await payload.init({
    config,
    // Change: Fallback secret lagaya hai taaki error na aaye
    secret: process.env.PAYLOAD_SECRET || 'temp_secret_key_please_change_in_env', 
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
