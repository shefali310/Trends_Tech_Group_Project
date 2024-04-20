import React from 'react';
import emailIcon from "../../assets/contact/emailIcon.png"
import linkedinIcon from "../../assets/contact/linkedinIcon.png"
import githubIcon from "../../assets/contact/githubIcon.png"

function Contact() {
  return (
    <footer id="contact" className="container bg-dark text-white mt-5">
      <div className="row">
        <div className="col-md-6 text-center py-5">
          <h2>Contact</h2>
          <p className="lead">Feel free to reach out!</p>
        </div>
        <div className="col-md-6">
          <ul className="list-unstyled text-md-end">
            <li className="mb-3">
              <img src={emailIcon} alt="Email icon" className="me-2" />
              <a href="mailto:myemail@email.com">myemail@email.com</a>
            </li>
            <li className="mb-3">
              <img
                src={linkedinIcon}
                alt="LinkedIn icon"
                className="me-2"
              />
              <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
            </li>
            <li>
              <img src={githubIcon} alt="Github icon" className="me-2" />
              <a href="https://www.github.com/myname">github.com/myname</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
