import { connect } from "mongoose";

const connectDB = async () => {
  try {
    connect(
      "mongodb+srv://ronakbagdai332:XVsfYH2gV2fKXdMy@cluster0.xbrp2wg.mongodb.net/cohort"
    ).then(() => {
      console.log("MongoDB connected successfully");
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
