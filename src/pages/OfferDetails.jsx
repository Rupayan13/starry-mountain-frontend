import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const offerDetails = {
    1: {
        title: "Darjeeling Package Tour",
        img: "offer/offer1.jpg",
        description: "2 Nights, 3 Days beautiful mountain tour across Darjeeling.",
        price: "₹3999",
        destinations: {
            day1: "NJP to Darjeeling",
            day2: "Darjeeling local sightseeing",
            day3: "Darjeeling to NJP Drop"
        }
    },
    2: {
        title: "Darjeeling and Kalimpong Tour",
        img: "offer/offer2.jpg",
        description: "4 Nights, 5 Days tour package covering Darjeeling and Kalimpong.",
        price: "₹6499",
        destinations: {
            day1: "Rishop",
            day2: "Ramdhura",
            day3: "Takdah",
            day4: "Darjeeling",
            day5: "NJP Drop"
        }
    },
    3: {
        title: "Darjeeling Offbeat Tour",
        img: "offer/offer3.jpg",
        description: "4 Nights, 5 Days tour package covering Darjeeling offbeats.",
        price: "₹6499",
        destinations: {
            day1: "Sittong",
            day2: "Tinchule",
            day3: "Darjeeling",
            day4: "Lepcha Jagat",
            day5: "NJP Drop via Mirik"
        }
    },
    4: {
        title: "Dooars Tour Package",
        img: "offer/offer4.jpg",
        description: "4 Nights , 5 Days Dooars full sightseeing package with Jaldapara Safari, Lataguri",
        price: "₹5799",
        destinations: {
            day1: "Pickup from NJP, Siliguri to Lataguri",
            day2: "Lataguri local sightseeing",
            day3: "Lataguri to Jaldapara",
            day4: "Boxa to Jayanti to Rajabhatkhawa",
            day5: "Drop to NJP, Siliguri"
        }
    },
    5: {
        title: "Gangtok and Pelling Tour Package",
        img: "offer/offer5.jpg",
        description: "4 Nights , 5 Days Gangtok + Pelling package sightseeing.",
        price: "₹6599",
        destinations: {
            day1: "NJP to Gangtok",
            day2: "Gangtok local sightseeing",
            day3: "Gangtok to Pelling",
            day4: "Pelling local sightseeing",
            day5: "Pelling to NJP"
        }
    },
    6: {
        title: "Explore North Sikkim",
        img: "offer/offer6.jpg",
        description: "4 Nights & 5 Days package covering Gurudongmar, Lachung, Lachen and more.",
        price: "₹7599",
        destinations: {
            Gangtok: "2 Night",
            Lachen: "1 Night",
            Lachung: "1 Night",
        }
    },
    7: {
        title: "Slikroute Tour Package",
        img: "offer/offer7.jpg",
        description: "4 Nights & 5 Days premium tour package with full sightseeing and stay included.",
        price: "₹5999",
        destinations: {
            day1: "Sillery Gaon or Icche Gaon",
            day2: "Lingtam or Padamchen",
            day3: "Zuluk",
            day4: "Rishi Khola",
            day5: "Drop to NJP"
        }
    },
    8: {
        title: "Pelling",
        img: "offer/offer8.jpg",
        description: "3 Nights & 4 Days Pelling special package with sightseeing and pickup/drop.",
        price: "₹5499",
        destinations: {
            day1: "NJP to Pelling via on Road Sightseeing (Stay at Pelling)",
            day2: "Pelling sightseeing via kanchanjunga water falls, Khecheopalri Lake, Rimbi water falls, Orange Garden, Sky Walk, Pamayangste Monastery, Stay at Pelling",
            day3: "Pelling to Ravangla via Rabdentss Ruins, Ravangla Buddha Park, Stay at Ravangla",
            day4: "Ravangla to NJP via Sightseeing Namchi 4 dham"
        }
    }
};


const OfferDetails = () => {
    const { id } = useParams();
    const offer = offerDetails[id];

    if (!offer) return <h2>Offer not found</h2>;

    return (
        <div className="offer-details-container">

            {/* LEFT SIDE IMAGE */}
            <div className="offer-details-left">
                <img
                    src={`/${offer.img}`}
                    alt={offer.title}
                    className="offer-details-img"
                />
            </div>

            {/* RIGHT SIDE DETAILS */}
            <div className="offer-details-right">

                <div className="offer-details-box">
                    <h1 className="offer-title">{offer.title}</h1>
                    <p className="offer-price">{offer.price}</p>
                    <p className="offer-description">{offer.description}</p>

                    <h3 className="offer-subtitle">Tour Itinerary</h3>

                    <ul className="offer-destinations-list">
                        {Object.entries(offer.destinations).map(([day, detail]) => (
                            <li key={day}>
                                <strong>{day.toUpperCase()}:</strong> {detail}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default OfferDetails;
