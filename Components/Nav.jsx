"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserAuth } from "../app/context/AuthContext";
const Nav = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [popUp, setPopUp] = useState(false);
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      setPopUp(false);
      console.log("Signed Out Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
    console.log(user);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/allitems?&category=&search=${searchValue}`);
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
        <li className="shrink">
          <form onSubmit={handleSubmit} className="flex w-fit">
            <input
              className="border text-black rounded-l py-2 px-2 w-full md:w-[50vw] min-w-0 shrink"
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
                query: { category: "", search: searchValue },
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
        <li className="flex shrink-0 gap-1 ml-3 mr-0 sm:mr-3 md:mr-6">
          {user ? (
            <label className="menuButton" htmlFor="check">
              <input
                type="checkbox"
                value={popUp}
                onChange={(e) => setPopUp(!popUp)}
                id="check"
              />
              <span className="top"></span>
              <span className="mid"></span>
              <span className="bot"></span>
            </label>
          ) : (
            <button
              onClick={handleSignIn}
              className="hover:brightness-110 font-bold h-[35px] py-1 px-5 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white"
            >
              Login
            </button>
          )}
        </li>
      </ul>
      {popUp && (
        <div className="hamcard  absolute right-1 top-[69px]">
          <div className="infos">
            <div
              className="image"
              style={{ backgroundImage: `url(${user.photoURL})` }}
            ></div>
            <div className="info">
              <div>
                <p className="name">{user.displayName}</p>
                <p className="function">{user.email}</p>
              </div>
            </div>
          </div>
          <Link href="cart" className="cartbtn mt-3">
            <svg
              viewBox="0 0 16 16"
              className="bi bi-cart-check"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
            >
              <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
            </svg>
            <p className="text">Your Cart</p>
          </Link>
          <button
            onClick={() => handleSignOut()}
            className="cartbtn"
            type="button"
          >
            <div className="sign">
              <svg viewBox="0 0 512 512">
                <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
              </svg>
            </div>
            <p className="text">Sign Out</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
