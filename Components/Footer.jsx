import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full mt-5 gap-y-10 py-16 h-fit sm:min-h-[300px] text-white bg-[#131b2e] px-10 items-start justify-evenly">
      <div className="flex flex-col item-center px-5 sm:items-start justify-start sm:justify-center gap-y-3 sm:w-[60%] ">
        <div className="flex">
          <h4 className="text-3xl font-bold">Gupta Crockery</h4>
        </div>
        <div className="flex">
          <p className="text-lg">Introducing "Gupta Crockery" – Where Quality Meets Savings! Explore stunning crockery that's kind to your wallet. Find beauty and trust in every piece, carefully selected to bring elegance to your table without the hefty price tag. Enjoy luxury for less at Gupta Crockery!</p>
        </div>
      </div>
      {/* <div className="grid md:grid-cols-2 grid-cols-1 item-center gap-y-3 sm:w-[50%] "> */}
      <div className="flex flex-col item-center gap-y-3 px-5 sm:w-[40%]">
        <div className="flex">
          <img src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png" className="shrink-0 bg-white p-1 rounded-full w-8 h-8 overflow-hidden mr-3" alt="" />
          <h4 className="text-lg break-all">Address here Lorem ipsum dolor sit amet consectetur.</h4>
        </div>
        <div className="flex">
          <img src="https://cdn-icons-png.flaticon.com/128/8644/8644744.png" alt="" className="shrink-0 w-8 mr-3 bg-white p-1 rounded-full h-8 overflow-hidden " />
          <h4 className="text-lg">+91-9463916728</h4>
        </div>
        <div className="flex">
          <img src="https://cdn-icons-png.flaticon.com/128/11502/11502423.png" alt="" className="shrink-0 w-8 mr-3 bg-white p-1 rounded-full h-8 overflow-hidden " />
          <h4 className="text-lg">guptacrockery@gmail.com</h4>
        </div>
        <div className="flex">
          <img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="" className="shrink-0 w-8 mr-3 bg-white rounded-full h-8 overflow-hidden " />
          <h4 className="text-lg">Instagram here</h4>
        </div>
        <div className="flex">
          <img src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png" alt="" className="shrink-0 w-8 mr-3 bg-white rounded-full h-8 overflow-hidden " />
          <h4 className="text-lg">Facebook here</h4>
        </div>
      </div>
    </div>
  );
};
export default Footer;
