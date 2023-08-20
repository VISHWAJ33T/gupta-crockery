import React from "react";
import ItemsContainer from "./ItemsContainer";
import Link from "next/link";

const CategoryContainer = ({ category }) => {
  return (
    <div className="mx-[15px] sm:mx-[20px]">
      <Link
        href={{ pathname: "/search", query: { keyword: category } }}
        className="text-2xl font-bold text-black cursor-pointer w-fit relative left-1 sm:left-2 top-2"
      >
        {category}
      </Link>
      <div className="flex items-container-container overflow-x-auto gap-x-3 py-3">
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
        <ItemsContainer category={category} />
      </div>
    </div>
  );
};

export default CategoryContainer;
