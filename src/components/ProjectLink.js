import React from "react";
import ProjectTile from "./ProjectTile";


export default function ProjectLink(prop){
      const { description } = prop
      
      



      // function showProject() {
      //   // document.querySelector(".projects--tile") = (<ProjectTile description={description} />)
      // }

        return (
          <div 
          className="project--link"
          onClick={prop.showProjectFunc}>
            <p className="project--description">{prop.title}</p>
          </div>
          
    )

}