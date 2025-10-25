import React from 'react';
import '../App.css';  // Import the CSS file

function Carousel() {
    return (
        <div className="carousel-container">
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="images/kanchunjungha2.jpeg"
                            className="d-block w-100"
                            alt="Dooars"
                        />
                        <div className="carousel-caption d-none d-md-block" style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}>
                            <h5 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Explore with Starry Mountain</h5>
                            <p>Explore the heights, embrace the beauty.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="images/tista.jpeg"
                            className="d-block w-100"
                            alt="Dawaipani"
                        />
                        <div className="carousel-caption d-none d-md-block" style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}>
                            <h5 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Explore with Starry Mountain</h5>
                            <p>Explore the heights, embrace the beauty.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="images/sikkim.jpeg"
                            className="d-block w-100"
                            alt="Tabakoshi"
                        />
                        <div className="carousel-caption d-none d-md-block" style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}>
                            <h5 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Explore with Starry Mountain</h5>
                            <p>Explore the heights, embrace the beauty.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="images/lamahata.jpeg"
                            className="d-block w-100"
                            alt="Tabakoshi"
                        />
                        <div className="carousel-caption d-none d-md-block" style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}>
                            <h5 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Explore with Starry Mountain</h5>
                            <p>Explore the heights, embrace the beauty.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="images/kanchunjungha.jpeg"
                            className="d-block w-100"
                            alt="Tabakoshi"
                        />
                        <div className="carousel-caption d-none d-md-block" style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}>
                            <h5 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Explore with Starry Mountain</h5>
                            <p>Explore the heights, embrace the beauty.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
