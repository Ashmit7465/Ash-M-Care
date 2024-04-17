import express from "express";
import mongoose from "mongoose";
import { Router } from "express";
import {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUsers,
  getUserProfile,
  getMyAppointments,
  getUserByID,
} from "../controllers/user.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = Router();

router.put("/:id", authenticate, restrict(["patient"]), updateUser);
router.delete("/:id", authenticate, restrict(["patient"]), deleteUser);
router.get("/:id", authenticate, restrict(["patient"]), getSingleUser);
router.get("/", authenticate, restrict(["admin"]), getAllUsers);

router.get("/profile/me", authenticate, restrict(["patient"]), getUserProfile);
router.get("/appointments/my-appointments", authenticate, restrict(["patient"]), getMyAppointments);

export default router;
