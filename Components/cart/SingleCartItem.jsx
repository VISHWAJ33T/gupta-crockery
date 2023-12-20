import Link from "next/link";
const SingleCartItem = ({ item, updateQtyValue, deleteItem }) => {
  const {
    _id,
    title,
    price,
    isDiscounted,
    discounted_price,
    discounted_percent,
    qtyValue,
    main_img,
    stock,
  } = item;

  const handleQtyChange = (e) => {
    const newQtyValue = parseInt(e.target.value, 10);

    // Allow updating the quantity if the value is within the stock range or if the field is empty
    if (e.target.value === "" || (newQtyValue >= 0 && newQtyValue <= stock)) {
      updateQtyValue(_id, e.target.value); // Update with the new value or an empty string
    }
  };

  const handleDelete = () => {
    deleteItem(_id, title, main_img);
  };

  return (
    <>
      <div className="flex gap-x-3 border-t border-b py-3 shadow-md">
        <div className="mx-1 shrink-0">
          <Link
            href={`/item/${_id}`}
          >
            <img
              className="rounded-[20px] lg:w-[200px] md:w-[200px] w-[100px] lg:h-[200px] md:h-[200px] h-[100px] object-contain border mx-3 sm:mx-10 shadow-lg"
              src={
                main_img ||
                "https://s3.envato.com/files/407753606/IMG_8092%20%202a.jpg"
              }
              alt="Item Image"
            />
          </Link>
        </div>
        <div className="mx-1">
          <Link
            href={`/item/${_id}`}
            className="lg:text-2xl md:text-xl sm:text-lg text-md font-bold"
          >
            {title}
          </Link>
          <div className="flex flex-col mt-2 gap-y-2">
            {isDiscounted && (
              <>
                <span className="discount-btn w-fit">
                  {discounted_percent}% Off
                </span>
                <div className="flex items-center gap-x-2">
                  <span className="text-xl">₹{discounted_price}</span>
                  <span className="text-xs line-through">₹{price}</span>
                </div>
              </>
            )}
            {!isDiscounted && <span className="text-xl">₹{price}</span>}
            <label className="text-xl">
              <span>Quantity: </span>
              <select
                className="text-center w-[60px] px-2 max-w-full bg-[#e9e9ed]"
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
            {stock === 0 && (
              <span className=" text-red-600">
                Item is Out of Stock
                {/* You cannot order more than {stock} items at this moment */}
              </span>
            )}
            {stock <= qtyValue && stock > 0 && (
              <span className=" text-red-600">Limited Stocks</span>
            )}
            <span className="text-xl">
              Subtotal: ₹{(discounted_price || price) * qtyValue}
            </span>
          </div>
        </div>
        <div className="absolute right-4 sm:right-6 md:right-12 mt-16 md:mt-20 lg:mt-20">
          {/* <span>Delete </span> */}
          <button onClick={handleDelete} className="delete-button">
            <svg className="delete-svgIcon" viewBox="0 0 448 512">
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleCartItem;
