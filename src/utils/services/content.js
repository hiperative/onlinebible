const axios = require('axios')

const apiKey = process.env['BIBLE_API_KEY']
const bibleId = process.env['BIBLE_ID']

const instance = axios.create({
  baseURL: 'https://api.scripture.api.bible/v1/',
  timeout: 100000,
  headers: {'api-key': apiKey},
})

const errorHandler = (err) => console.error(err)

class ContentService {
  static async getBibleMetadata() {
    try {
      const { data: { data } } = await instance.get(`/bibles/${bibleId}`)
      return data
    } catch (err) {
      errorHandler(err)
    }
  }

  static async getBooks() {
    try {
      // TODO: Study if get the chapters info (amount) or not
      const { data: { data } } = await instance.get(`/bibles/${bibleId}/books`, {
        params: {
          'include-chapters-and-sections': true
        }
      });

      return data
    } catch (err) {
      errorHandler(err)
    }
  }

  static async getChapters(bookId) {
    try {
      const { data: { data } } = await instance.get(`/bibles/${bibleId}/books/${bookId}/chapters`)
      return data
    } catch (err) {
      errorHandler(err)
    }
  }

  static async getChapter(chapterId) {
    try {
      const { data: { data } } = await instance.get(`/bibles/${bibleId}/chapters/${chapterId}`, {
        params: {
          'content-type': 'text',
          'include-titles': false,
          'include-verse-numbers': true,
          'include-verse-spans': false,
        }
      });

      return data
    } catch (err) {
      errorHandler(err)
    }
  }
}

module.exports = ContentService
