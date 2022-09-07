import { init } from "ityped";
import { useEffect, useRef } from "react";
import admin from '../../images/IMG-20211222-WA0004-removebg-preview.png'
import down from '../../images/down.png'

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Full-stack Developer", "Web Designer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={admin} alt="admin" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Mehmet Ali Tutumlu</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={down} alt="down" />
        </a>
      </div>
    </div>
  );
};
export default Intro;