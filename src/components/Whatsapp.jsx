import React from 'react';
import whatsapp from '../assets/Whatsapp.png';
import '../App.css';

const Whatsapp = () => {
    const phoneNumber = "917602664434";
    const message = encodeURIComponent("Hi, Starry Mountain");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    // OR use: const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    return (
        <div className="whatsapp-container">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="whatsapp" className="whatsapp-icon" />
                <span className="whatsapp-text">Chat with us!!!</span>
            </a>
        </div>
    );
}

export default Whatsapp;
