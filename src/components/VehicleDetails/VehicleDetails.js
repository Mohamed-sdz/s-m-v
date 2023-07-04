import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './VehicleDetails.css';

const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/vehicles/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setVehicle(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching vehicle details:', error);
        setLoading(false);
        // Handle the error here (e.g., show an error message)
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!vehicle) {
    return <div>Vehicle not found.</div>;
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


