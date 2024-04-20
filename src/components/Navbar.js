import React from 'react';
import { Link } from "react-scroll";

// Created by Vashishth Piyushkumar Gowani (8885482)
function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link role='button' className="navbar-brand" to="home" smooth={true} duration={500}>TechStack Solutions</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
           
            <li className="nav-item">
              <Link role='button' className="nav-link" to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li className="nav-item">
              <Link role='button' className="nav-link" to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li className="nav-item">
              <Link role='button' className="nav-link" to="experience" smooth={true} duration={500}>Our Team</Link>
            </li>
            <li className="nav-item">
              <Link role='button' className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
