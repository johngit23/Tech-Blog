const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database is connected successfully!");
  } catch (err) {
    console.log(err);
  }
};

//middlewares
dotenv.config();

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`app is running on port ${process.env.PORT}`);
});
