import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import R_logo from "../assets/R_logo.png";
import resume from "../assets/Ramrup Resume.pdf";
import "./Nav.css";
import { Fade } from "react-reveal";

const Nav = () => {
  const handleGithubProject = () => {
    window.open(resume, "_blank");
  };
  return (
    <div className="sw navbar">
      <div className="nav_container">
        <Fade right>
          <ul className="navbar__left">
            <div className="nav-logo">
              <img src={R_logo} alt="logo" title="Ramrup Mahato" />
            </div>
          </ul>
        </Fade>

        <ul className="navbar__right">
          <Fade left>
            <li>
              <a href="#About-Ramrup">About</a>
            </li>
          </Fade>
          <Fade left>
            <li>
              <a href="#Ramrup-Experience">Experience</a>
            </li>
          </Fade>

          <Fade left>
            <li>
              <a href="#Ramrup-work">Work</a>
            </li>
          </Fade>
          <Fade left>
            <li>
              <a href="#Ramrup-Contact">Contact</a>
            </li>
          </Fade>
          <Fade left>
            <li className="Nav_resume">
              <a
                className="navbar__right_button"
                title="Resume"
                onClick={() => handleGithubProject()}
              >
                Resume
              </a>
            </li>
          </Fade>
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
