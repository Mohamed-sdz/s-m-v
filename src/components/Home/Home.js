import React, { useState, useEffect } from 'react';
import './Home.css';

// Hero section
function HeroSection() {
  return (
    <div className="hero">
      <img src="https://example.com/hero.jpg" alt="Hero" />
      <h1>Welcome to Auto Mart Vehicle Management System</h1>
      <button>Call to action</button>
    </div>
  );
}

// Search functionality
function fetchVehicles(searchTerm) {
  return fetch(`https://api.example.com/vehicles?search=${searchTerm}`)
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching vehicles:', error);
      return [];
    });
}

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchVehicles(searchTerm).then(setVehicles);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {vehicles.map(vehicle => (
        <div key={vehicle.id} className="vehicle">
          {vehicle.name}
        </div>
      ))}
    </div>
  );
}

const Home = () => {
  return (
    <div className="container">
      <HeroSection />
      <section id="all-vehicles" className="vehicle-list">
        <Search />
      </section>
    </div>
  );
};

export default Home;
