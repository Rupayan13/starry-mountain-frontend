import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BookingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [duration, setDuration] = useState("1 night 2 days");
  const [req, setReq] = useState("");
  const navigate = useNavigate();
   const [loading, setLoading] = useState(false);   // ✅ new loading state

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true); // ✅ show loading
    const totalGuests = adults + children;

    axios
      .post("https://starry-mountain-backend.onrender.com/submitBooking", {
        name,
        email,
        mobile,
        checkin,
        checkout,
        adults,
        children,
        totalGuests,
        rooms,
        duration,
        requests: req,
      })
      .then((result) => {
        console.log(result);
        alert("Booking submitted successfully!");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong. Please try again.");
      }).finally(() => setLoading(false)); // ✅ hide loading
  };

  // ✅ If loading, show a loader page
  if (loading) {
    return (
      <div className="loading-page">
        <div className="spinner"></div>
        <p>Submitting your booking...</p>
      </div>
    );
  }

  return (
    <div className="booking-page">
      {/* Hero Section */}
      <section className="booking-hero">
        <h1>Book Your Homestay</h1>
        <p>
          Find peace and comfort with our carefully chosen stays amidst
          nature’s beauty.
        </p>
      </section>

      {/* Booking Form Section */}
      <section className="booking-form-section">
        <h2>Reserve Your Stay</h2>
        <form className="booking-form" onSubmit={Submit}>
          <div className="form-group">
            <label htmlFor="name">Full Name <span style={{ color: "red" }}>*</span></label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="text">Mobile<span style={{ color: "red" }}>*</span></label>
            <input
              type="text"
              id="mobile"
              placeholder="Enter your mobile number"
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="checkin">Check-in Date<span style={{ color: "red" }}>*</span></label>
              <input
                type="date"
                id="checkin"
                onChange={(e) => setCheckin(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="checkout">Check-out Date<span style={{ color: "red" }}>*</span></label>
              <input
                type="date"
                id="checkout"
                onChange={(e) => setCheckout(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Guests */}
          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="adults">Number of Adults<span style={{ color: "red" }}>*</span></label>
              <input
                type="number"
                id="adults"
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="children">Number of Children</label>
              <input
                type="number"
                id="children"
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
              />
            </div>
          </div>
          {/* No of rooms */}
          <div className="form-group">
            <label htmlFor="room">Number of Rooms <span style={{ color: "red" }}>*</span></label>
            <input
              type="number"
              id="room"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              required
            />
          </div>

          {/* Duration Dropdown */}
          <div className="form-group">
            <label htmlFor="duration">Duration<span style={{ color: "red" }}>*</span></label>
            <select
              id="duration"
              className="duration-select"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            >
              <option value="1 night 2 days">1 night 2 days</option>
              <option value="2 nights 3 days">2 nights 3 days</option>
              <option value="3 nights 4 days">3 nights 4 days</option>
              <option value="4 nights 5 days">4 nights 5 days</option>
              <option value="5 nights 6 days">5 nights 6 days</option>
              <option value="6 nights 7 days">6 nights 7 days</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="requests">Special Requests</label>
            <textarea
              id="requests"
              placeholder="Any special requests?"
              rows="4"
              onChange={(e) => setReq(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn-booking">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default BookingPage;
