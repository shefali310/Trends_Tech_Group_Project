import React from 'react';
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
       
    <ul>
      <li>
        <Link
          className="link"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={250}
        >
          HOME
        </Link>
      </li>
      <li>
        {" "}
        <Link
          className="link"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={750}
        >
          ABOUT
        </Link>
      </li>      
      <li>
        <Link
          className="link"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={750}
        >
          CONTACT
        </Link>
      </li>
    </ul>
  </nav>
    
  );
}

export default Navbar;
