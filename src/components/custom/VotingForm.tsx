import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

import { useNavigate } from "react-router-dom"

export default function VotingForm() {
    const navigate = useNavigate()

    const handleVote = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate("/voting-success")
    }

  return (
    <div className="max-w-6xl mx-auto p-1 sm:p-2 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start py-6">
        
        {/* Candidate card */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://cdn.pixabay.com/photo/2022/09/12/17/39/man-7450033_1280.jpg"
            alt="Candidate"
            className="w-full h-full max-h-120 object-cover"
          />
          
        </div>

        {/* Form */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Vote for John Doe (ABC123)</h2>
          <p className="text-gray-600 mb-6">
            Support John Doe by submitting your vote. You can also vote via USSD by dialing <span className="font-semibold"> *929*39#</span>
          </p>

          <form onSubmit={handleVote} className="flex flex-col gap-6 text-left">
            <div>
              <Label className="block mb-1 text-md font-medium">Full Name</Label>
              <Input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-6 py-4 text-gray-500 h-10 rounded-full focus-visible:ring-2 focus-visible:ring-primary !placeholder-black/40"
              />
            </div>

            <div>
              <Label className="block mb-1 text-md font-medium">Email Address</Label>
              <Input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-6 py-4 text-gray-500 h-10 rounded-full focus-visible:ring-2 focus-visible:ring-primary !placeholder-black/40"
              />
            </div>

            <div>
              <Label className="block mb-1 text-md font-medium">
                Number of Votes (GHC 1.00)
              </Label>
              <Input
                type="number"
                defaultValue={1}
                min={1}
                className="w-full px-6 py-4 text-gray-500 h-10 rounded-full focus-visible:ring-2 focus-visible:ring-primary !placeholder-black/40"
              />
            </div>

            <p className="text-gray-700 text-sm">Total Price: GHS 0.50</p>

            <Button
              type="submit"
              className="w-full text-lg py-6 rounded-full bg-primary text-white font-semibold hover:bg-primary transform  transition-all duration-500 ease-in-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:scale-105 cursor-pointer"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

