import mongoose from "mongoose";

function connectDB() {
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB connected successfully");
  });
}

export default connectDB;
