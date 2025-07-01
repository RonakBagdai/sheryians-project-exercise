import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/register", (req, res) => {
  res.render("register");
});

router.post(
  "/register",
  body("username")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long"),
  body("email")
    .trim()
    .isEmail()
    .isLength({ min: 10 })
    .withMessage("Invalid email address"),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array(), message: "Invalid data" });
    }

    const { username, email, password } = req.body;

    const newUser = await User.create({
      username,
      email,
      password: await bcrypt.hash(password, 10),
    });

    res.json(newUser);
  }
);

router.get("/login", (req, res) => {
  res.render("login");
});

router.post(
  "/login",
  body("username")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long"),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array(), message: "Invalid data" });
    }

    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Username or password is incorrect" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Username or password is incorrect" });
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username, email: user.email },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);
    res.json({ message: "Login successful" });
  }
);

export default router;
