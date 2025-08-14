import TestimonialCard from "@/components/custom/TestimonialCard"

export default function Testimonials() {
  return (
    <div className="w-full bg-primary">
        <div className="max-w-7xl mx-auto p-6 py-16">
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-white mb-6">Testimonials</h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                    Here what our clients have to say about us
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TestimonialCard />
                <TestimonialCard/>
                <TestimonialCard/>

            </div>
        </div>
    </div>
  )
}
