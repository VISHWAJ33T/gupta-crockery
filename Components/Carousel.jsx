"use client";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const CarouselContainer = () => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#131b2e",
        "--swiper-pagination-color": "#fff",
      }}
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src="https://durodine.com/images/slider-2.jpg"
          alt="slider banner"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://danubehome.in/images/Accessories/dinnerset-site-banner.jpg"
          alt="slider banner"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://homeprivilez.com/wp-content/uploads/2023/06/home-page-banner.jpg"
          alt="slider banner"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselContainer;
