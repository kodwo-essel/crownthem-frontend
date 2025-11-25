import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface TicketType {
  id: number;
  name: string;
  price: number;
  currency: string;
  available: number;
  total: number;
  description: string;
}

interface TicketEvent {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  status: string;
  ticketTypes: TicketType[];
}

export default function TicketEventDetails() {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<TicketEvent | null>(null);
  const [selectedTickets, setSelectedTickets] = useState<Record<number, number>>({});

  useEffect(() => {
    const loadEvent = async () => {
      if (eventId) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 300));
        
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
            ticketTypes: [
              {
                id: 1,
                name: "Regular",
                price: 50.00,
                currency: "GHS",
                available: 500,
                total: 1000,
                description: "General admission with standing area"
              },
              {
                id: 2,
                name: "VIP",
                price: 150.00,
                currency: "GHS",
                available: 80,
                total: 100,
                description: "VIP seating with complimentary drinks"
              }
            ]
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
            ticketTypes: [
              {
                id: 4,
                name: "Regular",
                price: 100.00,
                currency: "GHS",
                available: 150,
                total: 200,
                description: "Full conference access"
              }
            ]
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
            ticketTypes: [
              {
                id: 7,
                name: "Regular",
                price: 40.00,
                currency: "GHS",
                available: 300,
                total: 400,
                description: "Standard seating"
              }
            ]
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
            ticketTypes: [
              {
                id: 9,
                name: "Day Pass",
                price: 30.00,
                currency: "GHS",
                available: 800,
                total: 1000,
                description: "Full day access to all food stalls"
              }
            ]
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
            ticketTypes: [
              {
                id: 11,
                name: "General",
                price: 20.00,
                currency: "GHS",
                available: 200,
                total: 250,
                description: "General admission to exhibition"
              }
            ]
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
            ticketTypes: [
              {
                id: 13,
                name: "5K Run",
                price: 15.00,
                currency: "GHS",
                available: 300,
                total: 500,
                description: "5 kilometer fun run"
              }
            ]
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
            ticketTypes: [
              {
                id: 15,
                name: "Regular",
                price: 45.00,
                currency: "GHS",
                available: 120,
                total: 150,
                description: "Standard seating"
              }
            ]
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
            ticketTypes: [
              {
                id: 16,
                name: "Regular",
                price: 80.00,
                currency: "GHS",
                available: 200,
                total: 300,
                description: "General seating"
              }
            ]
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
            ticketTypes: [
              {
                id: 18,
                name: "Day Pass",
                price: 10.00,
                currency: "GHS",
                available: 500,
                total: 600,
                description: "Full day access"
              }
            ]
          }
        ];
        
        const foundEvent = mockEvents.find(e => e.id === parseInt(eventId));
        setEvent(foundEvent || null);
      }
    };
    
    loadEvent();
  }, [eventId]);

  const updateTicketQuantity = (ticketId: number, quantity: number) => {
    setSelectedTickets(prev => ({
      ...prev,
      [ticketId]: Math.max(0, quantity)
    }));
  };

  const getTotalPrice = () => {
    if (!event) return 0;
    return Object.entries(selectedTickets).reduce((total, [ticketId, quantity]) => {
      const ticket = event.ticketTypes.find(t => t.id === parseInt(ticketId));
      return total + (ticket ? ticket.price * quantity : 0);
    }, 0);
  };

  const getTotalTickets = () => {
    return Object.values(selectedTickets).reduce((sum, qty) => sum + qty, 0);
  };

  if (!event) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Event Not Found</h2>
          <p className="text-gray-500 mb-6">The event you're looking for doesn't exist.</p>
          <a href="/ticket-events" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            <i className="ri-arrow-left-line mr-2"></i>
            Back to Events
          </a>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div>
      {/* Event Banner */}
      <div className="group relative h-96 overflow-hidden">
        <img
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          src={event.imageUrl}
          alt={event.name}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto p-6 w-full">
            <h1 className="text-4xl text-left md:text-5xl font-bold text-white mb-4">
              {event.name}
            </h1>
            <p className="text-xl text-left text-white mb-6 opacity-90">
              {event.description}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center">
                <i className="ri-calendar-line mr-2"></i>
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center">
                <i className="ri-time-line mr-2"></i>
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <i className="ri-map-pin-line mr-2"></i>
                <span>{event.venue}, {event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-wrap overflow-x-auto items-center gap-2 text-sm text-gray-600">
          <a className="hover:text-accent transition-colors" href="/ticket-events">
            Tickets
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="text-primary font-medium">{event.name}</span>
        </div>
      </div>

      {/* Ticket Selection */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-8 text-left">
          <h2 className="text-3xl font-bold text-primary mb-4">Select Tickets</h2>
          <p className="text-gray-600 text-lg">
            Choose your ticket type and quantity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {event.ticketTypes.map(ticket => (
            <div key={ticket.id} className="bg-white border border-gray-200 rounded-sm py-3 px-4 hover:shadow-lg hover:border-accent transition-all duration-300 group">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                  {ticket.name}
                </h3>
                <span className="text-lg font-bold text-primary">{ticket.currency} {ticket.price}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <i className="ri-ticket-line text-sm"></i>
                <span className="text-sm">{ticket.available} available</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => updateTicketQuantity(ticket.id, Math.max(0, (selectedTickets[ticket.id] || 0) - 1))}
                    className="w-6 h-6 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-sm"
                    disabled={(selectedTickets[ticket.id] || 0) === 0}
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-medium">{selectedTickets[ticket.id] || 0}</span>
                  <button 
                    onClick={() => updateTicketQuantity(ticket.id, Math.min(ticket.available, (selectedTickets[ticket.id] || 0) + 1))}
                    className="w-6 h-6 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-sm"
                    disabled={(selectedTickets[ticket.id] || 0) >= ticket.available}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {getTotalTickets() > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-4 border border-primary">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total: {getTotalTickets()} ticket(s)</span>
              <span className="text-xl font-bold text-primary">GHS {getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-center">
              <button className="px-8 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
