import React, { useState, useEffect } from 'react';
import './Home.css';
import HeroSection from './HeroSection';
import axios from 'axios';

function fetchVehicles(searchTerm) {
  const endpoint = `http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&keyword=${searchTerm}`;

  return axios.get(endpoint)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching vehicles:', error);
      throw error;
    });
}

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchVehicles(searchTerm)
      .then(data => {
        const models = data.Models;
        setVehicles(models);
      })
      .catch(error => {
        console.error('Error fetching vehicles:', error);
        // Handle the error here (e.g., show an error message)
      });
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {vehicles.map(vehicle => (
        <div key={vehicle.model_id} className="vehicle">
          {vehicle.model_name}
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


