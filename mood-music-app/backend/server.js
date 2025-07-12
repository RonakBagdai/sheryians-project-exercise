const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/moodmusic");

// Song schema and model
const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  mood: String,
  url: String, // e.g. "/songs/song1.mp3"
});
const Song = mongoose.model("Song", songSchema);

// Serve static files (for local mp3s in /songs)
app.use(
  "/songs",
  (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    next();
  },
  express.static("songs")
);

// Add a song (POST /add-song)
app.post("/add-song", async (req, res) => {
  const { title, artist, mood, url } = req.body;
  try {
    const song = new Song({ title, artist, mood, url });
    await song.save();
    res.json({ message: "Song added!", song });
  } catch (err) {
    res.status(500).json({ error: "Failed to add song" });
  }
});

// Get songs by mood (GET /songs/:mood)
app.get("/songs/:mood", async (req, res) => {
  let mood = req.params.mood;
  if (!mood || typeof mood !== "string" || mood.trim() === "") {
    mood = "happy";
  }
  try {
    const songs = await Song.find({ mood });
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch songs from DB" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
