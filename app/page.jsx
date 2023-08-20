// import CarouselContainer from "@/Components/Carousel";
import CarouselContainer from "@/Components/Carousel";
import Categories from "@/Components/Categories";
import CategoryContainer from "@/Components/CategoryContainer";
// import slider from "@/Components/slider.js";
export default function Home() {
  return (
    <>
      <div className="h-[25vh] sm:h-[50vh] xl:h-[55vh] w-[100vw]">
        <CarouselContainer />
      </div>
      <Categories />
      <CategoryContainer category="Steel" />
      <CategoryContainer category="Copper" />
      <CategoryContainer category="Plastic" />
      <CategoryContainer category="Glass" />
      <CategoryContainer category="Wooden" />
      <CategoryContainer category="Thermal" />
    </>
  );
}
