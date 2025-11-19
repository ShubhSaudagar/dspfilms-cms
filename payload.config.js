import path from "path";
import { fileURLToPath } from "url";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// Import collections (IMPORTANT)
import Users from "./src/collections/Users.js";
import Media from "./src/collections/Media.js";
import Packages from "./src/collections/Packages.js";
import Services from "./src/collections/Services.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const r2 = new S3Client({
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
    Users,
    Media,
    Packages,
    Services,
  ],

  admin: { user: "users" }
};
