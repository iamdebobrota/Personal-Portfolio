import React, { useContext, useEffect } from "react";
import "./Works.css";

// import {Link} from 'react-scroll'
import SkillCard from "./SkillCard";
import { themeContext } from "../../Context";

import Aos from "aos";
import "aos/dist/aos.css";

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="main_div" id="works" data-aos="zoom-out">
      <span style={{ color: darkMode ? "white" : "" }} className="heading">
        My <span className="skills">Technical </span> Skills
      </span>

      <div className="works">
        <SkillCard />
      </div>
    </div>
  );
};

export default Works;
