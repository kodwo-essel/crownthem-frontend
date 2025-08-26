import { Skeleton } from "@/components/ui/skeleton";
import NomineeSkeleton from "@/components/skeleton/NomineeSkeleton";

export default function CategorySkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-6 pb-16">
      {/* Breadcrumb skeleton */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Skeleton className="h-4 w-20 rounded bg-gray-200" />
        <Skeleton className="h-4 w-4 rounded bg-gray-200" />
        <Skeleton className="h-4 w-32 rounded bg-gray-200" />
        <Skeleton className="h-4 w-4 rounded bg-gray-200" />
        <Skeleton className="h-4 w-28 rounded bg-gray-200" />
      </div>

      {/* Header skeleton */}
      <div className="mb-8">
        <Skeleton className="h-8 w-48 rounded mb-2 bg-gray-200" />
        <Skeleton className="h-4 w-72 rounded bg-gray-200" />
      </div>

      {/* Nominees grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <NomineeSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
