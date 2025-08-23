const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS for frontend
app.use(
  cors({
    origin: "http://localhost:5173", // Vite dev server default port
    credentials: true,
  })
);

app.use(express.json());

// Test endpoint
app.get("/test", (req, res) => {
  res.json({ message: "Backend is connected!" });
});

// Mock songs endpoint
app.get("/songs", (req, res) => {
  const { mood } = req.query;

  // Mock data for testing
  const mockSongs = {
    happy: [
      { title: "Happy Song 1", artist: "Happy Artist 1", audio: "url1" },
      { title: "Happy Song 2", artist: "Happy Artist 2", audio: "url2" },
    ],
    sad: [
      { title: "Sad Song 1", artist: "Sad Artist 1", audio: "url3" },
      { title: "Sad Song 2", artist: "Sad Artist 2", audio: "url4" },
    ],
    angry: [
      { title: "Angry Song 1", artist: "Angry Artist 1", audio: "url5" },
      { title: "Angry Song 2", artist: "Angry Artist 2", audio: "url6" },
    ],
  };

  const songs = mockSongs[mood] || [];

  res.status(200).json({
    message: "Songs fetched successfully",
    songs,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Test server is running on port ${PORT}`);
  console.log(`Test endpoint: http://localhost:${PORT}/test`);
  console.log(`Songs endpoint: http://localhost:${PORT}/songs?mood=happy`);
});
