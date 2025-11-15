export default {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    { name: "name", type: "text", required: true },
    {
      name: "role",
      type: "select",
      options: ["admin", "editor"],
      defaultValue: "admin",
    },
  ],
};
