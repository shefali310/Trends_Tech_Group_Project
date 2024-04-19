import React from 'react';
import { getImageUrl } from "../../utils";

function ProjectCard({
  project: { title, imageSrc, description, skills, demo, source },
}) {
  return (
    <div id="projectcard" className="card">
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <ul className="list-unstyled">
          {skills.map((skill, id) => {
            return (
              <li key={id} className="badge bg-secondary me-1 mb-1">
                {skill}
              </li>
            );
          })}
        </ul>
        <div className="d-grid gap-2">
          <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={source} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
