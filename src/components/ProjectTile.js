import React from "react";

export default function ProjectTile(prop) {
  console.log(prop);
  return (
    <div className="projects-tile--content">
      <h3> {prop.chosenProject.title} </h3>

      <h4> DESCRIPTION:</h4>
      <p>{prop.chosenProject.description.fullDescription} </p>

      <h4> TECHNOLOGY:</h4>
      <p>{prop.chosenProject.description.technology} </p>

      <h4> LINK:</h4>
      <a 
        href={prop.chosenProject.link}
        target="_blank"
        className="projects-tile--link">{prop.chosenProject.linkText}</a>

      <div className="projects-tile--buttons">
        <button className="projects-tile--button" onClick={prop.closeButton}>
          <h4>CLOSE</h4>
        </button>
      </div>
    </div>
  );
}
