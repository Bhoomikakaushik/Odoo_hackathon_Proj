import React from 'react';

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <div className="profile-photo">
        <img src={profile.profilePhoto} alt="Profile Photo" />
      </div>
      <div className="profile-details">
        <h3>{profile.name}</h3>
        <div className="skills-offered">
          Skills Offered: {profile.skillsOffered.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
        <div className="skills-wanted">
          Skills Wanted: {profile.skillsWanted.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
        <div className="rating">
          Rating: {profile.rating}
        </div>
        <button className="request-button">Request</button>
      </div>
    </div>
  );
};

export default ProfileCard;