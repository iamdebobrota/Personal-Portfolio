import React, { useContext, useEffect } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import D1 from "../../img/D1.png";
import Resume from "../Intro/Debobrota_haldar_resume.pdf";

import { themeContext } from "../../Context";
import { GoThreeBars } from "react-icons/go";
import { IoClose } from "react-icons/io5";

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
                      "https://drive.google.com/file/d/1iipXOGQncc15wUiJiPC44fWnpApTTBiu/view?usp=drive_link"
                    )
                  }
                  className="resume-btn rounded-3xl bg-red-500 p-1 pl-3 pr-3  text-white hover:text-red-500 hover:bg-white transition-all border-x-2 border-red-500 hover:border-x-2 hover:border-red-500">
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
              }}
              style={{ transition: "2s", cursor: "pointer" }}
            />
          </div>

          <ul
          
          // className={!nav ? "new_hide" : "Show_li"}
          className={`w-[70%] text-[34px] top-0 right-0 dark:bg-gray-400 p-5 fixed h-full z-40 ease-in-out duration-500 ${
            nav ? "show_li translate-x-0 " : "nav_hide translate-x-full"
          }`}

          
          >
            <IoClose
              onClick={() => {
                setNav(!nav);
              }}
              style={{ marginLeft: "-10px", cursor: "pointer", top: "0" }}
            />
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
            <li>
              <Link to="contact" spy={true} smooth={true} className="list">
                Contact
              </Link>
            </li>

              <p className="text-xs text-center mt-32">Created by Debobrota</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
