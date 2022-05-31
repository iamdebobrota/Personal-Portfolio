import React, { useContext } from "react";
import "./Works.css";
// import mongoDb from "../../img/mongoDb.webp";
// import typescript from "../../img/typescript.webp";
// import html from "../../img/html.png";
// import javascript from "../../img/javascript.png";
// import css from "../../img/css.png";
// import nodejs from "../../img/nodejs.png";
// import express from "../../img/express.webp";
// import mern1 from "../../img/mern1.png";
// import react from "../../img/react.png";
// import redux from "../../img/redux.png";
// import materialui from "../../img/materialui.png";
// import database from "../../img/database.png";
// import { motion } from "framer-motion";
import {Link} from 'react-scroll'
import SkillCard from "./SkillCard";
import { themeContext } from "../../Context";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="main_div" id="works">
       <span style={{ color: darkMode ? "white" : "" }} className='heading'>
          My <span className="skills">Technical </span> Skills
          </span>

    <div className="works" >


        <SkillCard/>
      </div>
    
    </div>
  );
};

export default Works;
