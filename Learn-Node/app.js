import express from "express";
import userModel from "./models/user.js";
import connection from "./config/db.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.send("Welcome to the About Page");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to the Contact Page");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = await userModel.create({
    name: name,
    email: email,
    password: password,
  });

  res.send(newUser);
});

app.get("/get-users", async (req, res) => {
  const users = await userModel.find();
  res.send(users);
});

app.get("/update-user", async (req, res) => {
  const users = await userModel.findOneAndUpdate(
    { name: "RonakBagdai" },
    { email: "ronak@example.com" }
  );
  res.send(users);
});

app.get("/delete-user", async (req, res) => {
  const users = await userModel.findOneAndDelete({ name: "Bot" });
  res.send(users);
});

app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("Form data received");
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});
