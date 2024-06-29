import { getCollection } from "astro:content";

import { TOTAL_BOOKS_COUNT } from "@/constants/bible";
import { SeoValues } from "@/constants/seo";
import { truncateText } from "./utils";

export interface Book {
  bookid: number;
  chronorder: number;
  name: string;
  chapters: number;
  title?: string;
  illustration?: string;
}

export interface Verse {
  translation: string;
  book: number;
  chapter: number;
  verse: number;
  text: string;
  comment?: string;
}

export interface Comment {
  href: string;
  text: string;
  letter?: string;
}

export interface VerseWithComment {
  translation: string;
  book: number;
  chapter: number;
  verse: number;
  text: string;
  comment?: Comment[];
}

// This is the array were you might get chronorder values. Only 66 books.
const books: Book[] = [
  {
    bookid: 1,
    chronorder: 1,
    name: "Génesis",
    chapters: 50,
  },
  {
    bookid: 2,
    chronorder: 3,
    name: "Éxodo",
    chapters: 40,
  },
  {
    bookid: 3,
    chronorder: 4,
    name: "Levítico",
    chapters: 27,
  },
  {
    bookid: 4,
    chronorder: 5,
    name: "Números",
    chapters: 36,
  },
  {
    bookid: 5,
    chronorder: 6,
    name: "Deuteronomio",
    chapters: 34,
  },
  {
    bookid: 6,
    chronorder: 7,
    name: "Josué",
    chapters: 24,
  },
  {
    bookid: 7,
    chronorder: 8,
    name: "Jueces",
    chapters: 21,
  },
  {
    bookid: 8,
    chronorder: 9,
    name: "Rut",
    chapters: 4,
  },
  {
    bookid: 9,
    chronorder: 10,
    name: "1 Samuel",
    chapters: 31,
  },
  {
    bookid: 10,
    chronorder: 11,
    name: "2 Samuel",
    chapters: 24,
  },
  {
    bookid: 11,
    chronorder: 15,
    name: "1 Reyes",
    chapters: 22,
  },
  {
    bookid: 12,
    chronorder: 28,
    name: "2 Reyes",
    chapters: 25,
  },
  {
    bookid: 13,
    chronorder: 12,
    name: "1 Crónicas",
    chapters: 29,
  },
  {
    bookid: 14,
    chronorder: 16,
    name: "2 Crónicas",
    chapters: 36,
  },
  {
    bookid: 15,
    chronorder: 37,
    name: "Esdras",
    chapters: 10,
  },
  {
    bookid: 16,
    chronorder: 38,
    name: "Nehemías",
    chapters: 13,
  },
  {
    bookid: 17,
    chronorder: 36,
    name: "Ester",
    chapters: 10,
  },
  {
    bookid: 18,
    chronorder: 2,
    name: "Job",
    chapters: 42,
  },
  {
    bookid: 19,
    chronorder: 13,
    name: "Salmos",
    chapters: 150,
  },
  {
    bookid: 20,
    chronorder: 17,
    name: "Proverbios",
    chapters: 31,
  },
  {
    bookid: 21,
    chronorder: 18,
    name: "Eclesiastés",
    chapters: 12,
  },
  {
    bookid: 22,
    chronorder: 14,
    name: "Cantares",
    chapters: 8,
  },
  {
    bookid: 23,
    chronorder: 25,
    name: "Isaías",
    chapters: 66,
  },
  {
    bookid: 24,
    chronorder: 29,
    name: "Jeremías",
    chapters: 52,
  },
  {
    bookid: 25,
    chronorder: 30,
    name: "Lamentaciones",
    chapters: 5,
  },
  {
    bookid: 26,
    chronorder: 32,
    name: "Ezequiel",
    chapters: 48,
  },
  {
    bookid: 27,
    chronorder: 33,
    name: "Daniel",
    chapters: 12,
  },
  {
    bookid: 28,
    chronorder: 23,
    name: "Oseas",
    chapters: 14,
  },
  {
    bookid: 29,
    chronorder: 20,
    name: "Joel",
    chapters: 3,
  },
  {
    bookid: 30,
    chronorder: 21,
    name: "Amós",
    chapters: 9,
  },
  {
    bookid: 31,
    chronorder: 31,
    name: "Abdías",
    chapters: 1,
  },
  {
    bookid: 32,
    chronorder: 19,
    name: "Jonás",
    chapters: 4,
  },
  {
    bookid: 33,
    chronorder: 22,
    name: "Miqueas",
    chapters: 7,
  },
  {
    bookid: 34,
    chronorder: 24,
    name: "Nahum",
    chapters: 3,
  },
  {
    bookid: 35,
    chronorder: 27,
    name: "Habacuc",
    chapters: 3,
  },
  {
    bookid: 36,
    chronorder: 26,
    name: "Sofonías",
    chapters: 3,
  },
  {
    bookid: 37,
    chronorder: 34,
    name: "Hageo",
    chapters: 2,
  },
  {
    bookid: 38,
    chronorder: 35,
    name: "Zacarías",
    chapters: 14,
  },
  {
    bookid: 39,
    chronorder: 39,
    name: "Malaquías",
    chapters: 4,
  },
  {
    bookid: 40,
    chronorder: 40,
    name: "Mateo",
    chapters: 28,
  },
  {
    bookid: 41,
    chronorder: 58,
    name: "Marcos",
    chapters: 16,
  },
  {
    bookid: 42,
    chronorder: 52,
    name: "Lucas",
    chapters: 24,
  },
  {
    bookid: 43,
    chronorder: 66,
    name: "Juan",
    chapters: 21,
  },
  {
    bookid: 44,
    chronorder: 54,
    name: "Hechos",
    chapters: 28,
  },
  {
    bookid: 45,
    chronorder: 46,
    name: "Romanos",
    chapters: 16,
  },
  {
    bookid: 46,
    chronorder: 44,
    name: "1 Corintios",
    chapters: 16,
  },
  {
    bookid: 47,
    chronorder: 45,
    name: "2 Corintios",
    chapters: 13,
  },
  {
    bookid: 48,
    chronorder: 41,
    name: "Gálatas",
    chapters: 6,
  },
  {
    bookid: 49,
    chronorder: 47,
    name: "Efesios",
    chapters: 6,
  },
  {
    bookid: 50,
    chronorder: 49,
    name: "Filipenses",
    chapters: 4,
  },
  {
    bookid: 51,
    chronorder: 50,
    name: "Colosenses",
    chapters: 4,
  },
  {
    bookid: 52,
    chronorder: 42,
    name: "1 Tesalonicenses",
    chapters: 5,
  },
  {
    bookid: 53,
    chronorder: 43,
    name: "2 Tesalonicenses",
    chapters: 3,
  },
  {
    bookid: 54,
    chronorder: 55,
    name: "1 Timoteo",
    chapters: 6,
  },
  {
    bookid: 55,
    chronorder: 59,
    name: "2 Timoteo",
    chapters: 4,
  },
  {
    bookid: 56,
    chronorder: 57,
    name: "Tito",
    chapters: 3,
  },
  {
    bookid: 57,
    chronorder: 51,
    name: "Filemón",
    chapters: 1,
  },
  {
    bookid: 58,
    chronorder: 53,
    name: "Hebreos",
    chapters: 13,
  },
  {
    bookid: 59,
    chronorder: 48,
    name: "Santiago",
    chapters: 5,
  },
  {
    bookid: 60,
    chronorder: 56,
    name: "1 Pedro",
    chapters: 5,
  },
  {
    bookid: 61,
    chronorder: 60,
    name: "2 Pedro",
    chapters: 3,
  },
  {
    bookid: 62,
    chronorder: 61,
    name: "1 Juan",
    chapters: 5,
  },
  {
    bookid: 63,
    chronorder: 62,
    name: "2 Juan",
    chapters: 1,
  },
  {
    bookid: 64,
    chronorder: 63,
    name: "3 Juan",
    chapters: 1,
  },
  {
    bookid: 65,
    chronorder: 64,
    name: "Judas",
    chapters: 1,
  },
  {
    bookid: 66,
    chronorder: 65,
    name: "Apocalipsis",
    chapters: 22,
  },
];

