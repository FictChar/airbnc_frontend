import { Link } from "react-router-dom";
import "./PropertiesCard.css";

function PropertiesCard({ property }) {
  if (!property) return null;

  return (
    <Link to={`/properties/${property.property_id}`} className="PropertyCardLink">
      <div className="PropertyCard">
        <img
          src={property.property_image}
          alt={property.property_name}
        />
        <h3>{property.property_name}</h3>
        <p>Location: {property.location}</p>
        <p>Price per night: £{property.price_per_night}</p>
        <p>More...</p>
      </div>
    </Link>
  );
}

export default PropertiesCard;



