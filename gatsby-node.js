const createPages = require('./gatsby/createPages');
const onCreatePage = require('./gatsby/onCreatePage');
const sourceNodes = require('./gatsby/sourceNodes');

exports.sourceNodes = sourceNodes.default;
exports.createPages = createPages.default;
exports.onCreatePage = onCreatePage.default;
