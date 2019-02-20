export const getNewTestament = (books) => books.filter((i, k) => k > 38);
export const getOldTestament = (books) => books.filter((i, k) => k <= 38);
export const getNodesFromEdges = (edges) => edges.map((edge) => edge.node);
export const getBooksFromQuery = (query) => getNodesFromEdges(query.allBooks.edges);
