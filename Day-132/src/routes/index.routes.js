const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log("this is a middleware between route and api");
  next();
});

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

module.exports = router;
