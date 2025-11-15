import React from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom";

const Offerpage = () => {
  const navigate = useNavigate();

  const offerImages = [
    { id: 1, img: "offer/offer1.jpg" },
    { id: 2, img: "offer/offer2.jpg" },
    { id: 3, img: "offer/offer3.jpg" },
    { id: 4, img: "offer/offer4.jpg" },
    { id: 5, img: "offer/offer5.jpg" },
    { id: 6, img: "offer/offer6.jpg" },
    { id: 7, img: "offer/offer7.jpg" },
    { id: 8, img: "offer/offer8.jpg" },
  ];

  return (
    <div className="offers-page">
      <h1 className="offers-title">Special Offers</h1>

      <div className="offers-grid">
        {offerImages.map((item) => (
          <div 
            className="offer-card" 
            key={item.id}
            onClick={() => navigate(`/offer/${item.id}`)}
          >
            <img src={item.img} alt="Offer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offerpage;
