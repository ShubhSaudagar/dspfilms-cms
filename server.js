import express from 'express';
import payload from 'payload'; // Fix: Default import for v2
import config from './payload.config.js';

const app = express();

const start = async () => {
  await payload.init({
    config, // Fix: Config pass karna mandatory hai
    secret: process.env.PAYLOAD_SECRET,
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
