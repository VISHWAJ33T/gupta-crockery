"use client";
import { useEffect, useState } from "react";
import SingleCartItem from "./SingleCartItem";
import { UserAuth } from "../app/context/AuthContext";

const CartItems = () => {
  const { user, googleSignIn, facebookSignIn } = UserAuth();
  const [items, setItems] = useState([]);
  const [mounted, setMounted] = useState(false);
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const handleFacebookSignIn = async () => {
    try {
      await facebookSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchItemsFromServer = async () => {
      try {
        const response = await fetch(`/api/user/${user.uid}`);
        if (response.ok) {
          const data = await response.json();
          const serverItems = data.cartItems || [];
          const localItems =
            JSON.parse(localStorage.getItem("cartItems")) || [];
          // Merge serverItems and localItems while ensuring uniqueness
          const mergedItems = [...new Set([...serverItems, ...localItems])];
          const uniqueItems = mergedItems.filter(
            (item, index, self) =>
              self.findIndex((i) => i.id === item.id) === index
          );
          setItems(uniqueItems);
        } else {
          console.error("Failed to fetch cart items:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    if (user) {
      fetchItemsFromServer();
    }
  }, [user]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cartItems", JSON.stringify(items));
    } else {
      setMounted(true);
    }
  }, [items]);

  const updateQtyValue = (itemId, newQtyValue) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, qtyValue: newQtyValue } : item
    );

    setItems(updatedItems);
  };

  const deleteItem = (itemId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item from the cart?"
    );

    if (confirmed) {
      const updatedItems = items.filter((item) => item.id !== itemId);
      setItems(updatedItems);
      alert("Item deleted from cart successfully");
    }
  };

  const totalAmount = items.reduce(
    (total, item) =>
      total + (item.discounted_price || item.price) * item.qtyValue,
    0
  );
  const handleSaveCart = async () => {
    try {
      const response = await fetch(`/api/user/${user.uid}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.displayName,
          email: user.email,
          usid: user.uid,
          photoURL: user.photoURL,
          cartItems: items,
        }),
      });

      if (response.ok) {
        alert("Cart saved successfully");
      } else {
        console.error("Failed to save cart:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  };
  return (
    <div className="mx-2 sm:mx-0">
      {user ? (
        <>
          <button
            onClick={(e) => {
              handleSaveCart();
            }}
            title="Save"
            className="absolute top-25 right-5 cursor-pointer flex items-center fill-white bg-black hover:bg-orange-500 active:border active:border-white rounded-md duration-100 p-2"
          >
            <svg
              viewBox="0 -0.5 25 25"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
            <span className="text-sm hidden sm:block text-white font-bold pr-1">
              Save Cart
            </span>
          </button>
          <h2 className="text-center text-3xl font-bold w-full my-8">
            Shopping Cart
          </h2>
          {items.length > 0 ? (
            <>
              {items.map((item) => (
                <SingleCartItem
                  key={item.id}
                  item={item}
                  updateQtyValue={updateQtyValue}
                  deleteItem={deleteItem}
                />
              ))}
              <div className="border-4  mt-5 w-[90%] mx-auto text-center px-5 py-5">
                <h3 className="font-bold text-2xl">Summary</h3>
                <strong className="text-lg">Total Cost</strong>
                <table className="table-auto w-full text-center">
                  <tbody>
                    <tr>
                      <td className="w-[50%]">
                        <strong>Subtotal: </strong>
                      </td>
                      <td className="w-[50%]">
                        <strong>₹{totalAmount}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-[50%]">
                        <strong>Additional Charges: </strong>
                      </td>
                      <td className="w-[50%]">NIL</td>
                    </tr>
                    <tr>
                      <td className="w-[50%]">
                        <strong>Total Amount:</strong>
                      </td>
                      <td className="w-[50%]">
                        <strong>₹{totalAmount}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <img
                className="h-80"
                src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"
                alt="Empty Shopping Cart"
              />
              <p className="text-center text-3xl">
                Your Shopping Cart is Empty
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-[100%] w-[100%]">
          {/* <h1 className="text-3xl font-bold mt-40 mb-10">
            Please Login to access your shopping cart
          </h1> */}
          <div className="transition duration-150 scale-100 sm:scale-125 m-40 ease-in-out">
            <form action="" className="form">
              <p>
                Welcome,<span>Login to access your shopping cart</span>
              </p>
              <button className="oauthButton" onClick={handleGoogleSignIn}>
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
              <button
                className="facebookbutton oauthButton"
                onClick={handleFacebookSignIn}
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
              </button>
            </form>
          </div>
          {/* <button
            className="mb-40 hover:brightness-110 font-bold h-[35px] py-1 px-5 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white"
            onClick={(e) => {
              handleGoogleSignIn();
            }}
          >
            Login
          </button> */}
        </div>
      )}
    </div>
  );
};

export default CartItems;
