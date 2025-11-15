import express from "express";
import payload from "payload";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const startServer = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGO_URL,
    express: app,
  });

  app.listen(3000, () => {
    console.log("🚀 Server running at http://localhost:3000/admin");
  });
};

startServer();

