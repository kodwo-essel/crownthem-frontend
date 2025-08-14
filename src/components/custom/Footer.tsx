import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div>
        <footer className="bg-primary text-white z-10">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2 flex flex-col items-start">
                        <Link className="text-6xl font-['Pacifico'] text-white hover:opacity-80 transition-opacity mb-8" to="/">SpotLite</Link>
                        {/* <p className="mt-4 text-gray-300 text-left max-w-md">Elite Events
                            Redefined.</p> */}
                        <div className="flex space-x-4 mt-6">
                            <a href="/" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-accent transition-colors cursor-pointer">
                                <i className="ri-facebook-fill text-lg"></i>
                            </a>
                            
                            <a href="/" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-accent transition-colors cursor-pointer"><i className="ri-twitter-x-fill text-lg"></i>
                            </a>
                            
                            <a href="/" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-accent transition-colors cursor-pointer"><i className="ri-linkedin-fill text-lg"></i></a>
                            
                            <a href="/" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-accent transition-colors cursor-pointer"><i className="ri-instagram-fill text-lg"></i></a>
                            
                        </div>
                    </div>
                    
                    <div className="text-left">
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-3">
                            <li><Link className="text-gray-300 hover:text-accent transition-colors" to="/voting-events">Event Voting</Link></li>
                            
                            <li><Link className="text-gray-300 hover:text-accent transition-colors" to="/ticket-events">Ticketing Solutions</Link></li>
                            
                            <li><Link className="text-gray-300 hover:text-accent transition-colors" to="/solutions">Custom Solutions</Link></li>
                            
                            <li><Link to="/" className="text-gray-300 hover:text-accent transition-colors">Event Analytics</Link></li>

                        </ul>
                    </div>
                    
                    <div className="text-left">
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center"><i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-3"></i>+1 (555) 123-4567</li>
                            
                            <li className="flex items-center"><i className="ri-mail-line w-5 h-5 flex items-center justify-center mr-3"></i>hello@spotlite.com</li>
                            
                            <li className="flex items-center"><i className="ri-map-pin-line w-5 h-5 flex items-center justify-center mr-3"></i>New York, NY 10001</li>
                            
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"><p className="text-gray-400 text-sm">© 2024 SpotLite. All rights reserved.</p>
                
                    <div className="flex space-x-6 mt-4 md:mt-0"><a href="/" className="text-gray-400 hover:text-accent transition-colors text-sm">Privacy Policy</a>
                    
                        <a href="/" className="text-gray-400 hover:text-accent transition-colors text-sm">Terms of Service</a>
                        
                        <a href="/" className="text-gray-400 hover:text-accent transition-colors text-sm">Cookie Policy</a>
                    
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
