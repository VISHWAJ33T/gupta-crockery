"use client";
import Link from "next/link";
import ItemsContainer from "./ItemsContainer";
import { useState, useEffect } from "react";

const CategoryContainer = ({ category }) => {
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(`/api/item?category=${category}`);
    const data = await response.json();
    setAllItems(data);
  };
  return (
    <>
      {allItems.length === 0 ? null : (
        <div className="mx-[15px] sm:mx-[20px]">
          <Link
            href={{
              pathname: "/allitems",
              query: { price: "", category: category, search: "" },
            }}
            className="text-2xl font-bold text-black cursor-pointer w-fit relative left-1 sm:left-2 top-2"
          >
            {category[0].toUpperCase() + category.slice(1)}
          </Link>
          <div className="flex items-container-container overflow-x-auto gap-x-3 py-3">
            {allItems.map((item) => (
              <ItemsContainer
                key={item._id}
                title={item.title}
                img={item.main_img}
                price={item.price}
                isDiscounted={item.isDiscounted}
                discounted_price={
                  item.isDiscounted ? item.discounted_price : ""
                }
                discounted_percent={
                  item.isDiscounted ? item.discounted_percent : ""
                }
                stock={item.stock}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryContainer;
