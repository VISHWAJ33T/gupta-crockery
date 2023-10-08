"use client";
import React, { useState, useEffect } from "react";
import Form from "@/Components/Form";
import Link from "next/link";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const page = () => {
  const [confirmDel, setConfirmDel] = useState(false);
  const [objectId, setObjectId] = useState("");
  const URL = process.env.NEXT_PUBLIC_URL;

  const handleDelete = async () => {
    if (
      !objectId ||
      objectId === "" ||
      objectId === null ||
      objectId === undefined
    ) {
      return confirmAlert({
        title: `Invalid Object Id`,
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
    try {
      const response = await fetch(`${URL}/api/item/${objectId}`, {
        method: "DELETE",
      });
      if (response.status === 500) {
        confirmAlert({
          title: `Error 500`,
          message: "Item doesn't Exist",
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
    setConfirmDel(false);
  };

  const DeleteItem = (e) => {
    e.preventDefault();
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure you want to delete this item?",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleDelete(),
        },
        {
          label: "No",
        },
      ],
      overlayClassName: "overlay-custom-class-name",
    });
  };

  useEffect(() => {
    if (confirmDel) {
      handleDelete();
    }
  }, [confirmDel]);
  return (
    <div className="gap-y-5 flex flex-col py-10">
      <div className="mx-3 text-center flex sm:flex-row flex-col gap-y-5  justify-center items-center sm:items-start gap-x-5">
        <div className="flex flex-col items-center bg-white w-72 h-48 rounded-md py-4 px-6 border">
          <h3 className="text-center font-bold text-xl text-gray-800 pb-2">
            Manage Homepage Carousel
          </h3>
          <p className="text-lg text-gray-500 pb-3">
            Add, edit, or remove images for a captivating front-page display.
          </p>
          <div className="flex justify-around items-center py-3">
            <div className="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
              <Link
                href="Admin729/editCarouselImgs"
                className="flex items-center gap-2 font-semibold text-sm text-green-700"
              >
                <svg
                  className="w-6 stroke-green-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                Edit Carousel
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white w-72 h-48 rounded-md py-4 px-6 border">
          <h3 className="text-center font-bold text-xl text-gray-800 pb-2">
            Customize Homepage Categories
          </h3>
          <p className="text-lg text-gray-500">
            Update your homepage categories with custom images.
          </p>
          <div className="flex justify-around items-center py-3">
            <div className="flex text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
              <Link
                href="Admin729/editCategoriesImg"
                className="flex items-center gap-2 font-semibold text-sm text-green-700"
              >
                <svg
                  className="w-6 stroke-green-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                Edit Categories
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-3 text-center flex sm:flex-row flex-col gap-y-5 gap-x-5 justify-center items-center sm:items-start">
        <div className="flex flex-col items-center bg-white w-72 h-48 rounded-md py-4 px-6 border">
          <h3 className="text-center font-bold text-xl text-gray-800 pb-2">
            Create A New Item
          </h3>
          <p className="text-lg text-gray-500 pb-3">
            Introduce a fresh piece of crockery to your collection.
          </p>
          <div className="flex justify-around items-center py-3">
            <div className="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
              <Link
                href="Admin729/createItem"
                className="flex items-center gap-2 font-semibold text-sm text-green-700"
              >
                <svg
                  className="w-6 stroke-green-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                Create Item
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white w-72 h-48 rounded-md py-4 px-6 border">
          <h3 className="text-center font-bold text-xl text-gray-800 pb-2">
            Edit an Existing Item
          </h3>
          <label>
            <h3 className="text-base text-gray-500">
              Enter Object Id of the Item
            </h3>
            <p className="text-md text-gray-500 py-3">
              <input
                className="border-2 rounded-lg px-1"
                type="text"
                value={objectId}
                required
                onChange={(e) => setObjectId(e.target.value)}
              />
            </p>
          </label>
          <div className="flex justify-around items-center py-3">
            <div className="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
              <Link
                href={{
                  pathname: "Admin729/editItem",
                  query: { id: objectId },
                }}
                className="flex items-center gap-2 font-semibold text-sm text-green-700"
              >
                <svg
                  className="w-6 stroke-green-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                Edit
              </Link>
            </div>
            <div className="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
              <button
                onClick={DeleteItem}
                className="flex items-center gap-2 font-semibold text-sm text-red-700"
              >
                <svg
                  className="w-6 stroke-red-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
