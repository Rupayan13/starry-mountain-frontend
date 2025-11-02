import React, { useEffect, useState } from "react";
import "../App.css";
import { FaQuoteLeft } from "react-icons/fa";
import axios from "axios";

function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get("https://starry-mountain-backend.onrender.com/getFeedbacks")
      .then((res) => setFeedbacks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="feedback-section">
      <div className="feedback-content">
        <h2 className="feedback-heading">What Our Guests Say</h2>
        <div className="underline"></div>

        <div className="feedback-container">
          {feedbacks
            .filter((item) => item.flag === true)
            .map((item, index) => (
              <div className="feedback-card" key={index}>
                <FaQuoteLeft className="quote-icon" />
                <p className="feedback-text">
                  “{item.feedback}”
                </p>
                <h4 className="feedback-name">— {item.name}</h4>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Feedbacks;
