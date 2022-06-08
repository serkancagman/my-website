import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import style from "./style/projects.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaGithubAlt } from "react-icons/fa";
const ProjectModal = ({ data, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      size="4xl"
      isCentered="true"
      motionPreset="slideInBottom"
      onClose={onClose}
    >
      <ModalOverlay backdropFilter="auto" backdropBlur="2px" />
      <ModalContent>
        <ModalHeader>{data && data.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data &&
              data.projectImages.map((item, index) => {
                if (index === 0) {
                  return (
                    <SwiperSlide key={index}>
                      {" "}
                      <div className={`d-flex justify-content-center align-items-start position-relative flex-column`}>
                      <img className="img-fluid" src={item} alt="project" />
                      <div className={`d-flex ${style.project_info}  align-items-center `}>
                        <a
                          href={data.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithubAlt className="fs-3" />
                        </a>
                      </div>
                      </div>
                  
                    </SwiperSlide>
                  );
                }

                return (
                  <SwiperSlide key={index}>
                    {" "}
                    <img className="img-fluid" src={item} alt="project" />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
