import React from "react";
import Cardproject from "./Cardproject";
import gambarproject from "../img/project.png";
import gambarproject1 from "../img/project1.png";
import gambarproject2 from "../img/project2.png";

function Projects() {
  return (
    <div className="projects">
      <div className="container">
        <h1>Projects</h1>
        <div className="project-area">
          <Cardproject image={gambarproject} />
          <Cardproject image={gambarproject1} />
          <Cardproject image={gambarproject2} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
