import { SkeletonCard } from '@/Components/skeleton-card';
export default function Loading() {
    return (
        <div className="space-y-4">
            <div className="grid grid-col-1 pt-3 px-3 sm:pt-5 sm:px-5 lg:pt-10 lg:px-10 h-[69vh]">
                <SkeletonCard isLoading={true} />
            </div>
        </div>
    );
}