"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ItemsContainer from "../../single-item/ItemsContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar, FreeMode } from "swiper/modules";
import { ItemsContainerSkeletonCard } from "@/Components/loading/loading-skeletons/ItemsContainer-skeleton-card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
const CategoryContainer = ({ cartItems, setCartItems, category }) => {
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(`/api/item?category=${category}`);
    const responseData = await response.json();
    const data = responseData.reverse();
    setAllItems(data);
  };
  if (allItems.length === 0) {
    return (
      <div className="space-y-3 sm:space-y-5 lg:space-y-6 mx-[15px] px-1 sm:px-2">
        <div>
          <Link
            href={{
              pathname: "/Items",
              query: { category: category, search: "" },
            }}
            className="text-3xl font-bold text-black cursor-pointer w-fit relative left-1 sm:left-2 top-0"
          >
            {category[0].toUpperCase() + category.slice(1)}
          </Link>
          <div className="flex gap-x-3 w-[100%] overflow-hidden gap-y-3 rounded-lg">
            <ItemsContainerSkeletonCard isLoading={true} />
            <ItemsContainerSkeletonCard isLoading={true} />
            <ItemsContainerSkeletonCard isLoading={true} />
            <ItemsContainerSkeletonCard isLoading={true} />
            <ItemsContainerSkeletonCard isLoading={true} />
            <ItemsContainerSkeletonCard isLoading={true} />
            <ItemsContainerSkeletonCard isLoading={true} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className="itemsContainer mx-[15px] sm:mx-[20px] scroll-view shadow-2xl"
        id={`${category[0].toUpperCase() + category.slice(1)}`}
      >
        <Link
          href={{
            pathname: "/Items",
            query: { category: category },
          }}
          className="text-3xl font-bold text-black cursor-pointer w-fit relative left-1 sm:left-2 top-0"
        >
          {category[0].toUpperCase() + category.slice(1)}
        </Link>
        <Swiper
          style={{
            "--swiper-navigation-color": "#000000",
            "--swiper-pagination-color": "#131b2e",
          }}
          slidesPerView={"auto"}
          spaceBetween={15}
          loop={false}
          // autoplay={{
          //   delay: 3000,
          //   // delay: Math.floor(Math.random() * (4000 - 1000) ) + 1000,
          //   disableOnInteraction: true,
          // }}
          scrollbar={{
            hide: true,
          }}
          freeMode={true}
          navigation={true}
          modules={[Autoplay, Scrollbar, Navigation, FreeMode]}
          className="mySwiper"
        >
          <div className="flex items-container-container overflow-x-auto gap-x-3">
            {allItems.map((item) => (
              <SwiperSlide key={item._id} className="category-swiper">
                <ItemsContainer
                  id={item._id}
                  title={item.title}
                  price={item.price}
                  stock={item.stock}
                  isDiscounted={item.isDiscounted}
                  discounted_percent={
                    item.isDiscounted ? item.discounted_percent : ""
                  }
                  discounted_price={
                    item.isDiscounted ? item.discounted_price : ""
                  }
                  main_img={item.main_img}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default CategoryContainer;
