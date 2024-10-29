// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
    author: z.string().default("Astroship"),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const boardMemberCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    title: z.string(),
    image: z.string(),
    description: z.string(),
  }),
});

const startPage = defineCollection({
  type: "content",
  schema: z.object({
    infoblocks: z.array(
      z.object({
        title: z.string(),
        text: z.string(),
        buttontext: z.string(),
        url: z.string(),
      }),
    ),
  }),
});

const titleAndTextCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    text: z.string(),
  }),
});

const omStyrelsen = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    text: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  members: boardMemberCollection,
  startpage: startPage,
  styrelsen: titleAndTextCollection,
  omstyrelsen: omStyrelsen,
};
