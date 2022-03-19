import React from "react";
import style from "./style/About.module.css";
import { bodyTags } from "../../Helpers/HelperItems";
import { Link } from "react-router-dom";
import AboutCanvas from "./AboutCanvas";
const About = () => {
  return (
    <section className={style.aboutMain}>
      <div className="container">
        <span className={style.tags}> {bodyTags.body}</span>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-12 col-lg-6">
            <div className={style.aboutMeWrapper}>
              <span className={style.tags}> {bodyTags.h1}</span>
              <h1>
                <span className={style.letterAnimation}>A</span>
                <span className={style.letterAnimation}>b</span>
                <span className={style.letterAnimation}>o</span>
                <span className={style.letterAnimation}>u</span>
                <span className={style.letterAnimation}>t</span>
                <span className={style.letterAnimation}></span>
                <span className={style.nameLetter}>M</span>
                <span className={style.nameLetter}>e</span>
              </h1>
              <span className={style.tags}>{bodyTags.h1Close}</span>
              <span className={style.tags}> {bodyTags.paragraph}</span>
              <p className={style.aboutMeDescription}>
                I am a Front End Developer based in Istanbul. I am a self-taught
                developer with a background. I have with a passion for creating
                beautiful and functional websites. I have a strong passion for
                learning new technologies and I am always looking for new
                opportunities to learn and grow.
              </p>
              <span className={style.aboutMeTitle}>Hobbies</span>
              <p className={style.aboutMeDescription}>
                I was a football player in a club in the past. That's why
                football is more than a passion for me. I love listen techno
                music and techno keeps me focused when I'm working :)
              </p>
              <span className={style.aboutMeTitle}>Experience</span>
              <p className={style.aboutMeDescription}>
                I have been never working in a company but I am constantly
                developing projects for myself. If you want, you can view my{" "}
                <Link to="/skills" className={style.attention}>
                  skills
                </Link>{" "}
                and{" "}
                <Link to="/projects" className={style.attention}>
                  works.{" "}
                </Link>
              </p>
              <span className={style.tags}> {bodyTags.paragraphClose}</span>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <AboutCanvas/>
          </div>
        </div>
        <span className={style.tags}> {bodyTags.bodyClose}</span>
      </div>
    </section>
  );
};

export default About;
