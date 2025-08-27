import { Skeleton } from "@/components/ui/skeleton";
import VotingFormSkeleton from "@/components/skeleton/VotingFormSkeleton";

function NomineeVotingSkeleton() {
  return (
    <div className="max-w-6xl mx-auto p-6 pb-16">
      {/* Breadcrumb skeleton - updated to match actual structure */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 overflow-x-auto mb-6">
        <Skeleton className="h-4 w-16 bg-gray-200" />
        <i className="ri-arrow-right-s-line"></i>
        <Skeleton className="h-4 w-32 bg-gray-200" />
        <i className="ri-arrow-right-s-line"></i>
        <Skeleton className="h-4 w-24 bg-gray-200" />
        <i className="ri-arrow-right-s-line"></i>
        <Skeleton className="h-4 w-28 bg-gray-200" />
      </div>

      {/* Use the dedicated VotingForm skeleton */}
      <VotingFormSkeleton />
    </div>
  );
}

export default NomineeVotingSkeleton;