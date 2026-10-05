import React from "react";
import PackageCard from "../components/PackageCard";

function Packages() {
  return (
    <main>
      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">TRAVEL PACKAGES</p>

          <h1>Choose your next adventure.</h1>

          <p>
            From weekend treks to mountain escapes, discover journeys designed
            for every kind of traveler.
          </p>
        </div>

        <div className="destination-grid">
          <PackageCard
            icon="🏔️"
            category="ADVENTURE"
            title="Sahyadri Weekend Trek"
            description="Explore the beautiful mountains, forts and trails of the Sahyadri."
            duration="2 Days / 1 Night"
          />

          <PackageCard
            icon="🌊"
            category="BEACH ESCAPE"
            title="Konkan Escape"
            description="Relax by the coast and experience the beauty of Konkan villages and beaches."
            duration="3 Days / 2 Nights"
          />

          <PackageCard
            icon="🏕️"
            category="CAMPING"
            title="Harishchandragad Adventure"
            description="Experience trekking, camping and beautiful mountain views."
            duration="2 Days / 1 Night"
          />

          <PackageCard
            icon="❄️"
            category="MOUNTAIN ESCAPE"
            title="Himalayan Explorer"
            description="Escape to the mountains and discover breathtaking Himalayan landscapes."
            duration="5 Days / 4 Nights"
          />

          <PackageCard
            icon="🌄"
            category="WEEKEND TRIP"
            title="Matheran Escape"
            description="Enjoy a peaceful weekend surrounded by greenery and beautiful viewpoints."
            duration="2 Days / 1 Night"
          />

          <PackageCard
            icon="🌲"
            category="NATURE"
            title="Western Ghats Explorer"
            description="Discover waterfalls, forests and hidden trails across the Western Ghats."
            duration="3 Days / 2 Nights"
          />
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <p className="eyebrow">CAN'T FIND YOUR TRIP?</p>
          <h2>Let's create a custom journey.</h2>
          <p>Tell us where you want to go and we'll help you plan your adventure.</p>
        </div>
      </section>
    </main>
  );
}

export default Packages;