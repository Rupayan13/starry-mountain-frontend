import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function AdminVerifyOtp() {
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleVerify = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const res = await axios.post(
                "https://starry-mountain-backend.onrender.com/adminVerifyOtp",
                { otp }
            );

            setMessage("OTP Verified Successfully!");
            setTimeout(() => navigate("/admin/reset-password"), 1500);
        } catch (err) {
            setMessage("Invalid or expired OTP.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Verify OTP</h2>

                {message && <p className="error-message">{message}</p>}

                <form onSubmit={handleVerify}>
                    <label>Enter OTP</label>
                    <input
                        type="text"
                        placeholder="6-digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />

                    <button type="submit">Verify OTP</button>
                </form>
            </div>
        </div>
    );
}

export default AdminVerifyOtp;
