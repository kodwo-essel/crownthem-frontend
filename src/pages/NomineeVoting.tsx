import VotingForm from "@/components/custom/VotingForm"

export default function NomineeVoting() {
  return (
    <div>
        <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 overflow-x-auto">
            <a className="hover:text-accent transition-colors whitespace-nowrap" href="/voting-events">
                Voting
            </a>
            <i className="ri-arrow-right-s-line"></i>
            <a className="hover:text-accent transition-colors whitespace-nowrap" href="/voting-events/1">
                Global Sustainability Summit
            </a>
            <i className="ri-arrow-right-s-line"></i>
            <a className="hover:text-accent transition-colors whitespace-nowrap" href="/voting-events/1/2">
                Waste Management
            </a>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-primary font-medium whitespace-nowrap">John Doe</span>
            </div>

            <VotingForm />
        </div>
        
    </div>
  )
}
