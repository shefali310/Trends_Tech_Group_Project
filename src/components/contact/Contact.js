import React from 'react';
import { getImageUrl } from "../../utils";

function Contact() {
  return (
    <footer id="contact" className="container mt-5">
      <div className="row">
        <div className="col-md-6 text-center py-5">
          <h2>Contact</h2>
          <p className="lead">Feel free to reach out!</p>
        </div>
        <div className="col-md-6">
          <ul className="list-unstyled text-md-end">
            <li className="mb-3">
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" className="me-2" />
              <a href="mailto:myemail@email.com">myemail@email.com</a>
            </li>
            <li className="mb-3">
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
                className="me-2"
              />
              <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
            </li>
            <li>
              <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" className="me-2" />
              <a href="https://www.github.com/myname">github.com/myname</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
