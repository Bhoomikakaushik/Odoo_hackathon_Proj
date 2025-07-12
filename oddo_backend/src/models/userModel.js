import mongoose from "mongoose";

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: { type: String, default: "" },
  profilePhoto: { type: String, default: "" },
  skillsOffered: [{ type: String }],
  skillsWanted: [{ type: String }],
  availability: {
    type: String,
    enum: ["Weekends", "Evenings", "Weekdays", "Flexible"],
    default: "Weekends",
  },
  isPublic: { type: Boolean, default: true },
  rating: { type: Number, default: 0 },
  completedSwaps: { type: Number, default: 0 },
  isBanned: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});
const User = mongoose.model("User", userSchema);
export {User};
