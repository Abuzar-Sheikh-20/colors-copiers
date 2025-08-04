"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Download, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const offices = [
    {
      name: "Head Office - Lucknow",
      address: "Shop No.1 Nabiullah Road, Opp. Kavasth Chhatrawas, Lucknow-18",
      phone: "+91-9198690007",
      timing: "Mon-Sat: 9 AM - 7 PM",
    },
    {
      name: "Allahabad Branch",
      address: "89/76 Mahaviran Lane, Mutthiganj, Allahabad-20",
      phone: "9506111105",
      timing: "Mon-Sat: 9 AM - 6 PM",
    },
    {
      name: "Bahraich Branch",
      address: "Chhawani Chauraha, Near Paras Builder, Bahraich-01",
      phone: "0522-3541321",
      timing: "Mon-Sat: 9 AM - 6 PM",
    },
  ]

  const services = [
    "Billboard Advertising",
    "Mobile Van Advertising",
    "LED Signage",
    "Digital Printing",
    "Bus Shelter Advertising",
    "Unipole Advertising",
    "Mall Media",
    "Event Management",
    "Other",
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Get In Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to boost your brand visibility? Contact our expert team for customized advertising solutions that
              deliver real results. We're here to help you make a lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-sm text-gray-600">+91-9198690007</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Mail className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-sm text-gray-600">info@colorssigns.com</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-sm text-gray-600">Lucknow, UP</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Working Hours</h3>
              <p className="text-sm text-gray-600">Mon-Sat: 9 AM - 7 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get Free Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your advertising requirements, budget, timeline, and any specific needs..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{office.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                        <p className="text-gray-600">{office.address}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-green-600" />
                        <p className="text-gray-600">{office.phone}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-purple-600" />
                        <p className="text-gray-600">{office.timing}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  onClick={() => window.open("/company-profile.pdf", "_blank")}
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Company Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Us on Map</h2>
            <p className="text-xl text-gray-600">Located strategically across Uttar Pradesh for your convenience</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-blue-600" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{office.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{office.address}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about our services and processes</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold text-gray-800 mb-3">What's the minimum campaign duration?</h3>
                <p className="text-gray-600 text-sm">
                  Our minimum campaign duration is typically 1 month for outdoor advertising, though we can accommodate
                  shorter durations for special events.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Do you provide design services?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we have a team of 6 experienced designers who can create compelling advertisements tailored to
                  your brand and campaign objectives.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-gray-800 mb-3">What areas do you cover?</h3>
                <p className="text-gray-600 text-sm">
                  We primarily cover Uttar Pradesh with offices in Lucknow, Allahabad, and Bahraich, and can extend to
                  other states based on requirements.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-gray-800 mb-3">How do you ensure quality?</h3>
                <p className="text-gray-600 text-sm">
                  We have 4 dedicated supervisors and strict quality control processes from design to installation,
                  ensuring every project meets our high standards.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
