interface TicketType {
  id: number;
  name: string;
  price: number;
  currency: string;
  available: number;
  total: number;
  description: string;
}

interface TicketTypeCardProps {
  ticket: TicketType;
  quantity: number;
  onQuantityChange: (ticketId: number, quantity: number) => void;
}

export default function TicketTypeCard({ ticket, quantity, onQuantityChange }: TicketTypeCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-sm py-4 px-6 hover:shadow-lg hover:border-accent transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
          {ticket.name}
        </h3>
        <span className="text-2xl font-heading text-primary">{ticket.currency} {ticket.price}</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-3">{ticket.description}</p>

      {/* Availability */}
      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <i className="ri-ticket-line"></i>
        <span>{ticket.available} of {ticket.total} available</span>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onQuantityChange(ticket.id, Math.max(0, quantity - 1))}
            className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            disabled={quantity === 0}
          >
            -
          </button>
          <span className="w-8 text-center font-heading text-lg">{quantity}</span>
          <button 
            onClick={() => onQuantityChange(ticket.id, Math.min(ticket.available, quantity + 1))}
            className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            disabled={quantity >= ticket.available}
          >
            +
          </button>
        </div>
        {quantity > 0 && (
          <div className="text-accent font-medium">
            <span>Subtotal: {ticket.currency} {(ticket.price * quantity).toFixed(2)}</span>
          </div>
        )}
      </div>
    </div>
  );
}