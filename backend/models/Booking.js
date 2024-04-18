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
            default: "approved",
      },
      isPaid: {
            type: Boolean,
            default: true,
      },
      createdAt: {
            type: Date,
            default: Date.now(),
      }
    },
      {
            timeStamps: true,
      },
);

BookingSchema.pre(/^find/, function(next) {
      this.populate('user').populate({
            path: 'doctor',
            select: 'name'
      })

      next();
})

export const Booking = mongoose.model("Booking", BookingSchema);
