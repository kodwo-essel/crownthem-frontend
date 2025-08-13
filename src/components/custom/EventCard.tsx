import {
  Card,
  CardContent,
} from "@/components/ui/card"


export default function EventCard() {
  return (
    <div>
      <Card className="group p-0 rounded-2xl border border-gray-50 shadow-xs overflow-hidden transform transition-shadow duration-500 ease-in-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] bg-white">
        <div className="relative h-48 overflow-hidden">
          <img
            className="w-full h-full object-cover object-top transform transition-transform duration-500 ease-in-out group-hover:scale-115"
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnRzfGVufDB8fDB8fHww"
            alt="Event"
          />
          {/* Overlay badges */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">Awards & Voting</span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-primary">Voting Open</span>
          </div>
        </div>
        <CardContent className="pb-6 sm:pb-4">
          <h3 className="text-xl text-left text-primary mb-2 font-bold group-hover:text-accent">Tech Innovation Awards 2024</h3>
          <div className="space-y-2">
            <div className="flex items-center text-gray-600">
              <i className="ri-calendar-line text-accent mr-2"></i>
              <span className="text-sm text-left">March 15, 2024</span>
            </div>
            <div className="flex items-center text-gray-600">
              <i className="ri-map-pin-line text-accent mr-2"></i>
              <span className="text-sm text-left">Austin Convention Center</span>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
