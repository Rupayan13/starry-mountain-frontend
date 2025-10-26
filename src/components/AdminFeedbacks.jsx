import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import Modal from "./Modal";

const AdminFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [selectedId, setSelectedId] = useState(null); 

  // className Load all feedbacks initially
  useEffect(() => {
    axios
      .get("https://starry-mountain-backend.onrender.com/getFeedbacks")
      .then((res) => setFeedbacks(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleApprove = (id) => {
    axios
      .put(
        "https://starry-mountain-backend.onrender.com/approveFeedback/" + id
      )
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(
        "https://starry-mountain-backend.onrender.com/deleteFeedback/" + id
      )
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  // className Now handleEdit only sets the ID
  const handleEdit = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="booking-table-page">
      <h2>User Feedbacks</h2>

      <div className="table-container">
        <table className="booking-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Feedback</th>
              <th colSpan="3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => (
              <tr key={feedback._id}>
                <td>{feedback.name}</td>
                <td>{feedback.email}</td>
                <td>{feedback.feedback}</td>
                <td>
                  <button
                    className="approve-btn"
                    onClick={() => handleApprove(feedback._id)}
                  >
                    {feedback.flag ? "Disapprove" : "Approve"}
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="edit-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleEdit(feedback._id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="reject-btn"
                    onClick={() => handleDelete(feedback._id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pass edit data to Modal */}
      <Modal
        selectedId={selectedId}
      />
    </div>
  );
};

export default AdminFeedbacks;
