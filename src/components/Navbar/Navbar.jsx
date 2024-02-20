import React, { useContext, useEffect } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import D1 from "../../img/D1.png";
import Resume from "../Intro/Debobrota_haldar_resume.pdf";

import { themeContext } from "../../Context";
import { GoThreeBars } from "react-icons/go";
import { RiCloseCircleFill } from "react-icons/ri";

import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // style={{ color: darkMode ? "white" : "" }}

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Nav-main" style={{ color: darkMode ? "white" : "" }}>
      <div
        className="n-wrapper"
        id="Navbar"
        style={{
          color: darkMode ? "white" : "",
          backgroundColor: darkMode ? "#0f1624" : "white",
        }}>
        <div
          className="n-left"
          style={{
            color: darkMode ? "white" : "",
            backgroundColor: darkMode ? "#0f1624" : "white",
          }}>
          <Link to="intro" spy={true} smooth={true} className="list">
            <img src={D1} alt="d" className="n-name" data-aos="slide-left" />
          </Link>
          <Toggle className="toggle" />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }} activeclass="active">
              <li>
                <Link to="intro" spy={true} smooth={true} className="list">
                  Home
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true} className="list">
                  About
                </Link>
              </li>
              <li>
                <Link to="works" spy={true} smooth={true} className="list">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="portfolio" spy={true} smooth={true} className="list">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true} className="list">
                  Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1iipXOGQncc15wUiJiPC44fWnpApTTBiu/view?usp=sharing"
                    )
                  }
                  className="rounded-3xl bg-red-500 p-1 pl-3 pr-3  text-white hover:text-red-500 hover:bg-white hover:border-x-2 hover:border-red-500">
                  <a
                    href={Resume}
                    download={"Debobrota_haldar_resume"}
                    rel="noreferrer"
                    target="_blank">
                    Resume
                  </a>
                </button>
              </li>
            </ul>
          </div>

          <div className="hide_menu">
            <GoThreeBars
              onClick={() => {
                setNav(!nav);
                // console.log(nav)
              }}
              style={{ transition: "2s", cursor: "pointer" }}
            />
          </div>

          <ul className={!nav ? "new_hide" : "Show_li"}>
            <RiCloseCircleFill
              onClick={() => {
                setNav(!nav);
                // console.log(nav)
              }}
              style={{ marginLeft: "0px", cursor: "pointer", top: "0" }}
            />
            <h5 className="hide_name animate-bounce ">Debobrota</h5>
            <li>
              <Link
                activeclass="active"
                to="intro"
                spy={true}
                smooth={true}
                className="list">
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true} className="list">
                About
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true} className="list">
                Skills
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true} className="list">
                Projects
              </Link>
            </li>
            {/* <li>
              <Link to="testimonial" spy={true} smooth={true} className='list'>
                Blogs
              </Link>
            </li> */}
            <li>
              <Link to="contact" spy={true} smooth={true} className="list">
                Contact
              </Link>
            </li>
          </ul>

          {/* <Link to="contact" spy={true} smooth={true}>
        <p className="button n-button">Contact</p>
        </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
