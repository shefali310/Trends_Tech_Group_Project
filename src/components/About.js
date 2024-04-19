import React from 'react';
import { getImageUrl } from "../utils";

function About() {
  return (
    <section id="about" className="container mt-5">
      <h2 className="text-center">About</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={getImageUrl("about/aboutImage.png")}
            alt="Me sitting with a laptop"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <ul className="list-unstyled">
            <li className="mb-4">
              <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" className="me-2" />
              <div>
                <h3>Frontend Developer</h3>
                <p>
                  I'm a frontend developer with experience in building responsive
                  and optimized sites
                </p>
              </div>
            </li>
            <li className="mb-4">
              <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" className="me-2" />
              <div>
                <h3>Backend Developer</h3>
                <p>
                  I have experience developing fast and optimised back-end systems
                  and APIs
                </p>
              </div>
            </li>
            <li>
              <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" className="me-2" />
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
