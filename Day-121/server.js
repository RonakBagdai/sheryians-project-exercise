const express = require("express");
const connectDB = require("./src/db/db.js").default.default;

const app = express();
const port = 3000;

app.use(express.json());

connectDB();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/notes", (req, res) => {
  const { title, content } = req.body;
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
