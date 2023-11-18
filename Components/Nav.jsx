"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserAuth } from "../app/context/AuthContext";
const Nav = () => {
  // const { user, googleSignIn, facebookSignIn, logOut, Admins } = UserAuth();
  const { user, googleSignIn, logOut, Admins } = UserAuth();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [popUp, setPopUp] = useState(false);
  const [showLoginPopUp, setShowLoginPopUp] = useState(false);
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
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
    // console.log(user);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchValue
      ? router.push(`/Items?&search=${searchValue}`)
      : router.push(`/Items`);
  };

  useEffect(() => {
    const cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
    setCartItemsCount(cartItems ? cartItems.length : 0);
  }, []);

  const convertToIST = (inputDateString) => {
    const date = new Date(inputDateString);
    date.setUTCHours(date.getUTCHours() + 5); // Add 5 hours for IST
    date.setUTCMinutes(date.getUTCMinutes() + 30); // Add 30 minutes for IST

    const options = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };

    return date.toLocaleString("en-IN", options);
  };

  return (
    <div className="nav bg-[#131b2e] sticky top-0 z-[101] py-2 px-4 sm:px-0 text-white w-full">
      <ul className="flex items-center justify-between">
        <li className="shrink-0">
          <Link href="/" className="flex space-x-1 md:ml-4 items-center mr-3 ">
            <img src="/static/Logo.png" alt="logo" className="w-12 h-12" />
            <h1 className="font-bold text-xl sm:text-3xl whitespace-nowrap hidden sm:block">
              Gupta Crockery
            </h1>
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
        <li className="flex shrink-0 gap-1 ml-3 mr-0 sm:mr-3 md:mr-6">
          {user ? (
            <>
              <Link
                href={`${process.env.NEXT_PUBLIC_URL}/cart`}
                className="flex justify-center items-center mx-1 sm:mx-3"
              >
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
            </>
          ) : (
            <>
              <button
                onClick={(e) => setShowLoginPopUp(!showLoginPopUp)}
                // onClick={(e) => handleFacebookSignIn()}
                // onClick={handleGoogleSignIn()}
                className="hover:brightness-110 font-bold h-[35px] py-1 px-5 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white"
              >
                Login
              </button>
              {showLoginPopUp && (
                <div className="transition duration-150 ease-in-out absolute right-2 top-[69px]">
                  <div className="form">
                    <p>
                      Welcome,<span>sign in to continue</span>
                    </p>
                    <button
                      className="oauthButton"
                      onClick={() => handleGoogleSignIn()}
                    >
                      <svg className="icon" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        ></path>
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        ></path>
                        <path d="M1 1h22v22H1z" fill="none"></path>
                      </svg>
                      Continue with Google
                    </button>
                    {/* <button
                      className="facebookbutton oauthButton"
                      onClick={(e) => handleFacebookSignIn()}
                    >
                      <svg
                        stroke="#ffffff"
                        viewBox="-143 145 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        version="1.1"
                        fill="#ffffff"
                      >
                        <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          id="SVGRepo_tracerCarrier"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M169.5,357.6l-2.9,38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3 c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"></path>{" "}
                        </g>
                      </svg>
                      Continue with Facebook
                    </button> */}
                  </div>
                </div>
              )}
            </>
          )}
        </li>
      </ul>

      {popUp && (
        <div className="hamcard transition duration-150 ease-in-out absolute right-1 top-[69px]">
          <div className="infos">
            <div
              className="image"
              style={{ backgroundImage: `url(${user.photoURL})` }}
            ></div>
            <div className="info">
              <div>
                <p className="name">{user.displayName}</p>
                <p className="function">{user.email}</p>
                {user.phoneNumber && (
                  <p className="function">{user.phoneNumber}</p>
                )}
                {/* <p className="function">
                  Account created on&nbsp;
                  {convertToIST(user.metadata.creationTime)}
                </p>
                <p className="function">
                  Last login at &nbsp;
                  {convertToIST(user.metadata.lastSignInTime)}
                </p> */}
              </div>
            </div>
          </div>
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
          {Admins && Admins.includes(user.email) && (
            <>
              <Link
                href={`${process.env.NEXT_PUBLIC_URL}/Admin729`}
                className="cartbtn"
                type="button"
              >
                <p className="text">Admin Panel</p>
              </Link>
              <Link
                href={`${process.env.NEXT_PUBLIC_URL}/Admin729/createItem`}
                className="cartbtn"
                type="button"
              >
                <p className="text">Create a new Item</p>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Nav;
