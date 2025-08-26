import { Skeleton } from "@/components/ui/skeleton";

export default function EventSkeleton() {
  return (
    <div>
      {/* Event Banner Skeleton */}
      <div className="max-w-6xl mx-auto px-6 py-6 bg-white">
        <Skeleton className="w-full h-64 rounded-2xl bg-gray-200" />
        <div className="mt-4 space-y-2">
          <Skeleton className="h-6 w-1/3 bg-gray-200" />
          <Skeleton className="h-4 w-1/2 bg-gray-200" />
        </div>
      </div>

      {/* Breadcrumb Skeleton */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm">
          <Skeleton className="h-4 w-16 bg-gray-200" />
          <Skeleton className="h-4 w-4 rounded-full bg-gray-200" />
          <Skeleton className="h-4 w-24 bg-gray-200" />
        </div>
      </div>

      {/* Categories Skeleton */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-8">
          <Skeleton className="h-8 w-40 mb-2 bg-gray-200" />
          <Skeleton className="h-4 w-60 bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="w-full h-40 rounded-xl bg-gray-200" />
              <Skeleton className="h-5 w-2/3 bg-gray-200" />
              <Skeleton className="h-4 w-1/2 bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
