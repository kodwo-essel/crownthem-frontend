import { Shield, Zap, Users, DollarSign } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "Secure and dependable platform you can trust"
    },
    {
      icon: Zap,
      title: "Ease",
      description: "Simple and intuitive user experience"
    },
    {
      icon: Users,
      title: "Effectiveness",
      description: "Proven results for successful events"
    },
    {
      icon: DollarSign,
      title: "Affordability",
      description: "Best pricing with exceptional value"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About EaseVote Ghana
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              EaseVote Ghana is an e-voting and event management platform. At EaseVote, we are committed to empowering event organizers to create and manage their events effortlessly while providing a seamless digital experience for event organizers and participants to bring events to life easily.
            </p>
            <p className="text-gray-600 text-lg">
              Our primary objective is to streamline and expedite the e-voting process, thereby ensuring efficiency and reliability for both event organizers and participants. We are committed to delivering a seamless and hassle-free experience throughout the event.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" 
              alt="Team collaboration" 
              className="rounded-lg w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to provide businesses and organizations with the tools to digitize their operations, connecting them with their target audience through a secure, reliable, and convenient medium.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-600">
              Our vision at EaseVote is to become the premier global platform for digital event management, setting the standard for seamless, secure, and inclusive engagement between organizers and participants.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="text-center bg-white p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}