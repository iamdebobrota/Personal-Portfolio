import React, { useContext } from "react";
import "./Intro.css";
import me from "../../img/me.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import Resume from './resume.pdf';
import { Typewriter } from "react-simple-typewriter"
import SmoothList from 'react-smooth-list';

const Intro = () => {
  // Transition
  // const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <SmoothList transitionDuration={2500} animated={true}>
    <div className="Intro" id="intro">
     
      <div className="i-left">
        <div className="i-name ">
          <span style={{ color: darkMode ? "white" : "" }}>
            <div style={{ fontSize: "27px" }}>
              <h3 style={{ fontSize: "27px" }} className='helo anim'>Hello, my name is</h3>
            </div>

          </span>

          <span className="animate-charcte name anim">Debobrota Haldar</span>
          <h2 className="full_stack_h2 anim">
            I'm a
            <span className="full_stack anim">
              <Typewriter words={[" Full Stack Web Developer.", " Web Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
            </span>
          </h2>
        </div>

        <a href={Resume} download className="resum anim">
          <button className="resume shadow-lg shadow-cyan-500/50">Resume</button>
        </a>

        <div className="i-icons">
          <a href="https://github.com/iamdebobrota" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/debobrota-haldar-3340651aa/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="linkdin" />
          </a>
        </div>
      </div>
    
      <div className="i-right">
        <img src={me} alt="me" className="my_img anim" />
      </div>
    </div>
    </SmoothList>
  );
};

export default Intro;
