import { useState, useEffect } from "react";
import ItemsContainer from "../single-item/ItemsContainer";
import SingleItem from "../single-item/SingleItem";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const [inputPic, setInputPic] = useState();
  const [inputLoading, setInputLoading] = useState(false);
  const [removeBg, setRemoveBg] = useState(false);
  const [removeBgApiKey, setRemoveBgApiKey] = useState("");

  const postImage = (inputPic) => {
    setInputLoading(true);
    if (inputPic === undefined) {
      alert("Please Select an Image!");
      return;
    }
    if (inputPic.type === "image/jpeg" || inputPic.type === "image/png") {
      const data = new FormData();
      data.append("file", inputPic);
      data.append("upload_preset", "gupta-crockery");
      data.append("cloud_name", "dywvrv8nw");
      fetch("https://api.cloudinary.com/v1_1/dywvrv8nw/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setInputPic(data.url.toString());
          // console.log(data.url.toString());
          setInputLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setInputLoading(false);
        });
    } else {
      alert("Please Select an Image!");
      setPicLoading(false);
      return;
    }
  };
  const removeBackground = async (imageFile) => {
    const formData = new FormData();
    formData.append("image_file", imageFile);
    const response = await fetch("https://sdk.photoroom.com/v1/segment", {
      method: "POST",
      headers: {
        "X-Api-Key": `${removeBgApiKey}`,
      },
      body: formData,
    });

    if (!response.ok) {
      console.error(response.json());
      alert("Image not uploaded");
      throw new Error("Network response was not ok");
    }

    const imageBlob = await response.blob();
    return postImage(imageBlob);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-3 mx-3"
      >
        {/* **************************************************Title************************************************** */}
        <label className="text-center justify-center text-xl flex gap-3">
          <span className="w-[100px] text-gray-700">Title</span>
          <input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            type="text"
            placeholder="Item Name"
            required
            className="min-w-[200px] sm:w-[400px] px-3"
          ></input>
        </label>
        {/* **************************************************Description************************************************** */}
        <label className="text-center justify-center text-xl flex gap-3">
          <span className="w-[100px] text-gray-700">Description</span>
          <textarea
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            placeholder="Write you description here..."
            required
            rows="2"
            className="min-w-[200px] sm:w-[400px] px-3"
          ></textarea>
        </label>
        {/* **************************************************Price************************************************** */}
        <label className="text-center justify-center text-xl flex gap-3">
          <span className="w-[100px] text-gray-700">Price</span>
          <input
            value={post.price}
            onChange={(e) => setPost({ ...post, price: e.target.value })}
            type="Number"
            min="0"
            placeholder="Price"
            required
            className="min-w-[200px] sm:w-[400px] pl-3"
          ></input>
        </label>
        {/* **************************************************Stock************************************************** */}
        <label className="text-center justify-center text-xl flex gap-3">
          <span className="w-[100px] text-gray-700">Stock</span>
          <input
            value={post.stock}
            onChange={(e) => setPost({ ...post, stock: e.target.value })}
            type="Number"
            min="0"
            placeholder="Stock"
            required
            className="min-w-[200px] sm:w-[400px] pl-3"
          ></input>
        </label>
        {/* **************************************************isDiscounted************************************************** */}
        <label className="text-center justify-center text-xl flex gap-3">
          <span className="w-[100px] text-gray-700">Discount?</span>
          <select
            className="min-w-[200px] px-3 sm:w-[400px]"
            name="isDiscounted"
            id="isDiscounted"
            value={post.isDiscounted}
            onChange={(e) => setPost({ ...post, isDiscounted: e.target.value })}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </label>
        {/* **************************************************discounted_percent************************************************** */}
        <label className="text-center justify-center text-xl flex gap-3">
          <span className="w-[100px] text-gray-700">Discount %</span>
          <input
            value={post.discounted_percent}
            onChange={(e) =>
              setPost({ ...post, discounted_percent: e.target.value })
            }
            type="Number"
            step="0.01"
            min="0"
            placeholder="Discount Percent"
            className="min-w-[200px] sm:w-[400px] pl-3"
          ></input>
        </label>
        {/* **************************************************discounted_price************************************************** */}
        <label className="text-center justify-center text-xl flex gap-3">
          <span className="w-[100px] text-gray-700">Discount ₹</span>
          <input
            value={post.discounted_price}
            onChange={(e) =>
              setPost({ ...post, discounted_price: e.target.value })
            }
            type="Number"
            min="0"
            placeholder={
              post.price - (post.price * post.discounted_percent) / 100 ||
              "Discount Price"
            }
            className="min-w-[200px] sm:w-[400px] pl-3"
          ></input>
        </label>
        {/* **************************************************category************************************************** */}
        <label className="text-center justify-center text-xl flex gap-3">
          <span className="w-[100px] text-gray-700">Category</span>
          <select
            className="min-w-[200px] px-3 sm:w-[400px]"
            name="isDiscounted"
            id="isDiscounted"
            value={post.category}
            required
            onChange={(e) => setPost({ ...post, category: e.target.value })}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="steel">Steel</option>
            <option value="copper">Copper</option>
            <option value="plastic">Plastic</option>
            <option value="glass">Glass</option>
            <option value="brass">Brass</option>
            <option value="wooden">Wooden</option>
            <option value="aluminium">Aluminium</option>
            <option value="bone china">Bone China</option>
            <option value="melamine">Melamine</option>
            <option value="silicon">Silicon</option>
            <option value="iron">Iron</option>
            <option value="kansa">Kansa</option>
            <option value="other">Other</option>
          </select>
        </label>
        {/* **************************************************tags************************************************** */}
        <label className="text-center justify-center text-xl flex gap-3">
          <span className="w-[100px] text-gray-700">Tags</span>
          <textarea
            value={post.tags.join(",")}
            onChange={(e) =>
              setPost({ ...post, tags: e.target.value.split(",") })
            }
            placeholder='Enter tags seperated by "," (for eg: water bottle,steel bottle,milton...)'
            required
            rows={2}
            className="min-w-[200px] sm:w-[400px] px-3"
          ></textarea>
        </label>
        {/* **************************************************main_img************************************************** */}
        <label className="text-center justify-center text-xl flex gap-3">
          <span className="w-[100px] text-gray-700">Main Img</span>
          <textarea
            value={post.main_img}
            onChange={(e) => setPost({ ...post, main_img: e.target.value })}
            // type="text"
            required
            rows={1}
            placeholder="Main Item Image link here"
            className="min-w-[200px] sm:w-[400px] px-3"
          ></textarea>
        </label>
        {/* 
        {post.main_img !== "" && (
          <img
            className="object-contain border-[10px] min-h-[150px] max-h-[150px] sm:min-h-[200px]"
            src={post.main_img}
          />
        )} */}

        {/* **************************************************extra_imgs************************************************** */}
        <label className="text-center justify-center text-xl flex gap-3">
          <span className="w-[100px] text-gray-700">Extra imgs</span>
          <textarea
            value={post.extra_imgs.join(", ")}
            onChange={(e) =>
              setPost({ ...post, extra_imgs: e.target.value.split(", ") })
            }
            rows={2}
            placeholder='Enter links seperated by ", "(comma + 1 space) (for eg: link1, link2, link3...)'
            className="min-w-[200px] sm:w-[400px] px-3"
          ></textarea>
        </label>
        <button
          type="submit"
          disabled={submitting}
          className="bg-[#131b2e] text-white border whitespace-nowrap cursor-pointer font-bold py-2 px-10 my-3 rounded-full"
        >
          {submitting ? `${type}...` : type}
        </button>
      </form>
      <div className="flex flex-col justify-center py-5 gap-y-3 items-center">
        <h3 className="font-bold text-3xl">Get Image URL</h3>
        <label className="cursor-pointer" htmlFor="imageInput">
          <img
            src={
              !inputLoading
                ? inputPic ||
                  "https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg"
                : "https://www.netatwork.com/uploads/AAPL/loaders/One%20Moment%20Please%20Star%20Loader.gif"
            }
            className="max-w-[200px] max-h-[200px] object-contain border-2 min-w-[200px] min-h-[200px]"
            alt="Upload image"
          />
          <input
            type="file"
            id="imageInput"
            accept="image"
            onChange={(e) => {
              removeBg
                ? removeBackground(e.target.files[0])
                : postImage(e.target.files[0]);
            }}
            className="hidden"
          />
        </label>
        <label htmlFor="removeBg" className="flex justify-center pt-1 w-[100%]">
          Remove Background? &nbsp;
          <input
            id="removeBg"
            value={removeBg}
            onChange={(e) => {
              setRemoveBg(!removeBg);
            }}
            type="checkbox"
          />
        </label>
        {removeBg && (
          <select
            className="w-[160px] px-2 py-2"
            // value={removeBgApiKey}
            onChange={(e) => setRemoveBgApiKey(e.target.value)}
          >
            <option value="" disabled>
              Select Api Key
            </option>
            <option value="83b8272c58a1d7c1dd6687e0a52e8047bde266c0">
              Api Key 1
            </option>
            <option value="5df0aabd6708b200a795191dde59aaa308db780f">
              Api Key 2
            </option>
            <option value="985323b7d0c793c4c6bdd64a26c4230ead6baf10">
              Api Key 3
            </option>
          </select>
        )}
        <p
          onClick={() => {
            if (inputPic) {
              navigator.clipboard.writeText(inputPic);
              alert(`Image url copied to clipboard successfully`);
            }
          }}
          target="_blank"
          className={`${
            inputPic ? "cursor-pointer" : "cursor-default"
          } text-[#388585] text-xl`}
        >
          {!inputLoading
            ? inputPic || "click above to upload your image"
            : "Uploading Image..."}
        </p>
      </div>

      <div className="py-10 flex flex-col gap-y-10 items-center justify-center">
        <div className="text-center text-3xl font-bold my-3">Preview</div>
        <ItemsContainer
          id={post._id}
          title={post.title}
          price={post.price}
          stock={post.stock}
          isDiscounted={post.isDiscounted}
          discounted_percent={
            post.isDiscounted == true ? post.discounted_percent : ""
          }
          discounted_price={
            post.isDiscounted == true ? post.discounted_price : ""
          }
          main_img={post.main_img}
        />
      </div>
      <SingleItem
        item={{
          _id: post._id,
          title: post.title,
          description: post.description,
          price: post.price,
          stock: post.stock,
          isDiscounted: post.isDiscounted,
          discounted_percent:
            post.isDiscounted == true ? post.discounted_percent : "",
          discounted_price:
            post.isDiscounted == true ? post.discounted_price : "",
          main_img: post.main_img,
          extra_imgs: post.extra_imgs,
        }}
      />
    </>
  );
};

export default Form;
