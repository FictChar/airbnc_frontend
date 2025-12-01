import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { PropertiesFilters } from "./components/PropertyFilter/PropertiesFilters";
import PropertiesGrid from "./components/PropertyGrid/PropertiesGrid";
import { getProperties } from "../api";
import SingleProperty from "./components/SingleProperty/SingleProperty"

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
    <Router>
    <div className="App">
      <header className="Title">
        <h1>AirBNC</h1>
        <h2>Your next adventure starts here...</h2>
      </header>

       <PropertiesFilters filters={filters} setFilters={setFilters} />
       {loading ? (
        <p> Loading properties...</p>
       ) : (
         <Routes>
        <Route path="/" element={<PropertiesGrid properties={properties} />} />
        <Route path="/properties/:id" element={<SingleProperty />} />
      </Routes>
       )}
   <footer className="ContactForm">Contact us</footer>
    </div>
    </Router>
  );
}

export default App;