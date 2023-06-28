import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import R_logo from "../assets/R_logo.png";
import resume from '../assets/Ramrup Resume.pdf'
import "./Nav.css";

const Nav = () => {
  const handleGithubProject = () => {
    window.open(resume, "_blank");
  };
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
            <a  className="navbar__right_button" title="Resume"
            onClick={()=>handleGithubProject()}>
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
