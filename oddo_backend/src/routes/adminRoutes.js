import express from "express";

import {
  removeUserByEmail,
  setBanStatus,
  viewAllUserSkills,
  signupAdmin,
  loginAdmin,
} from "../controllers/adminController.js";
const router = express.Router();

router.post("/signup", signupAdmin);
router.post("/login", loginAdmin);

router.delete("/remove-user", removeUserByEmail);
router.put("/ban-status", setBanStatus);
router.get("/skills", viewAllUserSkills);

export default router;