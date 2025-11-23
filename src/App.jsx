import { useState, useEffect } from "react";
import "./App.css";
import { PropertiesFilters } from "./components/PropertiesFilters";
import PropertiesGrid from "./components/PropertiesGrid";
import { getProperties } from "../api";

function App() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ minprice: "", maxprice: "" });

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const fetched = await getProperties(filters);
        setProperties(fetched);
      } catch (err) {
        console.error("Failed to fetch properties:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, [filters]);

  return (
    <div className="App">
      <header className="Title">
        <h1>AirBNC</h1>
        <h2>Your next adventure starts here</h2>
      </header>

      <PropertiesFilters filters={filters} setFilters={setFilters} />

      {loading ? (
        <p>Loading properties...</p>
      ) : (
        <>
          <PropertiesGrid properties={properties} />
        </>
      )}
    </div>
  );
}

export default App;