import React from 'react';
import aboutImage from "../assets/about/aboutImage.png"
import cursorIcon from "../assets/about/cursorIcon.png"
import serverIcon from "../assets/about/serverIcon.png"

function About() {
  return (
    <section id="about" className="container mt-5">
      <h2 className="text-center">About</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={aboutImage}
            alt="Me sitting with a laptop"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <ul className="list-unstyled">
            <li className="mb-4">
              <img src={cursorIcon} alt="Cursor icon" className="me-2" />
              <div>
                <h3>Frontend Developer</h3>
                <p>
                  I'm a frontend developer with experience in building responsive
                  and optimized sites
                </p>
              </div>
            </li>
            <li className="mb-4">
              <img src={serverIcon} alt="Server icon" className="me-2" />
              <div>
                <h3>Backend Developer</h3>
                <p>
                  I have experience developing fast and optimised back-end systems
                  and APIs
                </p>
              </div>
            </li>
            <li>
              <img src={cursorIcon} alt="UI icon" className="me-2" />
              <div>
                <h3>UI Designer</h3>
                <p>
                  I have designed multiple landing pages and have created design
                  systems as well
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
