import { Button } from "../ui/button"

export default function NomineeCard() {
  return (
    <div>
      <div className="group relative w-full h-80 p-0 rounded-lg overflow-hidden border-none shadow-none">
        <img
          className="w-full h-full object-cover object-top transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          src="https://cdn.pixabay.com/photo/2022/09/12/17/39/man-7450033_1280.jpg"
          alt="Event"
        />

        {/* Candidate code top right */}
        <div className="absolute top-2 right-2 px-2 py-1 bg-accent bg-opacity-60 text-white text-xs font-bold rounded-lg">
          ABC123
        </div>

        {/* Dark overlay behind name and button */}
        <div className="absolute bottom-0 left-0 w-full h-16 flex flex-col items-center justify-center bg-[rgba(0,0,0,0.5)] rounded-b-lg pointer-events-none transition-opacity duration-300 ease-in-out group-hover:opacity-0">
          {/* Name and votes container */}
          <div className="text-center text-white">
            <div className="text-lg font-semibold">John Doe</div>
            <div className="text-sm opacity-80">Total votes: 123</div>
          </div>
        </div>

        {/* Vote button - hidden by default, visible on hover */}
        <Button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 cursor-pointer text-primary bg-gray-50 text-md transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 hover:bg-gray-100">
          Vote
        </Button>
      </div>
    </div>
  )
}
