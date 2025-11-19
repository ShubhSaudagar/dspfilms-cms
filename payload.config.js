import path from "path";
import { fileURLToPath } from "url";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

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
    {
      slug: "users",
      auth: true,
      admin: { useAsTitle: "email" },
      fields: [
        { name: "name", type: "text", required: true },
        {
          name: "role",
          type: "select",
          options: ["admin", "editor"],
          defaultValue: "admin",
        },
      ],
    },

    {
      slug: "media",
      upload: {
        staticURL: process.env.R2_PUBLIC_BASE_URL,
        staticDir: "media",
      },
      fields: [],
    },

    {
      slug: "packages",
      admin: { useAsTitle: "title" },
      fields: [
        { name: "title", type: "text", required: true },
        { name: "subtitle", type: "text" },
        {
          name: "category",
          type: "select",
          options: [
            { label: "WEDDING", value: "WEDDING" },
            { label: "PRE-WEDDING", value: "PRE-WEDDING" },
            { label: "MATERNITY_NEWBORN_FAMILY", value: "MATERNITY_NEWBORN_FAMILY" },
          ],
          required: true,
        },
        { name: "price", type: "number" },
        { name: "features", type: "array", fields: [{ name: "item", type: "text" }] },
        { name: "terms", type: "array", fields: [{ name: "item", type: "text" }] },
        { name: "ctaText", type: "text", defaultValue: "Book Now" },
        { name: "waNumber", type: "text", defaultValue: "918308398378" },
        { name: "waMessageTemplate", type: "textarea" },
      ],
    },

    {
      slug: "services",
      admin: { useAsTitle: "title" },
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea" },
        { name: "bgImage", type: "relationship", relationTo: "media" },
      ],
    },
  ],

  admin: { user: "users" },
};
