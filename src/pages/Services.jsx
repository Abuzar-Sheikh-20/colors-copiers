import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, ArrowRight, MapPin, Users, Clock, Target } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServicesPage() {
  const mainServices = [
    {
      title: 'Billboards & Hoardings',
      description:
        'High-impact roadside advertising with maximum visibility. Perfect for brand awareness campaigns with 24/7 exposure to thousands of daily commuters.',
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0014.jpg-XNVpMkOxYfo85jV9sMqgdiPTUoMgIW.jpeg',
      features: ['Prime Location Sites', 'Front-lit & Back-lit Options', 'Digital & Traditional', 'Pan-India Coverage'],
      benefits: ['Maximum Visibility', 'Cost-Effective', '24/7 Exposure', 'High Recall Value'],
    },
    {
      title: 'Mobile Van Advertising',
      description:
        'Dynamic mobile advertising solutions that bring your brand directly to customers, covering multiple locations with flexible scheduling.',
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0010.jpg-dibHvly0jA8374y1oBo1eaD0gcmYn0.jpeg',
      features: ['GPS Tracking', 'Route Planning', 'Audio Announcements', 'Event Coverage'],
      benefits: ['Flexible Targeting', 'Cost Effective', 'Wide Coverage', 'Real-time Impact'],
    },
    {
      title: 'LED Signage',
      description:
        'Bright, eye-catching LED displays for businesses and retail outlets. Stands out 24/7 with dynamic visual content.',
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0008.jpg-6RTKRGY5Nvksz1GYCtnhBvP5VKeomw.jpeg',
      features: ['Digital Display', 'Custom Animation', 'Energy Efficient', 'Remote Control'],
      benefits: ['High Visibility', 'Modern Appeal', 'Low Power Usage', 'Easy Updates'],
    },
  ]

  const additionalServices = [
    'Digital Printing',
    'Signage Fabrication',
    'Wall & Shutter Painting',
    'Glow Signs',
    'Vinyl Printing',
    'Flex Banners',
    'CNC Cutting',
    'Laser Cutting',
    'Offset Printing',
    'Binding & Finishing',
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Our Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Advertising Solutions</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Providing whole gamut of services under outdoor advertising. From traditional billboards to innovative
              digital solutions, we cover every aspect of outdoor advertising with state-of-the-art technology.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Strategic Planning</h3>
              <p className="text-sm text-gray-600">Data-driven location selection</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Expert Team</h3>
              <p className="text-sm text-gray-600">50+ skilled professionals</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">Round-the-clock assistance</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Pan-UP Coverage</h3>
              <p className="text-sm text-gray-600">Statewide network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600">Comprehensive outdoor advertising solutions for every business need</p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-500 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    src={service.image || '/placeholder.svg'}
                    alt={service.title}
                    className="rounded-2xl shadow-lg w-full hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600 transition-all duration-200 hover:translate-x-1">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600 transition-all duration-200 hover:translate-x-1">
                            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                      Get Quote for {service.title}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">We also specialize in</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer">
                <p className="font-medium text-gray-800">{service}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us for Custom Solutions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
