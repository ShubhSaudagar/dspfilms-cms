import express from 'express';
import payload from 'payload';
import config from './payload.config.js';

const app = express();

const start = async () => {
  // Fix: Secret key ko direct hardcode kiya hai taaki deploy fail na ho.
  // MONGO_URL ko Render Env (process.env.MONGO_URL) se map kiya hai.
  
  await payload.init({
    config,
    secret: 'FINAL_PAYLOAD_SECRET_FOR_JUGADU_DEPLOYMENT_12345', // Guaranteed string secret
    mongoURL: process.env.MONGO_URL, // Render Env se MONGO_URL uthayega
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
