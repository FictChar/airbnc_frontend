import { useParams, useNavigate } from "react-router-dom";
import "./SinglePropertyCard.css";

function SingleProperty({ properties }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = properties.find(p => p.property_id === Number(id));

  if (!property) return <p>Property not found.</p>;

  return (
    <div className="SinglePropertyCard">
      <h2>{property.property_name}</h2>
      <p>Location: {property.location}</p>
      <p>Description: {property.description}</p>
      <p>Price per night: £{property.price_per_night}</p>
      <p>Host: {property.host}</p>

      {/* Back button at the bottom */}
      <button className="back-button" onClick={() => navigate("/properties")}>
        &larr; Back
      </button>
    </div>
  );
}

export default SingleProperty;

