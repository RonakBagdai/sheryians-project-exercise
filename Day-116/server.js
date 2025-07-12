const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

app.use((req, res) => {
  res.status(404).send("Page not found.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
