import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const AdminContact = () => {
  const [contact, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("https://starry-mountain-backend.onrender.com/getContacts")
      .then((res) => setContacts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete("https://starry-mountain-backend.onrender.com/deleteContact/" + id)
      .then(res => {
        console.log(res.data)
        window.location.reload();
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="booking-table-page">
      <h2>User Contacts</h2>
      <div className="table-container">
        <table className="booking-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th className="sticky-action-col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.message}</td>
                <td className="sticky-action-col">
                  <button
                    className="reject-btn"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete contact
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminContact
