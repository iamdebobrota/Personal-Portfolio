import React from "react";
import "./Footer.css";
import Wave2 from "../../img/wave2.png";
import linkedin from "../../img/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <img
        src={Wave2}
        alt=""
        style={{ width: "100%", height: "300px" }}
        className="wave"
      />
      <div className="f-content">
        <span>
          Designed and build by Debobrota Haldar, 2022 All rights reserved.
        </span>
        <div className="f-icons">{/*  add social media icons */}</div>
      </div>
    </div>
  );
};

export default Footer;
