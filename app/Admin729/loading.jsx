import { SkeletonCard } from '@/Components/skeleton-card';
export default function Loading() {
    return (
        <div className="space-y-4 p-10">
            <div className="grid grid-cols-1 gap-6">
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
            </div>
        </div>
    );
}