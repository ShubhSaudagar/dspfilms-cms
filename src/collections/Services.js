export default {
  slug: "services",
  admin: { useAsTitle: "title" },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "bgImage", type: "relationship", relationTo: "media" },
  ],
};
