const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLSchema,
} = require("graphql");
const Note = require("../models/Note");

// Note Type
const NoteType = new GraphQLObjectType({
  name: "Note",
  fields: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  },
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    notes: {
      type: new GraphQLList(NoteType),
      resolve: async () => await Note.find(),
    },
    note: {
      type: NoteType,
      args: { id: { type: GraphQLID } },
      resolve: async (_, { id }) => await Note.findById(id),
    },
  },
});

// Mutations
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addNote: {
      type: NoteType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (_, { title, description }) => {
        const note = new Note({ title, description });
        return await note.save();
      },
    },
    updateNote: {
      type: NoteType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve: async (_, { id, title, description }) => {
        return await Note.findByIdAndUpdate(
          id,
          { title, description },
          { new: true }
        );
      },
    },
    deleteNote: {
      type: NoteType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: async (_, { id }) => await Note.findByIdAndDelete(id),
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
