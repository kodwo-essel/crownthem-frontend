import { Button } from "../ui/button"
import { Menu, PhoneCall } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/voting-events" },
    { label: "Tickets", href: "/tickets" },
    { label: "About", href: "/about" },
    { label: "Solutions", href: "/solutions" },
  ]

  // Predefined delay classes that Tailwind recognizes
  const delayClasses = [
    'delay-[100ms]',
    'delay-[200ms]',
    'delay-[300ms]',
    'delay-[400ms]',
    'delay-[500ms]',
    'delay-[600ms]'
  ]

  return (
    <nav className="top-0 z-50">
      <div className="flex justify-between items-center px-4 sm:px-16 shadow-[0_1px_6px_rgba(0,0,0,0.15)]">
        
        {/* Logo */}
        <div className="logo">
          <a
            className="text-2xl font-['Pacifico'] text-primary hover:opacity-80 transition-opacity"
            href="/"
          >
            SpotLite
          </a>
        </div>

        {/* Desktop Links */}
        <div className="navlinks hidden md:block">
          <ul className="flex gap-8">
            {menuItems.map(item => (
              <li className="hover:text-accent hover:scale-115 transition-transform duration-300 ease-in-out" key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="cta hidden md:flex gap-2">
          <Button className="w-24 cursor-pointer transform  transition-all duration-500 ease-in-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:scale-105">
            Contact
            <PhoneCall size={16} />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-primary"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu with Staggered Animation */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden bg-white/95 backdrop-blur-sm ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8">
          {menuItems.map((item, i) => (
            <a
                key={item.label}
                href={item.href}
                className={`transform transition-all duration-700 ease-out ${
                isOpen
                    ? `opacity-100 translate-y-0 scale-100 ${delayClasses[i] || 'delay-[100ms]'}`
                    : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{
                transitionDelay: isOpen ? `${i * 150 + 100}ms` : '0ms'
                }}
            >
                <span className="inline-block hover:text-accent hover:scale-115 transition-transform duration-300 ease-in-out">
                {item.label}
                </span>
            </a>
            ))}

          <Button
            className={`w-40 mt-4 transform transition-all duration-300 ease-out ${
              isOpen
                ? `opacity-100 translate-y-0 scale-100`
                : "opacity-0 translate-y-8 scale-95"
            } hover:scale-105 cursor-pointer`}
            style={{
              transitionDelay: isOpen ? `${menuItems.length * 150 + 100}ms` : '0ms'
            }}
          >
            Contact
            <PhoneCall size={16} />
          </Button>
        </div>
      </div>
    </nav>
  )
}