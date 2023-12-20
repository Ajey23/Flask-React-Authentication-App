import React from "react";
import './Navbar.css'

const Navbar = () => {
  const token = localStorage.getItem('token');

  return (
    <div>
      <nav className="navbar">
        <div className="logo">E-Website</div>
        <ul className="nav-links">
          {token ? (
            <>
              <li><a href="/">Home</a></li>
              <li><a href="/logout">Logout</a></li>
            </>
          ) : (
            <>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
