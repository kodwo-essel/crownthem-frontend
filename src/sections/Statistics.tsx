import { Users, Vote, Trophy, Calendar } from 'lucide-react'

export default function Statistics() {
  const stats = [
    {
      icon: Users,
      number: "100,000+",
      label: "Total Voters",
      description: "Registered users"
    },
    {
      icon: Vote,
      number: "5M+",
      label: "Votes Cast",
      description: "Successful votes"
    },
    {
      icon: Trophy,
      number: "500+",
      label: "Events Hosted",
      description: "Successful events"
    },
    {
      icon: Calendar,
      number: "24/7",
      label: "Support",
      description: "Technical assistance"
    }
  ]

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white mb-4 font-heading">
            Trusted by Thousands
          </h2>
          <p className="text-white/80 text-lg">
            Join the growing community of successful event organizers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-heading text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-white/70 text-sm">
                  {stat.description}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}