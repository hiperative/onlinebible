/** API.Bible Response */
export interface APIBibleResponse {
  id: string;
  name: string;
  nameLocal: string;
  abbreviation: string;
  description: string;
}

export interface APIBookResponse {
  id: string;
  name: string;
  nameLong: string;
  chapters: APIChapterResponse[];
}

export interface APIChapterResponse {
  id: string;
  bibleId: string;
  bookId: string;
  number: string;
}

/** XML to JSON Response */
export interface XmlChapterResponse {
  chapter : {
    $: { id: string },
    p: XmlVerseResponse[]
  }
}

export interface XmlVerseResponse {
  _: string;
}
