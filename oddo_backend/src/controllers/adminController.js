import { Admin } from "../models/adminModel.js";
import bcrypt from "bcryptjs";

// Admin signup (basic)
const signupAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      name,
      email,
      password: hashedPassword,
    });

    await newAdmin.save();

    res.status(201).json({ message: "Admin signed up successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Admin login (basic)
 const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    res.status(200).json({
      message: "Login successful.",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Remove admin by email
 const removeUserByEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const deletedAdmin = await Admin.findOneAndDelete({ email });

    if (!deletedAdmin) {
      return res.status(404).json({ message: "Admin not found." });
    }

    res.status(200).json({ message: "Admin removed successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Change admin's ban status (optional if you support banning admins)
 const setBanStatus = async (req, res) => {
  try {
    const { email, isBanned } = req.body;

    const admin = await Admin.findOneAndUpdate(
      { email },
      { isBanned },
      { new: true }
    );

    if (!admin) {
      return res.status(404).json({ message: "Admin not found." });
    }

    res.status(200).json({ message: `Admin ban status updated to ${isBanned}.` });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// View all admin "skills" (if you track this for admins — otherwise remove this)
 const viewAllUserSkills = async (req, res) => {
  try {
    const admins = await Admin.find({}, "email skillsOffered skillsWanted");

    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
export{signupAdmin,loginAdmin,removeUserByEmail,viewAllUserSkills,setBanStatus};
