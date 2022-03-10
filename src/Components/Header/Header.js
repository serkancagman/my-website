import style from "./style/header.module.css";
import Logo from "../../assets/logo.png";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.mainHeader}>
      <div className={style.headerInner}>
        <nav className="navbar-expand-lg navbar">
          <Link to="/" className={style.navLogo}>
            <div className={style.logoInner}>
              <img width={50} className={style.logoImg} src={Logo} alt="logo" />{" "}
              <span className={style.logoTitle}>Serkan</span>
            </div>
          </Link>
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className={style.navLink}>
                  .home()
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={style.navLink}>
                  .whoami()
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className={style.navLink}>
                  .projects()
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className={style.navLink}>
                  .contact()
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
