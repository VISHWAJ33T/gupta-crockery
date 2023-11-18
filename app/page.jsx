"use client";
import ScrollToTop from "react-scroll-to-top";
import CarouselContainer from "@/Components/home/carousel/Carousel.jsx";
import Categories from "@/Components/home/all-categories/Categories.jsx";
import CategoryContainer from "@/Components/home/single-category/CategoryContainer.jsx";
import { useEffect, useState } from "react";

import Loading from "./loading.jsx";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const storedCartItems = localStorage.getItem("cartItems");
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }

      setLoading(false);
    }, 0);
  }, []);

  return (
    <>
      <ScrollToTop smooth color="#ff640e" />
      {loading && <Loading />}
      <div className={loading ? `hidden` : null}>
        <div className="w-[100vw] lg:relative">
          {/* <div className="h-[25vh] sm:h-[50vh] xl:h-[55vh] w-[100vw]"> */}
          <CarouselContainer />
        </div>
        <div className="lg:relative z-[2] lg:top-[0]">
          <Categories />
        </div>

        <div className="lg:relative z-[2] lg:top-[0] flex flex-col gap-y-6">
          <CategoryContainer
            cartItems={cartItems}
            setCartItems={setCartItems}
            category="steel"
          />
          <CategoryContainer
            cartItems={cartItems}
            setCartItems={setCartItems}
            category="plastic"
          />
          <CategoryContainer
            cartItems={cartItems}
            setCartItems={setCartItems}
            category="aluminium"
          />
          <CategoryContainer
            cartItems={cartItems}
            setCartItems={setCartItems}
            category="glass"
          />
          {/* <CategoryContainer
            cartItems={cartItems}
            setCartItems={setCartItems}
            category="brass"
          /> */}
          {/* <CategoryContainer
            cartItems={cartItems}
            setCartItems={setCartItems}
            category="iron"
          />
          <CategoryContainer
            cartItems={cartItems}
            setCartItems={setCartItems}
            category="copper"
          />
          <CategoryContainer
            cartItems={cartItems}
            setCartItems={setCartItems}
            category="bone china"
          />
          <CategoryContainer
            cartItems={cartItems}
            setCartItems={setCartItems}
            category="Kansa"
          />
          <CategoryContainer
            cartItems={cartItems}
            setCartItems={setCartItems}
            category="melamine"
          />
          <CategoryContainer
            cartItems={cartItems}
            setCartItems={setCartItems}
            category="wooden"
          />
          <CategoryContainer
            cartItems={cartItems}
            setCartItems={setCartItems}
            category="silicon"
          /> */}
        </div>
      </div>
    </>
  );
}
