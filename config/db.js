import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    }
    await mongoose.connect("mongodb://localhost:27017/jewel-store");
    console.log("Connected to the database successfully");
  } catch (err) {
    console.log("Faild to connect to the DB", err);
  }
}