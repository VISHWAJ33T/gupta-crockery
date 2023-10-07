import { useState, useEffect } from "react";
import ItemsContainer from "./ItemsContainer";
import SingleItem from "./SingleItem";
const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const storedCartItems = localStorage.getItem("cartItems");
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    }, 0);
  }, []);
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
          cartItems={cartItems}
          setCartItems={setCartItems}
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
          cartItems: cartItems,
          setCartItems: setCartItems,
        }}
      />
    </>
  );
};

export default Form;
