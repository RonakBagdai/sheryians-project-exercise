const express = require("express");
const cors = require("cors");
const songRoutes = require("./routes/song.routes");

const app = express();

// Enable CORS for frontend
app.use(
  cors({
    origin: "http://localhost:5173", // Vite dev server default port
    credentials: true,
  })
);

app.use(express.json());

app.use("/", songRoutes);

module.exports = app;
