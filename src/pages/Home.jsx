import React from "react";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import DestinationCard from "../components/DestinationCard";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content container">
          <p className="eyebrow">EXPLORE • EXPERIENCE • ESCAPE</p>

          <h1>Your journey begins here.</h1>

          <p className="hero-description">
            Discover breathtaking destinations, exciting adventures and
            unforgettable journeys with WanderNest Travels.
          </p>

          <div className="hero-buttons">
            <Button to="/packages">Explore Packages</Button>
            <Button to="/contact" variant="secondary">Plan Your Trip</Button>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">WHY WANDERNEST?</p>

          <h2>Travel is more than just reaching a destination.</h2>

          <p>
            We help travelers discover new places, experience local culture
            and create memories along the way.
          </p>
        </div>

        <div className="feature-grid">
          <FeatureCard
            icon="🏔️"
            title="Adventure"
            description="Explore mountains, forts, valleys and exciting trails."
          />

          <FeatureCard
            icon="🌍"
            title="Explore"
            description="Discover beautiful destinations and experience something new."
          />

          <FeatureCard
            icon="🤝"
            title="Experiences"
            description="Travel with new people, share experiences and create memories."
          />
        </div>
      </section>

      <section className="section destinations-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">POPULAR DESTINATIONS</p>
            <h2>Places worth exploring</h2>
          </div>

          <div className="destination-grid">
            <DestinationCard
              icon="🏔️"
              title="Sahyadri"
              description="Trek through the beautiful Western Ghats."
            />

            <DestinationCard
              icon="🌊"
              title="Konkan"
              description="Experience beaches, villages and coastal landscapes."
            />

            <DestinationCard
              icon="🏕️"
              title="Himalayas"
              description="Escape into the mountains and experience the Himalayas."
            />
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <p className="eyebrow">READY TO TRAVEL?</p>
          <h2>Let's plan your next adventure.</h2>
          <p>Choose your destination and start creating memories.</p>
          <Button to="/contact">Start Planning</Button>
        </div>
      </section>
    </main>
  );
}

export default Home;