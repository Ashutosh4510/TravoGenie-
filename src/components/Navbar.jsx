import React from 'react';
import './Navbar.css'; // make sure this file exists

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Travogenie</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/feature">Features</a></li>
        <li><a href="/destination">Destinations</a></li>
        <li><a href="/testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
