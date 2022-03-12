import React from "react";
import BoxCanvas from "../BoxCanvas/BoxCanvas";
import style from "./style/skills.module.css";
import reactImg from "../../assets/react.png";
import jsImg from "../../assets/JavaScript.png";
import sassImg from "../../assets/sass.png";
import gitImg from "../../assets/git.png";
import htmlImg from "../../assets/html.png";
import cssImg from "../../assets/css.png";
import bootstrapImg from "../../assets/bootstrap.png";
import cursor from "../../assets/cursor.png";
import { bodyTags } from "../../Helpers/HelperItems";
import { ScreenWidthContext } from "../../Context/ScreenWidthContext";

const Skills = () => {
  const { windowDimensions } = React.useContext(ScreenWidthContext);

  const [boxWidth, setBoxWidth] = React.useState({
    width: "150px",
    height: "150px",
    margin: "20px",
  });
  const [showCursor, setShowCursor] = React.useState("block");

  React.useEffect(() => {
    if (windowDimensions.width > 300 && windowDimensions.width < 900) {
      setBoxWidth({
        width: "100px",
        height: "100px",
        margin: "5px",
      });
    } else if (windowDimensions.width < 300) {
      setBoxWidth({
        width: "70px",
        height: "70px",
        margin: 0,
      });
    } else {
      setBoxWidth({
        width: "150px",
        height: "150px",
        margin: "20px",
      });
    }
  }, [windowDimensions.width]);

  return (
    <section className="mainSkills">
      <div className="container-xxl">
        <div className={style.skillsWrapper}>
          <span className={style.tags}> {bodyTags.body}</span>
          <div className="row g-3 justify-content-center align-items-center">
            <div className="col-md-6 col-lg-6">
              <span className={`ms-3 ${style.tags}`}> {bodyTags.h1}</span>
              <h1 className={style.skillsTitle}>
                <span className={style.letterAnimation}>S</span>
                <span className={style.letterAnimation}>k</span>
                <span className={style.letterAnimation}>i</span>
                <span className={style.letterAnimation}>l</span>
                <span className={style.letterAnimation}>l</span>
                <span className={style.letterAnimation}>s</span>
              </h1>
              <span className={`ms-3 ${style.tags}`}> {bodyTags.h1Close}</span>
              <div className={style.skillsBars}>
                <div className={style.skillsBar}>
                  <h6 className={style.skillsBarTitle}>
                    React{" "}
                    <span className={style.skillSubTitle}> - Learning</span>{" "}
                  </h6>
                  <div className={style.skillsBarProgress}>
                    <div className={style.skillsBarProgressReact}></div>
                  </div>
                </div>
              </div>
              <div className={style.skillsBars}>
                <div className={style.skillsBar}>
                  <h6 className={style.skillsBarTitle}>
                    Javascript{" "}
                    <span className={style.skillSubTitle}> - Learning</span>{" "}
                  </h6>
                  <div className={style.skillsBarProgress}>
                    <div className={style.skillsBarProgressJavascript}></div>
                  </div>
                </div>
              </div>
              <div className={style.skillsBars}>
                <div className={style.skillsBar}>
                  <h6 className={style.skillsBarTitle}>HTML 5</h6>
                  <div className={style.skillsBarProgress}>
                    <div className={style.skillsBarProgressHTML}></div>
                  </div>
                </div>
              </div>
              <div className={style.skillsBars}>
                <div className={style.skillsBar}>
                  <h6 className={style.skillsBarTitle}>
                    SASS{" "}
                    <span className={style.skillSubTitle}> - Learning</span>{" "}
                  </h6>
                  <div className={style.skillsBarProgress}>
                    <div className={style.skillsBarProgressSass}></div>
                  </div>
                </div>
              </div>
              <div className={style.skillsBars}>
                <div className={style.skillsBar}>
                  <h6 className={style.skillsBarTitle}>CSS 3</h6>
                  <div className={style.skillsBarProgress}>
                    <div className={style.skillsBarProgressCSS}></div>
                  </div>
                </div>
              </div>
              <div className={style.skillsBars}>
                <div className={style.skillsBar}>
                  <h6 className={style.skillsBarTitle}>BOOTSTRAP 5</h6>
                  <div className={style.skillsBarProgress}>
                    <div className={style.skillsBarProgressBootstrap}></div>
                  </div>
                </div>
              </div>
              <div className={style.skillsBars}>
                <div className={style.skillsBar}>
                  <h6 className={style.skillsBarTitle}>
                    GIT <span className={style.skillSubTitle}> - Learning</span>
                  </h6>
                  <div className={style.skillsBarProgress}>
                    <div className={style.skillsBarProgressGit}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div
                onMouseOver={() => setShowCursor("none")}
                className={style.canvasWrapper}
              >
                <div
                  className={style.exampleCursor}
                  style={{ display: showCursor }}
                >
                  <img className={style.cursor} src={cursor} alt="cursor" />
                </div>
                <div className={style.canvasUp}>
                  <BoxCanvas canvasWidth={boxWidth} image={reactImg} />
                  <BoxCanvas canvasWidth={boxWidth} image={jsImg} />
                </div>
                <div className={style.canvasMiddle}>
                  <BoxCanvas canvasWidth={boxWidth} image={sassImg} />
                  <BoxCanvas canvasWidth={boxWidth} image={gitImg} />
                  <BoxCanvas canvasWidth={boxWidth} image={htmlImg} />
                </div>
                <div className={style.canvasDown}>
                  <BoxCanvas canvasWidth={boxWidth} image={cssImg} />
                  <BoxCanvas canvasWidth={boxWidth} image={bootstrapImg} />
                </div>
              </div>
            </div>
          </div>
          <span className={style.tags}> {bodyTags.bodyClose}</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
