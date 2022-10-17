import { init } from "ityped";
import { useEffect, useRef } from "react";
import admin from "../../images/admin.png";
import down from "../../images/down.png";

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
          <h2>Hi there, I'm</h2>
          <h1>Mehmet Ali Tutumlu</h1>
          <h3>
            Junior <span ref={textRef}></span>
          </h3>
          <p>
            I am a keen and innovative Full-stack Web Developer with a
            background in Mathematics. Finding and implementing solutions for
            modern problems was always my passion and now developing smooth
            applications and creating best fit for personal needs is current
            station of my life long learning journey. I’m now looking for a
            junior position to finally kick start my career and learn among
            professionals.
          </p>
        </div>
        <a href="#portfolio">
          <img src={down} alt="down" />
        </a>
      </div>
    </div>
  );
};
export default Intro;
