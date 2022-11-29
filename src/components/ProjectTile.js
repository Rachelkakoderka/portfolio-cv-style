import React from "react";

export default function ProjectTile(prop){

        return ( 
        <a href={prop.link} target="_blank" className="project--tile">
          {/* <img  src = "assets/logo.PNG"
                alt = "Rachelka-koderka logo" 
                className="project-img" /> */}
          <p className="project--description">{prop.description}</p>
        </a>
    )

}