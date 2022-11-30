import React from "react";

export default function ProjectLink(prop){

        return ( 
        <a href={prop.link} target="_blank" className="project--link">
          <p className="project--description">{prop.description}</p>
        </a>
    )

}