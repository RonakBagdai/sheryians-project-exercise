import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minlength: [3, "Username must be at least 3 characters long"],
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minlength: [10, "Email must be at least 10 characters long"],
  },
  password: {
    type: String,
    required: true,
    minlength: [5, "Password must be at least 5 characters long"],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
