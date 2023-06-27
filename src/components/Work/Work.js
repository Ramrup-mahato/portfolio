import React, { useEffect, useState } from "react";
import "./Work.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../assets/homescout.png";
import img2 from "../assets/miniTv.png";
import img3 from "../assets/TMS.png";
import img4 from "../assets/portfolio.png";
import { VscGithubAlt } from "react-icons/vsc";


const Work = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);
  const workData = [
    {
      id: 1,
      image: img1,
      title: "HomeScout",
      link: "https://rad-narwhal-b1c720.netlify.app",
      description:
        "An e-commerce website for selling, buying, and renting (rooms, apartments, houses) and service Providers.",
    },
    {
      id: 2,
      image: img4,
      title: "My Portfolio Website",
      link: "https://rad-narwhal-b1c720.netlify.app",
      githubCode: "https://github.com/Ramrup-mahato/react-website",
      description:
        "A webite to showcase my information, projects, and experience.",
    },
    {
      id: 3,
      image: img3,
      title: "TMS (Tunnel management system)",
      //   link: "https://rad-narwhal-b1c720.netlify.app",
      description:
        "TMS is a traffic control system in the tunnel. The system alerts when an accident occurs, closes the tunnel, and provides full control online.",
    },
    {
      id: 4,
      image: img2,
      title: "MiniTv",
      link: "https://singular-parfait-4abc8b.netlify.app/",
      description:
        "2000+ free channels in different languages and platform offers diverse interests such as sports, news, movies, and TV shows.",
      githubCode: "https://github.com/Ramrup-mahato/MiniwebsiteTV",
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
          <h1 className="bigheading2">Some Things I’ve Built.</h1>
          <div className="workSlider">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
