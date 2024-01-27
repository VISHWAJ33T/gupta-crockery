"use client";
import ScrollToTop from "react-scroll-to-top";
import CarouselContainer from "@/Components/home/carousel/Carousel.jsx";
import Categories from "@/Components/home/all-categories/Categories.jsx";
import CategoryContainer from "@/Components/home/single-category/CategoryContainer.jsx";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store.js";
import Loading from "../Components/loading/loading-pages/HomePageLoading.jsx";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Provider store={store}>
        <ScrollToTop smooth color="#ff640e" />
        {loading && <Loading />}
        <div className={loading ? `hidden` : null}>
          <div className="w-[100vw] lg:relative">
            <CarouselContainer />
          </div>
          <div className="lg:relative z-[2] lg:top-[0]">
            <Categories />
          </div>

          <div className="lg:relative z-[2] lg:top-[0] flex flex-col gap-y-6">
            <CategoryContainer category="steel" />
            <CategoryContainer category="plastic" />
            <CategoryContainer category="aluminium" />
            <CategoryContainer category="glass" />
            <CategoryContainer category="brass" />
            {/* <CategoryContainer category="iron" /> */}
            <CategoryContainer category="copper" />
            {/* <CategoryContainer category="bone china" /> */}
            {/* <CategoryContainer category="Kansa" /> */}
            {/* <CategoryContainer category="melamine" /> */}
            <CategoryContainer category="wooden" />
            {/* <CategoryContainer category="silicon" /> */}
          </div>
        </div>
      </Provider>
    </>
  );
}
