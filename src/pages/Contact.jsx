import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock, Download, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const offices = [
    {
      name: 'Head Office - Lucknow',
      address: 'Shop No.1 Naubullah Road, Opp. Kavash Chhatrawala, Lucknow-18',
      phone: '+91-9198690007',
      hours: 'Mon-Sat: 9 AM - 7 PM'
    },
    {
      name: 'Allahabad Branch',
      address: '85/70 Maharajan Lane, Mutthiganj, Allahabad-20',
      phone: '9506711035',
      hours: 'Mon-Sat: 9 AM - 6 PM'
    },
    {
      name: 'Bahraich Branch',
      address: 'C1Husaini Chauraha, Near Paras Builder, Bahraich-01',
      phone: '0522-2541521',
      hours: 'Mon-Sat: 9 AM - 6 PM'
    }
  ]

  const faqs = [
    {
      question: "What's the minimum campaign duration?",
      answer: 'Our minimum campaign duration is typically 1 month for most advertising campaigns. Though we can accommodate shorter durations for special events.'
    },
    {
      question: 'Do you provide design services?',
      answer: 'Yes, we have a team of 8 experienced designers who can create compelling advertisements tailored to your brand and campaign objectives.'
    },
    {
      question: 'What areas do you cover?',
      answer: 'We primarily cover Uttar Pradesh with offices in Lucknow, Allahabad, and Bahraich. We can also extend our services to other states based on requirements.'
    },
    {
      question: 'How do you ensure quality?',
      answer: 'We have 4 dedicated supervisors and strict quality checks to ensure every project meets our high standards and exceeds client expectations.'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Get In Touch</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Ready to boost your brand visibility? Contact our expert team for customized advertising solutions that deliver real results. We're here to help you make a lasting impact.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border-b-4 border-blue-500 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <Phone className="w-10 h-10 text-blue-600 mx-auto mb-3 transition-transform duration-200 hover:rotate-12" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600">+91-9198690007</p>
            </div>
            <div className="text-center p-6 border-b-4 border-green-500 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <Mail className="w-10 h-10 text-green-600 mx-auto mb-3 transition-transform duration-200 hover:-rotate-12" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600">info@colorssigns.com</p>
            </div>
            <div className="text-center p-6 border-b-4 border-purple-500 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <MapPin className="w-10 h-10 text-purple-600 mx-auto mb-3 transition-transform duration-200 hover:scale-125" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600">Lucknow, UP</p>
            </div>
            <div className="text-center p-6 border-b-4 border-orange-500 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <Clock className="w-10 h-10 text-orange-600 mx-auto mb-3 transition-transform duration-200" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Working Hours</h3>
              <p className="text-gray-600">Mon-Sat: 9 AM - 7 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Quote & Offices */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Get Free Quote Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get Free Quote</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" placeholder="Your full name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" placeholder="your.email@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input type="tel" placeholder="+91-XXXXXXXXXX" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input type="text" placeholder="Your company name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white cursor-pointer">
                    <option>Select a service</option>
                    <option>Outdoor Advertising</option>
                    <option>Digital Printing</option>
                    <option>Signage Fabrication</option>
                    <option>Middle-Van Advertising</option>
                    <option>LED Boards</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                  <textarea placeholder="Tell us about your advertising requirements, budget, timeline, and any specific needs" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow">
                  Send Message
                </Button>
              </form>
              <p className='text-gray-500 mt-3'>

              Most queries are answered within 24 hours.
              </p>

            </div>

            {/* Our Offices */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Offices</h2>
              <div className="space-y-8">
                {offices.map((office, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{office.name}</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <p className="text-gray-600">{office.address}</p>
                      </div>
                      <div className="flex gap-3">
                        <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <p className="text-gray-600">{office.phone}</p>
                      </div>
                      <div className="flex gap-3">
                        <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <p className="text-gray-600">{office.hours}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                <Download className="w-4 h-4 mr-2" />
                Download Company Profile
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Find Us on Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Find Us on Map</h2>
            <p className="text-gray-600">Located strategically across Uttar Pradesh for your convenience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{office.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{office.address}</p>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-200">
                    Get Directions
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Common questions about our services and processes</p>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-gray-800 pr-4">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`} />
                  </div>
                  {openFAQ === index && (
                    <p className="text-gray-600 mt-4 text-sm leading-relaxed">{faq.answer}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
