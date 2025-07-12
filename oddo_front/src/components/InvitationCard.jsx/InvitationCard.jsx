import React from 'react';
import './InvitationCard.css';

const InvitationCard = ({ name, rating, services, requiredSkill, status }) => {
  return (
    <div className="invitation-card">
      <div className="card-left">
        <div className="profile-photo"></div>
        <div className="ratings">
          <span>Ratings :</span> <span className="highlight">3.4</span>
        </div>
      </div>
      <div className="card-middle">
        <h3>{name}</h3>
        <p><strong>Services Offered :</strong> {services}</p>
        <p><strong>Skill Required :</strong> {requiredSkill}</p>
      </div>
      <div className="card-right">
        <div className="status-line">
          <span>Status :</span> <span className="pending">Pending</span>
        </div>
        <div className="actions">
          <button className="accept">Accept</button>
          <button className="reject">Reject</button>
        </div>
      </div>
      <div className="card-left">
        <div className="profile-photo"></div>
        <div className="ratings">
          <span>Ratings :</span> <span className="highlight">{rating}</span>
        </div>
      </div>
      <div className="card-middle">
        <h3>{name}</h3>
        <p><strong>Services Offered :</strong> {services}</p>
        <p><strong>Skill Required :</strong> {requiredSkill}</p>
      </div>
      <div className="card-right">
        <div className="status-line">
          <span>Status :</span> <span className="pending">{status}</span>
        </div>
        <div className="actions">
          <button className="accept">Accept</button>
          <button className="reject">Reject</button>
        </div>
      </div>
      <div className="card-left">
        <div className="profile-photo"></div>
        <div className="ratings">
          <span>Ratings :</span> <span className="highlight">{rating}</span>
        </div>
      </div>
      <div className="card-middle">
        <h3>{name}</h3>
        <p><strong>Services Offered :</strong> {services}</p>
        <p><strong>Skill Required :</strong> {requiredSkill}</p>
      </div>
      <div className="card-right">
        <div className="status-line">
          <span>Status :</span> <span className="pending">{status}</span>
        </div>
        <div className="actions">
          <button className="accept">Accept</button>
          <button className="reject">Reject</button>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;

// import React from 'react';
// import'./InvitationCard.css';

// const dummyInvitations = [
//   {
//     id: 1,
//     name: 'Mark Demo',
//     rating: 3.5,
//     services: 'Excel | Photoshop',
//     requiredSkill: 'JavaScript',
//     status: 'Pending',
//   },
//   {
//     id: 2,
//     name: 'Joe Wills',
//     rating: 4.2,
//     services: 'Figma | UI Design',
//     requiredSkill: 'React',
//     status: 'Pending',
//   },
//   {
//     id: 3,
//     name: 'Mark Demo',
//     rating: 3.5,
//     services: 'Excel | Photoshop',
//     requiredSkill: 'JavaScript',
//     status: 'Pending',
//   },
// ];

// const InvitationCard = () => {
//   return (
//     <div style={{ padding: '2rem', background: 'linear-gradient(to bottom, #dff6ff, #b2e2f7)', minHeight: '100vh' }}>
//       {dummyInvitations.map((inv) => (
//         <div key={inv.id} style={{ marginBottom: '1rem' }}>
//           <InvitationCard
//             name={inv.name}
//             rating={inv.rating}
//             services={inv.services}
//             requiredSkill={inv.requiredSkill}
//             status={inv.status}
//           />
//         </div>
//       ))}
//      </div>
//   );
// };

// export default InvitationCard;
