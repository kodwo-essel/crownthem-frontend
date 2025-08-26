import { Card, CardContent } from "@/components/ui/card";
import type { EventItem } from "@/types";
import { EVENT_STATUS } from "@/constants/styles";

export default function EventCard({
  name,
  imageUrl,
  status,
}: Readonly<EventItem>) {
  return (
    <div>
      <Card className="group p-0 rounded-2xl border border-gray-50 shadow-xs overflow-hidden transform transition-shadow duration-500 ease-in-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] bg-white">
        <div className="relative h-48 overflow-hidden">
          <img
            className="w-full h-full object-cover object-top transform transition-transform duration-500 ease-in-out group-hover:scale-115"
            src={imageUrl}
            alt={name}
          />

          {/* Right status badge */}
          {status && (
            <div className="absolute top-4 right-4">
              <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    EVENT_STATUS[status as keyof typeof EVENT_STATUS]?.COLOR ??
                    "bg-gray-100 text-gray-700"
                  }`}
                >
                  {EVENT_STATUS[status as keyof typeof EVENT_STATUS]?.NAME ?? status}
              </span>
            </div>
          )}
        </div>

        <CardContent className="pb-6 sm:pb-4">
          <h3 className="text-l text-left text-primary mb-2 font-bold">
            {name}
          </h3>
          {/* <div className="space-y-2">
            <div className="flex items-center text-gray-600">
              <i className="ri-calendar-line text-accent mr-2"></i>
              <span className="text-sm text-left">{votingStart}</span>
            </div>
            {location && (
              <div className="flex items-center text-gray-600">
                <i className="ri-map-pin-line text-accent mr-2"></i>
                <span className="text-sm text-left">{location}</span>
              </div>
            )}
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
}
