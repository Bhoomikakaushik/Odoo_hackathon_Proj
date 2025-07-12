// File: components/InvitationCard.jsx
import React from "react";
import "./InvitationCard.css";

const InvitationCard = ({ name, services, requiredSkill, rating, status }) => {
  return (
    <div className="card">
      <div className="card-left">
        <div className="avatar-placeholder"></div>
        <p className="rating">Ratings : <span>{rating}</span></p>
      </div>

      <div className="card-center">
        <p className="name">{name}</p>
        <p>Services Offered : {services.join(" | ")}</p>
        <p>Skill Required : {requiredSkill}</p>
      </div>

      <div className="card-right">
        <p className="status">Status : <span>{status}</span></p>
        <div className="buttons">
          <button className="accept">Accept</button>
          <button className="reject">Reject</button>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
