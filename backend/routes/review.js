import { Router } from "express";
import express from "express";
import { getAllReviews, createReview } from "../controllers/review.js";
import { restrict, authenticate } from "../auth/verifyToken.js";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(getAllReviews)
  .post(authenticate, restrict(["patient"]), createReview);

export default router;
