import React from "react";
import "../App.css";
import { FaLandmark, FaPhone, FaEnvelope, FaFacebookF, FaInstagram} from "react-icons/fa";
import logo from '../assets/Logo2.png'   // put your logo inside src/assets
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer-container">

                {/* Logo + About */}
                <div className="footer-section about">
                    <img src={logo} alt="logo" className="logo" />
                    <p>
                        Explore the India with us. Book your dream destinations and
                        unforgettable experiences with Starry Mountain.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/places">Destinations</Link></li>
                        <li><Link to="/booking">Bookings</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p><span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}><FaLandmark />Gupta Shopping Complex, 1st Floor, Dankuni Housing Hoogly-712311</span></p>
                    <p><span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}><FaPhone /> +91 70033 28637  ||  +9198312 37696</span></p>
                    <p><span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}><FaEnvelope /> starrymountain2024@gmail.com</span></p>
                </div>

                {/* Social Media */}
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="https://www.facebook.com/share/17FvTUWLPo/" target="_blank"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/starry.mountain24?utm_source=qr&igsh=MjRibHFoYmt6aXhi" target="_blank"><FaInstagram /></a>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} <span><Link to="/">Starry Mountain.</Link></span> All rights reserved | Developed by <span><a href="https://www.linkedin.com/in/rupayan-dirghangi-760808340/" target="_blank">Rupayan Dirghangi</a></span></p>
            </div>
        </footer>
    );
}

export default Footer;
