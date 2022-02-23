import React from "react";

function ProjectItem({ name, about, technologies, id }) {
  console.log(technologies)
  console.log(name)
  const techItems = technologies.map(techItem => 
     <span key={techItem}>{techItem}</span>
  )
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {techItems}
      </div>
    </div>
  );
}

export default ProjectItem;
