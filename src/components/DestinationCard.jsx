import React from "react";
function DestinationCard({ icon, title, description }) {
  return (
    <article className="destination-card">
      <div className="destination-image">{icon}</div>

      <div className="destination-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default DestinationCard;