import React from 'react';
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

function Experience() {
  return (
    <section id="experience" className="container mt-5">
      <h2 className="text-center">Experience</h2>
      <div className="row">
        <div className="col-md-6">
          <h3>Skills</h3>
          <div className="row">
            {skills.map((skill, id) => {
              return (
                <div key={id} className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <img src={getImageUrl(skill.imageSrc)} alt={skill.title} width="30" />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-6">
          <h3>History</h3>
          <ul className="list-unstyled">
            {history.map((historyItem, id) => {
              return (
                <li key={id} className="mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src={getImageUrl(historyItem.imageSrc)}
                      alt={`${historyItem.organisation} Logo`}
                      className="me-2"
                      width="50"
                    />
                    <div>
                      <h4>{`${historyItem.role}, ${historyItem.organisation}`}</h4>
                      <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    </div>
                  </div>
                  <ul className="list-unstyled">
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
