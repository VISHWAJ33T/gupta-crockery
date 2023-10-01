"use client";
import { useEffect, useState } from "react";
import SingleCartItem from "./SingleCartItem";

const CartItems = () => {
  const initialItems = [];
  // const initialItems = [{ "id": "64e8800ad66cb3f799dd3bcb", "title": "Milton Duo DLX 1000 Thermosteel", "price": 1450, "isDiscounted": true, "discounted_price": 1090, "discounted_percent": 25, "qtyValue": 1, "img_src": "https://m.media-amazon.com/images/I/61c-GtJ+0eL._SL1500_.jpg", "stock": 3 }, { "id": "64e88778e3eb898e6a25fed4", "title": "PrimeWorld Aqua Old Fashioned", "price": 899, "isDiscounted": true, "discounted_price": 359, "discounted_percent": 60, "qtyValue": 1, "img_src": "https://m.media-amazon.com/images/I/61vzrTp85HS._SX679_.jpg", "stock": 5 }];

  const [items, setItems] = useState([]);

  const [mounted, setMounted] = useState(false);

  // Load items from local storage when the component mounts
  useEffect(() => {
    // const storedItems = initialItems;
    const storedItems =
      JSON.parse(localStorage.getItem("cartItems")) || initialItems;
    setItems(storedItems);
  }, []);

  // Update local storage when items change
  useEffect(() => {
    if (mounted) {
      // Check if the component has mounted
      localStorage.setItem("cartItems", JSON.stringify(items));
    } else {
      // Component is mounting, set mounted to true
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
      "Are you sure you want to delete this item from the bag?"
    );

    if (confirmed) {
      const updatedItems = items.filter((item) => item.id !== itemId);
      setItems(updatedItems);
      alert("Item deleted from bag successfully");
      // window.location.reload();
    }
  };

  const totalAmount = items.reduce(
    (total, item) =>
      total + (item.discounted_price || item.price) * item.qtyValue,
    0
  );

  return (
    <div className="mx-2 sm:mx-0">
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
            src="https://cdn.dribbble.com/users/1097272/screenshots/10671922/empty_shoppin_bag.png"
            alt="Empty Shopping Cart"
          />
          <p className="text-center text-3xl">Your Shopping Cart is Empty</p>
        </div>
      )}
    </div>
  );
};

export default CartItems;
