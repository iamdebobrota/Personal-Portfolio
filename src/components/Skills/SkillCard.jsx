import React, { useEffect } from "react";
import { skill } from "./Skill";
import "./skill.css";

import Aos from "aos";
import "aos/dist/aos.css";

const SkillCard = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="grid">
      {skill.map((item, index) => (
        <div
          key={index}
          className="skill_child"
          data-aos="slide-left"
          data-aos-duration="5000"
          data-aos-delay="300">
          <img src={item.img} alt="a" className="grid_img" draggable="false" />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
