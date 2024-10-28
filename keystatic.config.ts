import { config, fields, collection, singleton } from "@keystatic/core";
export default config({
  storage: {
    kind: "local",
  },
  ui: {
    navigation: {
      styrelsen: ["members", "styrelsen"],
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
    styrelsen: collection({
      label: "Title",
      path: "src/content/styrelsen/*",
      slugField: "title",
      format: {
        data: "yaml",
      },
      schema: {
        title: fields.text({ label: "Titel" }),
        text: fields.text({ label: "Text", multiline: true }),
      },
    }),
    members: collection({
      label: "Styrelsemedlemmar",
      slugField: "name",
      path: "src/content/members/*",
      format: {
        data: "yaml",
      },
      schema: {
        name: fields.slug({ name: { label: "Namn" } }),
        title: fields.text({ label: "Titel" }),
        image: fields.image({
          label: "Bild",
          directory: "src/assets/images/people",
          publicPath: "/src/assets/images/people/",
        }),
        description: fields.text({ label: "Beskrivning", multiline: true }),
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
              buttontext: fields.text({ label: "button text" }),
              url: fields.url({ label: "path to page here" }),
            },
            { label: "Info blocks" },
          ),
        ),
      },
    }),
  },
});
