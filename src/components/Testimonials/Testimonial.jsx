import React, { useContext } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import masai from "../../img/masai.jpeg";
import intern from "../../img/intern.png";
import grow from "../../img/grow.png";
import { themeContext } from "../../Context";

const Testimonial = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  const clients = [
    {
      img: masai,
      url:'https://medium.com/@iamdebobrota/my-journey-at-masai-school-8766b83dcfac',
      review:
        "My 3-week journey at Masai School.After my graduation, I searched for skill-relevant courses, and I found Masai School. I have done a lot of searching. I visited Masai’s Official website and I saw the most important thing about the payment zero upfront fees and pay when you get hired. ",
    
      },
    {
      img: intern,
      url:'https://medium.com/@iamdebobrota/first-group-project-at-masai-school-56855c20ccc7',
      review:
        "My First Project at Masai School. In our construct week, we are given to build up the Intern Theory website. So, in this Blog, You will find the full Website project Presentation created by our team.CSS,JAVASCRIPT,LOCAL STORAGE",
    },
    {
      img: grow,

      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    }
  ];

  return (
    <div className="t-wrapper" id="testimonial" style={{ color: darkMode ? "white" : "" , backgroundColor: darkMode ? "#0f1624" : "white" }}>
      <div className="t-heading" style={{ color: darkMode ? "white" : "" , backgroundColor: darkMode ? "#0f1624" : "white" }}>
        <span style={{ color: darkMode ? "white" : "" , backgroundColor: darkMode ? "#0f1624" : "white" }}>My  </span>
        <span>Blogs</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="as"className="blog_img" />
                <a href={client.url} target='_blank' rel="noreferrer">{client.review}</a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
