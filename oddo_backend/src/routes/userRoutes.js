import express from "express";
import { login, signup, updateUser, userInfo } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/userinfo/:id", userInfo);
router.patch("/update/:id", updateUser);

export default router;
