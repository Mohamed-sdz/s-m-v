import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import VehicleList from './components/VehicleList/VehicleList';
import VehicleForm from './components/VehicleForm/VehicleForm';
import VehicleDetails from './components/VehicleDetails/VehicleDetails';
import './style.css';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

const App = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/vehicles')
      .then((res) => res.json())
      .then((data) => setVehicles(data));
  }, []);

  const addVehicle = (newVehicle) => {
    setVehicles([...vehicles, newVehicle]);
  };

  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vehicles">
              <Route
                index
                element={<VehicleList vehicles={vehicles} />}
              />
              <Route path="new" element={<VehicleForm addVehicle={addVehicle} />} />
              <Route path=":id" element={<VehicleDetails />} />
            </Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

