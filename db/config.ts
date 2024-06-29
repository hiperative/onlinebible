// import { defineDb, defineTable, column } from 'astro:db'

// SELECT * FROM bolls_verses ORDER BY BOOK, CHAPTER, VERSE;

// select * from bolls_verses where translation='KJA' and book=20 and chapter=1 and verse=8;

// SELECT translation, count(id) FROM bolls_verses GROUP BY translation;

// INSERT inTO bolls_verses(translation, book, chapter, verse, text) values ('RV1960', 1, 1, 1, 'En el principio creó Dios los cielos y la tierra.');

// const Verses = defineTable({
//   columns: {
//     translation: column.text(),
//     book: column.number(),
//     chapter: column.number(),
//     verse: column.number(),
//     text: column.text(),
//     comment: column.text(),
//   },
// })

// // https://astro.build/db/config
// export default defineDb({
//   tables: { Verses },
// })
