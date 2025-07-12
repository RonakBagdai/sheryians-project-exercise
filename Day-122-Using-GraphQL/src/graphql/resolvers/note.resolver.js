const Note = require("../../models/note.model.js");

const resolvers = {
  Query: {
    getNotes: async () => await Note.find(),
    getNote: async (_, { id }) => await Note.findById(id),
  },
  Mutation: {
    createNote: async (_, { title, content }) => {
      const newNote = new Note({ title, content });
      return await newNote.save();
    },
    updateNote: async (_, { id, title, content }) => {
      const updatedNote = await Note.findByIdAndUpdate(
        id,
        { title, content },
        { new: true }
      );
      return updatedNote;
    },
    deleteNote: async (_, { id }) => {
      const deletedNote = await Note.findByIdAndDelete(id);
      return !!deletedNote;
    },
  },
  Note: {
    createdAt: (parent) => parent.createdAt.toISOString(),
    updatedAt: (parent) => parent.updatedAt.toISOString(),
  },
};

module.exports = resolvers;
