import React from "react";
import FeatureCard from "../components/FeatureCard";
import Button from "../components/Button";

function About() {
  return (
    <main>
      <section className="section container about-intro">
        <div>
          <p className="eyebrow">ABOUT WANDERNEST</p>

          <h1>
            We believe every journey should become a memory.
          </h1>
        </div>

        <div className="about-text">
          <p>
            WanderNest Travels is a travel agency created for people who love
            exploring new places, meeting new people and experiencing the world
            beyond the usual tourist routes.
          </p>

          <p>
            From weekend adventures in the Sahyadri to mountain escapes in the
            Himalayas, our goal is to make travel simple, enjoyable and memorable.
          </p>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-card">
            <strong>25+</strong>
            <span>Destinations</span>
          </div>

          <div className="stat-card">
            <strong>1000+</strong>
            <span>Happy Travelers</span>
          </div>

          <div className="stat-card">
            <strong>50+</strong>
            <span>Adventures</span>
          </div>

          <div className="stat-card">
            <strong>5+</strong>
            <span>Years of Experience</span>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">WHY TRAVEL WITH US?</p>
          <h2>More than a trip. It's an experience.</h2>
        </div>

        <div className="feature-grid">
          <FeatureCard
            icon="🧭"
            title="Carefully Planned"
            description="We plan routes, stays and activities so you can focus on enjoying the journey."
          />

          <FeatureCard
            icon="🤝"
            title="Travel Together"
            description="Meet fellow travelers, make new friends and share unforgettable experiences."
          />

          <FeatureCard
            icon="❤️"
            title="Travel With Passion"
            description="We believe travel is about experiences, stories and memories that stay with you."
          />
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2>Your journey in four simple steps.</h2>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <span>01</span>
              <h3>Choose</h3>
              <p>Explore our packages and choose your destination.</p>
            </div>

            <div className="process-card">
              <span>02</span>
              <h3>Connect</h3>
              <p>Contact our team and tell us about your travel plans.</p>
            </div>

            <div className="process-card">
              <span>03</span>
              <h3>Plan</h3>
              <p>We help you prepare your itinerary and travel arrangements.</p>
            </div>

            <div className="process-card">
              <span>04</span>
              <h3>Explore</h3>
              <p>Pack your bags and enjoy your adventure.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <p className="eyebrow">READY TO EXPLORE?</p>
          <h2>Your next story is waiting.</h2>
          <Button to="/packages">Explore Packages</Button>
        </div>
      </section>
    </main>
  );
}

export default About;