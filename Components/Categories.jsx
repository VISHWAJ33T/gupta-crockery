import SingleCategory from "./SingleCategory";

const Categories = () => {
  return (
    <div className=" mx-[15px] mt-5 mb-6 gap-x-3 flex sm:mx-[20px] pb-3 overflow-x-scroll shadow-2xl">
      {/* ******************************************Steel****************************************** */}
      <SingleCategory
        heading="Steel"
      />
      {/* ******************************************Plastic****************************************** */}
      <SingleCategory
        heading="Plastic"
      />
      {/* ******************************************Aluminium****************************************** */}
      <SingleCategory
        heading="Aluminium"
      />
      {/* ******************************************Glass****************************************** */}
      <SingleCategory
        heading="Glass"
      />
      {/* ******************************************Brass****************************************** */}
      <SingleCategory
        heading="Brass"
      />
      {/* ******************************************Iron****************************************** */}
      <SingleCategory
        heading="Iron"
      />
      {/* ******************************************Copper****************************************** */}
      <SingleCategory
        heading="Copper"
      />
      {/* ******************************************Bone China****************************************** */}
      <SingleCategory
        heading="Bone china"
      />
      {/* ******************************************Kansa****************************************** */}
      <SingleCategory
        heading="Kansa"
      />
      {/* ******************************************Melamine****************************************** */}
      <SingleCategory
        heading="Melamine"
      />
      {/* ******************************************Wooden****************************************** */}
      <SingleCategory
        heading="Wooden"
      />
      {/* ******************************************Silicon****************************************** */}
      <SingleCategory
        heading="Silicon"
      />
    </div>
  );
};

export default Categories;
