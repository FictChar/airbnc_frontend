import { useState, useEffect } from "react";
import "./App.css";
import { PropertiesFilters } from "./components/PropertiesFilters";
import PropertiesGrid from "./components/PropertiesGrid";
import { getProperties } from "../api";

function App() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const fetched = await getProperties();
        setProperties(fetched);
      } catch (err) {
        console.error("Failed to fetch properties:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div className="App">
      <header className="Title">
        <h1>AirBNC</h1>
      </header>

      <PropertiesFilters />

      {loading ? (
        <p>Loading properties...</p>
      ) : (
        <PropertiesGrid properties={properties} />
      )}
    </div>
  );
}

export default App;
