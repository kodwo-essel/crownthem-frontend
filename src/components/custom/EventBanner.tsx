
export default function EventBanner() {
  return (
    <div>
        <div className="group relative h-96 overflow-hidden">
            <img className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105" src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg" alt="" />

            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 flex items-center">
                <div className="max-w-6xl mx-auto p-6 w-full">
                    <h1 className="text-4xl text-left md:text-5xl font-bold text-white mb-4">Tech Innovation Awards 2025</h1>
                    <p className="text-xl text-left text-white mb-6 opacity-90">Celebrating breakthrough innovations and technological advancements that are shaping our future.</p>
                    <div className="flex flex-wrap items-center gap-6 text-white/90">
                        <div className="flex items-center">
                            <i className="ri-calendar-line mr-2"></i>
                            <span>March 15, 2024</span>
                        </div>
                        <div className="flex items-center">
                            <i className="ri-time-line mr-2"></i>
                            <span>7:00 PM - 11:00 PM</span>
                        </div>
                        <div className="flex items-center">
                            <i className="ri-map-pin-line mr-2"></i>
                            <span>San Francisco Convention Center</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
