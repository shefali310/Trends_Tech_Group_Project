import React from 'react';
import aboutImage from "../assets/about/aboutImage.png"
import cursorIcon from "../assets/about/cursorIcon.png"
import serverIcon from "../assets/about/serverIcon.png"

// Created by Shefali Rajnikant Panchal (8832606)
function About() {
  return (
    <section id="about" className="container-fluid bg-dark text-white ">
      <h2 className="text-center pt-5 text-lg">ABOUT</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={aboutImage}
            alt="Me sitting with a laptop"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <ul className="list-unstyled pt-5">
            <li className="mb-4 row">
            <div className='col-2'>
              <img src={cursorIcon} alt="Cursor icon" className="img-fluid" />
              </div>
              <div className='col-9'>
                <h3>Frontend Developer</h3>
                <p>
                Hello! We are passionate frontend developers with a keen eye for detail and a love for creating exceptional user experiences. With more than two years of experience in the industry, we have honed our skills in crafting clean, elegant, and responsive websites.
                </p>
              </div>
            </li>
            <li className="mb-4 row">
              <div className='col-2'>
              <img src={serverIcon} alt="Server icon" className="img-fluid" />
              </div>
              <div className='col-9'>
                <h3>Backend Developer</h3>
                <p>
                We're dedicated backend development team, passionate about building robust, scalable, and efficient web applications. With more than two years of collective experience in the field, we specialize in turning complex ideas into high-performance backend solutions.
                </p>
              </div>
            </li>
            <li className='row'>
            <div className='col-2'>
              <img src={cursorIcon} alt="UI icon" className="img-fluid" />
              </div>
              <div className='col-9'>
                <h3>UI Designer</h3>
                <p>
                We're a passionate team of UI designers dedicated to creating intuitive and visually stunning user interfaces. With three years of combined experience in the field, we specialize in crafting designs that blend aesthetics with functionality to deliver exceptional user experiences.
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
