import { useEffect, useState } from "react"
import Confetti from "react-confetti"
import { Button } from "@/components/ui/button"

export default function VotingSuccessful() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  // Keep track of window size for confetti
  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative flex flex-col items-center justify-center py-32 bg-gray-50 px-6 text-center">
      {/* Confetti effect */}
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={true}
        numberOfPieces={200}
      />

      {/* Success icon */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="white"
          className="w-8 h-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-3">Voting Successful</h1>
      <p className="text-gray-600 max-w-md mb-8">
        Your vote has been recorded successfully. Thank you for participating!
      </p>

      {/* Action buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <Button className="px-6 py-3 bg-primary cursor-pointer transform  transition-all duration-500 ease-in-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:scale-105">
          Vote Again
        </Button>
        <Button
          variant="outline"
          className="px-6 py-3 text-primary border-primary cursor-pointer transform  transition-all duration-500 ease-in-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:scale-105 hover:bg-white hover:text-primary"
        >
          Go Back Home
        </Button>
      </div>
    </div>
  )
}
