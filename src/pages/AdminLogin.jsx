import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirecting
import axios from "axios";
import "../App.css";

function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous error

        try {
            const res = await axios.post("https://starry-mountain-backend.onrender.com/adminLogin", {
                username,
                password
            });

            if (res.data.success) {
                // Store token in localStorage
                localStorage.setItem("adminToken", res.data.token);
                localStorage.setItem("adminUsername", res.data.admin.username);

                // Redirect to admin dashboard
                navigate("/admin");
            } else {
                setError(res.data.message || "Login failed");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("Login failed. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Admin Login</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Login</button>
                </form>
                <p
                    style={{ textAlign: "right", color: "#007bff", cursor: "pointer" }}
                    onClick={() => navigate("/admin/forgot-password")}
                >
                    Forgot Password?
                </p>

            </div>
        </div>
    );
}

export default AdminLogin;
