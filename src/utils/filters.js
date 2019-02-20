export const filterCommonChapters = (chapters) => chapters.filter(({number}) => !isNaN(number));
export const filterBook = (books, bookId) => books.reduce((found,book) => book.id === bookId ? book : found, null);
