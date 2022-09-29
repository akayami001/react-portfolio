import { useState } from "react";
import arrow from "../../images/arrow.png";
import mobile from "../../images/mobile.png";
import globe from "../../images/globe.png";
import writing from "../../images/writing.png";
import des1 from "../../images/design.jpg";
import des2 from "../../images/react.jpg";
import des3 from "../../images/fullstack.jpg";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: `${mobile}`,
      title: "Web Design",
      desc: "Responsive Web Design",
      img: des1,
    },
    {
      id: "2",
      icon: `${globe}`,
      title: "React Applications",
      desc: "React applications with REST API",
      img: des2,
    },
    {
      id: "3",
      icon: `${writing}`,
      title: "MERN Stack Development",
      desc: "Developed with MERN stack Technologies",
      img: des3,
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={arrow}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={arrow}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default Works;
