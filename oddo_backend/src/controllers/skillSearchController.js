import { User } from "../models/userModel.js";

// GET /users/search?skill=photography
export const searchUsersBySkill = async (req, res) => {
  const { skill } = req.query;
  
  if (!skill || typeof skill !== "string") {
    return res.status(400).json({ error: "Skill query parameter is required." });
  }

  try {
    const users = await User.find({
      skillsOffered: { $regex: new RegExp(skill, "i") },
      isPublic: true,
      isBanned: false,
    }).select("-password");

    res.status(200).json(users);
  } catch (error) {
    console.error("Error searching users by skill:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
