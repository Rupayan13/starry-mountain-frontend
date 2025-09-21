import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../App.css";
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom";

function Destinations() {
  const destinations = [
    {
      id: "bijanbari",
      name: "Bijanbari",
      img: "images/bijanbari_main.jpg"
    },
    {
      id: "dawaipani",
      name: "Dawaipani",
      img: "images/dawaipani_main.jpg"
    },
    {
      id: "dooars",
      name: "Dooars",
      img: "images/dooars_main.jpg"
    },
    {
      id: "lepchajagat",
      name: "Lepchajagat",
      img: "images/lepchajagat_main.jpg"
    },
    {
      id: "sittong",
      name: "Sittong",
      img: "images/sittong_main.jpg"
    },
    {
      id: "tabakoshi",
      name: "Tabakoshi",
      img: "images/tabakoshi_main.jpg"
    },
    {
      id: "tinchule",
      name: "Tinchule",
      img: "images/tinchule_main.jpg"
    }
  ];

  return (
    <section className="destinations">
      <h2>
        Choose Your 
        <span style={{ color: '#f4c10f', fontWeight: 'bold' }}>
        {" "}
        <Typewriter
          words={['Destination', ...destinations.map(place => place.name)]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
        </span>
      </h2>
      <p className="subtitle">
        Discover the India's many beautiful places with <span>Starry Mountain</span>.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="dest-carousel"
      >
        {destinations.map((place, index) => (
          <SwiperSlide key={index}>
            <div className="dest-card">
              <img src={place.img} alt={place.name} />
              <div className="overlay">
                <h3>{place.name}</h3>
                <Link to={`/place/${place.id}`} className="btn">Explore</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Destinations;
