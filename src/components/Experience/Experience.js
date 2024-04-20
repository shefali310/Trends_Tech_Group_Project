import React from 'react';
import css from "../../assets/skills/css.png"
import figma from "../../assets/skills/figma.png"
import graphql from "../../assets/skills/graphql.png"
import html from "../../assets/skills/html.png"
import mongodb from "../../assets/skills/mongodb.png"
import node from "../../assets/skills/node.png"
import react from "../../assets/skills/react.png"
import Shefali from "../../assets/Shefali.jpeg"
import Vashishth from "../../assets/Vashishth.jpeg"
import Dilpreet from "../../assets/Dilpreet.jpeg"
import Darshit from "../../assets/Darshit.jpeg"

// Created by Dilpreet Singh (8871536)
function Experience() {
  return (
    <section id="experience" className="container-fluid bg-dark text-white">
      <h2 className="text-center pb-3">Our Team</h2>
      <div className="row ms-5">
        <div className="col-md-6">
          <h3 className='pb-3'>Skills</h3>
          <div className="row">          
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <img src={css} alt={"css"} width="30" />
                    </div>
                    <p>css</p>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <img src={figma} alt={"figma"} width="30" />
                    </div>
                    <p>figma</p>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <img src={graphql} alt={"graphql"} width="30" />
                    </div>
                    <p>graphql</p>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <img src={html} alt={"html"} width="30" />
                    </div>
                    <p>html</p>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <img src={mongodb} alt={"mongodb"} width="30" />
                    </div>
                    <p>mongodb</p>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <img src={node} alt={"node"} width="30" />
                    </div>
                    <p>node</p>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <img src={react} alt={"react"} width="30" />
                    </div>
                    <p>react</p>
                  </div>
                </div>              
          </div>
        </div>
        <div className="col-md-6">
          <ul className="list-unstyled">            
                <li className='mb-4 row'>                  
                  <div className='col-2'>
                  <img src={Vashishth} alt={"Vashishth"} className='img-fluid rounded'/>                    
                  </div>
                  <label className='ms-3 col-9 pt-4 h5'>Vashishth Gowani<p>CEO</p> </label>
                </li>
                <li className='mb-4 row'>
                  <div className='col-2'>
                  <img src={Shefali} alt={"Shefali"} className='img-fluid rounded'/>                    
                  </div>
                  <label className='ms-3 col-9 pt-4 h5'>Shefali Panchal<p>CTO</p></label>
                </li>
                <li className='mb-4 row'>
                  <div className='col-2'>
                  <img src={Dilpreet} alt={"Dilpreet"} className='img-fluid rounded'/>                    
                  </div>
                  <label className='ms-3 col-9 pt-4 h5'>Dilpreet Singh<p>Senior Developer</p></label>
                </li>
                <li className='mb-4 row'>
                  <div className='col-2'>
                  <img src={Darshit} alt={"Darshit"} className='img-fluid rounded'/>                    
                  </div>
                  <label className='ms-3 col-9 pt-4 h5'>Darshit Patel<p>Junior Developer</p></label>
                </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
