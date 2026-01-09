import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/clients", label: "Clients" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 ml-4">
            <div className="text-lg sm:text-2xl font-bold">
              <span className="text-red-500">C</span>
              <span className="text-orange-500">O</span>
              <span className="text-yellow-500">L</span>
              <span className="text-green-500">O</span>
              <span className="text-blue-500">R</span>
              <span className="text-purple-500">S</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 relative ${pathname === item.href ? "text-blue-600" : "text-gray-700"
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link to="/contact">
            <Button
              size="sm"
              className="hidden md:flex bg-gradient-to-r from-blue-600 to-purple-600 cursor-pointer hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 transition-transform duration-300 hover:scale-110"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 animate-rotate" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-md h-screen ml-4 font-semibold py-4 border-t border-gray-200 animate-in fade-in slide-in-from-top duration-300">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-gray-700 hover:text-blue-600 transition-all duration-300 hover:bg-gray-300 px-3 py-1 hover:translate-x-2 ${pathname === item.href ? "text-blue-600 font-bold" : ""
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
