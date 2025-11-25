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
import SearchBar from "@/components/custom/SearchBar";

const mockEvents = [
  {
    id: 1,
    name: "Afrobeats Concert 2024",
    description: "The biggest Afrobeats concert of the year featuring top artists",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
    date: "2024-12-15",
    time: "20:00",
    venue: "Accra Sports Stadium",
    location: "Accra, Ghana",
    status: "AVAILABLE",
    ticketTypes: [{ id: 1, name: "Regular", price: 50.00, currency: "GHS", available: 500, total: 1000, description: "General admission" }]
  },
  {
    id: 2,
    name: "Tech Conference Ghana",
    description: "Annual technology conference bringing together industry leaders",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    date: "2024-11-20",
    time: "09:00",
    venue: "Kempinski Hotel",
    location: "Accra, Ghana",
    status: "AVAILABLE",
    ticketTypes: [{ id: 4, name: "Regular", price: 100.00, currency: "GHS", available: 150, total: 200, description: "Full access" }]
  },
  {
    id: 3,
    name: "Comedy Night Live",
    description: "Hilarious night with Ghana's top comedians",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",
    date: "2024-11-30",
    time: "19:30",
    venue: "National Theatre",
    location: "Accra, Ghana",
    status: "AVAILABLE",
    ticketTypes: [{ id: 7, name: "Regular", price: 40.00, currency: "GHS", available: 300, total: 400, description: "Standard seating" }]
  },
  {
    id: 4,
    name: "Food Festival 2024",
    description: "Taste the best of Ghanaian and international cuisine",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
    date: "2024-12-08",
    time: "12:00",
    venue: "Independence Square",
    location: "Accra, Ghana",
    status: "AVAILABLE",
    ticketTypes: [{ id: 9, name: "Day Pass", price: 30.00, currency: "GHS", available: 800, total: 1000, description: "Full day access" }]
  },
  {
    id: 5,
    name: "Art Exhibition Gala",
    description: "Contemporary art showcase with local and international artists",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
    date: "2024-12-20",
    time: "18:00",
    venue: "Gallery 1957",
    location: "Accra, Ghana",
    status: "AVAILABLE",
    ticketTypes: [{ id: 11, name: "General", price: 20.00, currency: "GHS", available: 200, total: 250, description: "General admission" }]
  },
  {
    id: 6,
    name: "Marathon 2024",
    description: "Annual city marathon for fitness enthusiasts",
    imageUrl: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800",
    date: "2024-11-25",
    time: "06:00",
    venue: "Independence Square",
    location: "Accra, Ghana",
    status: "AVAILABLE",
    ticketTypes: [{ id: 13, name: "5K Run", price: 15.00, currency: "GHS", available: 300, total: 500, description: "5K fun run" }]
  },
  {
    id: 7,
    name: "Jazz Night Live",
    description: "Smooth jazz evening with renowned musicians",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
    date: "2024-12-05",
    time: "21:00",
    venue: "Alliance Française",
    location: "Accra, Ghana",
    status: "AVAILABLE",
    ticketTypes: [{ id: 15, name: "Regular", price: 45.00, currency: "GHS", available: 120, total: 150, description: "Standard seating" }]
  },
  {
    id: 8,
    name: "Fashion Week Finale",
    description: "Grand finale of Ghana Fashion Week",
    imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800",
    date: "2024-12-12",
    time: "19:00",
    venue: "Accra International Conference Centre",
    location: "Accra, Ghana",
    status: "AVAILABLE",
    ticketTypes: [{ id: 16, name: "Regular", price: 80.00, currency: "GHS", available: 200, total: 300, description: "General seating" }]
  },
  {
    id: 9,
    name: "Book Fair 2024",
    description: "Annual book fair with author signings",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800",
    date: "2024-11-28",
    time: "10:00",
    venue: "University of Ghana",
    location: "Legon, Ghana",
    status: "AVAILABLE",
    ticketTypes: [{ id: 18, name: "Day Pass", price: 10.00, currency: "GHS", available: 500, total: 600, description: "Full day access" }]
  }
];

export default function TicketEvents() {
  const [events] = useState(mockEvents);
  
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter events by search term
  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEvents = filteredEvents.slice(startIndex, startIndex + itemsPerPage);

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
          {currentEvents.map(event => (
            <TicketEventCard key={event.id} event={event} />
          ))}
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
