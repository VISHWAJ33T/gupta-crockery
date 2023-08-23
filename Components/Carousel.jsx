"use client";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const CarouselContainer = () => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#ffffff",
        "--swiper-pagination-color": "#131b2e",
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
          src="https://source.unsplash.com/collection/4850848/1440x400"
          alt="slider banner"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://source.unsplash.com/collection/2231555/1440x400"
          alt="slider banner"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://source.unsplash.com/collection/8931142/1440x400"
          alt="slider banner"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselContainer;
