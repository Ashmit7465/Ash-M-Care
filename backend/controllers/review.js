import express from "express";
import mongoose from "mongoose";
import {Review} from "../models/Review.js"
import {Doctor} from "../models/Doctor.js"
import {User} from "../models/User.js"

export const getAllReviews = async (req, res) => {
      try
      {
            const reviews = await Review.find({});

            res.status(401).json({
                  success: true,
                  message: "Got all reviews successfully...",
                  data: reviews,
            });
      }
      catch (error)
      {
            res.status(404).json({
                  success: false,
                  message: "Could not get reviews...",
            });
      }
}

export const createReview = async (req, res) => {

      if(!req.body.doctor)
      {
            req.body.doctor = req.params.doctorId;
      }

      if(!req.body.user)
      {
            req.body.user = req.userId;
      }

      const newReview = await Review.create(req.body);

      try
      {
            const savedReview = await newReview.save();

            await Doctor.findByIdAndUpdate(req.body.doctor, {
                  $push: {reviews: savedReview._id}
            });

            res.status(201).json({
                  success: true,
                  message: "Review submitted successfully...",
                  data: savedReview,
            });
      }
      catch (error)
      {
            res.status(501).json({
                  success: false,
                  message: error.message,
            });
      }
}
