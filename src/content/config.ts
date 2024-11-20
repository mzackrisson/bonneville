// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)

//collection for creating multiple generic pages
const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

// news component
const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    pubDate: z.string(),
  }),
});

//specific pages
const startPageCollection = defineCollection({
  type: "data",
  schema: z.object({
    heroimage: z.array(
      z.object({
        title: z.string(),
        image: z.string(),
      }),
    ),
    infoblock: z.array(
      z.object({
        title: z.string(),
        text: z.string(),
        url: z.string(),
      }),
    ),
  }),
});

const omForeningenCollection = defineCollection({
  type: "content",
  schema: z.object({
    titleandtext: z.array(
      z.object({
        title: z.string(),
        text: z.string(),
        email: z.string(),
        buttontext: z.string(),
      }),
    ),
    members: z.array(
      z.object({
        name: z.string(),
        title: z.string(),
        image: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  startpage: startPageCollection,
  omforeningenpage: omForeningenCollection,
  pages: pagesCollection,
  news: newsCollection,
};
