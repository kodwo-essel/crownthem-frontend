import ChooseUsCard from "@/components/custom/ChooseUsCard"

export default function WhyChooseUs() {
  return (
    <div>
        <div className="max-w-7xl mx-auto p-6 py-16">
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-primary mb-6">Why Choose Us</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    With us, you have the best experience managing your events.
                </p>
            </div>
            <div className="max-w-6xl mx-auto md:px-6 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ChooseUsCard />
                    <ChooseUsCard/>
                    <ChooseUsCard/>

                </div>
            </div>
        </div>
    </div>
  )
}
