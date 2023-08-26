"use client"
import CarouselContainer from "@/Components/Carousel";
import Categories from "@/Components/Categories";
import CategoryContainer from "@/Components/CategoryContainer";
import { useState, useEffect } from "react";
export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  return (
    <>
      <div className="w-[100vw] lg:relative">
        {/* <div className="h-[25vh] sm:h-[50vh] xl:h-[55vh] w-[100vw]"> */}
        <CarouselContainer />
      </div>
      <div className="lg:relative z-50 lg:top-[0]"><Categories /></div>

      <div className="lg:relative z-50 lg:top-[0] flex flex-col gap-y-6">
        <CategoryContainer cartItems={cartItems} setCartItems={setCartItems} category="steel" />
        <CategoryContainer cartItems={cartItems} setCartItems={setCartItems} category="copper" />
        <CategoryContainer cartItems={cartItems} setCartItems={setCartItems} category="plastic" />
        <CategoryContainer cartItems={cartItems} setCartItems={setCartItems} category="glass" />
        <CategoryContainer cartItems={cartItems} setCartItems={setCartItems} category="wooden" />
        <CategoryContainer cartItems={cartItems} setCartItems={setCartItems} category="brass" />
        <CategoryContainer cartItems={cartItems} setCartItems={setCartItems} category="aluminium" />
        <CategoryContainer cartItems={cartItems} setCartItems={setCartItems} category="bone china" />
        <CategoryContainer cartItems={cartItems} setCartItems={setCartItems} category="melamine" />
        <CategoryContainer cartItems={cartItems} setCartItems={setCartItems} category="silicon" />
        <CategoryContainer cartItems={cartItems} setCartItems={setCartItems} category="iron" />
        <CategoryContainer cartItems={cartItems} setCartItems={setCartItems} category="Kansa" />
      </div>
    </>
  );
}
