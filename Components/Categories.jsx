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
      {/* ******************************************Glass****************************************** */}
      <SingleCategory
        heading="Glass"
      />
      {/* ******************************************Brass****************************************** */}
      <SingleCategory
        heading="Brass"
      />
      {/* ******************************************Wooden****************************************** */}
      <SingleCategory
        heading="Wooden"
      />
      {/* ******************************************Aluminium****************************************** */}
      <SingleCategory
        heading="Aluminium"
      />
      {/* ******************************************Bone China****************************************** */}
      <SingleCategory
        heading="Bone china"
      />
      {/* ******************************************Melamine****************************************** */}
      <SingleCategory
        heading="Melamine"
      />
      {/* ******************************************Silicon****************************************** */}
      <SingleCategory
        heading="Silicon"
      />
      {/* ******************************************Iron****************************************** */}
      <SingleCategory
        heading="Iron"
      />
      {/* ******************************************Kansa****************************************** */}
      <SingleCategory
        heading="Kansa"
      />
    </div>
  );
};

export default Categories;
