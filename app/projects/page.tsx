import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, MapPin, Calendar, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Billboard & Hoarding Campaigns",
      category: "Outdoor Advertising",
      description:
        "Large-format roadside advertising campaigns for major brands including Toshiba, automotive, and consumer goods companies across high-traffic highways and commercial areas.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0014.jpg-XNVpMkOxYfo85jV9sMqgdiPTUoMgIW.jpeg",
      stats: { locations: "50+", impressions: "2M+", duration: "12 months" },
      tags: ["Billboard", "Highway", "Brand Awareness"],
    },
    {
      title: "Bus Queue Shelter Network",
      category: "Transit Advertising",
      description:
        "Comprehensive bus shelter advertising network providing public utility while delivering brand messages to daily commuters across urban areas.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0013.jpg-6752NNCmBqIatzzJFzPguUAyEe7rNH.jpeg",
      stats: { locations: "100+", impressions: "5M+", duration: "6 months" },
      tags: ["Transit", "Public Utility", "Urban"],
    },
    {
      title: "Unipole Premium Locations",
      category: "High-Impact Advertising",
      description:
        "Strategic unipole installations at premium highway locations for Coca-Cola and other FMCG brands, ensuring maximum visibility from all directions.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0015.jpg-ZMxPDNNSqQ4yvOpzIEAtDWRaGLouBF.jpeg",
      stats: { locations: "25+", impressions: "1.5M+", duration: "18 months" },
      tags: ["Unipole", "Highway", "Premium"],
    },
    {
      title: "Gantry Bridge Advertising",
      category: "Bridge Media",
      description:
        "Bridge-mounted advertising displays for HomeTown, Toshiba and electronics brands, capturing 100% traffic visibility on major thoroughfares.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0012.jpg-xKyAkXp2LsMRBngP9JQQ825QGQetif.jpeg",
      stats: { locations: "15+", impressions: "3M+", duration: "12 months" },
      tags: ["Gantry", "Bridge", "Traffic"],
    },
    {
      title: "Mobile Van Campaign Fleet",
      category: "Mobile Advertising",
      description:
        "Dynamic mobile advertising campaigns using branded vans for telecom and entertainment companies, covering multiple cities with flexible routing.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0010.jpg-dibHvly0jA8374y1oBo1eaD0gcmYn0.jpeg",
      stats: { locations: "Multi-city", impressions: "1M+", duration: "3 months" },
      tags: ["Mobile", "Telecom", "Multi-city"],
    },
    {
      title: "Mall Media Integration",
      category: "Indoor Advertising",
      description:
        "Shopping mall advertising campaigns targeting affluent consumers with large-format displays for lifestyle and consumer electronics brands.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0019.jpg-pNUQZzhxnqcPDjf4i54iiPM2JzYbRS.jpeg",
      stats: { locations: "20+", impressions: "800K+", duration: "9 months" },
      tags: ["Mall", "Indoor", "Lifestyle"],
    },
    {
      title: "Railway Station Kiosks",
      category: "Transit Hub Advertising",
      description:
        "Digital and traditional advertising displays at major railway stations, targeting travelers with extended dwell time and focused attention.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0017.jpg-FrHnSdodYZxw20oHtwKqsD9S6WcPIy.jpeg",
      stats: { locations: "30+", impressions: "2.5M+", duration: "12 months" },
      tags: ["Railway", "Digital", "Transit"],
    },
    {
      title: "LED Signage Solutions",
      category: "Digital Displays",
      description:
        "Custom LED signage installations for medical clinics, hotels, restaurants, and retail outlets with bright, eye-catching displays.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0008.jpg-6RTKRGY5Nvksz1GYCtnhBvP5VKeomw.jpeg",
      stats: { locations: "200+", impressions: "Local", duration: "Permanent" },
      tags: ["LED", "Signage", "Retail"],
    },
    {
      title: "Community Engagement Campaigns",
      category: "Ground Activation",
      description:
        "Nukkad Sabha (street plays) and community engagement programs for social causes and brand awareness in rural and semi-urban areas.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0018.jpg-MOvL0acpSzhq5AHiYhNQHZmlqa1ASK.jpeg",
      stats: { locations: "50+", impressions: "100K+", duration: "2 months" },
      tags: ["Community", "Rural", "Engagement"],
    },
    {
      title: "Cycle Campaign Network",
      category: "Rural Marketing",
      description:
        "Bicycle advertising campaigns for financial services and government schemes, reaching rural and semi-urban populations with door-to-door visibility.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0020.jpg-kaorIiHu7fLJt4qgVfKmjk0XEhm0Xl.jpeg",
      stats: { locations: "Villages", impressions: "500K+", duration: "6 months" },
      tags: ["Rural", "Bicycle", "Financial"],
    },
    {
      title: "Innovation in Outdoor Media",
      category: "Creative Solutions",
      description:
        "Innovative advertising formats including ambient media, digital integrations, and creative placements for technology and lifestyle brands.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0011.jpg-TA35ubNC7isaXStxa5vhmihIBeSVNy.jpeg",
      stats: { locations: "15+", impressions: "1.2M+", duration: "Various" },
      tags: ["Innovation", "Creative", "Technology"],
    },
  ]

  const categories = [
    "All",
    "Outdoor Advertising",
    "Transit Advertising",
    "Digital Displays",
    "Mobile Advertising",
    "Creative Solutions",
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Our Portfolio</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Showcasing our expertise in outdoor advertising and signage across Uttar Pradesh. From traditional
              billboards to innovative digital solutions, we've successfully executed hundreds of campaigns for leading
              brands.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Eye className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800">500+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800">100+</div>
              <div className="text-sm text-gray-600">Locations Covered</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800">50M+</div>
              <div className="text-sm text-gray-600">Total Impressions</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{project.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-800">{project.stats.locations}</div>
                      <div className="text-xs text-gray-600">Locations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-800">{project.stats.impressions}</div>
                      <div className="text-xs text-gray-600">Impressions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-800">{project.stats.duration}</div>
                      <div className="text-xs text-gray-600">Duration</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Project Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Next Campaign?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let us help you create impactful advertising campaigns that drive results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Discuss Your Project
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
