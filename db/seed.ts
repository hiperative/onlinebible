// import { db } from 'astro:db'

interface Book {
  bookid: number
  chronorder: number
  name: string
  chapters: number
}

// This is the array were you might get chronorder values. Only 66 books.
const booksList: Book[] = [
  {
    bookid: 1,
    chronorder: 1,
    name: 'Génesis',
    chapters: 50,
  },
  {
    bookid: 2,
    chronorder: 3,
    name: 'Éxodo',
    chapters: 40,
  },
  {
    bookid: 3,
    chronorder: 4,
    name: 'Levítico',
    chapters: 27,
  },
  {
    bookid: 4,
    chronorder: 5,
    name: 'Números',
    chapters: 36,
  },
  {
    bookid: 5,
    chronorder: 6,
    name: 'Deuteronomio',
    chapters: 34,
  },
  {
    bookid: 6,
    chronorder: 7,
    name: 'Josué',
    chapters: 24,
  },
  {
    bookid: 7,
    chronorder: 8,
    name: 'Jueces',
    chapters: 21,
  },
  {
    bookid: 8,
    chronorder: 9,
    name: 'Rut',
    chapters: 4,
  },
  {
    bookid: 9,
    chronorder: 10,
    name: '1 Samuel',
    chapters: 31,
  },
  {
    bookid: 10,
    chronorder: 11,
    name: '2 Samuel',
    chapters: 24,
  },
  {
    bookid: 11,
    chronorder: 15,
    name: '1 Reyes',
    chapters: 22,
  },
  {
    bookid: 12,
    chronorder: 28,
    name: '2 Reyes',
    chapters: 25,
  },
  {
    bookid: 13,
    chronorder: 12,
    name: '1 Crónicas',
    chapters: 29,
  },
  {
    bookid: 14,
    chronorder: 16,
    name: '2 Crónicas',
    chapters: 36,
  },
  {
    bookid: 15,
    chronorder: 37,
    name: 'Esdras',
    chapters: 10,
  },
  {
    bookid: 16,
    chronorder: 38,
    name: 'Nehemías',
    chapters: 13,
  },
  {
    bookid: 17,
    chronorder: 36,
    name: 'Ester',
    chapters: 10,
  },
  {
    bookid: 18,
    chronorder: 2,
    name: 'Job',
    chapters: 42,
  },
  {
    bookid: 19,
    chronorder: 13,
    name: 'Salmos',
    chapters: 150,
  },
  {
    bookid: 20,
    chronorder: 17,
    name: 'Proverbios',
    chapters: 31,
  },
  {
    bookid: 21,
    chronorder: 18,
    name: 'Eclesiastés',
    chapters: 12,
  },
  {
    bookid: 22,
    chronorder: 14,
    name: 'Cantares',
    chapters: 8,
  },
  {
    bookid: 23,
    chronorder: 25,
    name: 'Isaías',
    chapters: 66,
  },
  {
    bookid: 24,
    chronorder: 29,
    name: 'Jeremías',
    chapters: 52,
  },
  {
    bookid: 25,
    chronorder: 30,
    name: 'Lamentaciones',
    chapters: 5,
  },
  {
    bookid: 26,
    chronorder: 32,
    name: 'Ezequiel',
    chapters: 48,
  },
  {
    bookid: 27,
    chronorder: 33,
    name: 'Daniel',
    chapters: 12,
  },
  {
    bookid: 28,
    chronorder: 23,
    name: 'Oseas',
    chapters: 14,
  },
  {
    bookid: 29,
    chronorder: 20,
    name: 'Joel',
    chapters: 3,
  },
  {
    bookid: 30,
    chronorder: 21,
    name: 'Amós',
    chapters: 9,
  },
  {
    bookid: 31,
    chronorder: 31,
    name: 'Abdías',
    chapters: 1,
  },
  {
    bookid: 32,
    chronorder: 19,
    name: 'Jonás',
    chapters: 4,
  },
  {
    bookid: 33,
    chronorder: 22,
    name: 'Miqueas',
    chapters: 7,
  },
  {
    bookid: 34,
    chronorder: 24,
    name: 'Nahum',
    chapters: 3,
  },
  {
    bookid: 35,
    chronorder: 27,
    name: 'Habacuc',
    chapters: 3,
  },
  {
    bookid: 36,
    chronorder: 26,
    name: 'Sofonías',
    chapters: 3,
  },
  {
    bookid: 37,
    chronorder: 34,
    name: 'Hageo',
    chapters: 2,
  },
  {
    bookid: 38,
    chronorder: 35,
    name: 'Zacarías',
    chapters: 14,
  },
  {
    bookid: 39,
    chronorder: 39,
    name: 'Malaquías',
    chapters: 4,
  },
  {
    bookid: 40,
    chronorder: 40,
    name: 'Mateo',
    chapters: 28,
  },
  {
    bookid: 41,
    chronorder: 58,
    name: 'Marcos',
    chapters: 16,
  },
  {
    bookid: 42,
    chronorder: 52,
    name: 'Lucas',
    chapters: 24,
  },
  {
    bookid: 43,
    chronorder: 66,
    name: 'Juan',
    chapters: 21,
  },
  {
    bookid: 44,
    chronorder: 54,
    name: 'Hechos',
    chapters: 28,
  },
  {
    bookid: 45,
    chronorder: 46,
    name: 'Romanos',
    chapters: 16,
  },
  {
    bookid: 46,
    chronorder: 44,
    name: '1 Corintios',
    chapters: 16,
  },
  {
    bookid: 47,
    chronorder: 45,
    name: '2 Corintios',
    chapters: 13,
  },
  {
    bookid: 48,
    chronorder: 41,
    name: 'Gálatas',
    chapters: 6,
  },
  {
    bookid: 49,
    chronorder: 47,
    name: 'Efesios',
    chapters: 6,
  },
  {
    bookid: 50,
    chronorder: 49,
    name: 'Filipenses',
    chapters: 4,
  },
  {
    bookid: 51,
    chronorder: 50,
    name: 'Colosenses',
    chapters: 4,
  },
  {
    bookid: 52,
    chronorder: 42,
    name: '1 Tesalonicenses',
    chapters: 5,
  },
  {
    bookid: 53,
    chronorder: 43,
    name: '2 Tesalonicenses',
    chapters: 3,
  },
  {
    bookid: 54,
    chronorder: 55,
    name: '1 Timoteo',
    chapters: 6,
  },
  {
    bookid: 55,
    chronorder: 59,
    name: '2 Timoteo',
    chapters: 4,
  },
  {
    bookid: 56,
    chronorder: 57,
    name: 'Tito',
    chapters: 3,
  },
  {
    bookid: 57,
    chronorder: 51,
    name: 'Filemón',
    chapters: 1,
  },
  {
    bookid: 58,
    chronorder: 53,
    name: 'Hebreos',
    chapters: 13,
  },
  {
    bookid: 59,
    chronorder: 48,
    name: 'Santiago',
    chapters: 5,
  },
  {
    bookid: 60,
    chronorder: 56,
    name: '1 Pedro',
    chapters: 5,
  },
  {
    bookid: 61,
    chronorder: 60,
    name: '2 Pedro',
    chapters: 3,
  },
  {
    bookid: 62,
    chronorder: 61,
    name: '1 Juan',
    chapters: 5,
  },
  {
    bookid: 63,
    chronorder: 62,
    name: '2 Juan',
    chapters: 1,
  },
  {
    bookid: 64,
    chronorder: 63,
    name: '3 Juan',
    chapters: 1,
  },
  {
    bookid: 65,
    chronorder: 64,
    name: 'Judas',
    chapters: 1,
  },
  {
    bookid: 66,
    chronorder: 65,
    name: 'Apocalipsis',
    chapters: 22,
  },
]

let books: Book[] = [
  // Here should be that books
]

for (const book of booksList) {
  let new_book = books.find((el) => {
    return el.bookid == book.bookid
  })
  if (new_book) {
    new_book.chronorder = book.chronorder
  }
}

// In a case when the $booksList array doesn't contain some apocrifal books -- assign to the chronorder bookid of the book
for (const book of books) {
  if (book.chronorder == undefined) {
    book.chronorder = book.bookid
  }
  book.name = book.name.trim()
}

console.log('books', books)

// After that you need to assign proper chapters number to every book
// The chapters may be got with the next sql command from the sqlite db

// SELECT book_number, count(chapter) FROM verses where verse = 1 GROUP BY book_number;

// After you got that chapters format them into array, similar to others and run the next code.

const chapters: Book[] = [
  // Here should be that chapters
]

for (const chapter of chapters) {
  books.find((el) => {
    return el.bookid == chapter.bookid
  })!.chapters = chapter.chapters
}

console.log('books', books)

// https://astro.build/db/seed
export default async function seed() {
  // TODO
}

// The output -- books -- should be the appropriate array of book of given translation
// It should looks like the $booksList array.
