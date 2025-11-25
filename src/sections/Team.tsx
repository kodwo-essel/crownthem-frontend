import { Linkedin } from 'lucide-react'

export default function Team() {
  const team = [
    {
      name: "Philip T. Agbesi",
      role: "General Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      linkedin: "#"
    },
    {
      name: "Lydia Korley",
      role: "Admin/HR",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
      linkedin: "#"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-primary font-heading mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-lg">
            The dedicated professionals behind EaseVote's success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center bg-gray-50 p-8 rounded-lg">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl text-primary font-heading mb-2">{member.name}</h3>
              <p className="text-accent font-semibold mb-4">{member.role}</p>
              <a 
                href={member.linkedin}
                className="inline-flex items-center justify-center w-10 h-10 bg-primary rounded-full hover:bg-primary/90 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}