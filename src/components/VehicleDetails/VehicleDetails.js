import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './VehicleDetails.css';
const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/vehicles/${id}`)
      .then((response) => response.json())
      .then((data) => setVehicle(data));
  }, [id]);
  if (!vehicle) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Vehicle Details</h2>
      <h3>{vehicle.make}</h3>
      <p>{vehicle.model}</p>
      <p>{vehicle.year}</p>
    </div>
  );
};
export default VehicleDetails;

