import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Award, Target, Eye, Heart, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  const specializations = [
    'Digital Printed Glow Sign on Vinyl / Back-lit back to back printed Flex',
    'High Speed Auto Lamination Machine',
    'Digital Printed hoarding, Front-lit Flex Banner',
    'Cut & Paste Glow sign on Vinyl & Flex',
    'Innovative signage fabrication of Branded Outlets',
    'Digital Printed Trance lite on Vinyl',
    'Reflective, Non-Reflective Boards',
    'Hoarding sites available all over UP & other States',
    'CNC Router cutting (MDF, WPC, ACP)',
    'Laser Cutting',
    'All kind of wall & shutter painting',
    'All type of paper printing, binding etc.',
  ]

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description:
        'To provide innovative, high-quality advertising solutions that help businesses reach their target audience effectively while maintaining the highest standards of creativity and professionalism.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description:
        'To be the leading outdoor advertising company in North India, recognized for our creativity, reliability, and commitment to delivering exceptional results for our clients.',
    },
    {
      icon: Heart,
      title: 'Values',
      description:
        'Integrity, Innovation, Quality, Customer Focus, and Sustainability - these core values guide every decision we make and every project we undertake.',
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">About Our Company</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">About Us</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We feel pleasure to introduce ourselves as one of the leading advertising companies in Uttar Pradesh. We
              have state-of-the-art latest technology for outdoor and indoor advertising, print on any media like
              front-lit / back-lit back to back, vinyl, inkjet with lamination & reflective vinyl.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0001.jpg-UaSxo5cldKbwE4IGBAYn6qiY8pzxwR.jpeg"
                alt="Colors Signs & Copiers Office"
                className="rounded-2xl shadow-2xl w-full hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">15+ Years of Excellence</h2>
              <p className="text-gray-600 leading-relaxed">
                We are also in field of four/two color offset printing. We have a very strong line of working team in
                Lucknow and Bahraich with infrastructure as mentioned. Our company has established itself as a trusted
                partner for businesses looking to make a lasting impact through effective advertising.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-green-50">
                  <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission, Vision & Values</h2>
            <p className="text-xl text-gray-600">Guiding principles that drive our success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl hover:bg-blue-50 transition-all duration-300">
                <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4 transition-transform duration-200 group-hover:rotate-12" />
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">We are specialized in</h2>
              <div className="space-y-4">
                {specializations.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 transition-all duration-200 hover:translate-x-2">
                    <Zap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Our Infrastructure</h3>
                <div className="space-y-4">
                  <div className="flex justify-between transition-all duration-200 hover:translate-x-2">
                    <span className="font-medium text-gray-700">Designers:</span>
                    <span className="text-gray-600 text-right">6 Person</span>
                  </div>
                  <div className="flex justify-between transition-all duration-200 hover:translate-x-2">
                    <span className="font-medium text-gray-700">Printing Team:</span>
                    <span className="text-gray-600 text-right">15 person in 2 shifts</span>
                  </div>
                  <div className="flex justify-between transition-all duration-200 hover:translate-x-2">
                    <span className="font-medium text-gray-700">Printing Machines:</span>
                    <span className="text-gray-600 text-right">3 Non Solvent</span>
                  </div>
                  <div className="flex justify-between transition-all duration-200 hover:translate-x-2">
                    <span className="font-medium text-gray-700">Fabrication Team:</span>
                    <span className="text-gray-600 text-right">30-35 person</span>
                  </div>
                  <div className="flex justify-between transition-all duration-200 hover:translate-x-2">
                    <span className="font-medium text-gray-700">Coverage Area:</span>
                    <span className="text-gray-600 text-right">6000-7000 sqft</span>
                  </div>
                  <div className="flex justify-between transition-all duration-200 hover:translate-x-2">
                    <span className="font-medium text-gray-700">Supervisors:</span>
                    <span className="text-gray-600 text-right">4 Person</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Assurance</h3>
                <p className="text-gray-700 mb-6">
                  Our dedicated quality control team ensures that every project meets the highest standards of
                  excellence. From design conceptualization to final installation, we maintain strict quality protocols
                  throughout the process.
                </p>
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">Get Started with Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
