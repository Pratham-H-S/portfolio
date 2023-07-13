import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Foundations from "../../img/Foundations.png"
import html from "../../img/htmlcss.png"
import HOC from "../../img/hoc.png";
import hack from "../../img/hack.png"
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Certifications</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" onClick={()=> window.open("https://coursera.org/share/057805a5d34675d9837190169ceee5c1", "_blank")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Foundations} alt="" onClick={()=> window.open("https://coursera.org/share/7ae4ee2b4449fd841f7497738b5abcf7", "_blank")}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={html} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hack} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
