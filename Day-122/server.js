const express = require("express");
const connectDB = require("./src/db/db.js");
const noteModel = require("./src/models/note.model.js");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/notes", async (req, res) => {
  try {
    const { title, content } = req.body;

    await noteModel.create({ title, content });
    res.json({
      message: "Note created successfully",
    });
  } catch (error) {
    console.error("Error creating note:", error);
    res.json({ message: "Internal server error" });
  }
});

app.get("/notes", async (req, res) => {
  try {
    const notes = await noteModel.find();
    res.json({
      message: "Notes retrieved successfully",
      notes: notes,
    });
  } catch (error) {
    console.error("Error retrieving notes:", error);
    res.json({ message: "Internal server error" });
  }
});

app.delete("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await noteModel.findByIdAndDelete(id);
    res.json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.json({ message: "Internal server error" });
  }
});

app.patch("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedNote = await noteModel.findByIdAndUpdate(
      id,
      { title, content },
      { new: true, runValidators: true }
    );
    res.json({
      message: "Note updated successfully",
      note: updatedNote,
    });
  } catch (error) {
    console.error("Error updating note:", error);
    res.json({ message: "Internal server error" });
  }
});

connectDB();
app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
