import Lottie from "lottie-react";
import animation from "../../assets/loading.json";
import React from "react";
import logo from "../../assets/logo.png";
const Loader = () => {
  return (
    <div className="loader">
      <img src={logo} alt="logo" className="loader-img" />
      <span className="loaderTitle">Serkan is thinking</span>
    </div>
  );
};
export default Loader;
