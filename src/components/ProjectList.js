import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  //console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {
          projects.map(project => {
            //console.log(project)
            console.log("project technologies", project.technologies)
            return (
              <ProjectItem 
                key={project.id}
                name={project.name}
                about={project.about}
                technologies={project.technologies}
                //technology={project.technology[1]}
              />
            )
          })        
        } 
      </div>
    </div>
  );
}

export default ProjectList;
