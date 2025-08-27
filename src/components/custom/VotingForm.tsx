import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import type { Nominee, VoteRequest } from "@/types";
import { submitVote } from "@/services/voteService";
import type { ApiResponse } from "@/types/api";

interface VotingFormProps {
  nominee: Nominee;
  voteCost: number; // pass this from the event
}

export default function VotingForm({ nominee, voteCost }: Readonly<VotingFormProps>) {
  const [votes, setVotes] = useState(1);
  const [voterName, setVoterName] = useState("");
  const [voterPhone, setVoterPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);

      const voteRequest: VoteRequest = {
        voterName,
        voterPhone,
        nomineeCode: nominee.code,
        voteCount: votes,
      };

      const response = await submitVote(voteRequest);

        if (response.paymentUrl) {
          // redirect to payment page
          window.location.href = response.paymentUrl;
          } else {
            alert("Vote submitted but no payment URL returned.");
          }
        } catch (err) {
          const errorResponse = err as ApiResponse<null>;
          console.error(errorResponse);
          alert(errorResponse.error || errorResponse.message || "Vote failed");
        } finally {
          setLoading(false);
        }
      };

  return (
    <div className="max-w-6xl mx-auto p-1 sm:p-2 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start py-6 h-full">
        {/* Candidate card */}
        <div className="h-80 sm:h-full max-h-120 rounded-2xl overflow-hidden shadow-md">
          <img
            src={nominee.imageUrl ?? "https://via.placeholder.com/400x400?text=No+Image"}
            alt={nominee.name}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Form */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Vote for {nominee.name} ({nominee.code})
          </h2>
          <p className="text-gray-600 mb-6">
            Support {nominee.name} by submitting your vote. You can also vote via USSD by dialing{" "}
            <span className="font-semibold">*929*39#</span>
          </p>

          <form onSubmit={handleVote} className="flex flex-col gap-6 text-left">
            <div>
              <Label className="block mb-1 text-md font-medium">Full Name</Label>
              <Input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-6 py-4 text-gray-500 h-10 rounded-full focus-visible:ring-2 focus-visible:ring-primary !placeholder-black/40"
                onChange={(e) => setVoterName(e.target.value)}
                required
              />
            </div>

            <div>
              <Label className="block mb-1 text-md font-medium">Phone Number</Label>
              <Input
                type="text"
                placeholder="Enter your phone number"
                className="w-full px-6 py-4 text-gray-500 h-10 rounded-full focus-visible:ring-2 focus-visible:ring-primary !placeholder-black/40"
                onChange={(e) => setVoterPhone(e.target.value)}
                required
              />
            </div>

            <div>
              <Label className="block mb-1 text-md font-medium">
                Number of Votes (GHC {voteCost.toFixed(2)})
              </Label>
              <Input
                type="number"
                value={votes}
                min={1}
                onChange={(e) => setVotes(Number(e.target.value))}
                className="w-full px-6 py-4 text-gray-500 h-10 rounded-full focus-visible:ring-2 focus-visible:ring-primary !placeholder-black/40"
              />
            </div>

            <p className="text-gray-700 text-sm">
              Total Price: GHS {(votes * voteCost).toFixed(2)}
            </p>

            <Button
              type="submit"
              className="w-full text-lg py-6 rounded-full bg-primary text-white font-semibold hover:bg-primary transform  transition-all duration-500 ease-in-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:scale-105 cursor-pointer"
            >
              {loading ? "Processing..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
