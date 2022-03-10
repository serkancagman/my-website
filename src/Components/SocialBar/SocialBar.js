import React from 'react'
import style from './style/socialbar.module.css'
import {FaGithubAlt, FaLinkedin,FaHackerrank} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const SocialBar = () => {
  return (
    <aside className={style.asideMenu}>
        <div className={style.socialBar}>
            <Link to='/' className={style.socialLink}>
                <FaGithubAlt className={style.socialIcon}/>
            </Link>
            <Link to='/' className={style.socialLink}>
                <FaLinkedin className={style.socialIcon}/>
            </Link>
            <Link to='/' className={style.socialLink}>
                <FaHackerrank className={style.socialIcon}/>
            </Link>
        </div>    
    </aside>
  )
}

export default SocialBar