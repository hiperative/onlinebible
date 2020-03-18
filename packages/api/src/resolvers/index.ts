import { BibleBoxXmlService } from './../services/BibleBoxXmlService';
import { BibleApiService } from './../services/BibleApiService';

export const resolvers = {
  Query: {
    getBible: async () => await BibleApiService.getBible(),
    getBooks: async () => await BibleApiService.getBooks(),
    getVerses: async (_, { id, bibleId }) => await BibleBoxXmlService.getVerses({id, bibleId}),
  }
}
