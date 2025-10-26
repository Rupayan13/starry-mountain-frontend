import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

function Booking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("https://starry-mountain-backend.onrender.com/getBookings")
      .then((res) => setBookings(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete("https://starry-mountain-backend.onrender.com/deleteBooking/" + id)
      .then(res => {
        console.log(res.data)
        window.location.reload();
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="booking-table-page">
      <h2>User Bookings</h2>
      <div className="table-container">
        <table className="booking-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Check-in Date</th>
              <th>Check-out Date</th>
              <th>Guests</th>
              <th>Rooms</th>
              <th>Duration</th>
              <th>Requests</th>
              <th className="sticky-action-col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.mobile}</td>
                <td>{new Date(booking.checkin).toLocaleDateString()}</td>
                <td>{new Date(booking.checkout).toLocaleDateString()}</td>
                <td>{booking.adults + booking.children} ({booking.adults} Adults, {booking.children} Children)</td>
                <td>{booking.rooms}</td>
                <td>{booking.duration}</td>
                <td>{booking.requests || "-"}</td>
                <td className="sticky-action-col">
                  <button
                    className="complete-btn"
                    onClick={() => handleDelete(booking._id)}
                  >
                    Complete Booking
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Booking;
