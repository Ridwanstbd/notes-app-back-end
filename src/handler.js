/* eslint-disable consistent-return */
/* eslint-disable indent */
/* eslint-disable space-before-blocks */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updateAt = createdAt;

  const newNote = {
    title, tags, body, id, createdAt, updateAt,
  };
  notes.push(newNote);

  const isSuccess = notes.filter((notes) => notes.id === id).length > 0;

  if (isSuccess){
    const response = h.response({
        status: 'success',
        message: 'Catatan berhasil ditambahkan',
        data: {
            noteId: id,
        },
    });
    response.code(201);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  });
  response.code(501);
  return response;
};
module.exports = { addNoteHandler };
