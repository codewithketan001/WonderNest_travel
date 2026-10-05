import React from "react";
import Button from "./Button";

function PackageCard({
  icon,
  category,
  title,
  description,
  duration
}) {
  return (
    <article className="destination-card">
      <div className="destination-image">{icon}</div>

      <div className="destination-content">
        <p className="eyebrow">{category}</p>

        <h3>{title}</h3>

        <p>{description}</p>

        <br />

        <strong>{duration}</strong>

        <br />
        <br />

        <Button to="/contact">Book Now</Button>
      </div>
    </article>
  );
}

export default PackageCard;