import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventBanner from "@/components/custom/EventBanner";
import CategoryCard from "@/components/custom/CategoryCard";
import { fetchEventById } from "@/services/eventService";
import type { Category, EventItem } from "@/types";
import EventSkeleton from "@/components/skeleton/EventSkeleton";

export default function Event() {
  const { eventId } = useParams<{ eventId: string }>();
  const numericEventId = eventId ? Number(eventId) : null;

  const [event, setEvent] = useState<EventItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        if (!numericEventId) return;
        setLoading(true);

        const eventData = await fetchEventById(numericEventId);
        setEvent(eventData);
      } catch (err) {
        console.error("Error loading event page:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [numericEventId]);

  const categories: Category[] = event?.categories ?? [];

  if (loading) return <EventSkeleton />;

  return (
    <div>
      {event ? (
        <>
          <EventBanner {...event} />

          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-wrap overflow-x-auto items-center gap-2 text-sm text-gray-600">
              <a className="hover:text-accent transition-colors" href="/voting-events">
                Voting
              </a>
              <i className="ri-arrow-right-s-line"></i>
              <span className="text-primary font-medium">{event.name}</span>
            </div>
          </div>

          {/* Categories */}
          <div className="max-w-6xl mx-auto px-6 pb-16">
            <div className="mb-8 text-left">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Vote by Category
              </h2>
              <p className="text-gray-600 text-lg">
                Select a category to view nominees and cast your vote
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.length > 0 ? (
                categories.map((category) => (
                  <a
                    className="group"
                    key={category.id}
                    href={`/voting-events/${numericEventId}/${category.id}`}
                  >
                    <CategoryCard category={category} />
                  </a>
                ))
              ) : (
                <p>No categories available for this event.</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Event not found</p>
      )}
    </div>
  );
}
