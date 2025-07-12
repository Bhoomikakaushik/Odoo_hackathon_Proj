import express from "express";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import {User} from "../models/userModel.js";
import crypto from "crypto";

const signup = async (req, res) => {
  const {
    name,
    email,
    password,
    location,
    profilePhoto,
    skillsOffered,
    skillsWanted,
    availability,
    isPublic,
    rating,
    completedSwaps,
    isBanned,
    createdAt
  } = req.body;

  if (!name || !password || !email) {
    console.log("Missing req.data");
    return res.status(400).json({ message: "All feilds are required" });
  }

  try{
    const existingUser=await User.findOne({email});
    if(existingUser){
        return res.status(302).json({message:"User already exist"});
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await User.create({
        name,
        email,
        password: hashedPass,
        location,
        profilePhoto,
        skillsOffered,
        skillsWanted,
        availability,
        isPublic,
        rating,
        completedSwaps,
        isBanned,
        createdAt,
    });
    console.log("user is created");
    await user.save();
    return res.status(201).json({message:"User Created"});
  }
  catch(e){
    res.json({message:"Something went wrong"});
  }
};

const login = async(req,res) => {
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({message:"All fields were not provided."})
    }
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message:"User not found"})
        }

        let isPasswordCorrect =await bcrypt.compare(password,user.password);

        if (isPasswordCorrect){
            let token = crypto.randomBytes(20).toString("hex");
            user.token = token;
            await user.save();
            return res.status(200).json({token:token})
        }else{
            return res.status(401).json({message:"Invalid name or Password"})
        }
    }catch(e){
        return res.status(500).json({message:"Something went wrong"})
    }
}

const userInfo = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "User ID is required." });
  }
  // Validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid User ID format." });
  }
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    // Return all user details except password and token
    const userObj = user.toObject();
    delete userObj.password;
    delete userObj.token;
    return res.status(200).json({ user: userObj });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (!id) {
    return res.status(400).json({ message: "User ID is required." });
  }

  try {
    let user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // If password is to be updated, hash it
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    // Update user fields
    Object.keys(updates).forEach((key) => {
      if (key !== "email" && key !== "token") { // Avoid sensitive/unwanted fields
        user[key] = updates[key];
      }
    });

    await user.save();

    return res.status(200).json({ message: "User updated successfully.", user });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

export {login,signup,updateUser,userInfo};

