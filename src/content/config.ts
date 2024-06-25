import { defineCollection, z, reference } from "astro:content";

const bibleCollection = defineCollection({
  type: "data",
  schema: z.object({
    short_name: z.string(),
    full_name: z.string(),
    info: z.string(),
  }),
});

const booksCollection = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      bookid: z.number(),
      chronorder: z.number(),
      name: z.string(),
      chapters: z.number(),
    })
  ),
});

const versesCollection = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      pk: z.number(),
      translation: z.string(),
      book: z.number(),
      chapter: z.number(),
      verse: z.number(),
      text: z.string(),
      comment: z.string().nullish(),
    })
  ),
});

export const collections = {
  bible: bibleCollection,
  books: booksCollection,
  verses: versesCollection,
};
