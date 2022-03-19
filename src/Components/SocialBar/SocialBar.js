import React from "react";
import style from "./style/socialbar.module.css";
import { FaGithubAlt, FaLinkedin, FaHackerrank } from "react-icons/fa";

const SocialBar = () => {
  return (
    <aside className={style.asideMenu}>
      <div className={style.socialBar}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/serkancagman"
          className={style.socialLink}
        >
          <FaGithubAlt className={style.socialIcon} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/serkancagman/"
          className={style.socialLink}
        >
          <FaLinkedin className={style.socialIcon} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.hackerrank.com/serkancagmann"
          className={style.socialLink}
        >
          <FaHackerrank className={style.socialIcon} />
        </a>
      </div>
    </aside>
  );
};

export default SocialBar;
