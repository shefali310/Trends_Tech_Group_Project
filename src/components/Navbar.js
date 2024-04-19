import React from 'react';
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo on the left */}
        <Link className="navbar-brand" to="home" smooth={true} duration={500}>Your Logo</Link>
        {/* Toggler button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar items on the right */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
           
            <li className="nav-item">
              <Link className="nav-link" to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="experience" smooth={true} duration={500}>Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="hero" smooth={true} duration={500}>Hero</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
