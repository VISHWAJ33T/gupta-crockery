import React from "react";
import Link from "next/link";
const SingleCategory = ({
  heading,
  src1,
  name1,
  src2,
  name2,
  src3,
  name3,
  src4,
  name4,
}) => {
  return (
    <div className="min-w-[210px] items-start justify-center">
      <h3 className="text-xl text-center font-bold text-black cursor-pointer">
        {heading}
      </h3>
      <div className="grid grid-cols-2 gap-y-1 py-1  bg-slate-400">
        <Link
          href={{
            pathname: "/allitems",
            query: { price: "", category: "", search: name1 },
          }}
          className="text-center flex items-center justify-center"
        >
          <img className="w-[100px] h-[100px]" src={src1} alt={name1} />
        </Link>
        <Link
          href={{
            pathname: "/allitems",
            query: { price: "", category: "", search: name2 },
          }}
          className="text-center flex items-center justify-center"
        >
          <img className="w-[100px] h-[100px]" src={src2} alt={name2} />
        </Link>
        <Link
          href={{
            pathname: "/allitems",
            query: { price: "", category: "", search: name3 },
          }}
          className="text-center flex items-center justify-center"
        >
          <img className="w-[100px] h-[100px]" src={src3} alt={name3} />
        </Link>
        <Link
          href={{
            pathname: "/allitems",
            query: { price: "", category: "", search: name4 },
          }}
          className="text-center flex items-center justify-center"
        >
          <img className="w-[100px] h-[100px]" src={src4} alt={name4} />
        </Link>
      </div>
    </div>
  );
};

export default SingleCategory;
