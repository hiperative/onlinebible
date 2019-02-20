const crypto = require('crypto');

const ContentService = require('../src/utils/services/content');

const createContentDigest = (content) => crypto.createHash('md5').update(JSON.stringify(content)).digest('hex')

const getMetadata = async(actions) => {
  const { createNode } = actions;

  const metadata = await ContentService.getBibleMetadata()

  const nodeMeta = {
    id: metadata.id,
    parent: false,
    children: [],
    internal: {
      type: `BibleMetadata`,
    },
    data: metadata
  }

  nodeMeta.internal.contentDigest = createContentDigest(nodeMeta);

  createNode(nodeMeta)

  return nodeMeta;
}

const getBooks = async (parent, actions) => {
  const { createNode } = actions;

  const books = await ContentService.getBooks()

  books.map(async (book) => {
    const bookMeta = {
      parent,
      children: [],
      internal: {
        type: `Books`,
      },
      ...book
    }

    bookMeta.internal.contentDigest = createContentDigest(bookMeta);

    createNode(bookMeta)
  });

  return books;
}

const getChapters = async (book, actions) => {
  const { createNode } = actions;

  const { id: parent, chapters } = book;

  chapters.map(async (chapter) => {
    if (isNaN(chapter.number)) return;

    const chapterMeta = {
      parent,
      children: [],
      internal: {
        type: `Chapters`,
      },
      ...chapter
    }

    chapterMeta.internal.contentDigest = createContentDigest(chapterMeta);

    createNode(chapterMeta)
  });
}

const sourceNodes = async ({ actions }) => {

  // Get metadata from bible
  const {id} = await getMetadata(actions);
  // Get books of the bible
  const books = await getBooks(id, actions);
  // Get chapters of the book
  books.forEach(async (book) => {
    await getChapters(book, actions)
  });
}

exports.default = sourceNodes
