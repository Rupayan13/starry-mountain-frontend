import React from 'react'
import "../App.css"
import { useState, useEffect } from 'react'
import axios from "axios";

const AdminDashboard = () => {
    const [totalbookings, setTotalbookings] = useState(0)
    const [totalFeedbacks, setTotalfeedbacks] = useState(0)

    useEffect(() => {
        axios.get("https://starry-mountain-backend.onrender.com/totalBookings")
            .then(res => setTotalbookings(res.data))
            .catch(err => console.log(err));
    }, [])

     useEffect(() => {
        axios.get("https://starry-mountain-backend.onrender.com/totalFeedbacks")
            .then(res => setTotalfeedbacks(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="admin-cards">
                <div className="admin-card">
                    <h3>Total Bookings</h3>
                    <p>{totalbookings}</p>
                </div>
                <div className="admin-card">
                    <h3>Feedbacks</h3>
                    <p>{totalFeedbacks}</p>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
