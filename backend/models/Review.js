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
    createdAt: {
      type: Date,
      default: Date.now(),
    }
  },
  
);

ReviewSchema.pre(/^find/, function(next) {
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
        if(stats.length > 0)
        {
          await Doctor.findByIdAndUpdate(doctorId, {
            totalRating: stats[0].numOfRating,
            averageRating: stats[0].avgRating,
          });
        }
};

ReviewSchema.post("save", function () {
  this.constructor.calcAverageRatings(this.doctor);
});

export const Review = mongoose.model("Review", ReviewSchema);
