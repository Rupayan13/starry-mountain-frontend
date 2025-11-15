import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function AdminResetPassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const handleReset = async (e) => {
        e.preventDefault();
        setMessage("");

        if (password !== confirmPassword) {
            setIsSuccess(false);
            setMessage("Passwords do not match.");
            return;
        }

        try {
            await axios.post(
                "https://starry-mountain-backend.onrender.com/adminResetPassword",
                { password, confirmPassword }
            );
            setIsSuccess(true);
            setMessage("Password updated successfully!");
            setTimeout(() => navigate("/admin-login"), 1500);
        } catch (err) {
            setIsSuccess(false);
            setMessage("Failed to reset password.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Reset Password</h2>

                {message && (
                    <p className={isSuccess ? "success-message" : "error-message"}>
                        {message}
                    </p>
                )}

                <form onSubmit={handleReset}>
                    <label>New Password</label>
                    <input
                        type="password"
                        placeholder="Enter new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Re-enter new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Update Password</button>
                </form>
            </div>
        </div>
    );
}

export default AdminResetPassword;
