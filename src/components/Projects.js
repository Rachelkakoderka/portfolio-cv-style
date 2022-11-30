import React from "react";
import ProjectLink from "./ProjectLink";
import projectsData from "../assets/projectsData";


export default function Projects(){
    let data = projectsData;
    const projectsToShow = data.filter(x => x.show===true)
    .map(elem => 
                <ProjectLink 
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
                <p>I am an advocate who loves compiling
                </p> 
            </div>

            <div className="projects--tile"></div>

            <div className="projects--header">
                <h3>PROJECTS</h3>
                <div className="projects--list">
                {projectsToShow}
            </div>
            
            </div>
            
        </section>
        
      
    )

}