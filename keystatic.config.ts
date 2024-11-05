import Titleandtext from "@components/titleandtext.astro";
import { config, fields, collection, singleton } from "@keystatic/core";
export default config({
  storage: {
    kind: "local",
  },
  ui: {
    navigation: {
      sidor: ["omforeningenpage", "startpage", "pages"],
    },
  },
  collections: {
    pages: collection({
      label: "Sidor",
      path: "src/content/pages/**",
      slugField: "title",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: { label: "Namn på sida", validation: { isRequired: true } },
        }),
        // description: fields.text({
        //   label: "Description",
        //   validation: { isRequired: true },
        //}),
        content: fields.markdoc({
          label: "Content",
          extension: "md",
          options: {
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
    // titleandtext: collection({
    //   label: "Title and text",
    //   path: "src/content/titleandtext/*",
    //   slugField: "title",
    //   format: {
    //     data: "yaml",
    //   },
    //   schema: {
    //     title: fields.slug({ name: { label: "Titel" } }),
    //     text: fields.text({ label: "Text" }),
    //   },
    // }),

    //   members: collection({
    //     label: "Styrelsemedlemmar",
    //     slugField: "name",
    //     path: "src/content/members/*",
    //     format: {
    //       data: "yaml",
    //     },
    //     schema: {
    //       name: fields.slug({ name: { label: "Namn" } }),
    //       title: fields.text({ label: "Titel" }),
    //       image: fields.image({
    //         label: "Bild",
    //         directory: "src/assets/images/people",
    //         publicPath: "/src/assets/images/people/",
    //       }),
    //       description: fields.text({ label: "Beskrivning", multiline: true }),
    //     },
    //   }),
    // },
  },
  singletons: {
    omforeningenpage: singleton({
      label: "Om föreningen",
      path: "src/content/omforeningenpage/",
      format: {
        data: "yaml",
      },
      schema: {
        title: fields.text({ label: "title" }),
        titleandtext: fields.array(
          fields.object({
            title: fields.text({ label: "Titel" }),
            text: fields.text({ label: "Text" }),
          }),
        ),
        members: fields.array(
          fields.object({
            name: fields.text({ label: "Namn" }),
            title: fields.text({ label: "Titel" }),
            image: fields.image({
              label: "Bild",
              directory: "src/assets/images/people",
              publicPath: "/src/assets/images/people/",
            }),
            description: fields.text({
              label: "Beskrivning",
              multiline: true,
            }),
          }),
        ),
      },
    }),
    startpage: singleton({
      label: "Startsida",
      path: "src/content/startpage/",
      format: {
        data: "yaml",
      },
      schema: {
        title: fields.text({ label: "Titel" }),
        heroimage: fields.array(
          fields.object({
            title: fields.text({ label: "Title" }),
            text: fields.text({ label: "Text" }),
            image: fields.image({
              label: "Bild",
              directory: "src/assets/images/building",
              publicPath: "/src/assets/images/building/",
            }),
          }),
        ),
        infoblock: fields.array(
          fields.object({
            title: fields.text({ label: "Infoblock" }),
            text: fields.text({
              label: "Text",
              validation: { isRequired: true, length: { min: 1, max: 300 } },
            }),
            buttontext: fields.text({ label: "button text" }),
            url: fields.url({ label: "path to page here" }),
          }),
        ),
      },
    }),
  },
});
