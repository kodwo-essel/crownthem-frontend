import { Skeleton } from "../ui/skeleton";

export default function NomineeSkeleton() {
  return (
    <div className="relative w-full h-80 p-0 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
      {/* Image placeholder */}
      <Skeleton className="w-full h-full bg-gray-200" />

      {/* Candidate code placeholder */}
      <div className="absolute top-2 right-2 px-2 py-1 rounded-lg">
        <Skeleton className="w-12 h-4 bg-gray-200" />
      </div>

      {/* Dark overlay placeholder */}
      <div className="absolute bottom-0 left-0 w-full h-16 flex flex-col items-center justify-center rounded-b-lg bg-gray-200">
        <div className="text-center text-white">
          <Skeleton className="h-5 w-24 mb-1 bg-gray-200 " />
          <Skeleton className="h-4 w-16 bg-gray-200" />
        </div>
      </div>

      {/* Vote button placeholder */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3/4">
        <Skeleton className="h-10 w-full rounded bg-gray-200" />
      </div>
    </div>
  );
}
