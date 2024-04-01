const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to the database");
    return true;
  } catch (error) {
    console.error("Failed to connect to the database", error);
  }
};

module.exports = { connectToDatabase };