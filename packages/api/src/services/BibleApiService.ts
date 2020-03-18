import { API_KEY, BIBLE_ID } from '../config';
import { logger } from './../utils/logger';
import { BaseService } from './BaseService';
import { APIBibleResponse, APIBookResponse } from './../interfaces';

class Service extends BaseService {
  constructor(private apiKey: string, private bibleId: string) {
    super();
    this.apiBaseUrl = 'https://api.scripture.api.bible';
    this.requestOptions = {
      headers: { "api-key": this.apiKey }
    }
  }

  private parseBibleInfo(bible: APIBibleResponse): Partial<APIBibleResponse> {
    const {id, name, nameLocal, description, abbreviation } = bible;

    logger.info(`->get bible: ${name} ${abbreviation}`);

    return { id, name, nameLocal, description, abbreviation };
  }

  private filterChapters(books: APIBookResponse[]): APIBookResponse[] {
    return books.map(book => {
      const chapters = book.chapters.filter(chapter => !isNaN((chapter.number as unknown as number)))

      return {
        ...book,
        chapters
      }
    })
  }

  getBible() {
    logger.info('->getBible');
    return this
      .request<APIBibleResponse>(`/v1/bibles/${this.bibleId}`)
      .then((data) => this.parseBibleInfo(data));
  }

  getBooks() {
    logger.info('->getBooks');
    return this
      .request<{data: APIBookResponse[]}>(`/v1/bibles/${this.bibleId}/books?include-chapters=true`)
      .then(({data}) => this.filterChapters(data));
  }
}

export const BibleApiService = new Service(API_KEY, BIBLE_ID);
