import React, { Suspense } from "react";
import style from "./style/banner.module.css";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "../3DObjects/Artsphere";
import { bannerLetters, bodyTags } from "../../Helpers/HelperItems";
import cursor from "../../assets/cursor.png";
import { ScreenWidthContext } from "../../Context/ScreenWidthContext";
import { Link } from "react-router-dom";
const Banner = () => {
  const { windowDimensions } = React.useContext(ScreenWidthContext);
  const [showCursor, setShowCursor] = React.useState("block");

  return (
    <section className={style.mainBanner}>
      <div className="container">
        <span className={style.tags}>{bodyTags.body}</span>
        <div className="row align-items-center g-3 h-100 justify-content-center">
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
                  <Link to="/whoami">
              <button className={style.bannerButton}>Discover Me ! </button>
              </Link>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 h-100">
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
              <Canvas
                style={{
                  width: "100%",
                  height: "500px",
                }}
              >
                <OrbitControls enableZoom={false} />
                <ambientLight color="purple" intensity={0.9} />
                <pointLight
                  color="green"
                  position={[-2, 5, 2]}
                  intensity={1.5}
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
