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
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img 
                            src="images/dooars.jpg" 
                            className="d-block w-100" 
                            alt="Dooars"
                        />
                        <div className="carousel-caption d-none d-md-block" style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}>
                            <h5 style={{ fontSize: "2.3rem", fontWeight: "bold" }}>Dooars</h5>
                            <p>Starry Mountain invites you to experience Dooars magic</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img 
                            src="images/dawaipani.jpg" 
                            className="d-block w-100" 
                            alt="Dawaipani"
                        />
                        <div className="carousel-caption d-none d-md-block" style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}>
                            <h5 style={{ fontSize: "2.3rem", fontWeight: "bold" }}>Dawaipani</h5>
                            <p>Experience Dawaipani like never before with Starry Mountain.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img 
                            src="images/Tabakoshi.jpg" 
                            className="d-block w-100" 
                            alt="Tabakoshi"
                        />
                        <div className="carousel-caption d-none d-md-block" style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}>
                            <h5 style={{ fontSize: "2.3rem", fontWeight: "bold" }}>Tabakoshi</h5>
                            <p>Step into Tabakoshi’s landscapes with Starry Mountain.</p>
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
