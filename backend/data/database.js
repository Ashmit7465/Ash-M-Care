import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Database is connected successfully"))
    .catch((error) => console.log(error));
};