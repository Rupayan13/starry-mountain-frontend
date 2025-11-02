import React from "react";
import { FaTags } from "react-icons/fa";
import "../App.css";
import { Link } from "react-router-dom";

const OfferIcon = () => {
  return (
    <div className="offer-left-container">
      <Link to="/offer" className="offer-left-card">
        <FaTags className="offer-left-icon" />
        <span>Offers</span>
      </Link>
    </div>
  );
};

export default OfferIcon;
