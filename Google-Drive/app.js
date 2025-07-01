import express from "express";
import userRoutes from "./routes/user.routes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import indexRoutes from "./routes/index.routes.js";

dotenv.config();

const app = express();

app.use(cookieParser());

connectDB();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRoutes);
app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
