import { useParams } from "react-router-dom";
import "./SinglePropertyCard.css"

function SingleProperty({ properties }) {
  const { id } = useParams();


  const property = properties.find(p => p.property_id === Number(id));

  if (!property) return <p>Property not found.</p>;

  return (
    <div className="SinglePropertyCard">
      <h2>{property.property_name}</h2>
      <p>Location: {property.location}</p>
      <p>Description: {properties.description}</p>
      <p>Price per night: £{property.price_per_night}</p>
      <p>Host: {property.host}</p>
     </div>
  );
}

export default SingleProperty;
