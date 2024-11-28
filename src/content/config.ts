import { z, defineCollection } from 'astro:content'

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
})

const newsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    pubDate: z.string(),
    text: z.string(),
    title: z.string(),
    image: z.string().optional(),
  }),
})

const startPageCollection = defineCollection({
  type: 'data',
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
})

const omForeningenCollection = defineCollection({
  type: 'data',
  schema: z.object({
    titleandtext: z.array(
      z.object({
        title: z.string(),
        text: z.string(),
        button: z.object({
          value: z
            .object({
              buttontitle: z.string(),
              link: z.string(),
            })
            .optional(),
        }),
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
})

/**
 * Export a single `collections` object to register your collection(s)
 * The keys should match the collection directory name in `src/content`
 */
export const collections = {
  startpage: startPageCollection,
  omforeningenpage: omForeningenCollection,
  pages: pagesCollection,
  news: newsCollection,
}
