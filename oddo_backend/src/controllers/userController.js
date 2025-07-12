import express from "express";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import {User} from "../models/userModel.js";
import { hash } from "crypto";

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
        passsword: hashedPass,
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
export {signup};

