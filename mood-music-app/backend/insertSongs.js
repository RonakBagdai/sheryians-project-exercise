const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/moodmusic", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  mood: String,
  url: String,
});
const Song = mongoose.model("Song", songSchema);

const songs = [
  {
    title: "Badtameez Dil",
    artist: "Yeh Jawaani Hai Deewani",
    mood: "happy",
    url: "/songs/Badtameez Dil - Yeh Jawaani Hai Deewani 320 Kbps.mp3",
  },
  {
    title: "London Thumakda",
    artist: "Queen",
    mood: "happy",
    url: "/songs/London Thumakda - Queen 320 Kbps.mp3",
  },
  {
    title: "Matargashti",
    artist: "Tamasha",
    mood: "happy",
    url: "/songs/Matargashti - Tamasha 320 Kbps.mp3",
  },
  {
    title: "Sunn Raha Hai (Male)",
    artist: "Aashiqui 2",
    mood: "sad",
    url: "/songs/Sunn Raha Hai (Male) - Aashiqui 2 320 Kbps.mp3",
  },
  {
    title: "Tujhe Bhula Diya Phir",
    artist: "Anjaana Anjaani",
    mood: "sad",
    url: "/songs/Tujhe Bhula Diya Phir - Anjaana Anjaani 320 Kbps.mp3",
  },
  {
    title: "Tum Hi Ho",
    artist: "Aashiqui 2",
    mood: "neutral",
    url: "/songs/Tum Hi Ho - Aashiqui 2 320 Kbps.mp3",
  },
  {
    title: "Tum Hi Ho Bandhu",
    artist: "Cocktail",
    mood: "happy",
    url: "/songs/Tum Hi Ho Bandhu Cocktail 128 Kbps.mp3",
  },
];

Song.insertMany(songs)
  .then(() => {
    console.log("Songs inserted successfully!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error inserting songs:", err);
    mongoose.connection.close();
  });
