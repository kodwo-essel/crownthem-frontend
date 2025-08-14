import NomineeCard from "@/components/custom/NomineeCard"

export default function Category() {
  return (
    <div>
        <div>
            <div className="max-w-6xl mx-auto px-6 py-6">
                <div className="flex flex-wrap overflow-x-auto items-center gap-2 text-sm text-gray-600">
                    <a className="hover:text-accent transition-colors" href="/voting-events">Voting</a>
                    <i className="ri-arrow-right-s-line"></i>
                    <a className="hover:text-accent transition-colors" href="/voting-events/1">Global Sustainability Summit</a>
                    <i className="ri-arrow-right-s-line"></i>
                    <span className="text-primary font-medium">Waste Management</span>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-6 mb-8 text-left">
                <h1 className="text-4xl font-bold text-primary mb-4">Waste Management</h1>
                <p className="text-lg text-gray-600">Vote for your favorite nominee in this category</p>
            </div>
            <div className="max-w-6xl mx-auto px-6 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <a href="/voting-events/1/2/3">
                    <NomineeCard /></a>
                    <a href="/voting-events/1/2/3">
                    <NomineeCard /></a>
                    <a href="/voting-events/1/2/3">
                    <NomineeCard /></a>

                </div>
            </div>

        </div>
    </div>
  )
}
