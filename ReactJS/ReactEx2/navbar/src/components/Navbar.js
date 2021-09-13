import React, {useState} from 'react'
import {FaFacebookSquare, FaLinkedin, FaGit} from 'react-icons/fa'
import './navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>S</span>unil
            <span>M</span>aurya
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>
                {/* Social Media Links */}
                <div className="social-media">
                        <ul className='social-media-desktop'>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100006485601118" target="_blank" className='facebook'><FaFacebookSquare /></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/sunil-kumar-maurya-557775126/" target="_blank"><FaLinkedin /></a>
                            </li>
                            <li>
                                <a href="https://github.com/Neelmaurya" target="_blank"><FaGit /></a>
                            </li>
                        </ul>
                        {/* hamburget menu start  */}
                        <div className="hamburger-menu">
                            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                            </a>
                        </div>
                </div>
           </nav>
        </div>
    )
}

export default Navbar
