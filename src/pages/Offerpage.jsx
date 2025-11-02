import React from 'react';
import '../App.css';

const Offerpage = () => {
  // just replace these with your leaflet images
  const offerImages = [
    "offer/offer1.jpg",
    "offer/offer2.jpg",
    "offer/offer3.jpg",
    "offer/offer4.jpg",
    "offer/offer5.jpg",
    "offer/offer6.jpg",
    "offer/offer7.jpg",
  ];

  return (
    <div className="offers-page">
      <h1 className="offers-title">Special Offers</h1>

      <div className="offers-grid">
        {offerImages.map((img, index) => (
          <div className="offer-card" key={index}>
            <img src={img} alt="Offer" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offerpage
