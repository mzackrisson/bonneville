// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
// Components
const boardMemberCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    title: z.string(),
    image: z.string(),
    description: z.string(),
  }),
});

const titleAndTextCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    // test: z.string(),
    text: z.string(),
  }),
});

const infoBlockCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    text: z.string(),
    buttontext: z.string(),
    url: z.string(),
  }),
});

//Pages
// const startPageCollection = defineCollection({
//   type: "content",
//   schema: z.object({
//     title: z.string(),
//   }),
// });

//Pages

//startpage singleton + infoblocks wip
const startPageCollection = defineCollection({
  type: "data",
  schema: {
    infoblock: z.string(),
    title: z.string(),
    text: z.string(),
    buttontext: z.string(),
    url: z.string(),
  },
});

const omForeningenCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  members: boardMemberCollection,
  titleandtext: titleAndTextCollection,
  // infoblocks: infoBlockCollection,
  startpage: startPageCollection,
  omforeningenpage: omForeningenCollection,
};
