import React, { useEffect, useState } from "react";
import "../App.css";
import { FaQuoteLeft } from "react-icons/fa";
import axios from "axios";

function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);

  const fallbackFeedbacks = [
    {
      name: "Koushik Ghosh",
      feedback:
        "I would like to sincerely thank Starry Mountain for making our journey unforgettable. From the very first stages of planning to the final day of our trip, their professionalism, warmth, and attention to every small detail truly stood out. Every aspect was perfectly organized, allowing us to relax and fully enjoy the experience. We are deeply grateful for their efforts and eagerly look forward to planning our next adventure with them!",
      flag: true,
    },
    {
      name: "Rima Khan",
      feedback:
        "Our Darjeeling trip with Starry Mountain was absolutely magical and unforgettable. Every detail was flawlessly planned, and when we faced an unexpected challenge, their team supported us with calm, compassion, and unwavering care. Their professionalism and kindness transformed a potential difficulty into a memorable experience. We are truly grateful for their generosity, thoughtful attention, and the wonderful moments we shared throughout the journey.",
      flag: true,
    },
    {
      name: "Subhajit Ghosh",
      feedback:
        "From the moment we booked our trip until the very last day, we were amazed by the exceptional hospitality and dedication of the tour planner and their team. Every detail was carefully organized with impressive attention and care. The planner’s expertise, warmth, and genuine concern for our comfort made the journey smooth and relaxing. It was a truly delightful, worry-free experience that we would wholeheartedly recommend to everyone.",
      flag: true,
    },
  ];

  useEffect(() => {
    // Step 1: Show fallback instantly
    setFeedbacks(fallbackFeedbacks);

    // Step 2: Immediately try backend once
    const tryFetch = () => {
      axios
        .get("https://starry-mountain-backend.onrender.com/getFeedbacks")
        .then((res) => {
          setFeedbacks(res.data);
          clearInterval(interval); // STOP retrying!
        })
        .catch(() => {
          // ignore error, keep fallback
        });
    };

    tryFetch(); // initial attempt

    // Step 3: Retry every 5 seconds until backend wakes up
    const interval = setInterval(tryFetch, 5000);

    return () => clearInterval(interval);
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
                <p className="feedback-text">“{item.feedback}”</p>
                <h4 className="feedback-name">— {item.name}</h4>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Feedbacks;
