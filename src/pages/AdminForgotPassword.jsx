import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function AdminForgotPassword() {
    const [username, setUsername] = useState("admin");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const res = await axios.post(
                "https://starry-mountain-backend.onrender.com/adminForgotPassword",
                { username }
            );

            setMessage("OTP sent to registered admin email.");
            setTimeout(() => navigate("/admin/verify-otp"), 1500);
        } catch (err) {
            setMessage("Error sending OTP. Try again.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Forgot Password</h2>

                {message && <p className="error-message">{message}</p>}

                <form onSubmit={handleSubmit}>
                    <label>Admin Username</label>
                    <input
                        type="text"
                        value={username}
                        readOnly
                        style={{ background: "#f5f5f5" }}
                    />

                    <button type="submit">Send OTP</button>
                </form>
            </div>
        </div>
    );
}

export default AdminForgotPassword;
