import PropertiesCard from "../PropertyCard/PropertiesCard";
import "./PropertiesGrid.css";

function PropertiesGrid({ properties }) {
  if (!properties || properties.length === 0) return <p>No properties found.</p>;

  return (
    <div className="PropertiesGrid">
      {properties.map((property) => (
        <PropertiesCard key={property.property_id} property={property} />
      ))}
    </div>
  );
}

export default PropertiesGrid;


