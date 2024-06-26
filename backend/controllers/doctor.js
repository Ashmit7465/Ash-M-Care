import express from "express";
import mongoose from "mongoose";
import { Doctor } from "../models/Doctor.js";
import { Review } from "../models/Review.js";
import { Booking } from "../models/Booking.js";

export const updateDoctor = async (req, res) => {
  const doctorId = req.params.id;

  try {

    // const doctorDataTemp = await Doctor.findById(doctorId);
    // console.log(doctorDataTemp);

    const doctorData = await Doctor.findByIdAndUpdate(
      doctorId,
      { $set: req.body },
      { new: true }
    );

    res.status(201).json({
      success: true,
      message: "Doctor data successfully updated...",
      data: doctorData,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "Doctor data update failed...",
    });
  }
};

export const deleteDoctor = async (req, res) => {
  const doctorId = req.params.id;

  try {
    const doctorData = await Doctor.findByIdAndDelete(doctorId);

    res.status(201).json({
      success: true,
      message: "Doctor successfully deleted...",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "Doctor deletion failed",
    });
  }
};

export const getDoctorById = async (req, res) => {
  const doctorId = req.params.id;

  try {
    const doctorData = await Doctor.findById(doctorId).select(
      "-password"
    );

    res.status(201).json({
      success: true,
      message: "Doctor found successfully...",
      data: doctorData,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Failed to find the Doctor...",
    });
  }
}

export const getSingleDoctor = async (req, res) => {
  const doctorId = req.params.id;

  try {
    // Find the doctor by ID
    const doctorData = await Doctor.findById(doctorId)
      .populate("reviews")
      .select("-password");

    // Retrieve all reviews
    const allReviews = await Review.find({});

    // Filter the reviews for the specific doctor
    const doctor_reviews = allReviews.filter(review => review.doctor.toString() === doctorId)
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 3);

    res.status(200).json({
      success: true,
      message: "Doctor found successfully...",
      data: doctorData,
      reviews: doctor_reviews // Include filtered reviews in the response
    });
  } catch (error) {
    console.error(error);
    res.status(404).json({
      success: false,
      message: "Failed to find the Doctor...",
    });
  }
};


export const getAllDoctors = async (req, res) => {
  try {
    const { query } = req.query;

    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    // const DoctorsAll = await Doctor.find({}).select("-password");

    res.status(201).json({
      success: true,
      message: "Getting all Doctors successful...",
      data: doctors,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "Fetching all Doctors failed...",
    });
  }
};

export const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId;
  try {
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    const { password, ...rest } = doctor._doc;
    const appointments = await Booking.find({ doctor: doctorId });

    res.status(200).json({
      success: true,
      message: "User profile found successfully...!",
      data: { ...rest, appointments },
    });
  } catch (error) {
    return res.status(501).json({
      success: false,
      message: "Something went wrong, cannot get profile",
    });
  }
};
