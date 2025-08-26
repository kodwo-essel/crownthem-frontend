import { useState, useEffect } from "react";
import EventCard from "@/components/custom/EventCard";
import EventCardSkeleton from "@/components/skeleton/EventCardSkeleton";
import { ArrowLeft } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SearchBar from "@/components/custom/SearchBar";
import { fetchEvents, searchEvents } from "@/services/eventService";
import type { EventItem } from "@/types";
import { useDebounce } from "@/hooks/useDebounce";

export default function VotingEvents() {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    async function loadEvents() {
      setLoading(true);
      try {
        let page;
        if (debouncedSearch || statusFilter) {
          page = await searchEvents(
            debouncedSearch,
            statusFilter,
            currentPage - 1,
            itemsPerPage
          );
        } else {
          page = await fetchEvents(currentPage - 1, itemsPerPage);
        }
        setEvents(page.content);
        setTotalPages(page.totalPages);
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }
    loadEvents();
  }, [currentPage, debouncedSearch, statusFilter]);

  return (
    <div>
      <div className="max-w-7xl mx-auto p-6 sm:p-10 sm:pt-4">
        <a className="text-left flex gap-2 items-center" href="/home">
          <ArrowLeft className="w-4 h-4" />
          <p className="text-primary font-semibold">Back</p>
        </a>

        {/* Heading */}
        <div className="text-center pt-12 mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#131D4F] mb-4">
            Awards & Voting Events
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Participate in prestigious award ceremonies and make your voice
            heard by voting for outstanding nominees.
          </p>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row mt-12 mb-12 gap-4 justify-center">
            <SearchBar
              value={searchTerm}
              onChange={(val) => {
                setSearchTerm(val);
                setCurrentPage(1);
              }}
              onSearch={() => setCurrentPage(1)}
            />
            <select
              value={statusFilter ?? ""}
              onChange={(e) => {
                setStatusFilter(e.target.value || undefined);
                setCurrentPage(1);
              }}
              className="border rounded-lg px-4 py-2 text-gray-600"
            >
              <option value="">All Status</option>
              <option value="DRAFT">Draft</option>
              <option value="NOMINATION_OPEN">Nomination Open</option>
              <option value="NOMINATION_CLOSED">Nomination Closed</option>
              <option value="VOTING_OPEN">Voting Open</option>
              <option value="VOTING_CLOSED">Voting Closed</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {loading
            ? Array.from({ length: itemsPerPage }).map((_, i) => (
                <EventCardSkeleton key={i} />
              ))
            : events.map((event) => (
                <a key={event.id} href={`/voting-events/${event.id}`}>
                  <EventCard {...event} />
                </a>
              ))}
        </div>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className="text-primary"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      className={
                        currentPage === i + 1
                          ? "bg-accent hover:bg-accent text-white rounded-full"
                          : "bg-primary text-white hover:bg-accent rounded-full"
                      }
                      href="#"
                      isActive={currentPage === i + 1}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(i + 1);
                      }}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    className="text-primary"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
}
