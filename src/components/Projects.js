import React from "react";
import ProjectLink from "./ProjectLink";
import projectsData from "../assets/projectsData";
import ProjectTile from "./ProjectTile";

export default function Projects() {
  const [projectTile, setProjectTile] = React.useState("");

  let data = projectsData;


  function showProject(project) {
  
    let projectName = project.target.innerText;
    let foundProject = data.filter(x=> x.title === projectName);
    let chosenProject = foundProject[0];
    
    return setProjectTile(chosenProject);
  }

  

  const projectsToShow = data
    .filter((x) => x.show === true)
    .map((elem) => (
      <ProjectLink
        key={elem.id}
        link={elem.link}
        title={elem.title}
        description={elem.description}
        showProjectFunc={showProject}
      />
    ));

    

  return (
    <section className="projects">
      <div className="projects--bio">
        <h3>PROFILE</h3>
        <p>from code of laws to laws of code</p>
      </div>

      <div className="placeholder"></div>


      <div className="projects--tile">
        { projectTile ? <ProjectTile 
        chosenProject={projectTile}
        closeButton={() => setProjectTile("")} /> : ""}
      </div>



      

      <div className="projects--header">
        <h3>PROJECTS</h3>
        <div className="projects--list">{projectsToShow}</div>
      </div>

      <div className="projects--certificates">
        <h3>CERTIFICATES</h3>
        <a
          href="https://www.credly.com/badges/a9df6862-1bc6-4984-aced-5d8ed8c64fa0/public_url"
          target="_blank"
          className="projects--certificate-link"
        >
          AgilePM Foundation
        </a>

        <a
          href="https://freecodecamp.org/certification/fccd924f8fe-ae7b-4a35-9ac0-e799be6ea970/javascript-algorithms-and-data-structures"
          target="_blank"
          className="projects--certificate-link"
        >
          freeCodeCamp.org certification in javascript
        </a>

        <a
          href="https://www.freecodecamp.org/certification/fccd924f8fe-ae7b-4a35-9ac0-e799be6ea970/responsive-web-design"
          target="_blank"
          className="projects--certificate-link"
        >
          freeCodeCamp.org certification in RWD
        </a>
      </div>
    </section>
  );
}
