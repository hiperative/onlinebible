export type Chapter = {
  id: string;
  number: string;
  bookId: string;
  reference: string;
}

export type Book = {
  id: string;
  name: string;
  nameLong: string;
  chapters: Chapter[]
};
