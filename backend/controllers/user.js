import mongoose from "mongoose";
import express from "express";
import { User } from "../models/User.js";
import {Booking} from "../models/Booking.js"
import {Doctor} from "../models/Doctor.js"

export const updateUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const userData = await User.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true }
    );

    res.status(201).json({
      success: true,
      message: "User data successfully updated...",
      data: userData,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "User data update failed...",
    });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const userData = await User.findByIdAndDelete(userId);

    res.status(201).json({
      success: true,
      message: "User successfully deleted...",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "User deletion failed",
    });
  }
};

export const getSingleUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const userData = await User.findById(userId).select("-password");

    res.status(201).json({
      success: true,
      message: "User found successfully...",
      data: userData,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Failed tp find the user...",
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const usersAll = await User.find({}).select("-password");

    res.status(201).json({
      success: true,
      message: "Getting all users successful...",
      data: usersAll,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "Fetching all users failed...",
    });
  }
};

export const getUserProfile = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const { password, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: "User profile found successfully...!",
      data: { ...rest },
    });
  } catch (error) {
    return res.status(501).json({
      success: false,
      message: "Something went wrong, cannot get profile",
    });
  }
};

export const getMyAppointments = async(req, res) => {

  try
  {
    //retrieve appointments from booking for specific user
    const bookings = await Booking.find({user:req.userId});

    //extract doctor ids from appointment bookings

    const doctorIds = bookings.map(element => element.doctor.id);

    //retrieve doctors using doctor ids

    const doctors = await Doctor.find({_id: {$in:doctorIds}}).select('-password');

    res.status(201).json({
      success: true,
      message: "Appointments retrieved successfully",
      data: doctors,
    })

  }
  catch(error)
  {
    return res.status(501).json({
      success: false,
      message: "Something went wrong, cannot get appointments",
    });
  }

}
