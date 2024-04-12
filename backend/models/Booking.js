import express from "express"
import mongoose from "mongoose"

const BookingSchema = new mongoose.Schema(
      {
      doctor: {
            type: mongoose.Types.ObjectId,
            ref: "Doctor",
            required: true,
      },
      user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true,  
      },
      consultationFee: {
            type: String,
            required: true,
      },
      status: {
            type: String,
            enum: ["pending", "approved", "cancelled"],
            default: "pending",
      },
      isPaid: {
            type: Boolean,
            default: true,
      },
    },
      {
            timeStamps: true,
      },
);

export const Booking = mongoose.model("Booking", BookingSchema);
