"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserAuth } from "../../app/context/AuthContext";
import SelectLang from "./SelectLang";
import LoginPopup from "./LoginPopup";
import UserPopup from "./UserPopup";
const Nav = () => {
  // const { user, googleSignIn, facebookSignIn, logOut, Admins } = UserAuth();
  const { user, googleSignIn, logOut, Admins } = UserAuth();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [popUp, setPopUp] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      setPopUp(false);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleFacebookSignIn = async () => {
  //   try {
  //     await facebookSignIn();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSignOut = async () => {
    try {
      await logOut();
      localStorage.clear();
      setPopUp(false);
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
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchValue
      ? router.push(`/Items?&search=${searchValue}`)
      : router.push(`/Items`);
  };

  useEffect(() => {
    const cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
    setCartItemsCount(cartItems ? Object.keys(cartItems).length : 0);
  }, []);

  return (
    <div className="nav bg-[#131b2e] sticky top-0 z-[101] py-2 sm:px-4 px-2 text-white w-full">
      <ul className="flex items-center justify-between">
        {/* Logo */}
        <li className="shrink-0">
          <Link
            href="/"
            className="flex space-x-1 md:ml-4 items-center mr-1 sm:mr-3 "
          >
            <img src="/static/Logo.png" alt="logo" className="w-12 h-12" />
            <h1 className="font-bold sm:text-2xl lg:text-3xl whitespace-nowrap hidden sm:block">
              Gupta Crockery
            </h1>
          </Link>
        </li>
        {/* Search */}
        <li className="shrink min-w-[100px] xs:min-w-fit">
          <form onSubmit={handleSubmit} className="flex w-fit">
            <input
              className="border text-black rounded-l py-2 px-2 w-full md:w-[40vw] min-w-0 shrink"
              type="text"
              placeholder="Search for items..."
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            {searchValue ? (
              <Link
                href={{
                  pathname: `${process.env.NEXT_PUBLIC_URL}/Items`,
                  query: { search: searchValue },
                }}
                className="flex items-center justify-center rounded-r px-2 bg-[white] bg-gradient-to-r from-orange-500 to-orange-600 hover:brightness-110 hover:bg-[orange]"
              >
                <img
                  src="/static/icons/search-icon.png"
                  alt="Search Icon"
                  className=" invert min-w-5 min-h-5 max-w-5 max-h-5 rounded hover:scale-105 transition ease-in-out duration-300 active:scale-[120%]"
                />
              </Link>
            ) : (
              <Link
                href={{
                  pathname: `${process.env.NEXT_PUBLIC_URL}/Items`,
                }}
                className="flex items-center justify-center rounded-r px-2 bg-[white] bg-gradient-to-r from-orange-500 to-orange-600 hover:brightness-110 hover:bg-[orange]"
              >
                <img
                  src="/static/icons/search-icon.png"
                  alt="Search Icon"
                  className=" invert min-w-5 min-h-5 max-w-5 max-h-5 rounded hover:scale-105 transition ease-in-out duration-300 active:scale-[120%]"
                />
              </Link>
            )}
          </form>
        </li>
        {/* Menu */}
        <li className="flex items-center justify-evenly gap-3 sm:gap-8 shrink ml-2 mr-0 sm:mr-3 md:mr-6">
          {/* Language */}
          <SelectLang />
          {/* Cart */}
          {user && (
            <>
              <Link
                href={`${process.env.NEXT_PUBLIC_URL}/cart`}
                className="flex justify-center items-center aspect-square min-h-[30px]"
              >
                <div className="w-0">
                  <span className="NavCartCount">
                    {cartItemsCount ? cartItemsCount : 0}
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  viewBox="0 0 576 512"
                  fill="rgb(17, 17, 17)"
                  className="cart invert"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                </svg>
              </Link>
            </>
          )}
          {/* Hamburger */}
          <label className="menuButton" htmlFor="check">
            <input
              type="checkbox"
              value={popUp}
              onChange={() => {
                setPopUp(!popUp);
              }}
              id="check"
            />
            <span className="top"></span>
            <span className="mid"></span>
            <span className="bot"></span>
          </label>
        </li>
      </ul>

      {!user && popUp && <LoginPopup handleGoogleSignIn={handleGoogleSignIn} />}
      {user && popUp && (
        <UserPopup Admins={Admins} user={user} handleSignOut={handleSignOut} />
      )}
    </div>
  );
};

export default Nav;
