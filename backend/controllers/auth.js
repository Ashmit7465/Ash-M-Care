import express from "express";
import mongoose from "mongoose";
import { User } from "../models/User.js";
import { Doctor } from "../models/Doctor.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "7d",
    }
  );
};

export const register = async (req, res) => {
  const { name, email, password, role, gender, photo } = req.body;

  try {
    let user = null;

    if (role == "patient") {
      user = await User.findOne({ email });
    } else if (role == "doctor") {
      user = await Doctor.findOne({ email });
    }

    if (user) {
      return res.status(401).json({
        success: false,
        message: "User already exists...",
      });
    }

    //hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    if (role == "patient") {
      user = await User.create({
        name,
        email,
        password: hashedPassword,
        photo,
        gender,
        role,
      });
    } else if (role == "doctor") {
      user = await Doctor.create({
        name,
        email,
        password: hashedPassword,
        photo,
        gender,
        role,
      });
    }

    await user.save();

    res.status(201).json({
      success: true,
      message: "user successfully registered...",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User registration failed...",
    });
  }
};

export const login = async (req, res) => {
  const { email } = req.body;

  try {
    let user = null;

    const patient = await User.findOne({ email });

    const doctor = await Doctor.findOne({ email });

    if (patient) {
      user = patient;
    }
    if (doctor) {
      user = doctor;
    }

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or password...",
      });
    }

    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordMatch) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or password...",
      });
    }

    //get token
    const token = generateToken(user);

    const { password, role, appointments, ...rest } = user._doc;

    res.status(201).json({
      success: true,
      message: "Login Successful",
      token,
      data: { ...rest },
      role,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "Login failed",
    });
  }
};
