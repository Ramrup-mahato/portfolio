import React from "react";
import "./About.css";
import ramrup1 from "../assets/ramrup pic.JPG";
import { Fade,Roll  } from "react-reveal";

const About = () => {
  return (
    <div id="About-Ramrup" className="About">
      <div className="container">
        <div className="About__head">
          <Fade bottom>
            <h1 className="bigheading2">About Me.</h1>
          </Fade>
          <div className="AboutMe">
            <Roll  left>
              <div className="AboutImg">
                <div className="picture">
                  <img
                    src={ramrup1}
                    alt="images"
                    className="sw picture "
                    title="Ramrup mahato"
                  />
                </div>
              </div>
            </Roll>
            <div className="AboutParagraph">
              <Fade bottom>
                <p className="subheading2">
                  Hello! My name is Ramrup and I enjoy creating things that live
                  on the internet. My interest in web development started back
                  in 2021 when I decided to build websites using HTML, CSS and
                  JS.
                </p>
              </Fade>
              <Fade bottom>
                <p className="subheading2">
                  Fast-forward to today, and I’ve had the privilege of working
                  at
                  <span className="subheadingSpan">
                    {" "}
                    Codermaniaa lab pvt ltd
                  </span>{" "}
                  with various Insurance domain clients. My main focus these
                  days is building accessible, inclusive products and digital
                  experiences at Codermaniaa lab pvt ltd.
                </p>
              </Fade>
              <Fade right>
                <p className="subheading2">
                  Here are a few technologies I’ve been working with recently:
                  <br />
                  &#8680; HTML/CSS
                  <br />
                  &#8680; ReactJS
                  <br />
                  &#8680; JavaScript (ES6+)
                  <br />
                  &#8680; Socket.io
                  <br />
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
