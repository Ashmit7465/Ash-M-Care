import express from "express";
import mongoose from "mongoose";
import { Doctor } from "./Doctor.js";

const ReviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  {
    timeStamps: true,
  }
);

ReviewSchema.pre(/^find/, (next) => {
  this.populate({
    path: "user",
    select: "name photo",
  });

  next();
});

ReviewSchema.statics.calcAverageRatings = async function (doctorId) {
  const stats = await this.aggregate([
    {
      $match: { doctor: doctorId },
    },
    {
      $group: {
        _id: "$doctor",
        numOfRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);
  //   console.log(stats);
  if (stats.length > 0) {
    await Doctor.findByIdAndUpdate(doctorId, {
      totalRating: stats[0].numOfRating,
      averageRating: stats[0].avgRating,
    });
  }
};

ReviewSchema.post("save", function () {
  this.constructor.calcAverageRatings(this.doctor);
});

// Define a flag to check if the middleware has been applied
// let calcAverageRatingsMiddlewareApplied = false;

// Attach the middleware only if it hasn't been applied yet
// if (!calcAverageRatingsMiddlewareApplied) {
//   ReviewSchema.post("save", function () {
//     this.constructor.calcAverageRatings(this.doctor);
//   });

//   calcAverageRatingsMiddlewareApplied = true;
// }

export const Review = mongoose.model("Review", ReviewSchema);
