import React from 'react';
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="container mt-5">
      <h2 className="text-center">Projects</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {projects.map((project, id) => {
          return (
            <div key={id} className="col">
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
