import React from "react";
import "./Footer.css";
import Wave2 from "../../img/wave2.png";
import linkedin from '../../img/linkedin.png'
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave2} alt="" style={{ width: "100%", height:"300px" }} className='wave'/>
      <div className="f-content">
        <span>Designed and build by Debobrota Haldar, 2022 All rights reserved.</span>
        <div className="f-icons">
          {/* <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} /> */}
      


        </div>
      </div>
    </div>
  );
};

export default Footer;
