
import "./PropertiesCard.css"; 

function PropertiesCard({ property }) {
  if (!property) return null;

  return (
    <div className="property-card">
      <h3>{property.property_name}</h3>
      <p>Location: {property.location}</p>
      <p>Price per night: £{property.price_per_night}</p>
    </div>
  );
}

export default PropertiesCard;

