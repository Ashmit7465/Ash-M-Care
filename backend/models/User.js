import express from "express"
import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
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
            required :true,
      },
      phone: {
            type: Number,
      },
      photo: {
            type: String,
      },
      role: {
            type: String,
            enum: ["patient", "admin"],
            default: "patient",
      },
      gender: {
            type: String,
            enum: ["male", "female", "other"]
      },
      bloodGroup: {
            type: String,
            default: "A+",
      },
      appointments: {
            type: mongoose.Types.ObjectId,
            ref: "Appointment",
      },
});

export const User =  mongoose.model("User", UserSchema);