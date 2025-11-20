import express from "express";
import payload from "payload";
import dotenv from "dotenv";
import cors from "cors";
// Import the payload config so payload.init receives the required config
import payloadConfig from "./payload.config.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGO_URL,
    express: app,
    // Spread the payload config (collections, admin, serverURL, etc.)
    ...(payloadConfig || {}),
  });

  app.listen(PORT, () => {
    console.log(`Payload running at http://localhost:${PORT}/admin`);
  });
};

start();
