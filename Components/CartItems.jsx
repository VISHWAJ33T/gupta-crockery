"use client";
// CartItems.js
import React, { useState, useEffect } from "react";
import SingleCartItem from "./SingleCartItem";

const CartItems = () => {
  const initialItems = [
    { id: 1, title: "Item 1", price: 1000, qtyValue: 1 },
    { id: 2, title: "Item 2", price: 20, qtyValue: 10 },
    { id: 3, title: "Item 3", price: 500, qtyValue: 4 },
    { id: 4, title: "Item 4", price: 250, qtyValue: 6 },
  ];

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
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    alert("Item deleted from cart successfully");
    // window.location.reload();
  };

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.qtyValue,
    0
  );

  return (
    <div className="mx-2 sm:mx-0">
      <h2 className="text-center text-3xl font-bold w-full my-8">
        Shopping Cart
      </h2>
      {items.length > 0 ? (
        <div className="flex flex-col md:flex-row">
          <table className="w-full md:w-[70%] text-center table-auto">
            <thead>
              <tr>
                <th>Items</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <SingleCartItem
                  key={item.id}
                  item={item}
                  updateQtyValue={updateQtyValue}
                  deleteItem={deleteItem}
                />
              ))}
            </tbody>
          </table>
          <div className="border-4 md:w-[30%] mx-auto md:mx-4 mt-5 w-[90%] md:mt-0 text-center px-5 py-5">
            <h3 className="font-bold">Summary</h3>
            <strong>Total Cost</strong>
            <table className="table-auto w-full text-start">
              <tbody>
                <tr>
                  <td>
                    <strong>Subtotal: </strong>
                  </td>
                  <td>
                    <strong>{totalAmount}₹</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Additional Charges: </strong>
                  </td>
                  <td>NIL</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total Amount:</strong>
                  </td>
                  <td>
                    <strong>{totalAmount}₹</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="text-center text-2xl mt-10 mb-20">
          Your shopping cart is empty.
        </p>
      )}
    </div>
  );
};

export default CartItems;
