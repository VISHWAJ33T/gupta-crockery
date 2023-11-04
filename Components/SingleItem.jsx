"use client";
import { useEffect, useState } from "react";
import { UserAuth } from "../app/context/AuthContext";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image"; // Import next/image component
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const SingleItem = ({ item }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const { user, googleSignIn, Admins } = UserAuth();
  const [confirmDel, setConfirmDel] = useState(false);
  const URL = process.env.NEXT_PUBLIC_URL;
  const DeleteItem = async () => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure you want to delete this item?",
      buttons: [
        {
          label: "Yes",
          onClick: () => setConfirmDel(true),
        },
        {
          label: "No",
        },
      ],
      overlayClassName: "overlay-custom-class-name",
    });
  };
  useEffect(() => {
    const handleDel = async () => {
      if (confirmDel === true) {
        if (!item._id)
          return confirmAlert({
            title: `Invalid Item`,
            buttons: [
              {
                label: "Ok",
              },
            ],
            closeOnEscape: true,
            closeOnClickOutside: true,
            keyCodeForClose: [8, 32],
            overlayClassName: "overlay-custom-class-name",
          });
        try {
          const response = await fetch(`${URL}/api/item/${item._id}`, {
            method: "DELETE",
          });
          if (response.status === 500) {
            confirmAlert({
              title: `Error 500`,
              message:
                "There was some error trying to delete this item. Please try again",
              buttons: [
                {
                  label: "Ok",
                },
              ],
              closeOnEscape: true,
              closeOnClickOutside: true,
              keyCodeForClose: [8, 32],
              overlayClassName: "overlay-custom-class-name",
            });
          }
          if (response.ok) {
            confirmAlert({
              title: `Item Deleted Successfully`,
              buttons: [
                {
                  label: "Ok",
                },
              ],
              closeOnEscape: true,
              closeOnClickOutside: true,
              keyCodeForClose: [8, 32],
              overlayClassName: "overlay-custom-class-name",
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    handleDel();
    return setConfirmDel(false);
  }, [confirmDel]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const addToCart = (
    id,
    title,
    price,
    isDiscounted,
    discounted_price,
    discounted_percent,
    qtyValue,
    img_src,
    stock
  ) => {
    if (!user || user === null) {
      confirmAlert({
        title: `You need to login first to add this item to cart`,
        buttons: [
          {
            label: "Login later",
          },
          {
            label: "Login Now",
            onClick: () => {
              googleSignIn();
            },
          },
        ],
        closeOnEscape: true,
        closeOnClickOutside: true,
        keyCodeForClose: [8, 32],
        overlayClassName: "overlay-custom-class-name",
      });
    } else {
      const existingCartItem = cartItems.find((item) => item.id === id);

      if (existingCartItem) {
        confirmAlert({
          title: `${title} is already in the cart.`,
          buttons: [
            {
              label: "Ok",
            },
          ],
          closeOnEscape: true,
          closeOnClickOutside: true,
          keyCodeForClose: [8, 32],
          willUnmount: () => {},
          afterClose: () => {},
          onClickOutside: () => {},
          onKeypress: () => {},
          onKeypressEscape: () => {},
          overlayClassName: "overlay-custom-class-name",
        });
      } else {
        confirmAlert({
          title: "Confirm to Add",
          message: `Are you sure you want to add this to cart?`,
          childrenElement: () => (
            <div className="object-contain py-1 min-w-[160px]">
              <Image
                src={img_src || "/static/blur_data.jpeg"}
                alt="item image"
                width={160}
                height={160}
                placeholder="blur"
                className="object-contain min-h-[160px] max-h-[160px] sm:min-h-[160px] min-w-[160px]"
                blurDataURL="/static/blur_data.jpeg"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <h3>{title}</h3>
            </div>
          ),
          buttons: [
            {
              label: "Yes",
              onClick: () => {
                handleAdc(
                  id,
                  title,
                  price,
                  isDiscounted,
                  discounted_price,
                  discounted_percent,
                  qtyValue,
                  img_src,
                  stock
                );
              },
            },
            {
              label: "No",
            },
          ],
          overlayClassName: "overlay-custom-class-name",
        });
      }
    }
  };
  const handleAdc = async (
    id,
    title,
    price,
    isDiscounted,
    discounted_price,
    discounted_percent,
    qtyValue,
    img_src,
    stock
  ) => {
    const newCartItem = {
      id,
      title,
      price,
      isDiscounted,
      discounted_price,
      discounted_percent,
      qtyValue,
      img_src,
      stock,
    };
    const updatedCartItems = [...cartItems, newCartItem];
    await setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    confirmAlert({
      title: `${title} added to cart successfully`,
      buttons: [{ label: "Ok" }],
      closeOnEscape: true,
      closeOnClickOutside: true,
      keyCodeForClose: [8, 32],
      willUnmount: () => {},
      afterClose: () => {},
      onClickOutside: () => {},
      onKeypress: () => {},
      onKeypressEscape: () => {},
      overlayClassName: "overlay-custom-class-name",
    });
  };
  return (
    <div className="flex flex-col sm:flex-row mx-3 mt-5 sm:mx-5">
      {user && Admins && Admins.includes(user.email) && (
        <div className="z-[3] flex justify-end absolute right-4 p-1 gap-x-1">
          <Link
            href={{
              pathname: "Admin729/editItem",
              query: { id: item._id },
            }}
            className="edit-button"
          >
            <svg className="edit-svgIcon" viewBox="0 0 512 512">
              <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
            </svg>
          </Link>
          <button className="delete-button" onClick={DeleteItem}>
            <svg className="delete-svgIcon" viewBox="0 0 448 512">
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
            </svg>
          </button>
        </div>
      )}
      <div className="item min-w-[30vw] sm:max-w-[40vw] md:max-w-[38vw] mx-3 sm:mx-5 mt-5 h-[400px] sm:h-[450px] overflow-auto shadow-md">
        <Swiper
          style={{
            "--swiper-navigation-color": "#131b2e",
            "--swiper-pagination-color": "#131b2e",
          }}
          loop={(item.extra_imgs && item.extra_imgs.length) > 3 ? true : false}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 max-h-[300px] sm:max-h-[350px]"
        >
          <SwiperSlide>
            <img
              src={item.main_img || "/static/blur_data.jpeg"}
              alt="item image"
            />
          </SwiperSlide>
          {item.extra_imgs &&
          item.extra_imgs.length !== 0 &&
          item.extra_imgs[0] !== ""
            ? item.extra_imgs.map((src) => (
                <SwiperSlide key={src}>
                  <img
                    src={
                      src ||
                      "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
                    }
                    alt="item image"
                  />
                </SwiperSlide>
              ))
            : null}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={2}
          navigation={false}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={item.main_img || "/static/blur_data.jpeg"}
              alt="item image"
            />
          </SwiperSlide>
          {item.extra_imgs &&
          item.extra_imgs.length !== 0 &&
          item.extra_imgs[0] !== ""
            ? item.extra_imgs.map((src) => (
                <SwiperSlide key={src}>
                  <img
                    src={
                      src ||
                      "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
                    }
                    alt="item image"
                  />
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
      <div className="mx-3 sm:mx-5">
        <h2 className="font-bold text-3xl mt-5">{item.title || "Title"}</h2>
        <p
          className="text-xl"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
        <div className="flex gap-x-2 items-center justify-start my-5">
          {item.isDiscounted == true && (
            <span className="discount-btn">{item.discounted_percent}% Off</span>
          )}
          <div className="flex items-center gap-x-2">
            {item.isDiscounted == true ? (
              <>
                <span className="text-xl">₹{item.discounted_price}</span>
                <span className="text-xs line-through">₹{item.price}</span>
              </>
            ) : (
              <span className="text-xl">₹{item.price}</span>
            )}
          </div>
        </div>

        {item.stock !== 0 ? (
          <button
            className="atbbutton bg-gradient-to-r from-orange-400 to-orange-500 text-white"
            onClick={() => {
              addToCart(
                item._id,
                item.title,
                item.price,
                item.isDiscounted,
                item.discounted_price,
                item.discounted_percent,
                1,
                item.main_img,
                item.stock
              );
            }}
          >
            <span className="IconContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
                fill="rgb(17, 17, 17)"
                className="cart invert"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
              </svg>
            </span>
            <p className="text">Add to Cart</p>
          </button>
        ) : (
          <span className="text-sm text-[crimson]">
            This Item is out of Stock
          </span>
        )}
      </div>
    </div>
  );
};

export default SingleItem;
