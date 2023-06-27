import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import R_logo from "../assets/R_logo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="sw navbar">

      <div className="nav_container">
        <ul className="navbar__left">
          <div className="nav-logo">
            <img src={R_logo} alt="logo" title="Ramrup Mahato" />
          </div>
        </ul>

        <ul className="navbar__right">
          <li>
            <a href="#About-Ramrup">About</a>
          </li>
          <li>
            <a href="#Ramrup-Experience">Experience</a>
          </li>
          <li>
            <a href="#Ramrup-work">Work</a>
          </li>
          <li>
            <a href="#Ramrup-Contact">Contact</a>
          </li>
          <li className="Nav_resume">
            <a href="#" className="navbar__right_button" title="Resume">
              Resume
            </a>
          </li>
        </ul>
      </div>
      {/* </div> */}
      {/* <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div> */}
    </div>
  );
};

export default Nav;
