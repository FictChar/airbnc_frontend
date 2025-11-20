import React from "react";
import PropertiesCard from "./PropertiesCard";
import "./PropertiesGrid.css";

function PropertiesGrid({ properties }) {
  if (!properties || properties.length === 0) {
    return <p>No properties found.</p>;
  }

  return (
    <div className="grid-container">
      {properties.map((property) => (
        <PropertiesCard
          key={property.property_id}
          property={property}
        />
      ))}
    </div>
  );
}

export default PropertiesGrid;
