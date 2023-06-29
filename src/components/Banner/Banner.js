import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import "./Banner.css";
import ramrup1 from "../assets/ramrup1.png";

const EmailButton = ({ email }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <button onClick={handleEmailClick}>
      <i className="email-icon" /> {/* Replace with your email icon */}
    </button>
  );
};

const Banner = () => {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/+919031937105`;
    window.open(url, "_blank");
  };
  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/ramrup-mahato-4654001a3/",
      "_blank"
    );
  };
  const handleGithubClick = () => {
    window.open("https://github.com/Ramrup-mahato/", "_blank");
  };
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/rahul680singh/", "_blank");
  };
  return (
    <div className="header">
      <div className="container">
        <div className="row ">
          <div className="col-6">
            <div className="header-content">
              <div className="header-sections">
                <ul className="header-ul">
                  <li>
                    <AiOutlineInstagram
                      className="Banner_icons instagram"
                      onClick={() => handleInstagramClick()}
                    />
                  </li>
                  <li>
                    <VscGithubAlt
                      className="Banner_icons VscGithubAlt "
                      onClick={() => handleGithubClick()}
                    />
                  </li>
                  <li>
                    <FiLinkedin
                      className="Banner_icons FiLinkedin"
                      onClick={() => handleLinkedInClick()}
                    />
                  </li>
                  <li>
                    <FaWhatsapp
                      className="Banner_icons FaWhatsapp"
                      onClick={() => handleWhatsAppClick()}
                    />
                  </li>
                  <li>
                    <AiOutlineMail
                      className="Banner_icons AiOutlineMail"
                      onClick={() =>
                        handleEmailClick("ramrupmahato1996@gmail.com")
                      }
                    />
                  </li>
                </ul>
                <p
                  className="subheadingemail"
                  onClick={() => handleEmailClick("ramrupmahato1996@gmail.com")}
                >
                  ramrupmahato1996@gmail.com
                </p>
                <p className="subheading">Hi, My name is</p>
                <h1 className="bigheading">Ramrup Mahato.</h1>
                <h1 className="bigheading2">I build things for the web.</h1>
                <p className="subheading2">
                  I’m a software engineer specializing in building exceptional
                  digital experiences. Currently, I’m focused on building
                  accessible, human-centered products at{" "}
                  <span className="subheadingSpan">
                    Codermaniaa lab pvt ltd
                  </span>
                  .
                </p>
                {/* <div className="btn">
                  <a href="#" className="bnt-btn">
                    My portfolio
                  </a>
                  <div>
                    <a href="#" className="btn-youtobe">
                      <FaYoutube />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="picture">
              <img src={ramrup1} alt="images" className="picture" title="Ramrup mahato" />
            </div>
            <div className="BannerImageColor"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
