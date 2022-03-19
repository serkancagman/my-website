import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
const ProjectModal = ({ data, isOpen, onClose }) => {
  console.log(data);
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
