export default function AboutHero() {
  return (
    <div className="relative min-h-[60vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200)" }}
      />
      <div className="absolute inset-0 bg-primary/80" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 z-10">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
            About EaseVote
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Empowering event organizers with seamless e-voting and event management solutions
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="text-lg font-medium">Simple And Easy</span>
          </div>
        </div>
      </div>
    </div>
  )
}