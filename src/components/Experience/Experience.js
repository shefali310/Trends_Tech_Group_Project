import React from 'react';
import css from "../../assets/skills/css.png"
import figma from "../../assets/skills/figma.png"
import graphql from "../../assets/skills/graphql.png"
import html from "../../assets/skills/html.png"
import mongodb from "../../assets/skills/mongodb.png"
import node from "../../assets/skills/node.png"
import react from "../../assets/skills/react.png"
import google from "../../assets/history/google.png"
import microsoft from "../../assets/history/microsoft.png"
import netflix from "../../assets/history/netflix.png"


function Experience() {
  return (
    <section id="experience" className="container mt-5">
      <h2 className="text-center">Experience</h2>
      <div className="row">
        <div className="col-md-6">
          <h3>Skills</h3>
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
          <h3>History</h3>
          <ul className="list-unstyled">            
                <li className="mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src={google}
                      alt={`Google Logo`}
                      className="me-2"
                      width="50"
                    />
                    <div>
                      <h4>{`Software Developer, Google`}</h4>
                      <p>{`Sept, 2022 - Present`}</p>
                    </div>
                  </div>
                  <ul className="list-unstyled">
                    <li>Worked on Google Maps</li>
                    <li>Reduced load times by 50%</li>                 
                  </ul>
                </li>
                <li className="mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src={microsoft}
                      alt={`microsoft Logo`}
                      className="me-2"
                      width="50"
                    />
                    <div>
                      <h4>{`UI Designer, Microsoft`}</h4>
                      <p>{`Aug, 2021 - Aug, 2022`}</p>
                    </div>
                  </div>
                  <ul className="list-unstyled">
                    <li>Worked on Windows 11</li>
                    <li>Designed the control panel</li>                 
                  </ul>
                </li>
                <li className="mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src={netflix}
                      alt={`netflix Logo`}
                      className="me-2"
                      width="50"
                    />
                    <div>
                      <h4>{`SWE Intern, Netflix`}</h4>
                      <p>{`Apr, 2020 - Jun, 2020`}</p>
                    </div>
                  </div>
                  <ul className="list-unstyled">
                    <li>Worked on component library</li>
                    <li>Helped create UI components</li>                 
                  </ul>
                </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
