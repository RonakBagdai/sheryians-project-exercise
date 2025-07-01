import mongoose from "mongoose";

const connection = mongoose.connect("mongodb://0.0.0.0/Learn-Node").then(() => {
  console.log("Connected to MongoDB");
});

export default connection;
