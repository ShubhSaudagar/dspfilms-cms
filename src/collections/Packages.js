export default {
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
        { label: "Maternity | NewBorn & Family", value: "MATERNITY_NEWBORN_FAMILY" },
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
};
