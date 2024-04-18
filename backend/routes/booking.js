import { Router } from "express";
import express from "express";
import mongoose from "mongoose";
import { authenticate } from "../auth/verifyToken.js";
import { getCheckoutSession } from "../controllers/booking.js";

const router = Router();

router.post('/checkout-session/:doctorId', authenticate, getCheckoutSession);

export default router;

