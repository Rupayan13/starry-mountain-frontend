import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Places() {
    const places = [
        {
            id: "dawaipani",
            name: "Dawaipani",
            img: "images/dawaipani_main.jpg",
            desc: "A hidden gem in North Bengal, perfect for nature lovers seeking tranquility and scenic landscapes."
        },
        {
            id: "dooars",
            name: "Dooars",
            img: "images/dooars_main.jpg",
            desc: "Explore the enchanting forests and rivers of Dooars, a paradise for adventurers and wildlife enthusiasts."
        },
        {
            id: "lepchajagat",
            name: "Lepchajagat",
            img: "images/lepchajagat_main.jpg",
            desc: "Lepchajagat offers breathtaking views of mountains and valleys, ideal for trekking and eco-tourism."
        },
        {
            id: "sittong",
            name: "Sittong",
            img: "images/sittong_main.jpg",
            desc: "A quaint tea-growing region surrounded by rolling hills and lush greenery — a calm retreat for travelers."
        },
        {
            id: "tabakoshi",
            name: "Tabakoshi",
            img: "images/tabakoshi_main.jpg",
            desc: "A peaceful riverside village, Tabakoshi offers soothing waters and scenic landscapes perfect for relaxation."
        },
        {
            id: "tinchule",
            name: "Tinchule",
            img: "images/tinchule_main.jpg",
            desc: "Tinchuley is a hilltop haven with panoramic views, ideal for sunrise treks and quiet contemplation amidst nature."
        },
        {
            id: "mairung_gaon",
            name: "Mairung Gaon",
            img: "images/mairung_gaon_main.jpg",
            desc: "Mairung Gaon is a serene Himalayan village offering scenic views, warm hospitality, and authentic local experiences."
        },
        {
            id: "bijanbari",
            name: "Bijanbari",
            img: "images/bijanbari_main.jpg",
            desc: "A serene town surrounded by lush hills, offering peace and natural beauty away from the city’s hustle."
        }
    ];

    return (
        <section className="places-page">
            <h2>Explore Our Places</h2>
            <div className="places-grid">
                {places.map((place) => (
                    <div className="place-card" key={place.id}>
                        <img src={place.img} alt={place.name} />
                        <div className="place-content">
                            <h3>{place.name}</h3>
                            <p>{place.desc}</p>
                            <Link to={`/place/${place.id}`} className="btn">View Details</Link>  {/* Correct usage */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Places;
