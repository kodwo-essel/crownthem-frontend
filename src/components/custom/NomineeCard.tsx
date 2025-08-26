import { Button } from "../ui/button"
import type { Nominee } from "@/types"

interface NomineeCardProps {
  nominee: Nominee
  onVote?: (nominee: Nominee) => void
}

export default function NomineeCard({ nominee, onVote }: Readonly<NomineeCardProps>) {
  return (
    <div className="group relative w-full h-80 p-0 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
      {/* Nominee image */}
      <img
        className="w-full h-full object-cover object-top transform transition-transform duration-500 ease-in-out group-hover:scale-105"
        src={nominee.imageUrl}
        alt={nominee.name}
      />

      {/* Candidate code top right */}
      <div className="absolute top-2 right-2 px-2 py-1 bg-secondary bg-opacity-70 text-white text-xs font-bold rounded-lg">
        {nominee.code}
      </div>

      {/* Dark overlay with name & votes (shown by default, fades on hover) */}
      <div className="absolute bottom-0 left-0 w-full h-16 flex flex-col items-center justify-center bg-[rgba(0,0,0,0.5)] rounded-b-lg pointer-events-none transition-opacity duration-300 ease-in-out group-hover:opacity-0">
        <div className="text-center text-white">
          <div className="text-lg font-semibold">{nominee.name}</div>
          <div className="text-sm opacity-80">Total votes: {nominee.totalVotes}</div>
        </div>
      </div>

      {/* Vote button (hidden until hover) */}
      <Button
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 cursor-pointer text-gray-100 bg-primary text-md transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:bg-primary"
        onClick={() => onVote?.(nominee)}
      >
        Vote
      </Button>
    </div>
  )
}
