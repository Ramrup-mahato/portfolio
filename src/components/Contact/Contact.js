import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import "./Contact.css";

const Contact = () => {
    const handleEmailClick = (email) => {
        const chromeLink = `mailto:${email}`;
        const win = window.open(chromeLink, "_blank");
        win.focus();
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
    <div id="Ramrup-Contact" className="contact">
      <div className="container">
        <div className="contactMainContainer">
          <div className="contactContainer">
            <h1 className="bigheading2">Get In Touch.</h1>
            <p className="subheading2">
              I am currently looking for any new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I’ll try my best to get back to you!.
            </p>
            <div className="ContactButtons">

            <button
              className="contactButton"
              onClick={() => handleEmailClick("ramrupmahato1996@gmail.com")}
            >
              Say Hello  on Email
            </button>
            <button
              className="contactButton"
              onClick={() => handleWhatsAppClick()}
            >
              Say Hello  on Whatsapp
            </button>
            </div>
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
                  onclick={() => handleEmailClick("ramrupmahato1996@gmail.com")}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
