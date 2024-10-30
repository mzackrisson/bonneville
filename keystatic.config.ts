import { config, fields, collection, singleton } from "@keystatic/core";
export default config({
  storage: {
    kind: "local",
  },
  ui: {
    navigation: {
      components: ["members", "titleandtext", "infoblocks"],
      sidor: ["omforeningenpage", "startpage"],
    },
  },

  //problem med titleandtext (och infoblocks tror jag), titel skapas inte i yaml filen som heter fdghs.yaml.
  //minns att vi hade liknande problem förut och att det hade att göra med path. Blir dock inte klokare.
  collections: {
    titleandtext: collection({
      label: "Title and text",
      path: "src/content/titleandtext/*",
      slugField: "title",
      format: {
        data: "yaml",
      },
      schema: {
        title: fields.text({ label: "Titel" }),
        text: fields.text({ label: "Text" }),
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
    infoblocks: collection({
      label: "Infoblocks",
      path: "src/content/infoblocks/*",
      slugField: "title",
      format: {
        data: "yaml",
      },
      schema: {
        title: fields.text({ label: "Title" }),
        text: fields.text({
          label: "Text",
          validation: { isRequired: true, length: { min: 1, max: 300 } },
        }),
        buttontext: fields.text({ label: "button text" }),
        url: fields.url({ label: "path to page here" }),
      },
    }),
  },

  singletons: {
    omforeningenpage: singleton({
      label: "Om föreningen",
      path: "src/content/omsforeningenpage/",
      schema: {
        // name: fields.slug({ name: { label: "Namn" } }),
        // title: fields.text({ label: "Titel" }),
        // image: fields.image({
        //   label: "Bild",
        //   directory: "src/assets/images/people",
        //   publicPath: "/src/assets/images/people/",
        // }),
        // description: fields.text({ label: "Beskrivning", multiline: true }),
      },
    }),
    startpage: singleton({
      label: "Startsida",
      path: "src/content/startpage/",
      schema: {
        // name: fields.slug({ name: { label: "Namn" } }),
        // title: fields.text({ label: "Titel" }),
        // image: fields.image({
        //   label: "Bild",
        //   directory: "src/assets/images/people",
        //   publicPath: "/src/assets/images/people/",
        // }),
        // description: fields.text({ label: "Beskrivning", multiline: true }),
      },
    }),
  },
});
