export const typeDefs = `
  type Query {
    getBible: Bible!
    getBooks: [Book]!
    getVerses(id: String!, bibleId: String): [Verse]!
  }

  type Bible {
    id: String
    nameLocal: String
  }

  type Books {
    books: [Book]!
  }

  type Book {
    id: String
    name: String
    nameLong: String
    chapters: [Chapter]!
  }

  type Chapter {
    id: String
    bibleId: String
    bookId: String
    number: String
    position: Int
  }

  type Verse {
    id: Int
    text: String
  }
`
