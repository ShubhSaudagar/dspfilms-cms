import express from 'express';
import { init } from 'payload';
import config from './payload.config.js'; // Change: Config import kiya

const app = express();

const start = async () => {
  // Change: 'init' function mein config pass kiya
  await init({
    config, 
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async (payload) => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  app.listen(3000, () => {
    console.log('Server starting on port 3000');
  });
};

start();
