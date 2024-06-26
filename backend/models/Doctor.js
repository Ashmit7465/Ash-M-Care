import express from "express"
import mongoose from "mongoose"

const DoctorSchema = new mongoose.Schema({
      email: {
            type: String,
            required: true,
            unique: true,
      },
      password: {
            type: String,
            required: true,
      },
      name: {
            type: String,
            required: true,
      },
      phone: {
            type: Number,
      },
      photo: {
            type: String,
      },
      consultationFee: {
            type: Number,
      },
      role: {
            type: String,
      },


      specialization: {
            type: String,
      },
      qualification: {
            type: Array,
      },
      experiences: {
            type: Array,
      },
      
      bio: {
            type: String,
            maxLength: 50
      },
      about: {
            type: String,
      },
      timeSlots: {
            type: Array,
      },
      reviews: {
            type: mongoose.Types.ObjectId, ref: "Review",
      },
      averageRating: {
            type: Number,
            default: 0,
      },
      totalRating: {
            type: Number,
            default: 0,
      },
      isApproved: {
            type: String,
            enum: ["pending", "approved", "cancelled"],
            default: "approved",
      },
      appointments: [
            {
                  type: mongoose.Types.ObjectId, ref: "Appointment",
            }
      ],
});

export const Doctor = new mongoose.model("Doctor", DoctorSchema);