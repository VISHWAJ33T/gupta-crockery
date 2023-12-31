import { ItemsContainerSkeletonCard } from "@/Components/loading/loading-skeletons/ItemsContainer-skeleton-card";

export default function Loading() {
  return (
    <div className="space-y-4">
      <div className="grid gap-x-3 pt-3 px-3 sm:pt-5 sm:px-5 lg:pt-10 lg:px-10 place-items-center overflow-y-scroll gap-y-3 grid-cols-2 xs:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
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
}
