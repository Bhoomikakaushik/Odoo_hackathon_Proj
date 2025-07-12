import React, { useState } from "react";
import axios from "axios";
import "./Admin.css"; 

const AdminDashboard = () => {
  const [deleteEmail, setDeleteEmail] = useState("");
  const [banEmail, setBanEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/admin/delete-user", { email: deleteEmail });
      setMessage(`✅ ${res.data.message}`);
    } catch (err) {
      setMessage(`${err.response?.data?.message || "Delete failed"}`);
    }
  };

  const handleBan = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/admin/ban-user", { email: banEmail });
      setMessage(`✅ ${res.data.message}`);
    } catch (err) {
      setMessage(`❌ ${err.response?.data?.message || "Ban failed"}`);
    }
  };

  return (
    <div className="profile-container">
      <h2 className="profile-heading">Admin Dashboard</h2>

      {message && <p style={{ marginBottom: "20px", color: "#333" }}>{message}</p>}

      <div className="profile-content">
        {/* Delete User Form */}
        <div className="profile-details">
          <h3>Delete User</h3>
          <form onSubmit={handleDelete}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter user email"
              value={deleteEmail}
              onChange={(e) => setDeleteEmail(e.target.value)}
              required
            />
            <button type="submit" className="edit-image-btn">Delete User</button>
          </form>
        </div>

        {/* Ban User Form */}
        <div className="profile-details">
          <h3>Ban User</h3>
          <form onSubmit={handleBan}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter user email"
              value={banEmail}
              onChange={(e) => setBanEmail(e.target.value)}
              required
            />
            <button type="submit" className="edit-image-btn">Ban User</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;