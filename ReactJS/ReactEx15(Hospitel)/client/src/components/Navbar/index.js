import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import NavLogo from '../../assets/NavLogo.gif'

import "./Nav.css";

export default function Navbar() {
  const [toggleState, setToggleState] = useState(false);

  const toggle = () => {
    setToggleState(toggleState === false ? true : false);
  };

  return (
    <header>
      <div className="logo" onClick={toggle}>
        <Link to="/"><img src={NavLogo} alt="Neel" className="NavLogo"/></Link>
      </div>

      <nav>
        <i className="fa fa-bars" aria-hidden="true" onClick={toggle} />
        <ul className={`collapsed ${toggleState ? "is-expanded" : ""}`}>
          <NavLink activeClassName="active" onClick={toggle} to="/">
            <li>Home</li>
          </NavLink>
          <NavLink activeClassName="active" to="/about" onClick={toggle}>
            <li>About</li>
          </NavLink>
          <NavLink activeClassName="active" to="/contact" onClick={toggle}>
            <li>Contact</li>
          </NavLink>
          <NavLink activeClassName="active" to="/login" onClick={toggle}>
            <li>Login</li>
          </NavLink>
          <NavLink activeClassName="active" to="/reg" onClick={toggle}>
            <li>Sign Up</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
