import Link from "next/link";
const SingleCartItem = ({ item, updateQtyValue, deleteItem }) => {
  const { id, title, price, isDiscounted, discounted_price, discounted_percent, qtyValue, img_src, stock } = item;

  const handleQtyChange = (e) => {
    const newQtyValue = parseInt(e.target.value, 10);

    // Allow updating the quantity if the value is within the stock range or if the field is empty
    if (e.target.value === '' || (newQtyValue >= 0 && newQtyValue <= stock)) {
      updateQtyValue(id, e.target.value); // Update with the new value or an empty string
    }
  };

  const handleDelete = () => {
    deleteItem(id);
  };

  return (
    <>
      <div className="flex gap-x-3 border-t border-b py-3 shadow-md">
        <div className="mx-1">
          <img className="lg:w-[300px] md:w-[200px] w-[100px] lg:h-[300px] md:h-[200px] h-[100px] object-contain border mx-3 sm:mx-10 shadow-lg"
            src={img_src || "https://s3.envato.com/files/407753606/IMG_8092%20%202a.jpg"}
            alt="Item Image" />
        </div>
        <div className="mx-1">
          <Link href={{ pathname: "/item", query: { id: id } }} className="lg:text-2xl md:text-xl sm:text-lg text-md font-bold">{title}</Link>
          <div className="flex flex-col gap-y-2">
            {isDiscounted && <><span className="border whitespace-nowrap bg-[crimson] cursor-default text-white font-bold py-[2px] px-3 mt-1 rounded-full w-fit">{discounted_percent}% Off</span>
              <div className="flex items-center gap-x-2"><span className="text-xl">₹{discounted_price}</span><span className="text-xs line-through">₹{price}</span></div>
            </>}
            {!isDiscounted &&
              <span className="text-xl">₹{price}</span>}
            <label className="text-xl">
              <span>Quantity: </span>
              <select
                className="text-center w-[60px] px-2 max-w-full border-4"
                onChange={handleQtyChange}
                value={qtyValue}
                required
              >
                {[...Array(stock + 1).keys()].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </label>
            {stock === 0 && <span className=" text-red-600">Item is Out of Stock
              {/* You cannot order more than {stock} items at this moment */}
            </span>}
            {stock <= qtyValue && stock > 0 && <span className=" text-red-600">
              You cannot order more than {stock} items because of limited stocks
            </span>}
            <span className="text-xl">Subtotal: ₹{(discounted_price || price) * qtyValue}
            </span>
          </div>
        </div>
        <div className="absolute right-4 sm:right-6 md:right-12 mt-16 md:mt-20 lg:mt-28">
          {/* <span>Delete </span> */}
          <button
            onClick={handleDelete}
          >
            <img
              className=" w-6 sm:w-8 md:w-10"
              src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
              alt="Delete item"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleCartItem;
