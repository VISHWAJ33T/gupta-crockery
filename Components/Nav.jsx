"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
const Nav = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(
      `/allitems?price=&category=&search=${searchValue}`
    );
  };

  useEffect(() => {
    const cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
    setCartItemsCount(cartItems ? cartItems.length : 0);
  }, []);

  return (
    <div className="nav bg-[#131b2e] sticky top-0 z-[100] py-2 px-4 sm:px-0 text-white w-full">
      <ul className="flex items-center justify-between">
        <li className="shrink-0">
          <Link href="/" className="flex space-x-1 md:ml-4 items-center mr-3 ">
            <img src="/static/Logo.png" alt="LOGO" className="w-12 h-12" />
            <h3 className="font-bold text-xl sm:text-3xl whitespace-nowrap hidden sm:block">
              Gupta Crockery
            </h3>
          </Link>
        </li>
        <li>
          <form
            onSubmit={handleSubmit}
            className="flex w-max"
          >
            <input
              className="border text-black rounded-l py-2 px-2 w-full md:w-[50vw]"
              type="text"
              placeholder="Search for items..."
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <Link
              href={{
                pathname: "/allitems",
                query: { price: "", category: "", search: searchValue },
              }}
              className="flex items-center justify-center rounded-r px-1 bg-[white] border border-l-1"
            >
              <img
                src="/static/icons/search-icon.png"
                alt="Search Icon"
                className="min-w-5 min-h-5 max-w-5 max-h-5 rounded hover:scale-105 transition ease-in-out duration-300 active:scale-[120%]"
              />
            </Link>
          </form>
        </li>
        <li className="flex shrink-0 gap-1 ml-3 mr-2 sm:mr-3 md:mr-6">
          <Link href="cart" className="flex items-end gap-0 justify-center ">
            <img
              src="/static/icons/shopping-cart.png"
              alt="Cart"
              className="w-[30px] h-[30px] md:ml-8 md:mr-1 rounded invert"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
