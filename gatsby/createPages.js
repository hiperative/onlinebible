const path = require('path');
const TEMPLATE_DIR = path.resolve(__dirname, '../src/templates');

const createPageLink = (chapterId) => chapterId.replace('.', '/');

/**
 * Get all books.
 * @param actions
 * @return {Promise<*[]>}
 */
const getBooks = async (actions) => {
  const { graphql } = actions;

  const {
    data: {
      allBooks: { edges }
    }
  } = await graphql(`
    query Books {
      allBooks {
        edges {
          node {
            id
            name
            nameLong
            chapters {
              id
              number
              bookId
              position
            }
          }
        }
      }
    }
  `) || {};

  return edges.map(edge => edge.node);
};

/**
 * Register a book to Gatsby.
 * @param book
 * @param actions
 * @return {void}
 */
const registerBook = async (book, actions) => {
  const { createPage } = actions;

  createPage({
    path: `/${book.id}`,
    component: path.join(TEMPLATE_DIR, 'book.js'),
    context: {
      ...book
    }
  });
};

/**
 * Get all chapters.
 * @param actions
 * @return {Promise<*[]>}
 */
const getChapters = async (actions) => {
  const { graphql } = actions;

  const {
    data: {
      allChapters: { edges }
    }
  } = await graphql(`
    query Chapters {
      allChapters {
        edges {
          node {
            id
            bookId
            number
          }
        }
      }
    }
  `) || {};

  return edges.map(edge => edge.node);
};

/**
 * Register a chapter to Gatsby.
 * @param chapter
 * @param actions
 * @return {void}
 */
const registerChapter = async (chapter, actions) => {
  const { createPage } = actions;

  createPage({
    path: `/${createPageLink(chapter.id)}`,
    component: path.join(TEMPLATE_DIR, 'chapter.js'),
    context: {
      ...chapter
    }
  });
};

exports.default = async ({ actions, createNodeId, graphql, getNodes }) => {

  const gatsbyActions = {
    ...actions,
    createNodeId,
    graphql,
    getNodes
  };

  try {
    const books = await getBooks(gatsbyActions);
    books.forEach(book => registerBook(book, gatsbyActions));

    const chapters = await getChapters(gatsbyActions);
    chapters.forEach(chapter => registerChapter(chapter, gatsbyActions));
  } catch (err) {
    console.log('Error during createPages')
    console.error(err)
  }
}
