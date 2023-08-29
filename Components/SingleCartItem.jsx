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
          <img className="lg:w-[300px] md:w-[200px] w-[100px] border mx-3 sm:mx-10  shadow-lg"
            src={img_src || "data:image/jpeg;base64,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"}
            alt="Item Image" />
        </div>
        <div className="mx-1">
          <Link href={{ pathname: "/item", query: { id: id } }} className="lg:text-2xl md:text-xl sm:text-lg text-md font-bold">{title}</Link>
          <div className="flex flex-col">
            {isDiscounted && <><span className="border whitespace-nowrap bg-[crimson] cursor-default text-white font-bold py-1 px-3 my-1 rounded-full w-fit">{discounted_percent}% Off</span>
              <div className="flex items-center gap-x-2"><span className="text-xl">₹{discounted_price}</span><span className="text-xs line-through">₹{price}</span></div>
            </>}
            {!isDiscounted &&
              <span className="text-xl">₹{price}</span>}


            <label>
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
            {/* <label >
              <span>Quantity: </span>
              <input
                className="text-center w-[60px] px-2 max-w-full border-4"
                type="number"
                max={stock}
                onChange={handleQtyChange}
                value={qtyValue}
                required
              />
            </label> */}
            {stock <= qtyValue && <span className=" text-red-600">Item is Limited
              {/* You cannot order more than {stock} items at this moment */}
            </span>}

            <span>Subtotal: ₹{(discounted_price || price) * qtyValue}
            </span>
            <div className="flex items-end gap-x-2">
              <span>Delete </span>
              <button
                onClick={handleDelete}
              >
                <img
                  className="w-6"
                  src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                  alt="Delete item"
                />
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCartItem;
