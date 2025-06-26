import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>SkyWatch</h2>
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
