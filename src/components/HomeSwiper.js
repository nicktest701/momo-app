import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { EffectFade } from "swiper";

// Styles must use direct files imports
import "swiper/css/bundle";
import "swiper/css"; // core Swiper
// import "swiper/css/navigation";
import "swiper/css/pagination";

import background1 from "../assets/images/background_ecg3.png";
import background2 from "../assets/images/background_waec.jpg";
import background3 from "../assets/images/student3.jpg";
import background4 from "../assets/images/student4.jpg";
import background5 from "../assets/images/student5.jpg";

function HomeSwiper() {
  return (
    <Swiper
      className="swiper"
      effect="fade"
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      speed={100}
      spaceBetween={30}
      centeredSlides={true}
      loop
      autoplay={{
        delay: 5000,
        // disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
     
    >
      <SwiperSlide className="swiper-slide" style={{ position: "relative" }}>
        <img src={background1} alt="image1" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src={background2} alt="image2" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src={background3} alt="image2" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src={background4} alt="image2" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src={background5} alt="image2" />
      </SwiperSlide>
    </Swiper>
  );
}

export default HomeSwiper;
