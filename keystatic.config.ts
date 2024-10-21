import { config, fields, collection, singleton } from "@keystatic/core";
export default config({
  storage: {
    kind: "local",
  },
  ui: {
    navigation: {
      styrelsen: ["members"],
      sidor: ["pages"],
    },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: {
        contentField: "content",
      },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
    members: collection({
      label: "Members",
      slugField: "title",
      path: "src/content/members/*",
      format: {
        contentField: "content",
      },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),

    pages: collection({
      label: "Pages",
      path: "src/content/pages/*",
      slugField: "title",
      format: {
        data: "yaml",
        // IDEA: Maybe change to mdoc file format (with a content field) to allow rich text content
        // for each page without requiring us to define blocks
        // contentField: 'content'
      },
      schema: {
        // IDEA: Add all custom data for start page
        // heroImg
        // intro text
        title: fields.slug({ name: { label: "Title" } }),
        infoblocks: fields.array(
          fields.object(
            {
              title: fields.text({ label: "Title" }),
              text: fields.text({
                label: "Content",
                multiline: true,
                validation: { isRequired: true, length: { min: 1, max: 300 } },
              }),
            },
            { label: "Info blocks" },
          ),
        ),
      },
    }),
  },
});
