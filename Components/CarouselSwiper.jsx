import React from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const CarouselSwiper = ({ allImgs, type, tempSrc, width, height, blurURL }) => {
    return (
        <>
            {allImgs.length === 0 ? <Image
                priority
                className="swiper-lazy"
                key="temp image"
                src={tempSrc}
                alt="carousel image"
                width={width}
                height={height}
                placeholder="blur"
                blurDataURL={blurURL}
                sizes="100vw"
                style={{
                    width: "100%",
                    height: "auto"
                }
                }
            /> : (
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

                    <>{allImgs[type].imgs.map((src) => (
                        <SwiperSlide key={src}>
                            <Image
                                priority
                                className="swiper-lazy"
                                src={src}
                                alt="carousel image"
                                width={width}
                                height={height}
                                placeholder="blur"
                                blurDataURL={blurURL}
                                sizes="100vw"
                                style={{
                                    width: "100%",
                                    height: "auto"
                                }} />
                        </SwiperSlide>
                    ))
                    }</>
                </Swiper>
            )}</>
    )
}

export default CarouselSwiper