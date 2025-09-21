import React, { useState } from 'react'
import '../App.css'
import logo from '../assets/Logo.jpeg'   // put your logo inside src/assets
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar with Marquee */}
      <div className="top-bar">
        <marquee behavior="scroll" direction="left">
          <span style={{ margin: "0 15px", display: "inline-flex", alignItems: "center" }}>
            <FaPhone style={{ marginRight: "5px" }} /> +91 70033 28637
          </span>
          |
          <span style={{ margin: "0 15px", display: "inline-flex", alignItems: "center" }}>
            <FaPhone style={{ marginRight: "5px" }} /> +9198312 37696
          </span>
          |
          <span style={{ margin: "0 15px", display: "inline-flex", alignItems: "center" }}>
            <FaWhatsapp style={{ marginRight: "5px" }} /> 7602664434
          </span>
          |
          <span style={{ margin: "0 15px", display: "inline-flex", alignItems: "center" }}>
            <FaEnvelope style={{ marginRight: "5px" }} /> starrymountain2024@gmail.com
          </span>
        </marquee>
      </div>

      {/* Main Navbar */}
      <nav>
        <img src={logo} alt="logo" className="logo" />

        {/* Hamburger Button */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/places">Destinations</Link></li>
          <li><Link to="/booking">Bookings</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {/* <li><a to="#" className="btn">Book Now</a></li> */}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
