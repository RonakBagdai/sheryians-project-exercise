const express = require("express");
const indexRoutes = require("./routes/index.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("this is a middleware between app and route");
  next();
});

app.use("/", indexRoutes);

module.exports = app;
