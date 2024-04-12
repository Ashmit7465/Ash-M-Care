import express from "express";
import jwt from "jsonwebtoken";
import { Doctor } from "../models/Doctor.js";
import { User } from "../models/User.js";

export const authenticate = async (req, res, next) => {
  //get token from headers
  const authToken = req.headers.authorization;

  try {
    if (!authToken || !authToken.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "No token, authorization denied...",
      });
    }
    const token = authToken.split(" ")[1];

    //verify token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decodedToken.id;

    req.role = decodedToken.role;

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token is expired...",
      });
    }

    return res.status(401).json({
      success: false,
      message: "Invalid token...",
    });
  }
};


//allow only admin to see all the users

export const restrict = roles => async (req, res, next) => {
    const userId = req.userId;
    let user;
    
    const patient = await User.findById(userId);

    const doctor = await Doctor.findById(userId);

    if(patient)
    {
      user = patient;
    }

    if(doctor)
    {
      user = doctor;
    }

    if(!roles.includes(user.role))
    {
      return res.status(401).json({
            success:false,
            message: "You are not authorized...",
      });
    }

    next();
}
