import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const r2Client = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
  forcePathStyle: true,
});

export default {
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    "users",
    "media",
    "packages",
    "services"
  ],
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter: {
            handleUpload: async ({ file, key }) => {
              await r2Client.send(
                new PutObjectCommand({
                  Bucket: process.env.R2_BUCKET,
                  Key: key,
                  Body: file.buffer,
                  ContentType: file.mimetype,
                })
              );

              return {
                url: `${process.env.R2_PUBLIC_BASE_URL}${key}`,
              };
            },

            handleDelete: async ({ key }) => {
              await r2Client.send(
                new DeleteObjectCommand({
                  Bucket: process.env.R2_BUCKET,
                  Key: key,
                })
              );
            },
          },
        },
      },
    }),
  ],
  admin: {
    user: "users",
  },
};
