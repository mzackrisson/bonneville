import { config, fields, collection, singleton } from "@keystatic/core";
export default config({
  storage: {
    kind: "local",
  },
  ui: {
    navigation: {
      sidor: ["omforeningenpage", "startpage", "pages", "news"],
    },
  },
  collections: {
    pages: collection({
      label: "Sidor",
      path: "src/content/pages/*",
      slugField: "title",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: { label: "Namn på sida", validation: { isRequired: true } },
        }),
        content: fields.markdoc({
          label: "Content",
          extension: "md",
          options: {
            image: {
              publicPath: "/assets/",
              directory: "public/assets/",
            },
            heading: {
              levels: [1, 2, 3, 4],
              schema: {
                id: fields.text({ label: "ID" }),
              },
            },
          },
        }),
      },
    }),
    news: collection({
      label: "Nyheter",
      path: "src/content/news/*",
      slugField: "pubDate",
      format: {
        data: "yaml",
      },
      schema: {
        pubDate: fields.slug({
          name: {
            label: "Datum",
            validation: { isRequired: true },
            description: "mm/dd/åååå",
          },
        }),
        title: fields.text({
          label: "Titel",
        }),
        text: fields.text({
          label: "Text",
          multiline: true,
        }),
        image: fields.image({
          label: "Bild",
          directory: "/src/assets/images/news",
          publicPath: "/src/assets/images/news",
        }),
      },
    }),
  },
  singletons: {
    startpage: singleton({
      label: "Startsida",
      path: "src/content/startpage/",
      format: {
        data: "yaml",
      },
      schema: {
        heroimage: fields.array(
          fields.object({
            title: fields.text({ label: "Title" }),
            image: fields.image({
              label: "Bild",
              directory: "src/assets/images/building",
              publicPath: "/src/assets/images/building/",
            }),
          }),
          { label: "Hero image" },
        ),
        infoblock: fields.array(
          fields.object({
            title: fields.text({ label: "Infoblock" }),
            text: fields.text({
              label: "Text",
              validation: {
                isRequired: true,
                length: { min: 1, max: 300 },
              },
            }),

            url: fields.url({ label: "path to page here" }),
          }),
          { label: "Infoblocks" },
        ),
      },
    }),
    omforeningenpage: singleton({
      label: "Om föreningen",
      path: "src/content/omforeningenpage/",
      format: {
        data: "yaml",
      },
      schema: {
        titleandtext: fields.array(
          fields.object({
            title: fields.text({
              label: "Titel",
            }),
            text: fields.text({
              label: "Text",
              description: "Generell information",
              multiline: true,
            }),
            email: fields.text({ label: "Mailadress" }),
            buttontext: fields.text({ label: "Button text" }),
          }),
          { label: "Title and text block" },
        ),
        members: fields.array(
          fields.object({
            name: fields.text({ label: "Namn" }),
            title: fields.text({ label: "Post i styrelsen" }),
            image: fields.image({
              label: "Bild",
              directory: "src/assets/images/people",
              publicPath: "/src/assets/images/people",
            }),
            description: fields.text({
              label: "Beskrivning",
              multiline: true,
            }),
          }),
          { label: "Member cards" },
        ),
      },
    }),
  },
});
