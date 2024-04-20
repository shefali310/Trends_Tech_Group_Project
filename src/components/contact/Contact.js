import React from 'react';
import emailIcon from "../../assets/contact/emailIcon.png"
import linkedinIcon from "../../assets/contact/linkedinIcon.png"
import githubIcon from "../../assets/contact/githubIcon.png"

// Created by Darshit Randhirbhai Patel (8817581)
function Contact() {
  return (
    <footer id="contact" className="container-fluid bg-dark text-white">
      <div className="row">
        <div className="col-12 text-center py-5">
          <h2>Connect With Us</h2>
        </div>
        <div className="col-12 text-center pb-5">
          <ul className="list-unstyled">
            <li className="mb-3">
              <img src={emailIcon} alt="Email icon" className="me-2" />
              <a href="mailto:contact@TechStacksolutions.com">contact@TechStacksolutions.com</a>
            </li>
            <li className="mb-3">
              <img
                src={linkedinIcon}
                alt="LinkedIn icon"
                className="me-2"
              />
              <a href="https://www.linkedin.com/TechStacksolutions">linkedin.com/TechStacksolutions</a>
            </li>
            <li>
              <img src={githubIcon} alt="Github icon" className="me-2" />
              <a href="https://www.github.com/TechStacksolutions1">github.com/TechStacksolutions</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
