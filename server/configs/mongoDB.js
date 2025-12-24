import mongoose from "mongoose";
import 'dotenv/config';

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/bg-2`);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1); 
  }
};

export default connectDB;