import React from "react";

export default function ProjectTile(prop) {
    console.log(prop)
  return (
    <div className="projects-tile--content">
      <h3> {prop.chosenProject.title} </h3>
      
    
      <h4> DESCRIPTION:</h4>
      <p>{prop.chosenProject.description.fullDescription}  </p>

      <h4> TECHNOLOGY:</h4>
      <p>{prop.chosenProject.description.technology}  </p>

      <h4> LINK:</h4>
      <a href={prop.chosenProject.link}>Available on</a>
      Halo 

     <div className="projects-tile--buttons">

     <a href={prop.chosenProject.link}>   
        <button className="projects-tile--button">
        <h4>open</h4>
        </button>
      </a>
      
      
      <button 
        className="projects-tile--button" 
        onClick={prop.closeButton}>
        close
      </button>

        </div>    
    </div>
  );
}
