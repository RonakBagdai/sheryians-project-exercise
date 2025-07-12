const express = require("express");

const app = express();
const port = 3000;
 
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

const notes = [];

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({ message: "Note added successfully" });
});

app.get("/notes", (req, res) => {
  res.json({ message: "List of notes", notes });
});

app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;

  delete notes[index];
  res.json({ message: "Note deleted successfully" });
});

app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const updatedNote = req.body;

  notes[index] = updatedNote;
  res.json({ message: "Note updated successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
