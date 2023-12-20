"use client";
import { Provider } from "react-redux";
import { store } from "../../redux/store.js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserAuth } from "../../app/context/AuthContext";
import SelectLang from "./SelectLang";
import LoginPopup from "./LoginPopup";
import UserPopup from "./UserPopup";
import CartIcon from "./CartControl.jsx";

const Nav = () => {
  // const { user, googleSignIn, facebookSignIn, logOut, Admins } = UserAuth();
  const { user, googleSignIn, logOut, Admins } = UserAuth();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
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

  return (
    <Provider store={store}>
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
            {user && <CartIcon user={user} />}
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

        {!user && popUp && (
          <LoginPopup handleGoogleSignIn={handleGoogleSignIn} />
        )}
        {user && popUp && (
          <UserPopup
            Admins={Admins}
            user={user}
            handleSignOut={handleSignOut}
          />
        )}
      </div>
    </Provider>
  );
};

export default Nav;
