import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Hyper Demon Logo" />
        <h1>Hyper Demon</h1>
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/clips" className="navbar-link">
            Clips
          </Link>
        </li>
        <li>
          <Link to="/guides" className="navbar-link">
            Guides
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;