import style from "./style/header.module.css";
import Logo from "../../assets/logo.png";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import {FaHamburger} from 'react-icons/fa'
const Header = () => {
  return (
    <header className={style.mainHeader}>
      <div className={style.headerInner}>
        <nav className="navbar-expand-md navbar">
          <Link to="/" className={style.navLogo}>
            <div className={style.logoInner}>
              <img className={style.logoImg} src={Logo} alt="logo" />{" "}
              <span className={style.logoTitle}>Serkan</span>
            </div>
          </Link>
          <button className={style.hamburgerBtn} type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
                <FaHamburger className={style.hamburgerIcon} />
            </button>
          <div id="navContent" className="navbar-collapse collapse">
            <ul className={`navbar-nav ms-auto ${style.navbarNav}`}>
              <li className="nav-item">
                <NavLink to="/" className={style.navLink}>
                  .home()
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/aboutme" className={style.navLink}>
                  .aboutMe()
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/skills" className={style.navLink}>
                  .skills()
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/projects" className={style.navLink}>
                  .projects()
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={style.navLink}>
                  .contact()
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
