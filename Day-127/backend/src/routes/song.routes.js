const express = require("express");
const multer = require("multer");
const uploadFile = require("../service/storage.service");
const router = express.Router();
const songModel = require("../models/song.model");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/songs", upload.single("audio"), async (req, res) => {
  try {
    const { title, artist, mood } = req.body;

    const fileData = await uploadFile(req.file);

    const song = await songModel.create({
      title,
      artist,
      audio: fileData.url,
      mood,
    });

    res.status(201).json({
      message: "Song uploaded successfully",
      song: song,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to upload song", error: error.message });
  }
});

router.get("/songs", async (req, res) => {
  try {
    const { mood } = req.query;
    const songs = await songModel.find({ mood });
    res.status(200).json({
      message: "Songs fetched successfully",
      songs,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch songs", error: error.message });
  }
});

module.exports = router;
