import React from "react";
import "./PropertiesCard.css"; 

function PropertiesCard({ property }) {
  if (!property) return null;

  return (
    <div className="property-card">
      <h2>{property.property_name}</h2>
      <p>Location: {property.location}</p>
      <p>Price per night: £{property.price_per_night}</p>
      <p>Host: {property.host}</p>
    </div>
  );
}

export default PropertiesCard;

