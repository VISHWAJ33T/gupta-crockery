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
          src="https://source.unsplash.com/collection/1926361/900x300"
          alt="slider banner"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://source.unsplash.com/collection/1926361/900x300"
          alt="slider banner"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://source.unsplash.com/collection/1926361/900x300"
          alt="slider banner"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselContainer;
