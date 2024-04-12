import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import {config} from "dotenv"
import { connectDB } from "./data/database.js";
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import doctorRoute from "./routes/doctor.js"
import reviewRoute from "./routes/review.js"
// import crypto from "crypto"

config({
      path: "./data/config.env" 
});

const app = express();
const port = process.env.PORT || 4000;

const corsOptions = {
  origin: true,
};

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/reviews', reviewRoute);

app.get("/", (req, res) => {
  res.send(`Server setup successfully at port number ${port}`);
});

// const randomString = crypto.randomBytes(256).toString('base64');
// console.log(randomString);

app.listen(port, (req, res) => {
  connectDB();
  console.log(`Server is running successfully at port number ${port}`);
});
