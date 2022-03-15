import React from "react";
import style from "./style/projects.module.css";
import { bodyTags, projects } from "../../Helpers/HelperItems";
import { FaEye } from "react-icons/fa";
import { useDisclosure} from "@chakra-ui/react";
import ProjectModal from "./ProjectModal";


const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentData, setCurrentData] = React.useState(null);

  const handleModal = (data) => {
    setCurrentData(data);
    onOpen();
  };

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
        <div className="row my-2 g-4 align-items-center">
          {projects.map((project) => {
            return (
              <div key={project.id} className="col-md-4 col-lg-4">
                <div className={style.projectCard}>
                  <div className={style.projectCardInner}>
                    <div className={style.projectCardImg}>
                      <img
                        className={style.projectImg}
                        src={project.img}
                        alt="project"
                      />
                      <div className={style.projectCardInfo}>
                        <div className="d-flex h-100 flex-column align-items-center justify-content-between">
                          <button
                            onClick={() => handleModal(project)}
                            className={style.iconWrapper}
                          >
                            <FaEye className={style.eyeIcon} />
                          </button>
                          <div className="d-flex m-1 justify-content-center align-items-center">
                            {project.tags.map((item, index) => {
                              return (
                                <img
                                  key={index}
                                  className={style.techIcon}
                                  src={item}
                                  alt="techIcon"
                                />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
          <ProjectModal isOpen={isOpen} onClose={onClose} data={currentData} />
        <span className={style.tags}>{bodyTags.bodyClose}</span>
      </div>
    </section>
  );
};

export default Projects;
