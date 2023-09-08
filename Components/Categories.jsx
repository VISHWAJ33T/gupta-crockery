import SingleCategory from "./SingleCategory";

const Categories = () => {
  return (
    <div className=" mx-[15px] mt-5 mb-6 gap-x-3 flex sm:mx-[20px] pb-3 overflow-x-scroll shadow-2xl">
      {/* ******************************************Steel****************************************** */}
      <SingleCategory
        heading="Steel"
      />
      {/* ******************************************Copper****************************************** */}
      <SingleCategory
        heading="Copper"
      />
      {/* ******************************************Plastic****************************************** */}
      <SingleCategory
        heading="Plastic"
      />
      {/* ******************************************Brass****************************************** */}
      <SingleCategory
        heading="Brass"
      />
      {/* ******************************************Aluminium****************************************** */}
      <SingleCategory
        heading="Aluminium"
      />
      {/* ******************************************Wooden****************************************** */}
      <SingleCategory
        heading="Wooden"
      />
      {/* ******************************************Glass****************************************** */}
      <SingleCategory
        heading="Glass"
      />
      {/* ******************************************Silicon****************************************** */}
      <SingleCategory
        heading="Silicon"
      />
      {/* ******************************************Iron****************************************** */}
      <SingleCategory
        heading="Iron"
      />
      {/* ******************************************Bone China****************************************** */}
      <SingleCategory
        heading="Bone china"
      />
      {/* ******************************************Melamine****************************************** */}
      <SingleCategory
        heading="Melamine"
      />
      {/* ******************************************Kansa****************************************** */}
      <SingleCategory
        heading="Kansa"
      />
    </div>
  );
};

export default Categories;
