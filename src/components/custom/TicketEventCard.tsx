import { Link } from "react-router-dom";

interface TicketType {
  id: number;
  name: string;
  price: number;
  currency: string;
  available: number;
  total: number;
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

interface TicketEventCardProps {
  event: TicketEvent;
}

export default function TicketEventCard({ event }: TicketEventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
  };

  const totalAvailable = event.ticketTypes.reduce((sum, t) => sum + t.available, 0);

  return (
    <Link to={`/ticket-events/${event.id}`}>
      <div className="group relative rounded-2xl overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-xl">
        <img 
          className="w-full h-64 object-cover" 
          src={event.imageUrl} 
          alt={event.name}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-bold mb-2 line-clamp-2">{event.name}</h3>
          
          <div className="flex justify-between items-center text-sm mb-2">
            <span className="font-medium">{formatDate(event.date)}</span>
            <span className="opacity-90">{event.time}</span>
          </div>
          
          <div className="flex justify-end">
            <span className="text-xs text-accent font-medium">{totalAvailable} available</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
