
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Travogenie</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/feature">Features</Link></li>
        <li><Link to="/destination">Destinations</Link></li>
        <li><Link to="/testimonial">Testimonials</Link></li>
        <li><Link to="/auth">Login / Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
