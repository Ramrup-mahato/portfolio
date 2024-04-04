import React from "react";
import "./Experience.css";
import { FaCommentAlt } from "react-icons/fa";
import { Fade } from "react-reveal";

const Experience = () => {
  const datafeature = [
    {
      id: 1,
      fade: "left",
      dec: "Developed a website facilitating digital transactions for agents to buy, sell, and rent properties.",
    },
    {
      id: 2,
      fade: "right",
      dec: " Implemented the features from scratch and worked till completion of the project.",
    },
    {
      id: 3,
      fade: "left",
      dec: "Maintained a high level of expertise in managing React state and implementing Hooks strategies.",
    },
    {
      id: 4,
      fade: "right",
      dec: "Build responsive web application for all supporting devices (mobile, tablet, laptop, desktop).",
    },
    {
      id: 4,
      fade: "left",
      dec: "Developed carousel, chat, admin panel, search bar, product details, stories,  sign-in/out, profiles, notifications, and reporting for optimal user experience.",
    },
  ];
  return (
    <div id="Ramrup-Experience" className="Animated">
      <div className="container">
        <div className="About__head">
          <Fade bottom>
            <h1 className="bigheading2 bigheading2er">Where I’ve Worked.</h1>
          </Fade>
          <div className="Experience_Container">
            <Fade bottom>
              <h5 className="bigheadingh5">
                Position{" "}
                <span className="subheading">
                  @Software Engineer
                  {/* DeepOrion Technology Pvt Ltd */}
                </span>
              </h5>
            </Fade>
            <div className="ExperienceFeature">
              <Fade bottom>
                <p className="subheading2 ">
                  {" "}
                  Worked as front-end Software developer at the variousDomain such as E-commerce, created
                  npm package,Electrical E-Market, study Website and mobile App
                  :
                  <br />
                </p>
              </Fade>
              <div className="ExperienceFeature">
                {datafeature.map((ele, index) => (
                  <>
                    {index % 2 == 0 ? (
                      <Fade left>
                        <div key={index} className="ExperienceFeaturePragraph">
                          <p className="subheading2"> &#8680;</p>
                          <p className="subheading2"> {ele.dec}</p>
                        </div>
                      </Fade>
                    ) : (
                      <Fade right>
                        <div key={index} className="ExperienceFeaturePragraph">
                          <p className="subheading2"> &#8680;</p>
                          <p className="subheading2"> {ele.dec}</p>
                        </div>
                      </Fade>
                    )}
                  </>
                ))}

                {/* <p className="subheading2">
                  &#8680; Developed a website facilitating digital transactions
                  for agents to buy, sell, and rent properties.
                  <br />
                  &#8680; Implemented the features from scratch and worked till
                  completion of the project.
                  <br />
                  &#8680; Maintained a high level of expertise in managing React
                  state and implementing Hooks strategies.
                  <br />
                  &#8680; Build responsive web application for all devices
                  support (mobile, tablet, laptop, desktop).
                  <br />
                  &#8680; Developed carousel, sign-in/out, admin panel, search
                  bar, product details, stories, chat, profiles, notifications,
                  and reporting for optimal user experience.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
