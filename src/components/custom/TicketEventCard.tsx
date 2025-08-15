import { Link } from "react-router-dom"

export default function TicketEventCard() {
  return (
    <div className="group flex flex-col gap-6 rounded-xl overflow-hidden transform transition-shadow duration-500 ease-in-out shadow-[0_8px_24px_rgba(0,0,0,0.15)] bg-white">
        <div className="flex flex-col gap-6 p-6 pb-0">
            <div className="flex gap-4">
                <img className="w-20 h-16 rounded-sm" src="https://img.freepik.com/premium-photo/young-people-runner-running-running-road-city-park_41380-393.jpg?ga=GA1.1.600474873.1755162122&semt=ais_hybrid&w=740&q=80" alt="" />
                <div className="flex flex-col justify-center items-left text-left">
                    <h2 className="text-lg text-gray-400 font-semibold">EVENT</h2>
                    <h2 className="text-xl font-semibold text-primary">First 10K Run</h2>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col items-center justify-center">
                    <h2>17 Oct</h2>
                    <p className="text-gray-400">Date</p>
                </div>
                <div className="text-gray-300">|</div>
                <div>
                    <h2>20:00</h2>
                    <p className="text-gray-400">Time</p>
                </div>
                <div className="text-gray-300">|</div>
                <div>
                    <h2>100</h2>
                    <p className="text-gray-400">Available</p>
                </div>
            </div>
            
        </div>
        <div className="flex justify-center items-end border-t-2 border-t-black/10 p-4">
            <Link className="text-primary/70 group-hover:text-accent" to="/ticket-events/1">View event</Link>
        </div>
    </div>
  )
}
