import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";
import axios from "axios";

// Destination data
const destinations = {
  bijanbari: {
    name: "Bijanbari",
    desc: "Bijanbari is a serene town surrounded by lush hills, offering peace and natural beauty away from the city’s hustle.",
    totalImages: 3
  },
  dawaipani: {
    name: "Dawaipani",
    desc: "Dawaipani is a hidden gem in North Bengal, perfect for nature lovers seeking tranquility and scenic landscapes.",
    totalImages: 3
  },
  dooars: {
    name: "Dooars",
    desc: "Dooars offers enchanting forests and rivers, a paradise for adventurers and wildlife enthusiasts.",
    totalImages: 3
  },
  lepchajagat: {
    name: "Lepchajagat",
    desc: "Lepchajagat offers breathtaking views of mountains and valleys, ideal for trekking and eco-tourism.",
    totalImages: 3
  },
  sittong: {
    name: "Sittong",
    desc: "Sittong is a quaint tea-growing region surrounded by rolling hills and lush greenery — a calm retreat for travelers.",
    totalImages: 3
  },
  tabakoshi: {
    name: "Tabakoshi",
    desc: "Tabakoshi is a peaceful riverside village, offering soothing waters and scenic landscapes perfect for relaxation.",
    totalImages: 3
  },
  tinchule: {
    name: "Tinchule",
    desc: "Tinchuley is a hilltop haven with panoramic views, ideal for sunrise treks and quiet contemplation amidst nature.",
    totalImages: 3
  }
};

function DestinationPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [feedback, setFeedback] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios.post("https://starry-mountain-backend.onrender.com/submitFeedback", { name, email, feedback: feedback })
      .then(result => {
        console.log(result);
        alert("Feedback submitted successfully!"); // <-- Alert added here
        navigate("/places");
        // window.location.reload();
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong. Please try again."); // Optional: show error alert
      });
  }

  const { destinationId } = useParams();
  const destination = destinations[destinationId];

  if (!destination) {
    return <div style={{ padding: "20px" }}>Destination not found.</div>;
  }

  const imagePaths = Array.from({ length: destination.totalImages }, (_, i) =>
    `/images/${destinationId}/${destinationId}${i + 1}.jpg`
  );

  return (
    <div className="destination-page">
      <div className="destination-header">
        <h2>{destination.name}</h2>
        <p>{destination.desc}</p>
      </div>

      <div className="images-gallery">
        {imagePaths.map((img, index) => (
          <div key={index} className="image-card">
            <img src={img} alt={`${destination.name} ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="feedback-form">
        <h3>Send us your feedback</h3>
        <form onSubmit={Submit}>
          <input type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)}/>
          <textarea placeholder="Your Feedback" rows="4" onChange={(e) => setFeedback(e.target.value)} required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default DestinationPage;
