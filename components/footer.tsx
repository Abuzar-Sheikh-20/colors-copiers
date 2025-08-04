import { Phone, MapPin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="text-red-500">c</span>
              <span className="text-orange-500">o</span>
              <span className="text-yellow-500">l</span>
              <span className="text-green-500">o</span>
              <span className="text-blue-500">r</span>
              <span className="text-purple-500">s</span>
              <span className="text-white ml-2">Signs & Copiers</span>
            </div>
            <p className="text-gray-400">Leading advertising company with state-of-the-art technology</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Home</p>
              <p>About Us</p>
              <p>Services</p>
              <p>Projects</p>
              <p>Contact</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Outdoor Advertising</p>
              <p>Digital Printing</p>
              <p>Signage Fabrication</p>
              <p>Mobile Van Advertising</p>
              <p>LED Boards</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91-9198690007</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Lucknow, Uttar Pradesh</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@colorssigns.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2024 Colors Signs & Copiers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
