// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// const port = 3000;

// app.use(express.json());

// // 1. Connect to MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/notesdb", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // 2. Define Note schema and model
// const noteSchema = new mongoose.Schema({
//   title: String,
//   description: String,
// });
// const Note = mongoose.model("Note", noteSchema);

// // 3. Get all notes from MongoDB
// app.get("/notes", async (req, res) => {
//   const notes = await Note.find();
//   res.json({ message: "List of notes", notes });
// });

// // 4. Add a new note to MongoDB
// app.post("/notes", async (req, res) => {
//   const { title, description } = req.body;
//   const note = new Note({ title, description });
//   await note.save();
//   const notes = await Note.find();
//   res.status(201).json({ message: "Note added successfully", notes });
// });

// // 5. Update a note in MongoDB
// app.patch("/notes/:id", async (req, res) => {
//   const { id } = req.params;
//   const { title, description } = req.body;
//   await Note.findByIdAndUpdate(id, { title, description });
//   const notes = await Note.find();
//   res.json({ message: "Note updated successfully", notes });
// });

// // 6. Delete a note from MongoDB
// app.delete("/notes/:id", async (req, res) => {
//   const { id } = req.params;
//   await Note.findByIdAndDelete(id);
//   const notes = await Note.find();
//   res.json({ message: "Note deleted successfully", notes });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/notesdb");

// GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // Enables GraphiQL UI for testing
  })
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`GraphQL endpoint: http://localhost:${port}/graphql`);
});
