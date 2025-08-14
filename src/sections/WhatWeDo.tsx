import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"

import votingImg from '@/assets/whatwedo/voting.jpg'
import ticketingImg from '@/assets/whatwedo/ticketing.jpg'
import planningImg from '@/assets/whatwedo/planning.avif'
import otherImg from '@/assets/whatwedo/others.jpg'

const services = [
  {
    key: "evoting",
    title: "E-Voting Services",
    description:
      "We provide secure and transparent voting solutions for your events. Our platform is your one-stop solution for managing your events. We handle all the details, from registration to voting, to ensure a smooth and efficient process.",
    image: votingImg,
  },
  {
    key: "ticketing",
    title: "Event Ticketing",
    description:
      "Simplify your ticketing process with our seamless event ticketing solutions. From online purchases to on-site check-ins, we’ve got you covered.",
    image: ticketingImg,
  },
  {
    key: "planning",
    title: "Event Planning",
    description:
      "Plan your events stress-free with our expert planning services. We ensure every detail is handled so your event runs smoothly.",
    image: planningImg,
  },
  {
    key: "other",
    title: "Other Services",
    description:
      "We also provide a wide range of complementary event services tailored to your unique needs.",
    image: otherImg,
  },
]

export default function WhatWeDo() {
  const [selected, setSelected] = useState(services[0])
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-rotate only on desktop
  useEffect(() => {
    const rotate = () => {
      setSelected((prev) => {
        const currentIndex = services.findIndex((s) => s.key === prev.key)
        const nextIndex = (currentIndex + 1) % services.length
        return services[nextIndex]
      })
    }

    // only start auto-rotation if screen is desktop
    if (window.innerWidth >= 768) {
      intervalRef.current = setInterval(rotate, 5000) // every 5s
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])


  return (
    <div>
      <div className="max-w-7xl mx-auto p-6 pt-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-primary mb-6">What we do</h2>
          <p className="text-xl max-w-3xl mx-auto">
            With us, you have the best experience managing your events.
          </p>
        </div>

        <div className="max-w-6xl mx-auto md:px-6 pb-16">

          <div className="hidden md:flex flex-row items-start justify-center gap-12">
            {/* Left side list */}
            <div className="flex flex-col items-start text-left gap-4 lg:gap-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                Expert Care for Your Specific Needs
              </h2>
              <p className="lg:text-lg">
                We offer a range of services to meet your specific needs. Whether you need help with event planning, registration, or voting, we have the expertise to deliver. Our team provides end-to-end support, from concept development and seamless setup to real-time monitoring and post-event analytics. We also ensure secure and transparent processes, giving both organizers and participants confidence in the outcome. No matter the scale of your event, we are committed to making it engaging, efficient, and memorable.
              </p>
              
              
            </div>

            {/* Right side content */}
            <div className="flex flex-col items-start gap-3 text-left">
              <img
                className="w-full md:min-w-90 lg:min-w-140 h-65 rounded-2xl object-cover object-top"
                src={selected.image}
                alt={selected.title}
              />
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary">{selected.title}</h2>
              <p className="text-lg">{selected.description}</p>
              
            </div>
          </div>

          {/* Mobile: stacked cards */}
          <div className="flex flex-col gap-12 md:hidden text-left">
            {services.map((service) => (
              <div key={service.key} className="flex flex-col gap-3">
                <img
                  className="w-full h-60 rounded-2xl object-cover object-top"
                  src={service.image}
                  alt={service.title}
                />
                <h2 className="text-2xl font-semibold text-primary">{service.title}</h2>
                <p className="text-base">{service.description}</p>
              </div>
            ))}
            <Button className="flex gap-2 text-base !px-4 !py-3 rounded-full bg-primary cursor-pointer transition-all duration-500 ease-in-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:scale-105">
              Contact us <PhoneCall size={16} />
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}
