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

  const lowestPrice = Math.min(...event.ticketTypes.map(t => t.price));
  const totalAvailable = event.ticketTypes.reduce((sum, t) => sum + t.available, 0);

  return (
    <Link to={`/ticket-events/${event.id}`}>
      <div className="group flex flex-col rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl bg-white border border-gray-100">
        <div className="relative">
          <img 
            className="w-full h-40 object-cover" 
            src={event.imageUrl} 
            alt={event.name}
          />
        </div>
        
        <div className="flex flex-col gap-3 p-4">
          <h3 className="text-lg font-bold text-primary line-clamp-2">{event.name}</h3>
          
          <div className="flex justify-between items-center text-sm">
            <span className="font-medium text-gray-900">{formatDate(event.date)}</span>
            <span className="text-gray-500">{event.time}</span>
          </div>
          
          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
            <span className="text-lg font-bold text-primary">From {event.ticketTypes[0].currency} {lowestPrice}</span>
            <span className="text-xs text-gray-500">{totalAvailable} available</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
