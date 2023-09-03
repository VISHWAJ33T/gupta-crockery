"use client";
import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const CarouselContainer = () => {
  const [allImgs, setAllImgs] = useState([]);
  useEffect(() => {
    fetchImgs();
  }, []);

  const fetchImgs = async () => {
    const response = await fetch(`/api/landingPage/carousel`);
    const data = await response.json();
    setAllImgs(data);
  };
  return (
    <>
      <div className="sm:hidden">
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
          {allImgs.length === 0 ? null : (
            <>
              {allImgs[0].imgs.map((src) => (
                <SwiperSlide key={src}>
                  <Image
                    className="swiper-lazy"
                    key={src}
                    src={src}
                    alt="carousel image"
                    layout="responsive"
                    width={720}
                    height={400}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgICA0IBwgHBwcIBw0HBwcHBw8ICQcNFREWFhURExMYHSggGBoxGxMTITEhMSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDisZFRkrNy0tNystLSs3LSsrKysrLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAAAQIDBAf/xAAYEAEBAQEBAAAAAAAAAAAAAAAAARECEv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgQD/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwDxoA3S8iMGKRmMELDMAWDDPAIYrBgJw8Vh4CMPFYeAjBi8GAzwsaYVgMxi7E4CSUVgJJRAkGQpEZACMgAAAABRsYNAjBgMGGeIEeHh4CcPDw8ELBisORRMh4qQ5ATh4vDwEeRjTBgMsKxribAZWJsbWIsBlYWNLE2AjE2LsIEYSqmgRHSFIAAQMgAAB0AwAMHEBDBgDBgShDioJDkORUApFSCKkEKQ5FSHIJU4MXh4FZYVjWxNgtZWJsa2JsBjYmxrYmwVjYmxpYmwGdTVpoJpHSAiMCkAAAAB0GAgZkcAzhGBgHACoUVFQ4qJi4IcipBFRUEisEipCIWDF4PKiMTY0xNiDOxFjWxFRWViK1rPoVnUVpUUVnU1dTQRSqqmgRGQoAAAAA6DEERTOFDEOGRgDBxUOGRwRUXExcVFRchcxpzFQ5Fzk+eWk5EZ+R5beSvIMLEWN+oy6grKo6adM6gz6RV1FRrGdRWlRRWdTV1AJqaqpoERkKAAAAAOkyNkCiNQwABw4RxUNUSqDKuWnKIvlUactuIy5bcKNeY15iOG3IheSsaYXQrn6jHuOjth2DDpn006ZdAjpnV9IqKmoqqio0moqqmgmpqqmikQAAgAAAB1GRsqZpNUM4RgZwjioaolUVlcXyzi4I15b8Vz81rzVHVxWvNc3HTXnpBvqeqj0V6Au6w7q++mPdUZ9Mul9Vn0COmdX0ioqazq+kVGk1FVUUCqadTRQQoAEZAAADrMhGVOHCNUMAKhmRwFHEmJq4qVnKqVUa81pzWEq5VR0c9Nee3LKudA6fZXth6F6QX10y6ovSLVC6rPqqtRagmoqqijWJ6RVVFRU1FVUUCpGQpAAUgYAgZA6wWmyGCNUOGQVDNJgoEYh6cqTVFyqlZyqlBrKqdMpTlEa+h6Z6NBVqbStTaB2ptGp0UVFVaio0moq6igmoqqmikRkKQMAAAgCMA6ARiGCMDNJgYI1QwQBRpPRD1UqDUi5T1GjRGmlqNGgvU6WlosPRanS1FO0rRpUCqKdTQTUnSFIjIUGRoAAACMgbggIZkAMaRiGaTlUM0mBgjA9GkWgvRqNGiL0tTpaC9LU6Wiq0anRoK0rU6NAVNO1NFKkKVFIAgMAANACABBRuABkHABQAEQQwFDMAAAAAAAEAICAFIAAQAACkACaYFSVAFIgAAAAAAAAAf/2Q=="
                  />
                </SwiperSlide>
              ))
              }</>
          )}
        </Swiper>
      </div>
      <div className="hidden sm:block min-h-full">
        <Swiper
          style={{
            "--swiper-navigation-color": "#ffffff",
            "--swiper-pagination-color": "#131b2e",
          }}
          slidesPerView={1}
          spaceBetween={0}
          // initialSlide={2}
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
          {allImgs.length === 0 ? null : (
            <>
              {allImgs[1].imgs.map((src) => (
                <SwiperSlide key={src}>
                  <Image
                    className="swiper-lazy"
                    priority
                    key={src}
                    src={src}
                    alt="carousel image"
                    layout="responsive"
                    width={1440}
                    height={345}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDxUPDxIVDw8VFQ8PDw8PDxUPDw8PFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDi4ZFRkrKys3NystLSsrNy03KzcrKzc3Kys3KysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAIYBeAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAGhABAQADAQEAAAAAAAAAAAAAAAECERITA//EABkBAQEBAQEBAAAAAAAAAAAAAAEAAgQDBf/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A8GRpjEYxrjH3XzF4xrijGNcQmmMa4xnjGuMCXjGkicVyBHFSFFMotBQqOo0mxdKxJlYmxrYmxJjYixtYmxJhYm4trim4tJhYm4t7iVxSc9xTcXRyOBS5rgi4OvguGS5L80X5u2/MvNkuG/MvJ3eReTLTh8h5O7yHkzS4fI/J2+R+TLTh8j8nb5H5IuHyHk7vIeQTgvyK/J335JvyScF+RX5O6/Ir8knDfmXm7fIr8moHH5jzdfmXm1GdcvAdXmGgeMa4xOMaYx0vFeMa4xGMa4wBeMa4xGMaYhLxXExcCVDhRQIAARUrFaLSSLE2NdJ0izsRcW+k3FJjcU8t+S5SYclw35HC1MOC4dHB8IufgebpnzOfNlOXzHm6/M/MVpx+Q8nb5DyZpcXkPJ2+R+TLTh8j8nb5H5AxxeQ8nb5H5guHyHk7vIvMJw35Jvyd/kV+STz78k35PQvyTfkU8+/IvJ335JvyLLg8yvzd1+SfJqBxX5h2X5m0HnYxpjBjGmMdLxPGNMYWMaYwJUjTGJxjSQI5FwpFSJHDKRUCAPR6FKdDS9DQSdDS5D5BZcjlryOUmPI5bcnwkw4HDfg+EWHBzBvMFTAJhMDnzdEwVMAXPPmqfN0TBUwZpc3mfm6vM/Nm1pyeQ83XwPMFy+Y83VwOAY5fMebq4HCLm8y83VwOAnJfmV+br8y80nHfmm/N235puBZcV+ab83bfmm/MhxX5pvzdt+ab82oHHfmHXfmCngTFpjicxaY4up4FjGmOImLTHEISLkGMXIEUipDkVIknRyK0cgJSHo9K0yk6VpUhyApmJzFcxVMQYz5PlrMVTFFjyfLaYjkJjwfDeYiYpMuDmDWYqmILKYLmLSYrmKTOYKmDSYqmLFaZcHw1mJ8gseBy20OQ0x5HLbRcgsuBw15PSTHgcttDlJhwLg25HKTn4K4OjkriWXNcCuDouJXFBzcJuDpuBXFoOW4G6LiDqfMTFcxVMV44utzlMWkxPHFcgSZiuYqmKpiEmQ9LkPQKNHIvk9BJ0cipFSApkXMTkXMWSmRUxVMVzEFMxOYtJicxBRMT5aaPQLLk+WnJ6SZ8nIvR6STIqQ5DBEhyAwRo9A2SWhoBNjQ0DBLQ0oJFoaUNJJ0WmhaQRYnTTQsQrO4puLWwrCyyuJXFrYWiGVxDTQSfL44tMcRjGkjsc5TFpMRjFyBFIqRUipAk6PS5D0CjR6Xo5AkyHIrlUgKZFzE5FyApkXIci5GWikVIcitAp0NL0NBJ0NKSiQMigadltJez2z2OhhabG0dDbJabG2ez2G2mzZ7VKGlnEw4kqGRhAAEERkgQMiyVBkmSsBgp83jFyCRpI63OJFyDGLkCKRUhyKkCKQ9KkOQFMhzFUipAkyKkORUgJSKkORUgahSLkORUjJKQ9HIASB0qiVSdqLUhU2i1FyKVanpNyTcimnQ6ZdF0E26HTHodDGo36OZMJkqZBuN5VSsZVystRrKuVlKqUFrs0bGwVi1Oy2mVbLadlaWarY2nY2WaoJ2e0DBbBDwsY0xgkXI6teAkXIJFSDUJFSCRUjKEh6ORUgRSHpUipAUyKkORcgaxMipFSHICmRUhyHoaUiqqaCVTTrPKmIWoyoyrPKlDKs7kMsmeWRCrki5JuSLkU0uRdMui6RbdHMmMyPoNRtMlzJhKuVmtxvjV41hjWmNYrcbSrlYyqlBbbPbLo+gmuy6Z9FckGmy2z6Los1psbZ9Dos1rs5WXStllpsIlCDzpFyAOh4qkXIAEqRUgASpFSGATkXIACci5AA0chyAMk9EACVRTBTOs8qAYmWVZ5UBoMsqzyoBDO5JtAKTsbAREqpQBWoqVeNAYrcaY1coDNbi5VykGSrY6ABHRXIghRaXQBZHQ6ALJ7VKAWVSgAsv/2Q=="
                  />
                </SwiperSlide>
              ))
              }</>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default CarouselContainer;
