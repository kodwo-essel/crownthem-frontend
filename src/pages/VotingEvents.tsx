import { useState } from "react";
import EventCard from "@/components/custom/EventCard";
import { ArrowLeft } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SearchBar from "@/components/custom/SearchBar"; // import your search bar

export default function VotingEvents() {
  const allEvents = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    name: `Event ${i + 1}`,
  }));

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter events by search term
  const filteredEvents = allEvents.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEvents = filteredEvents
    .slice(startIndex, startIndex + itemsPerPage)
    .map(event => <a href="voting-events/{event.id}" key={event.id}><EventCard key={event.id} /></a>);

  return (
    <div>
      <div className="max-w-7xl mx-auto p-6 sm:p-10 sm:pt-4">
        <a className="text-left flex gap-2 items-center" href="/home">
          <ArrowLeft className="w-4 h-4" />
          <p className="text-primary font-semibold">Back</p>
        </a>

        <div className="text-center pt-12 mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#131D4F] mb-4">
            Awards & Voting Events
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Participate in prestigious award ceremonies and make your voice
            heard by voting for outstanding nominees.
          </p>

          {/* Search Bar */}
          <div className="flex mt-12 mb-12 justify-center">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              onSearch={() => setCurrentPage(1)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {currentEvents}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
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
                          ? "bg-accent hover:bg-accent text-white rounded-md"
                          : "bg-primary text-white hover:bg-accent"
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
