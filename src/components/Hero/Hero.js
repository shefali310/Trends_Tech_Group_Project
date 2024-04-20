import React from "react";
import heroImage from "../../assets/hero/heroImage.png"

export const Hero = () => {
  return (
    <section id="home" className="hero py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              src={heroImage}
              alt="Hero image of me"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-4">Hi, I'm Ada</h1>
            <p className="lead">
              I'm a full-stack developer with 5 years of experience using React and NodeJS. Reach out if you'd like to learn more!
            </p>
            <a href="mailto:myemail@email.com" className="btn btn-primary btn-lg">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
