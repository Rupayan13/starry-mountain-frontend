import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Modal = ({ selectedId }) => {
    const [editName, setEditName] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editFeedback, setEditFeedback] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (selectedId) {
            setLoading(true);
            axios
                .get(
                    "https://starry-mountain-backend.onrender.com/getFeedback/" +
                    selectedId
                )
                .then((res) => {
                    console.log("Editing feedback:", res.data);
                    setEditName(res.data.name);
                    setEditEmail(res.data.email);
                    setEditFeedback(res.data.feedback);
                })
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }
    }, [selectedId]);

    const handleSave = () => {
        if (!selectedId) return;
        const updatedFeedback = {
            name: editName,
            email: editEmail,
            feedback: editFeedback,
        };

        axios
            .put(
                "https://starry-mountain-backend.onrender.com/updateFeedback/" +
                selectedId,
                updatedFeedback
            )
            .then((res) => {
                console.log("Feedback updated:", res.data);
                alert("Feedback updated successfully!");
                window.location.reload();
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Edit Feedback
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div className="modal-body">
                            {loading ? (
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                    <div className="spinner"></div> <p>Loading Feedback...</p>
                                </div>
                            ) : (
                                <div className="feedback-form">
                                    <form>
                                        <label htmlFor="name">
                                            Name <span style={{ color: "red" }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Your Name"
                                            value={editName}
                                            onChange={(e) => setEditName(e.target.value)}
                                            required
                                        />

                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Your Email"
                                            value={editEmail}
                                            onChange={(e) => setEditEmail(e.target.value)}
                                        />

                                        <label htmlFor="feedback">
                                            Feedback <span style={{ color: "red" }}>*</span>
                                        </label>
                                        <textarea
                                            id="feedback"
                                            placeholder="Your Feedback"
                                            rows="4"
                                            value={editFeedback}
                                            onChange={(e) => setEditFeedback(e.target.value)}
                                            required
                                        ></textarea>
                                    </form>
                                </div>
                            )}
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={()=>handleSave()}
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
