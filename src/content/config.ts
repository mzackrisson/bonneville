// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)

// components (reusable structures)
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
    text: z.string(),
  }),
});

//pages
const startPageCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    infoblock: z.array(
      z.object({
        title: z.string(),
        text: z.string(),
        buttontext: z.string(),
        url: z.string(),
      }),
    ),
  }),
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
  startpage: startPageCollection,
  omforeningenpage: omForeningenCollection,
};
