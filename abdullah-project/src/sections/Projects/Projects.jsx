import React from "react";
import style from "./Projects.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../Common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={style.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={style.projectContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/abdullah123-debug/Project-for-backend"
          h3="Viberr"
          p="Video Hub Backend Project"
        />
      </div>
    </section>
  );
}

export default Projects;
