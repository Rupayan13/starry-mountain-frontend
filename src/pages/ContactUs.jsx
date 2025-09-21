import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const Submit = (e) => {
        e.preventDefault();
        axios.post("https://starry-mountain-backend.onrender.com/submitContact", { name, email, message: message })
            .then(result => {
                console.log(result);
                alert("Contact info submitted successfully!"); // <-- Alert added here
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
                alert("Something went wrong. Please try again."); // Optional: show error alert
            });
    }

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-content">
                {/* Form Section */}
                <div className="contact-form">
                    <form onSubmit={Submit}>
                        <label>Name<span style={{ color: "red" }}>*</span></label>
                        <input type="text" placeholder="Your Name" required onChange={(e) => setName(e.target.value)} />

                        <label>Email<span style={{ color: "red" }}>*</span></label>
                        <input type="email" placeholder="Your Email" required onChange={(e) => setEmail(e.target.value)} />

                        <label>Message<span style={{ color: "red" }}>*</span></label>
                        <textarea rows="5" placeholder="Your Message" required onChange={(e) => setMessage(e.target.value)}></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>

                {/* Map Section */}
                <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.271428546185!2d88.2980625!3d22.6809375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8830057edbaef%3A0x396372bc53343935!2sStarry%20Mountain!5e0!3m2!1sen!2sin!4v1757840972398!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
