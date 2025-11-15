import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  slug: "media",
  upload: {
    staticURL: "/media",
    staticDir: path.resolve(__dirname, "../../media"),
    mimeTypes: ["image/*", "video/*"],
  },
  fields: [{ name: "title", type: "text" }],
};
