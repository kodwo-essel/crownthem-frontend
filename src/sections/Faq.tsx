import AccordionItem from "@/components/custom/AccordionItem"


export default function Faq() {
  return (
    <div className="bg-gray-50">
        <div className="max-w-4xl mx-auto p-6 py-16">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#131D4F] mb-6">Frequently Asked Questions</h2>
                <p className="text-xl">Everything you need to know about our platform and services.</p>
            </div>
            <div className="space-y-4">
                <AccordionItem/>
                <AccordionItem/>
                <AccordionItem/>
                <AccordionItem/>
                <AccordionItem/>
            </div>

        </div>
    </div>
  )
}
