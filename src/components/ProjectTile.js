import React from "react";


export default function ProjectTile(prop){
    
    return (
         <div className="projects-tile--content">
        <h3> {prop.description}</h3>
        <p> </p>

        <h4> DESCRIPTION:</h4>
        <p> {prop.description}</p>

        <h4> LINK:</h4>
        <p> {prop.description}</p>

        <button 
        className="projects-tile--button"
        onClick={prop.closeButton}
        > Close </button>
        </div>
    )

}