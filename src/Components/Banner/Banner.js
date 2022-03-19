import React, { Suspense } from "react";
import style from "./style/banner.module.css";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "../3DObjects/Computer";
import { bannerLetters, bodyTags } from "../../Helpers/HelperItems";
import cursor from "../../assets/cursor.png";
import { ScreenWidthContext } from "../../Context/ScreenWidthContext";
import { Link } from "react-router-dom";
const Banner = () => {
  const { windowDimensions } = React.useContext(ScreenWidthContext);
  const [showCursor, setShowCursor] = React.useState("block");
  const [canvasWidth, setCanvasWidth] = React.useState({
    width: "100%",
    height: "500px",
  });
  React.useEffect(() => {
    if (windowDimensions.width <= 450) {
      setCanvasWidth({
        width: "300px",
        height: "300px",
      });
    }
  }, [windowDimensions.width]);

  const handleCursor = () => {
    setShowCursor("none");
  };

  return (
    <section className={style.mainBanner}>
      <div className="container">
        <span className={style.tags}>{bodyTags.body}</span>
        <div className="row  g-3 h-100 align-items-center justify-content-center">
          <div className="col-md-12 col-lg-6 h-100">
            <div className={style.bannerWrapper}>
              <span className={`ms-2 ${style.tags}`}>{bodyTags.h1}</span>
              <h1 className={style.bannerTitle}>
                {bannerLetters.map((letter, index) => {
                  if (letter === "br") {
                    return <br key={index} />;
                  } else if (7 < index && index <= 14) {
                    return (
                      <span key={index} className={style.nameLetter}>
                        {letter}
                      </span>
                    );
                  }
                  return (
                    <span key={index} className={style.letterAnimation}>
                      {letter}
                    </span>
                  );
                })}
              </h1>
              <span className={`ms-2 ${style.tags}`}>{bodyTags.h1Close}</span>
              <div className={style.bannerBtnWrapper}>
                <Link to="/aboutme">
                  <button className={style.bannerButton}>Discover Me ! </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 h-100">
            <div
              onMouseOver={handleCursor}
              className={style.canvasWrapper}
              onClick={handleCursor}
            >
              <div
                className={style.exampleCursor}
                style={{ display: showCursor }}
              >
                <img className={style.cursor} src={cursor} alt="cursor" />
              </div>
              <Canvas style={canvasWidth}>
                <OrbitControls enableZoom={false} />
               
                <ambientLight
                  position={[-500, -1, 90]}
                  color="purple"
                  intensity={2}
                />
                <pointLight
                  color="green"
                  position={[-2, 5, 2]}
                  intensity={3.5}
                />
                <Suspense fallback={null}>
                  <Model />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
        <span className={style.tags}>{bodyTags.bodyClose}</span>
      </div>
    </section>
  );
};

export default Banner;
