import person from '@/assets/testimonials/testimonial1.avif'
import { Quote } from 'lucide-react'

export default function TestimonialCard() {
  return (
    <div>
        <div className="group w-full rounded-2xl border border-gray-50 shadow-xs overflow-hidden transform transition-shadow duration-500 ease-in-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] bg-white p-8">
            <Quote className='text-primary h-10 w-10 mb-4' />
            <p className="text-lg text-left mb-8">This product completely transformed how our team collaborates. The interface is intuitive and the results speak for themselves.</p>
            <div className="flex items-center gap-4 text-left">
                <img className='w-15 h-15 shadow-[0_8px_24px_rgba(0,0,0,0.15)] rounded-full object-cover object-top' src={person} alt="" />
                <div className="flex flex-col text-left">
                    <p className='font-bold text-xl'>John Doe</p>
                    <p className='text-primary/70'>CEO, TechFlow</p>
                </div>
            </div>
        </div>
    </div>
  )
}
