import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import TicketEventCard from "@/components/custom/TicketEventCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SearchBar from "@/components/custom/SearchBar"; // import your search bar

import { Link } from "react-router-dom";

export default function TicketEvents() {
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
    .map(event => <Link to="/ticket-events/{event.id}" key={event.id}><TicketEventCard key={event.id} /></Link>);

  return (
    <div>
      <div className="max-w-7xl mx-auto p-6 sm:p-10 sm:pt-4">
        <a className="text-left flex gap-2 items-center" href="/home">
          <ArrowLeft className="w-4 h-4" />
          <p className="text-primary font-semibold">Back</p>
        </a>

        <div className="text-center pt-12 mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#131D4F] mb-4">
            Buy your favorite events' tickets
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Purchase tickets for your favorite events with ease. All you  need in one place.
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
