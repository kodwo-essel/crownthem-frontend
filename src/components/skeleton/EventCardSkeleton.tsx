import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function EventCardSkeleton() {
  return (
    <Card className="group p-0 rounded-2xl border border-gray-50 shadow-xs overflow-hidden bg-white">
      {/* Image placeholder */}
      <div className="relative h-48 overflow-hidden">
        <Skeleton className="w-full h-full bg-gray-200" />

        {/* Status badge placeholder */}
        <div className="absolute top-4 right-4">
          <Skeleton className="h-6 w-16 rounded-full bg-gray-200" />
        </div>
      </div>

      {/* Text content */}
      <CardContent className="pb-6 sm:pb-4">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-3/4 bg-gray-200" />
          {/* optional second line */}
          <Skeleton className="h-4 w-1/2 bg-gray-200" />
        </div>
      </CardContent>
    </Card>
  );
}
