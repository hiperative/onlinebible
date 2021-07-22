import { Book } from "types/book";

const API_BASE_URL = 'https://api.scripture.api.bible/v1';
const BIBLE_API_KEY = process.env.BIBLE_API_KEY;
const BIBLE_ID = process.env.BIBLE_ID;

interface ApiResponse<T> {
  data: T
}

export async function getBibles() {
  const response = await fetch(`${API_BASE_URL}/bibles`, {
    headers: { 'api-key': BIBLE_API_KEY }
  });

  const data = response.json();

  return data;
}

export async function getBibleMetadata(bibleId: string = BIBLE_ID) {
  const response = await fetch(`${API_BASE_URL}/bibles/${bibleId}`, {
    headers: { 'api-key': BIBLE_API_KEY }
  });

  const data = response.json();

  return data;
}

export async function getBooksAndChapters(bibleId: string = BIBLE_ID): Promise<ApiResponse<Book[]>> {
  const response = await fetch(`${API_BASE_URL}/bibles/${bibleId}/books?include-chapters=true`, {
    headers: { 'api-key': BIBLE_API_KEY },
  });

  const data = response.json();

  return data;
}

export async function getChapters (bibleId: string = BIBLE_ID, bookId: string) {
  const response = await fetch(`${API_BASE_URL}/bibles/${bibleId}/books/${bookId}/chapters`, {
    headers: { 'api-key': BIBLE_API_KEY },
  });

  const data = response.json();

  return data;
}
export async function getChapter (bibleId: string = BIBLE_ID, chapterId: string) {
  const response = await fetch(`${API_BASE_URL}/bibles/${bibleId}/chapters/${chapterId}`, {
    headers: { 'api-key': BIBLE_API_KEY },
  });

  const data = response.json();

  return data;
}
