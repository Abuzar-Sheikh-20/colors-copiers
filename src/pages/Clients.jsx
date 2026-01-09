import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'

export default function ClientsPage() {
  const stats = [
    { number: '500+', label: 'Clients' },
    { number: '15+', label: 'Platforms' },
    { number: '95%', label: 'Retention' },
    { number: '1000+', label: 'Campaigns' }
  ]

  const industries = [
    {
      icon: '📱',
      title: 'Telecommunications',
      description: 'Leading telecom advertising campaigns',
      clients: ['Jio', 'Vodafone', 'Airtel', 'IDEA', 'BSNL']
    },
    {
      icon: '👥',
      title: 'Consumer Brands',
      description: 'Premium consumer goods brands',
      clients: ['Coca Cola', 'Pepsi', 'Mountain Dew', 'Slice']
    },
    {
      icon: '💻',
      title: 'Electronics & Technology',
      description: 'Technology companies brand building',
      clients: ['Samsung', 'LG', 'OnePlus']
    },
    {
      icon: '💰',
      title: 'Financial Services',
      description: 'Bank and financial sector campaigns',
      clients: ['SBI', 'ICICI', 'HDFC', 'Insurance']
    },
    {
      icon: '🛍️',
      title: 'Retail & Lifestyle',
      description: 'Retail chains and lifestyle brands',
      clients: ['Fashion', 'Apparel', 'Accessories']
    },
    {
      icon: '⭐',
      title: 'Political & Social',
      description: 'Political parties and public awareness',
      clients: ['Government', 'NGOs', 'Social campaigns']
    }
  ]

  const testimonials = [
    {
      text: 'Colors Copiers has been instrumental in our OOH advertising campaigns. They understood our vision and delivered exceptional results. Our brand awareness increased significantly.',
      author: 'Airtel',
      role: 'Marketing Head'
    },
    {
      text: 'Their creativity and professionalism in executing our campaigns are unmatched. The team\'s expertise helped us achieve our business objectives effectively.',
      author: 'Coca Cola',
      role: 'Regional Manager'
    },
    {
      text: 'We partnered with Colors Copiers for multiple campaigns. Their attention to detail and strategic approach delivered impressive results beyond our expectations.',
      author: 'Samsung',
      role: 'Brand Director'
    }
  ]

  const successStories = [
    {
      title: 'Telecom Brand Launch Campaign',
      description: 'Executed a major telecom operator advertising campaign across 50+ locations in UP, recording a 30% increase in brand awareness and 25% sales uplift within 3 months.',
      stats: ['50+', '30%', '25%']
    },
    {
      title: 'FMCG Summer Campaign',
      description: 'Implemented comprehensive OOH advertising strategy for a leading FMCG brand using innovative placements and media mix, achieving 40% increase in regional sales and 80% ROI.',
      stats: ['100+', '40%', '80%']
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Our Clients</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Trusted by Leading Brands</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We're proud to partner with India's most recognized brands, helping them achieve their advertising goals through strategic outdoor media placements and innovative solutions across multiple sectors.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="transition-all duration-300 hover:bg-blue-50 p-4 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 hover:text-purple-600">{stat.number}</div>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Client Portfolio</h2>
            <p className="text-gray-600">Brands that trust us for their advertising needs</p>
          </div>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0007.jpg-nad05Ye7diP3V75hGmqUz0AUrQuCgW.jpeg"
            alt="Our Clients"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Industry Expertise</h2>
            <p className="text-gray-600">Serving diverse industries with specialized advertising solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.clients.map((client, idx) => (
                    <span key={idx} className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full transition-all duration-200 hover:bg-blue-200">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Real feedback from satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 transition-transform duration-200 hover:scale-110" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-gray-600">Campaigns that made a difference</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200 transition-all duration-300 hover:shadow-lg hover:bg-purple-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{story.title}</h3>
                <p className="text-gray-700 mb-6">{story.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {story.stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg text-center transition-all duration-200 hover:shadow-md hover:bg-blue-50">
                      <p className="text-2xl font-bold text-blue-600">{stat}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Success Stories</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Partner with us to create impactful advertising campaigns that drive real business results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">Schedule Our Project</Button>
            <Button variant="outline" className="text-black hover:text-white border-white hover:bg-blue-700 transition-all duration-300">View Case Studies</Button>
          </div>
        </div>
      </section> */}
    </div>
  )
}