// Static data
export const getBooks = async (): Promise<Book[]> => {
  const [books] = await getCollection("books");

  return books.data;
};

// Static data
// export const getBook = (bookid: number): Book => {
//   const book = books.find((b) => b.bookid === bookid);

//   if (!book) {
//     throw new Error(`Book with id ${bookid} not found`);
//   }

//   return book;
// };

export const getBookChapters = async (
  bookid: number
): Promise<VerseWithComment[]> => {
  const [verses] = await getCollection("verses");
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let chapterCount = 0;
  let commentCount = 0;

  return verses.data
    .filter((v) => v.book === bookid)
    .map((v) => {
      if (chapterCount !== v.chapter) {
        chapterCount = v.chapter;
        commentCount = 0;
      }

      const comment = v.comment
        ? extractCommentRefs(v.comment, alphabet[commentCount])
        : undefined;

      if (comment) {
        commentCount++;
      }

      return {
        ...v,
        comment,
      };
    });
};

// Dynamic data
export const getBookChapter = async (
  bookid: number,
  chapter: number
): Promise<VerseWithComment[]> => {
  const book = await getBookChapters(bookid);
  const verses = book.filter((v) => v.chapter === chapter);

  if (!verses.length) {
    throw new Error(`Chapter ${chapter} not found in book ${bookid}`);
  }

  return verses;
};

