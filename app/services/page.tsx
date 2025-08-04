import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, MapPin, Users, Clock, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const mainServices = [
    {
      title: "Billboards & Hoardings",
      description:
        "High-impact roadside advertising with maximum visibility. Perfect for brand awareness campaigns with 24/7 exposure to thousands of daily commuters.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0014.jpg-XNVpMkOxYfo85jV9sMqgdiPTUoMgIW.jpeg",
      features: ["Prime Location Sites", "Front-lit & Back-lit Options", "Digital & Traditional", "Pan-India Coverage"],
      benefits: ["Maximum Visibility", "Cost-Effective", "24/7 Exposure", "High Recall Value"],
    },
    {
      title: "Bus Queue Shelters",
      description:
        "Strategic advertising at bus stops where people wait, providing captive audience engagement. Combines public utility with effective brand messaging.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0013.jpg-6752NNCmBqIatzzJFzPguUAyEe7rNH.jpeg",
      features: ["High Footfall Areas", "Weather Protection", "LED Lighting Options", "Multiple Ad Panels"],
      benefits: ["Captive Audience", "Daily Commuter Reach", "Social Responsibility", "Extended Viewing Time"],
    },
    {
      title: "Unipoles",
      description:
        "Single-pole billboard structures positioned at strategic high-traffic locations for maximum brand impact and visibility from multiple directions.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0015.jpg-ZMxPDNNSqQ4yvOpzIEAtDWRaGLouBF.jpeg",
      features: ["360° Visibility", "Highway Locations", "Large Format Display", "Weather Resistant"],
      benefits: ["High Impact", "Wide Reach", "Premium Positioning", "Long-Distance Visibility"],
    },
    {
      title: "Gantries",
      description:
        "Bridge-mounted advertising displays spanning across roads, ensuring 100% visibility to all passing traffic with impossible-to-miss positioning.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0012.jpg-xKyAkXp2LsMRBngP9JQQ825QGQetif.jpeg",
      features: ["Bridge Mounted", "100% Visibility", "High Traffic Areas", "Illuminated Options"],
      benefits: ["Unmissable Positioning", "High Frequency", "Traffic Capture", "Brand Dominance"],
    },
    {
      title: "Mobile Van Advertising",
      description:
        "Dynamic mobile advertising solutions that bring your brand directly to customers, covering multiple locations with flexible scheduling.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0010.jpg-dibHvly0jA8374y1oBo1eaD0gcmYn0.jpeg",
      features: ["GPS Tracking", "Route Planning", "Audio Announcements", "Event Coverage"],
      benefits: ["Flexible Targeting", "Cost Effective", "Wide Coverage", "Real-time Impact"],
    },
    {
      title: "Mall Media",
      description:
        "Indoor advertising in shopping malls targeting affluent consumers during their leisure time, perfect for lifestyle and consumer brands.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0019.jpg-pNUQZzhxnqcPDjf4i54iiPM2JzYbRS.jpeg",
      features: ["Premium Audience", "High Dwell Time", "Multiple Formats", "Food Court Presence"],
      benefits: ["Quality Audience", "Purchasing Intent", "Extended Exposure", "Lifestyle Targeting"],
    },
    {
      title: "Kiosk Advertising",
      description:
        "Strategic placement at railway stations, airports, and transit hubs where travelers spend considerable waiting time with focused attention.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0017.jpg-FrHnSdodYZxw20oHtwKqsD9S6WcPIy.jpeg",
      features: ["Transit Hubs", "Digital Displays", "Interactive Options", "Multi-language Support"],
      benefits: ["Captive Audience", "Extended Viewing", "Travel Demographics", "High Frequency"],
    },
    {
      title: "Innovative Solutions",
      description:
        "Creative and unique advertising formats including digital innovations, ambient media, and experiential marketing solutions.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0011.jpg-TA35ubNC7isaXStxa5vhmihIBeSVNy.jpeg",
      features: ["Creative Concepts", "Digital Integration", "Interactive Elements", "Viral Potential"],
      benefits: ["High Engagement", "Social Media Buzz", "Brand Differentiation", "Memorable Impact"],
    },
  ]

  const additionalServices = [
    "Railway Station Announcements",
    "Lollypop Advertising",
    "Rotator Displays",
    "Public Utility Advertising",
    "Air Port Media",
    "Event Management",
    "Neon Signs",
    "Digital Printing",
    "Signage Fabrication",
    "Wall & Shutter Painting",
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
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-blue-500" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                    Get Quote for {service.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
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
            <p className="text-xl text-gray-600">Complete range of advertising and printing solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-0">
                  <h3 className="font-medium text-gray-800">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Boost Your Brand Visibility?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let our experts help you choose the perfect advertising solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
