import { CarouselSkeletonCard } from "@/Components/loading-skeletons/Carousel-skeleton";
import { AllCategoriesSkeletonCard } from "@/Components/loading-skeletons/AllCategories-skeleton";
import { ItemsContainerSkeletonCard } from "@/Components/loading-skeletons/ItemsContainer-skeleton-card";
const Items = ({ category }) => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-black cursor-pointer w-fit relative left-1 sm:left-2 top-0">
        {category}
      </h3>
      <div className="flex gap-x-3 w-[100%] overflow-hidden gap-y-3 rounded-lg">
        <ItemsContainerSkeletonCard isLoading={true} />
        <ItemsContainerSkeletonCard isLoading={true} />
        <ItemsContainerSkeletonCard isLoading={true} />
        <ItemsContainerSkeletonCard isLoading={true} />
        <ItemsContainerSkeletonCard isLoading={true} />
        <ItemsContainerSkeletonCard isLoading={true} />
        <ItemsContainerSkeletonCard isLoading={true} />
        <ItemsContainerSkeletonCard isLoading={true} />
        <ItemsContainerSkeletonCard isLoading={true} />
        <ItemsContainerSkeletonCard isLoading={true} />
        <ItemsContainerSkeletonCard isLoading={true} />
      </div>
    </div>
  );
};

export default function Loading() {
  return (
    <div className="space-y-3 sm:space-y-5 lg:space-y-6 px-[15px] sm:px-[20px]">
      <div className="relative top-0 -left-[15px] sm:-left-[20px]">
        <CarouselSkeletonCard isLoading={true} />
      </div>
      <div className="flex gap-x-3 w-[100%] overflow-hidden gap-y-3 rounded-xl">
        <AllCategoriesSkeletonCard isLoading={true} />
        <AllCategoriesSkeletonCard isLoading={true} />
        <AllCategoriesSkeletonCard isLoading={true} />
        <AllCategoriesSkeletonCard isLoading={true} />
        <AllCategoriesSkeletonCard isLoading={true} />
        <AllCategoriesSkeletonCard isLoading={true} />
        <AllCategoriesSkeletonCard isLoading={true} />
        <AllCategoriesSkeletonCard isLoading={true} />
        <AllCategoriesSkeletonCard isLoading={true} />
        <AllCategoriesSkeletonCard isLoading={true} />
        <AllCategoriesSkeletonCard isLoading={true} />
        <AllCategoriesSkeletonCard isLoading={true} />
        <AllCategoriesSkeletonCard isLoading={true} />
      </div>
      <Items category="Steel" />
      <Items category="Plastic" />
      <Items category="Aluminium" />
      <Items category="Glass" />
      <Items category="Brass" />
      <Items category="Iron" />
      <Items category="Copper" />
      <Items category="Bone China" />
      <Items category="Kansa" />
      <Items category="Melamine" />
      <Items category="Wooden" />
      <Items category="Silicon" />
    </div>
  );
}