const extractCommentRefs = (comment: string, letter: string): Comment[] => {
  const COMMENT_REGEX = /[^<]*(<a href='([^"]+)'>([^<]+)<\/a>)/;

  const refs = comment.split(";").map((ref) => {
    const match = COMMENT_REGEX.exec(ref);

    if (!match) {
      console.log(`Invalid comment reference: "${ref}"`, comment);
      return;
    }

    return {
      letter,
      href: match[2].replace("/RV1960", ""),
      text: match[3],
    };
  });

  return refs.filter(Boolean) as Comment[];
};

/**
 * Navigation & Static Generation
 */

const ENTRY_TYPES = ["book", "chapter", "verse"] as const;
type EntryType = typeof ENTRY_TYPES[number];

interface PathEntry {
  params: { path: string };
  props: {
    entry: EntryType;
    book: Book;
    verses: VerseWithComment[];
    highlighted?: boolean;
  };
}

export const getPaths = async (): Promise<PathEntry[]> => {
  const books = await getBooks();

  const paths: PathEntry[] = [
    ...books.map<PathEntry>((book) => ({
      params: { path: `/${book.bookid}` },
      props: { entry: "book", book, verses: [] },
    })),
  ];

  for await (const book of books) {
    const verses = await getBookChapters(book.bookid);
    verses.forEach((verse) => {
      const versesPerChapter = verses.filter(
        (v) => v.chapter === verse.chapter
      );
      paths.push({
        params: { path: `/${book.bookid}/${verse.chapter}` },
        props: { entry: "chapter", book, verses: versesPerChapter },
      });
      // TODO: Make this dynamic
      // paths.push({
      //   params: { path: `/${book.bookid}/${verse.chapter}/${verse.verse}` },
      //   props: {
      //     entry: 'verse',
      //     book,
      //     verses: versesPerChapter,
      //     highlighted: true,
      //   },
      // })
    });
  }

  return paths;
};

export type SurroundingChapter = {
  book: Book;
  chapter: number;
  path: string;
} | null;

export const getNextPath = (
  currentBook: Book,
  currentChapter?: number
): SurroundingChapter => {
  if (!currentChapter) {
    return null;
  }

  const { bookid, chapters } = currentBook;

  if (bookid === TOTAL_BOOKS_COUNT && currentChapter === chapters) {
    return null;
  }

  const book =
    currentChapter < chapters
      ? currentBook
      : (books.find((b) => b.bookid === bookid + 1) as Book);
  const chapter = currentChapter < chapters ? currentChapter + 1 : 1;

  return {
    book,
    chapter,
    path: `/${book.bookid}/${chapter}`,
  };
};

export const getPreviousPath = (
  currentBook: Book,
  currentChapter?: number
): SurroundingChapter => {
  if (!currentChapter) {
    return null;
  }

  const { bookid } = currentBook;

  if (bookid === 1 && currentChapter === 1) {
    return null;
  }

  const book =
    currentChapter > 1
      ? currentBook
      : (books.find((b) => b.bookid === bookid - 1) as Book);
  const chapter = currentChapter > 1 ? currentChapter - 1 : book.chapters;

  return {
    book,
    chapter,
    path: `/${book.bookid}/${chapter}`,
  };
};

/**
 * SEO
 */

interface Metada {
  title: string;
  description: string;
}

// <title>Génesis 1 RV1960 Bolls Bible</title>
// <meta property="og:description" content="En el principio creó Dios los cielos y la tierra. Y la tierra estaba desordenada y vacía,  y las tinieblas estaban sobre la faz del abismo,  y el Espíritu de Dios se movía sobre la faz de las aguas. Y dijo Dios:  Sea la luz;  y fue la luz.">

// <title>Livros - Bíblia Online - RV</title>
// <title>Gênesis 1 - Bíblia Online - RV</title>
// <meta name="description" content="Explore a Bíblia Sagrada com busca rápida, leia em vários idiomas, ouça, crie imagens e vídeos de versículos. Ache esperança e inspiração diariamente.">

const useCustomBookTitle = (book: Book): string => {
  if (book.title) {
    return book.title;
  }

  if ([2, 66].includes(book.bookid)) {
    return `El Libro del ${book.name}`;
  }

  return `El Libro de ${book.name}`;
};

const MAX_TITLE_LENGTH = 60;
const MAX_DESCRIPTION_LENGTH = 200;

type MetadataInput =
  | { book: Book; chapter?: number; verses: VerseWithComment[] }
  | { title: string; description: string };

export const getMetadata = (input: MetadataInput): Metada => {
  if ("title" in input) {
    return {
      title: `${truncateText(input.title, MAX_TITLE_LENGTH)} | ${
        SeoValues.siteName
      }`,
      description: truncateText(input.title, MAX_DESCRIPTION_LENGTH),
    };
  }

  const { book, chapter, verses } = input;

  return {
    title: `${truncateText(
      chapter ? `${book.name} ${chapter}` : useCustomBookTitle(book),
      MAX_TITLE_LENGTH
    )} | ${SeoValues.siteName}`,
    description: chapter
      ? truncateText(verses[0].text, MAX_DESCRIPTION_LENGTH)
      : SeoValues.description,
  };
};
