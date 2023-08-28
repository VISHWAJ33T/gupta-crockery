"use client";
// CartItems.js
import { useEffect, useState } from "react";
import SingleCartItem from "./SingleCartItem";

const CartItems = () => {
  const initialItems = [];

  const [items, setItems] = useState([]);

  // Load items from local storage when the component mounts
  useEffect(() => {
    const storedItems =
      JSON.parse(localStorage.getItem("cartItems")) || initialItems;
    setItems(storedItems);
  }, []);

  // Update local storage when items change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  const updateQtyValue = (itemId, newQtyValue) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, qtyValue: newQtyValue } : item
    );

    setItems(updatedItems);
  };

  const deleteItem = (itemId) => {
    const confirmed = window.confirm("Are you sure you want to delete this item from the cart?");

    if (confirmed) {
      const updatedItems = items.filter((item) => item.id !== itemId);
      setItems(updatedItems);
      alert("Item deleted from cart successfully");
      // window.location.reload();
    }
  };

  const totalAmount = items.reduce(
    (total, item) => total + (item.discounted_price || item.price) * item.qtyValue,
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
                    <strong>{totalAmount}₹</strong>
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
                    <strong>{totalAmount}₹</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p className="text-center text-2xl mt-10 mb-20">
          Your shopping cart is empty.
        </p>
      )}
    </div>
  );
};

export default CartItems;
