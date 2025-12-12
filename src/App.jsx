import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { PropertiesFilters } from "./components/PropertyFilter/PropertiesFilters";
import PropertiesGrid from "./components/PropertyGrid/PropertiesGrid";
import { getProperties } from "../api";
import SingleProperty from "./components/SinglePropertyCard/SinglePropertyCard";

function App() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ minPrice: "", maxPrice: "", sort: "" });

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

  if (loading) return <p>Loading properties...</p>;

  return (
    <div className="App">
      <header className="Title">
        <h1>AirBNC</h1>
        <h2>Your next adventure starts here...</h2>
      </header>

      <PropertiesFilters filters={filters} setFilters={setFilters} />

      <Routes>
        <Route path="/properties" element={<PropertiesGrid properties={properties} />} />
        <Route path="/properties/:id" element={<SingleProperty properties={properties} />} />
      </Routes>

      <footer className="ContactForm">Contact us</footer>
    </div>
  );
}

export default App;