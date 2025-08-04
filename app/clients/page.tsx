import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, Users, Award, Building, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ClientsPage() {
  const clientCategories = [
    {
      title: "Telecommunications",
      icon: Smartphone,
      description: "Leading telecom operators trust us for their nationwide advertising campaigns",
      clients: ["Airtel", "Vodafone", "Idea", "Uninor", "Aircel", "MTS"],
      color: "blue",
    },
    {
      title: "Consumer Brands",
      icon: Building,
      description: "FMCG and consumer brands for mass market advertising campaigns",
      clients: ["Coca-Cola", "Pepsi", "Mountain Dew", "Slice"],
      color: "green",
    },
    {
      title: "Electronics & Technology",
      icon: TrendingUp,
      description: "Electronics and technology companies for product launches and brand building",
      clients: ["Samsung", "LG", "Toshiba"],
      color: "purple",
    },
    {
      title: "Financial Services",
      icon: Award,
      description: "Banks and financial institutions for trust-building campaigns",
      clients: ["State Bank of India", "LIC", "Allahabad Bank"],
      color: "orange",
    },
    {
      title: "Retail & Lifestyle",
      icon: Users,
      description: "Retail chains and lifestyle brands for customer acquisition",
      clients: ["Reliance", "Jaypee Group"],
      color: "red",
    },
    {
      title: "Political & Social",
      icon: Star,
      description: "Political parties and social organizations for public awareness",
      clients: ["Congress Party", "BJP"],
      color: "yellow",
    },
  ]

  const testimonials = [
    {
      company: "Airtel",
      spokesperson: "Marketing Head",
      content:
        "Colors Signs & Copiers has been instrumental in our outdoor advertising success across UP. Their strategic locations and quality execution have significantly boosted our brand visibility.",
      rating: 5,
    },
    {
      company: "Coca-Cola",
      spokesperson: "Regional Manager",
      content:
        "The team's creativity and professionalism in executing our summer campaign was exceptional. The unipole placements generated tremendous brand recall.",
      rating: 5,
    },
    {
      company: "Samsung",
      spokesperson: "Brand Manager",
      content:
        "From concept to execution, Colors Signs delivered beyond expectations. Their technical expertise in LED installations is commendable.",
      rating: 5,
    },
  ]

  const achievements = [
    { number: "500+", label: "Brands Served", icon: Building },
    { number: "15+", label: "Years Partnership", icon: Award },
    { number: "95%", label: "Client Retention", icon: Users },
    { number: "1000+", label: "Campaigns Executed", icon: TrendingUp },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Our Valuable Clients</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Trusted by Leading Brands</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're proud to partner with India's most recognized brands, helping them achieve their advertising goals
              through strategic outdoor media placements and innovative solutions across Uttar Pradesh.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <achievement.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-800 mb-2">{achievement.number}</div>
                <div className="text-sm text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Client Portfolio</h2>
            <p className="text-xl text-gray-600">Brands that trust us for their advertising needs</p>
          </div>

          <div className="relative mb-16">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0007.jpg-nad05Ye7diP3V75hGmqUz0AUrQuCgW.jpeg"
              alt="Our Valuable Clients"
              width={1200}
              height={600}
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8">and many more...</p>
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Industry Expertise</h2>
            <p className="text-xl text-gray-600">Serving diverse industries with specialized advertising solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientCategories.map((category, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`inline-flex p-3 rounded-full bg-${category.color}-100 mb-4`}>
                  <category.icon className={`w-6 h-6 text-${category.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{category.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800 mb-2">Key Clients:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.clients.map((client, clientIndex) => (
                      <Badge key={clientIndex} variant="secondary" className="text-xs">
                        {client}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real feedback from satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800">{testimonial.company}</div>
                  <div className="text-sm text-gray-600">{testimonial.spokesperson}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Campaigns that made a difference</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-8">
                <Badge className="bg-blue-100 text-blue-800 mb-4">Case Study</Badge>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Telecom Brand Launch Campaign</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Executed a comprehensive outdoor advertising campaign for a major telecom operator across 50+
                  locations in UP, resulting in 30% increase in brand awareness and 25% boost in new customer
                  acquisitions within 3 months.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-xs text-gray-600">Locations</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">30%</div>
                    <div className="text-xs text-gray-600">Brand Awareness</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">25%</div>
                    <div className="text-xs text-gray-600">New Customers</div>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <Card className="p-8">
                <Badge className="bg-green-100 text-green-800 mb-4">Case Study</Badge>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">FMCG Summer Campaign</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Designed and executed a summer campaign for a leading beverage brand using innovative unipole
                  placements and mobile van advertising, achieving 40% increase in regional sales during the campaign
                  period.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">100+</div>
                    <div className="text-xs text-gray-600">Touch Points</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">40%</div>
                    <div className="text-xs text-gray-600">Sales Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">90</div>
                    <div className="text-xs text-gray-600">Days Campaign</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Success Stories</h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with us to create impactful advertising campaigns that drive real business results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Become Our Client
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
