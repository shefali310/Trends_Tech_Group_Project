import React from "react";
import heroImage from "../../assets/hero/heroImage.png"
// Created by Vashishth Piyushkumar Gowani (8885482)
export const Hero = () => {
  return (
    <section id="home" className="hero pt-5">
      <div className="container-fluid bg-dark text-white">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              src={heroImage}
              alt="Hero image of me"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-4">Hi, We're TechStack Solutions</h1>
            <p className="lead">
            We are TechStack Solutions, a team of young and dynamic full-stack developers with a combined experience of over 2-3 years, specializing in React and NodeJS. We provide high-quality, innovative solutions for modern businesses. Whether you're a startup or an enterprise, we're here to help you achieve your goals. Reach out today to learn more!
            </p>
            <a href="mailto:dummyemail@email.com" className="btn btn-primary btn-lg">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
