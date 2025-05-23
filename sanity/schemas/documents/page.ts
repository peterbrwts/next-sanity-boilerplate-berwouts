// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: "page",
    title: "Page",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title" },
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }],
      },
    ],
  };
  