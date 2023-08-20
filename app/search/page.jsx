import ItemsContainer from "@/Components/ItemsContainer";

const page = () => {
  return (
    <>
      <div className="text-center overflow-x-scroll px-1 pb-2 mx-5 sm:mx-6 md:mx-10 justify-start xl:justify-center flex gap-x-2 mt-3">
        <span className="text-[#131b2e] border border-[#131b2e] whitespace-nowrap hover:bg-[#131b2e] hover:text-white cursor-pointer  font-bold py-2 px-4 rounded-full">
          Prize: Low to High
        </span>
        <span className="text-[#131b2e] border border-[#131b2e] whitespace-nowrap hover:bg-[#131b2e] hover:text-white cursor-pointer  font-bold py-2 px-4 rounded-full">
          Prize: High to Low
        </span>
        <span className="text-[#131b2e] border border-[#131b2e] whitespace-nowrap hover:bg-[#131b2e] hover:text-white cursor-pointer  font-bold py-2 px-4 rounded-full">
          Steel
        </span>
        <span className="text-[#131b2e] border border-[#131b2e] whitespace-nowrap hover:bg-[#131b2e] hover:text-white cursor-pointer  font-bold py-2 px-4 rounded-full">
          Copper
        </span>
        <span className="text-[#131b2e] border border-[#131b2e] whitespace-nowrap hover:bg-[#131b2e] hover:text-white cursor-pointer  font-bold py-2 px-4 rounded-full">
          Plastic
        </span>
        <span className="text-[#131b2e] border border-[#131b2e] whitespace-nowrap hover:bg-[#131b2e] hover:text-white cursor-pointer  font-bold py-2 px-4 rounded-full">
          Glass
        </span>
        <span className="text-[#131b2e] border border-[#131b2e] whitespace-nowrap hover:bg-[#131b2e] hover:text-white cursor-pointer  font-bold py-2 px-4 rounded-full">
          Wooden
        </span>
        <span className="text-[#131b2e] border border-[#131b2e] whitespace-nowrap hover:bg-[#131b2e] hover:text-white cursor-pointer  font-bold py-2 px-4 rounded-full">
          Thermal
        </span>
        <span className="text-[#131b2e] border border-[#131b2e] whitespace-nowrap hover:bg-[#131b2e] hover:text-white cursor-pointer  font-bold py-2 px-4 rounded-full">
          Milton
        </span>
        <span className="text-[#131b2e] border border-[#131b2e] whitespace-nowrap hover:bg-[#131b2e] hover:text-white cursor-pointer  font-bold py-2 px-4 rounded-full">
          Tupperware
        </span>
      </div>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-3 mt-3 mx-5 sm:mx-6 md:mx-10 place-items-center">
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
      </div>
    </>
  );
};

export default page;
