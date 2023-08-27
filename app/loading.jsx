import { SkeletonCard } from '@/Components/skeleton-card';
export default function Loading() {
    return (
        <div className="space-y-0">
            <div className="grid gap-x-3 pt-3 px-3 sm:pt-5 sm:px-5 lg:pt-10 lg:px-10 overflow-y-scroll h-[25vh] sm:h-[50vh] gap-y-3 grid-cols-1 ">
                <SkeletonCard isLoading={true} />
            </div>
            <div className="grid gap-x-3 pt-3 px-3 sm:pt-5 sm:px-5 lg:pt-10 lg:px-10 overflow-y-scroll gap-y-3 grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
            </div>
        </div>
    );
}