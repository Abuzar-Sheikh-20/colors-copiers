import { Phone, MapPin, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import ScrollToTop from "@/lib/scrollToTop"

export default function Footer() {
  const handleLinkClick = () => {
    ScrollToTop()
  }

  return (
    <footer className="bg-gray-900 text-white py-12 text-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="text-red-500">C</span>
              <span className="text-orange-500">O</span>
              <span className="text-yellow-500">L</span>
              <span className="text-green-500">O</span>
              <span className="text-blue-500">R</span>
              <span className="text-purple-500">S</span>
            </div>
            <p className="text-gray-400">Leading advertising company with state-of-the-art technology</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <Link to="/" onClick={handleLinkClick} className="transition-all duration-200 hover:text-blue-400 block hover:pl-2">Home</Link>
              <Link to="/about" onClick={handleLinkClick} className="transition-all duration-200 hover:text-blue-400 block hover:pl-2">About Us</Link>
              <Link to="/services" onClick={handleLinkClick} className="transition-all duration-200 hover:text-blue-400 block hover:pl-2">Services</Link>
              <Link to="/products" onClick={handleLinkClick} className="transition-all duration-200 hover:text-blue-400 block hover:pl-2">Products</Link>
              <Link to="/contact" onClick={handleLinkClick} className="transition-all duration-200 hover:text-blue-400 block hover:pl-2">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="transition-all duration-200 hover:text-blue-400 hover:pl-2 cursor-pointer">Outdoor Advertising</p>
              <p className="transition-all duration-200 hover:text-blue-400 hover:pl-2 cursor-pointer">Digital Printing</p>
              <p className="transition-all duration-200 hover:text-blue-400 hover:pl-2 cursor-pointer">Signage Fabrication</p>
              <p className="transition-all duration-200 hover:text-blue-400 hover:pl-2 cursor-pointer">Mobile Van Advertising</p>
              <p className="transition-all duration-200 hover:text-blue-400 hover:pl-2 cursor-pointer">LED Boards</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-400">

              {/* Call */}
              <a
                href="tel:+919198690007"
                className="flex items-center justify-center space-x-2 transition-all hover:text-blue-400"
              >
                <Phone className="w-4 h-4" />
                <span>+91-9198690007</span>
              </a>

              {/* Location */}
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Lucknow, Uttar Pradesh</span>
              </div>

              {/* Email */}
              <a
                href="mailto:info@colorssigns.com"
                className="flex items-center justify-center space-x-2 transition-all hover:text-blue-400"
              >
                <Mail className="w-4 h-4" />
                <span>info@colorssigns.com</span>
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2024 Colors Signs & Copiers. All rights reserved. | <i>Developed by <a href="https://abuzar-hindi.vercel.app/"><b className="text-blue-600 underline">Abuzar Hindi</b></a> </i></p>
        </div>
      </div>
    </footer>
  )
}
