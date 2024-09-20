import React, { useEffect, useState } from "react";
import "./Work.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../assets/homescout.png";
import img2 from "../assets/miniTv.png";
import img3 from "../assets/TMS.png";
import img4 from "../assets/portfolio.png";
import img5 from "../assets/worldsMap.png";
import img6 from "../assets/tridoyata.png";
import kizostudy from "../assets/kizostudy.png"

import mimg1 from "../assets/bidding.png";
import mimg2 from "../assets/screen2.png";
import mimg3 from "../assets/screen3.png";
import mimg4 from "../assets/reels.png";
import mimg5 from "../assets/addto.png";

import { Fade } from "react-reveal";
import { VscGithubAlt } from "react-icons/vsc";

const Work = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);
  const workData = [
    {
      id: 1,
      image: kizostudy,
      title: "kizostudy.com",
      link: "https://kizostudy.com",
      description:
        " KizoStudy is a platform where you can find all kinds of course-related quizzes.",
    },
    {
      id: 2,
      image: img1,
      title: "HomeScout",
      link: "https://homescouts.in",
      description:
        "An e-commerce website for selling, buying, and renting (rooms, apartments, houses) and service Providers.",
    },
    {
      id: 3,
      image: img6,
      title: "Tridyota",
      link: "https://tridyota.com",
      description:
        "On this website, you can buy all kinds of electrical components. One of its key features is the ability to add multiple products to your cart and proceed to checkout seamlessly.",
    },
    {
      id: 4,
      image: img5,
      title: "World Map",
      link: "https://world-map-deploy.vercel.app/",
      description:
        "Here, you can select or search for a country on the world map. You will find detailed information about the selected country.",
    },
    {
      id: 5,
      image: img4,
      title: "My Portfolio Website",
      link: "https://ramrup-mahato.github.io/portfolio/",
      description:
        "A webite to showcase my information, projects, and experience.",
    },

    {
      id: 6,
      image: img3,
      title: "TMS (Tunnel management system)",
      //   link: "https://rad-narwhal-b1c720.netlify.app",
      description:
        "TMS is a traffic control system in the tunnel. The system alerts when an accident occurs, closes the tunnel, and provides full control online.",
    },
    {
      id: 7,
      image: img2,
      title: "MiniTv",
      link: "https://singular-parfait-4abc8b.netlify.app/",
      description:
        "2000+ free channels in different languages and platform offers diverse interests such as sports, news, movies, and TV shows.",
      githubCode: "https://github.com/Ramrup-mahato/MiniwebsiteTV",
    },
  ];

  const MobileData = [
    {
      id: 1,
      image: mimg1,
      title: "Bidding App",
      // link: "https://singular-parfait-4abc8b.netlify.app/",
      description:
        "In this application, you can search for a good photo and place a bid price.",
      githubCode: "https://github.com/Ramrup-mahato/BidForPhoto.git",
    },
    {
      id: 2,
      image: mimg2,
      title: "Education App",
      description:
        "Developed a React Native app from scratch to efficiently manage student performance and school/college activities, including a dashboard, assignments, homework, and fee payments.",
      githubCode: "https://github.com/Ramrup-mahato/Education.git",
    },
    {
      id: 3,
      image: mimg3,
      title: "Education",
      description:
        "Developed a React Native app from scratch to efficiently manage student performance and school/college activities, including a dashboard, assignments, homework, and fee payments.",
      githubCode: "https://github.com/Ramrup-mahato/Education.git",
    },
    {
      id: 4,
      image: mimg4,
      title: "Reels",
      description:
        "Please click on the Git icon below, fetch the code, and run it in an editor. ",
      githubCode: "https://github.com/Ramrup-mahato/Education.git",
    },
    {
      id: 5,
      image: mimg5,
      title: "Add to Cart",
      description:
        "Please click on the Git icon below, fetch the code, and run it in an editor.",
      githubCode: "https://github.com/Ramrup-mahato/Education.git",
    },
  ];
  const handleGithubClick = (gitLink) => {
    window.open(gitLink, "_blank");
  };

  const handleGithubProject = (Link) => {
    window.open(Link, "_blank");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <div className="Description_Ramrup" id="Ramrup-work">
      <div className="container">
        <div className="WorkmainContainer">
          <Fade right>
            <h1 className="bigheading2">Some Things I’ve Built.</h1>
          </Fade>
          <div className="workSlider">
            <Fade bottom>
              <Slider {...settings}>
                {workData.map((ele, index) => (
                  <div key={index} className="WorkRamDiv">
                    <div className="sw WorkImagediv">
                      <img src={ele.image} alt="Project image" />
                    </div>
                    <div className="workLink">
                      <h5 className="bigheadingh5 bigheadingh5Work">
                        {ele.title}
                      </h5>
                      <p className="subheading2 subheading2Work">
                        {ele.description}
                      </p>
                      {ele.link && (
                        <a
                          className="workLinkHref"
                          onClick={() => handleGithubProject(ele.link)}
                        >
                          Click Here to view site.
                        </a>
                      )}
                      {ele.githubCode && (
                        <ul className="header-ul">
                          <li>
                            <VscGithubAlt
                              title="Code for this project"
                              className="Banner_icons VscGithubAlt "
                              onClick={() => handleGithubClick(ele.githubCode)}
                            />
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </Slider>
            </Fade>
          </div>
          <div className="workSlider mobileWorkSlider">
            <Fade bottom>
              <Slider {...settings}>
                {MobileData.map((ele, index) => (
                  <div
                    key={index}
                    className="WorkRamDiv"
                    style={{ width: "350px !impotent" }}
                  >
                    <div className="sw WorkImagediv" style={{ width: "250px" }}>
                      <img src={ele.image} alt="Project image" />
                    </div>
                    <div className="workLink">
                      <h5 className="bigheadingh5 bigheadingh5Work">
                        {ele.title}
                      </h5>
                      <p className="subheading2 subheading2Work">
                        {ele.description}
                      </p>
                      {ele.link && (
                        <a
                          className="workLinkHref"
                          onClick={() => handleGithubProject(ele.link)}
                        >
                          Click Here to view site.
                        </a>
                      )}
                      {ele.githubCode && (
                        <ul className="header-ul">
                          <li>
                            <VscGithubAlt
                              title="Code for this project"
                              className="Banner_icons VscGithubAlt "
                              onClick={() => handleGithubClick(ele.githubCode)}
                            />
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </Slider>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
