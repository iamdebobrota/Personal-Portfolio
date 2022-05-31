import React, { useContext } from "react";
import "./Services.css";
import { themeContext } from "../../Context";
import Svg1 from "./Svg";
import Resume from './resume.pdf';



const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  // const transition = {
  //   duration: 3,
  //   type: "spring",
  // };

  return (

    <div className="services" id="services">
      <span style={{ color: darkMode ? "white" : "" }} className='about_me'> All <span className="me">About</span> Me</span>
      <div className="grid_about">
        <div className="awesome">
          <ul className='about_article'>
            <li>
              Hello! My name Debobrota Haldar and I enjoy creating things that live on the internet.
            </li>
            <br />
            <li>I'm a passionate Developer, with strong administrative and communication skills, good attention to
              detail and the ability to write efficient code using MERN Stack.</li>
            <br />
            <li>My interest in web development started back last year when I was trying to edit things on the web,
              that taught me a lot about HTML & CSS.</li>
            <br />
            <li>As I grow and flourish as a Developer, one thing which keeps me going is my inquisitiveness for
              discovering new things every day.</li>
            <br />
            <li>Fast Forwarding to today, I built a number of web applications and 4 major projects.
              Learned a great deal about teamwork, leadership, and
              communication. After months of rigorous training, here I am looking for an opportunity as a full stack web developer.</li>
            <br />

          </ul>
          
        <a href={Resume} download className="resum">
          <button className="resume">Resume</button>
        </a>

        </div>


        {/* <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div> */}


        <Svg1 className='svg' />
      </div>
    </div>

  );
};

export default Services;
