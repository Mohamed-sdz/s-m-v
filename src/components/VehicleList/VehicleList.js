import React, { useState, useEffect } from 'react';
import './VehicleList.css';
const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/vehicles')
      .then((response) => response.json())
      .then((data) => setVehicles(data));
  }, []);

  return (
    <div>
      <h2>All Vehicles</h2>
      {vehicles.map((vehicle) => (
        <div key={vehicle.id}>
          <h3>{vehicle.make}</h3>
          <p>{vehicle.model}</p>
          <p>{vehicle.year}</p>
        </div>
      ))}
    </div>
  );
};

export default VehicleList;
