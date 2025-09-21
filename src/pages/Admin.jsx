import React, { useState } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import "../App.css";
import AdminDashboard from "../components/AdminDashboard";
import AdminBookings from "../components/AdminBookings";
import AdminFeedbacks from "../components/AdminFeedbacks";
import AdminContact from "../components/AdminContact";


function AdminPanel() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Check admin token
  const token = localStorage.getItem("adminToken");
  if (!token) {
    return <Navigate to="/admin-login" replace />;
  }

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <div className="admin-container flex">
      {/* Sidebar */}
      <div className={`admin-sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/admin/bookings">Bookings</Link></li>
          <li><Link to="/admin/add-feedbacks">Add Feedbacks</Link></li>
          <li><Link to="/admin/contacts">Contact Info</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="admin-main flex-1 p-4">
        <button className="sidebar-toggle mb-4" onClick={toggleSidebar}>
          ☰
        </button>

        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="add-feedbacks" element={<AdminFeedbacks />} />
          <Route path="contacts" element={<AdminContact />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminPanel;
