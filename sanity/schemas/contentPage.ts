// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: "contentPage",
    title: "Content Page",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title", maxLength: 96 },
        validation: (Rule) => Rule.required(),
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }],
      },
      {
        name: "showInMenu",
        title: "Show in Menu",
        type: "boolean",
        description: "Enable this to show the page in the main menu.",
      },
      {
        name: "menuOrder",
        title: "Menu Order",
        type: "number",
        hidden: ({ parent }) => !parent?.showInMenu,
        description: "The order of the page in the menu (lower numbers appear first).",
      },
    ],
  };
  