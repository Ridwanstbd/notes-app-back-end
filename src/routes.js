const { addNotehandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNotehandler,
  },
];
module.exports = routes;
