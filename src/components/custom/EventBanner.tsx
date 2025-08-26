import type { EventItem } from "@/types";

export default function EventBanner({ name,
    imageUrl,
    votingStart,
    votingEnd,
    nominationStart,
    nominationEnd,
    status, }: Readonly<EventItem>) {

  // Format dates nicely
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const formatTime = (start: string, end: string) => {
    const startTime = new Date(start).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const endTime = new Date(end).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${startTime} - ${endTime}`;
  };

  return (
    <div>
      <div className="group relative h-96 overflow-hidden">
        <img
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          src={imageUrl}
          alt={name}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto p-6 w-full">
            <h1 className="text-4xl text-left md:text-5xl font-bold text-white mb-4">
              {name}
            </h1>
            <p className="text-xl text-left text-white mb-6 opacity-90">
              {status === "VOTING_OPEN"
                ? "Voting is currently open — make your voice count!"
                : status === "NOMINATION_OPEN"
                ? "Nominations are now open — submit your entries."
                : "Stay tuned for updates on this event."}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center">
                <i className="ri-calendar-line mr-2"></i>
                <span>
                  {status === "VOTING_OPEN" || status === "VOTING_CLOSED"
                    ? `${formatDate(votingStart)} - ${formatDate(votingEnd)}`
                    : `${formatDate(nominationStart)} - ${formatDate(
                        nominationEnd
                      )}`}
                </span>
              </div>

              <div className="flex items-center">
                <i className="ri-time-line mr-2"></i>
                <span>
                  {status === "VOTING_OPEN" || status === "VOTING_CLOSED"
                    ? formatTime(votingStart, votingEnd)
                    : formatTime(nominationStart, nominationEnd)}
                </span>
              </div>

              {/* If you later add "location" field in EventItem */}
              {/* <div className="flex items-center">
                <i className="ri-map-pin-line mr-2"></i>
                <span>{location}</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
