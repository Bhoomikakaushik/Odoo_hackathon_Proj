import React from "react";
import "./Profile.css";
import {useState,useEffect} from 'react'
import axios from 'axios'

const Profile = () => {
    const profile = {
      name: "Bhoomi",
      email: "bhoomi@gmail.com",
      skillsOffered: ["abckj", "jaku", "ajhg"],
      availability: "Weekends",
      isPublic: true,
      imageUrl: "",
      rating: 4.7,
      completedSwaps: 12,
      location: "Indore, India"
    };
  
  return (
    <div className="profile-container">
      <h2 className="profile-heading">Profile</h2>

      <div className="profile-content">
        {/* Left Column */}
        <div className="profile-details">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Location:</strong> {profile.location}</p>
          <p><strong>Rating:</strong> ⭐ {profile.rating}</p>
          <p><strong>Completed Swaps:</strong> {profile.completedSwaps}</p>
          <p><strong>Availability:</strong> {profile.availability}</p>
          <p><strong>Profile Visibility:</strong> {profile.isPublic ? "Public" : "Private"}</p>

          <div>
            <strong>Skills Offered:</strong>
            <div className="skills-tags">
              {profile.skillsOffered.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="profile-image-section">
          <img
            src={profile.imageUrl || "https://via.placeholder.com/150"}
            alt="Profile"
            className="profile-image"
          />
          <button className="edit-image-btn">Edit Image</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;