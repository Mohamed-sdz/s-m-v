import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <Link to="/" className="brand">
        Auto Mart
      </Link>
      <ul>
        <li>
          <Link to="/" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/vehicles">All Vehicles</Link>
        </li>
        <li>
          <Link to="/vehicles/new">Add Vehicle</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
