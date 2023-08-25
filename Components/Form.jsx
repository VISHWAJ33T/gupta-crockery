
const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
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
        <span className="w-[100px] text-gray-700">Discount Percent</span>
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
        <span className="w-[100px] text-gray-700">Discount Price</span>
        <input
          value={post.discounted_price}
          onChange={(e) =>
            setPost({ ...post, discounted_price: e.target.value })
          }
          type="Number"
          min="0"
          placeholder="Discount Price"
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
          className="min-w-[200px] sm:w-[400px] px-3"
        ></textarea>
      </label>
      {/* **************************************************main_img************************************************** */}
      <label className="text-center justify-center text-xl flex gap-3">
        <span className="w-[100px] text-gray-700">Main Item Image</span>
        <input
          value={post.main_img}
          onChange={(e) => setPost({ ...post, main_img: e.target.value })}
          type="text"
          required
          placeholder="Main Item Image link here"
          className="min-w-[200px] sm:w-[400px] px-3"
        ></input>
      </label>
      {/* **************************************************extra_imgs************************************************** */}
      <label className="text-center justify-center text-xl flex gap-3">
        <span className="w-[100px] text-gray-700">Extra Images</span>
        <textarea
          value={post.extra_imgs.join(", ")}
          onChange={(e) =>
            setPost({ ...post, extra_imgs: e.target.value.split(", ") })
          }
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
  );
};

export default Form;
