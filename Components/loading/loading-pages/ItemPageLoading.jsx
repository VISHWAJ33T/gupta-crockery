import { SingleItemSkeletonCard } from "@/Components/loading/loading-skeletons/SingleItem-skeleton-card";
export default function Loading() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 pt-3 px-3 sm:pt-5 sm:px-6 lg:pt-6 lg:px-6 h-fit gap-y-6">
        <SingleItemSkeletonCard isLoading={true} />
      </div>
    </div>
  );
}
