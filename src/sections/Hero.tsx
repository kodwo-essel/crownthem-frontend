import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Trophy, Ticket, Calendar, Users } from 'lucide-react'

const spotlights = [
  {
    title: "Vote Smart",
    subtitle: "Secure E-Voting",
    tagline: "Vote Secure!",
    description: "Transform your events with effortless e-voting and make every vote count with confidence",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200"
  },
  {
    title: "Event Management",
    subtitle: "Simple & Easy", 
    tagline: "Made Effortless",
    description: "Comprehensive event planning and management with full admin control",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200"
  },
  {
    title: "Event Ticketing",
    subtitle: "E-Ticketing Services",
    tagline: "Made Simple",
    description: "Comprehensive e-ticketing services for all your events",
    icon: Ticket,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200"
  },
  {
    title: "24/7 Support",
    subtitle: "Always Here",
    tagline: "Made Reliable",
    description: "Round-the-clock technical support and exceptional customer service",
    icon: Users,
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200"
  }
]

export default function Hero() {
  const [currentSpotlight, setCurrentSpotlight] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpotlight((prev) => (prev + 1) % spotlights.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const current = spotlights[currentSpotlight]
  const IconComponent = current.icon

  return (
    <div className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${current.image})` }}
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 z-10">
        <div className="text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <IconComponent className="w-4 h-4" />
            <span className="text-sm font-medium">{current.subtitle}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-6 leading-tight">
            {current.title}
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white/70 mb-6 transition-all duration-500">
            {current.tagline}
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            {current.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/voting-events">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-lg font-normal transition-all hover:scale-105">
                Start Voting
              </Button>
            </a>
            <a href="/ticket-events">
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 text-lg rounded-lg font-normal transition-all hover:scale-105">
                Buy Tickets
              </Button>
            </a>
          </div>

          <div className="flex justify-center gap-2">
            {spotlights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSpotlight(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSpotlight ? 'bg-primary' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}