import React from "react";
import style from "./style/projects.module.css";
import {bodyTags,projects} from "../../Helpers/HelperItems";
const Projects = () => {
  return (
    <section className={style.projectsMain}>
      <div className="container">
          <span className={style.tags}>{bodyTags.body}</span>
            <span className={`ms-2 ${style.tags}`}>{bodyTags.h1}</span>
            <h1 className={style.projectsTitle}>
                <span className={style.letterAnimation}>P</span>
                <span className={style.letterAnimation}>r</span>
                <span className={style.letterAnimation}>o</span>
                <span className={style.letterAnimation}>j</span>
                <span className={style.letterAnimation}>e</span>
                <span className={style.letterAnimation}>c</span>
                <span className={style.letterAnimation}>t</span>
                <span className={style.letterAnimation}>s</span>

            </h1>
            <span className={`ms-2 ${style.tags}`}>{bodyTags.h1Close}</span>
        <div className="row g-3  align-items-center">
          {
            projects.map(project => {
                return(
                    <div className="col-md-4 col-lg-4">
            <div className={style.projectCard}>
              <div className={style.projectCardInner}>
                <div className={style.projectCardImg}>
                  <img
                    src={project.img}
                    alt="project"
                  />
                </div>
              </div>
            </div>
          </div>
                )
                })}
        </div>
        <span className={style.tags}>{bodyTags.bodyClose}</span>
      </div>
    </section>
  );
};

export default Projects;
