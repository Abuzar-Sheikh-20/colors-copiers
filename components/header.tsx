"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, Phone } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/products", label: "Products" },
    { href: "/clients", label: "Clients" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-red-500">c</span>
              <span className="text-orange-500">o</span>
              <span className="text-yellow-500">l</span>
              <span className="text-green-500">o</span>
              <span className="text-blue-500">r</span>
              <span className="text-purple-500">s</span>
              <span className="text-gray-700 ml-2">Signs & Copiers</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === item.href ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={() => window.open("/company-profile.pdf", "_blank")}
              variant="outline"
              size="sm"
              className="ml-4"
            >
              <Download className="w-4 h-4 mr-2" />
              PDF
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-gray-700 hover:text-blue-600 transition-colors ${
                    pathname === item.href ? "text-blue-600 font-medium" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-2">
                <Button onClick={() => window.open("/company-profile.pdf", "_blank")} variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  PDF
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
