import mongoose from "mongoose";
import express from "express";
import { Router } from "express";
import { updateDoctor, deleteDoctor, getSingleDoctor, getAllDoctors, getDoctorProfile, getDoctorById } from "../controllers/doctor.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRoute from "./review.js"

const router = Router();

//nested route
router.use('/:doctorId/reviews', reviewRoute);

router.get('/', getAllDoctors);
router.put('/:id', authenticate, restrict(["doctor"]), updateDoctor);
router.get('/:id', getSingleDoctor);
router.delete('/:id', authenticate, restrict(["doctor"]), deleteDoctor);

router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile);

export default router;