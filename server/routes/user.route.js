import express from "express";
import {
  deleteUserById,
  getUserById,
  getUsers,
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { verifyAdmin } from "../middlewares/verifyAdmin.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", verifyToken, verifyAdmin, getUsers);
router.get("/user/:id", getUserById);
router.delete("/user", verifyToken, deleteUserById);
router.patch("/update/:id", updateUser);

export default router;
