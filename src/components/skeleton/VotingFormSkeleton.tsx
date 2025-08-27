import { Skeleton } from "@/components/ui/skeleton";

function VotingFormSkeleton() {
  return (
    <div className="max-w-6xl mx-auto p-1 sm:p-2 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start py-6 h-full">
        {/* Candidate card skeleton */}
        <div className="h-80 sm:h-full max-h-120 rounded-2xl overflow-hidden shadow-md">
          <Skeleton className="w-full h-full bg-gray-200" />
        </div>

        {/* Form skeleton */}
        <div>
          {/* Title skeleton */}
          <Skeleton className="h-8 w-64 bg-gray-200 mb-2" />
          
          {/* Description skeleton */}
          <div className="mb-6 space-y-2">
            <Skeleton className="h-4 w-full bg-gray-200" />
            <Skeleton className="h-4 w-3/4 bg-gray-200" />
          </div>

          <div className="flex flex-col gap-6 text-left">
            {/* Full Name field */}
            <div>
              <Skeleton className="h-5 w-20 bg-gray-200 mb-1" />
              <Skeleton className="h-10 w-full rounded-full bg-gray-200" />
            </div>

            {/* Phone Number field */}
            <div>
              <Skeleton className="h-5 w-28 bg-gray-200 mb-1" />
              <Skeleton className="h-10 w-full rounded-full bg-gray-200" />
            </div>

            {/* Number of Votes field */}
            <div>
              <Skeleton className="h-5 w-40 bg-gray-200 mb-1" />
              <Skeleton className="h-10 w-full rounded-full bg-gray-200" />
            </div>

            {/* Total Price skeleton */}
            <Skeleton className="h-4 w-32 bg-gray-200" />

            {/* Submit button skeleton */}
            <Skeleton className="h-14 w-full rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VotingFormSkeleton;