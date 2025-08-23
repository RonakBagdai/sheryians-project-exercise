const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

/* 

POST /auth/register
POST /auth/login
GET /auth/user
GET /auth/logout

*/

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const isUserExist = await userModel.findOne({ username });
  if (isUserExist) {
    return res.status(409).json({ message: "User already exists" });
  }

  const user = await userModel.create({ username, password });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

  res.status(201).json({ message: "User registered successfully", user });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({ username });
  if (!user) {
    return res
      .status(401)
      .json({ message: "Invalid username or user not found" });
  }

  const isPasswordCorrect = user.password === password;
  if (!isPasswordCorrect) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2), // 2 days
  });

  res.status(200).json({ message: "Login successful", user });
});

router.get("/user", async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel
      .findById(decoded.userId)
      .select("-password -__v");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User data fetched successfully", user });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logout successful" });
});

module.exports = router;
