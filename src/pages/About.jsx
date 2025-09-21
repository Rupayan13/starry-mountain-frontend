import React from "react";
import "../App.css";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Starry Mountain</h1>
        <p>Dedicated to creating memorable travel experiences while supporting local communities.</p>
      </div>

      <div className="about-content">
        <section>
          <h2>What we do</h2>
          <p>
            Starry Mountain has a diverse role to operate – we conduct trips in areas as well as we promote the region to support the local communities.
            We have pioneered the field of tourism for many years. Starry Mountain constantly focuses on developing innovative services based on travel requirements.
            Our expert tour organizers are responsible from planning to execution of your tours. With a well-established and organized infrastructure, we operate mainly in Indian states focusing on wildlife conservations.
            We have a team of dedicated professionals who strive to give you an exceptional holiday experience.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is to make your travel a memory to cherish forever. Starry Mountain is run by a group of expert professionals for whom travel is more of a passion than a profession.
            We always ensure that people traveling with us return as our friends. Our team of expert professionals has vast and in-depth knowledge about our holiday destinations thus helping our clients to give a fast response to all their queries from a traveler’s perspective.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
