import React from "react";
import ProjectTile from "./ProjectTile";
import projectsData from "../assets/projectsData";


export default function Projects(){
    let data = projectsData;
    const projectsToShow = data.filter(x => x.show===true)
    .map(elem => 
                <ProjectTile 
                    key={elem.id} 
                    link={elem.link} 
                    description={elem.description}
                />
        )
    ;
    
    
    return (
        <section className="projects">
            <div className="projects--bio">
            <h3>PROFILE</h3>
                <p>an advocate who got bored with the law and started coding </p> 
            </div>

            <div className="projects--header">
                <h3>PROJECTS</h3>
            </div>
            <div className="projects--grid">
                {projectsToShow}
            </div>
        </section>
        
      
    )

}