import React, { useState } from 'react';
import './VehicleForm.css';

const VehicleForm = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newVehicle = {
      make,
      model,
      year,
    };

    const configObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newVehicle),
    };

    fetch('http://localhost:3000/vehicles', configObj)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response accordingly

        // Clear form inputs
        setMake('');
        setModel('');
        setYear('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Add Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Make:</label>
          <input
            type="text"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Model:</label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Year:</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add</button>
        <button type="button">Edit</button>
        <button type="button">Delete</button>
      </form>
    </div>
  );
};

export default VehicleForm;
