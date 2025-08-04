import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Zap, Printer, Scissors, Gauge, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  const equipment = [
    {
      category: "Digital Printing Solutions",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0003.jpg-Ei9aQc9Y4RjnMiaKuSmXzV5bliphfN.jpeg",
      products: [
        {
          name: "Digital Solvent Flex Printer",
          specs: "Width 126\", 8 Konica1024-I print heads, 4 colour, 1200 dpi (2400 dpi aperient)",
          features: ["High-speed printing", "Eco-solvent inks", "Outdoor durability", "Large format capability"]
        },
        {
          name: "Digital Solvent Flex Printer",
          specs: "Width 126\", 8 Konica512-I print heads, 4 colour, 1200 dpi (1800 dpi aperient)",
          features: ["Cost-effective printing", "Quality output", "Reliable operation", "Versatile media support"]
        },
        {
          name: "EPSON Eco Solvent Printer",
          specs: "180 cm Eco Solvent EPSON Dx9-2H, 4 colour, 2400 dpi, printing 300 sqft per hour",
          features: ["Fast production", "Eco-friendly inks", "Precision printing", "High productivity"]
        },
        {
          name: "Digital Printer",
          specs: "Print size 13x19, 13x30, 120 ipm, Print: 4800 x 600 dpi, RIP: 1200 x 1200 dpi",
          features: ["Office printing", "High resolution", "Fast speeds", "Professional quality"]
        }
      ]
    },
    {
      category: "Cutting & Fabrication",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0004.jpg-PUx8VD85Onf3Ib7y9996LLD27MTVcz.jpeg",
      products: [
        {
          name: "CNC Router",
          specs: "Width 96\"x48\", Max Speed 35,000mm/min, Cutting ACP, WPC, MDF",
          features: ["Precision cutting", "High-speed operation", "Multiple materials", "Computer controlled"]
        },
        {
          name: "Laser Cutting Machine",
          specs: "Dual Head, Cutting size 47\"x35\", Cutting Acrylic, Leather, Paper, Speed 170mm/Min",
          features: ["Dual head technology", "Versatile materials", "Clean cuts", "Detailed work"]
        },
        {
          name: "Jaguar GCC Plotter",
          specs: "48\" inch width, Speed 1530 mm/sec, Cutting Vinyl & HIP, Print & Cut available",
          features: ["High-speed cutting", "Print & cut capability", "Vinyl cutting", "Professional results"]
        }
      ]
    }
  ]

  const capabilities = [
    {
      icon: Settings,
      title: "Advanced Manufacturing",
      description: "State-of-the-art equipment for precision manufacturing and fabrication of advertising materials.",
      stats: "50+ Machines"
    },
    {
      icon: Zap,
      title: "High-Speed Production",
      description: "Fast turnaround times with high-speed printing and cutting capabilities for urgent projects.",
      stats: "24/7 Operation"
    },
    {
      icon: Printer,
      title: "Multi-Format Printing",
      description: "Support for various printing formats from small business cards to large format billboards.",
      stats: "Any Size"
    },
    {
      icon: Scissors,
      title: "Precision Cutting",
      description: "Computer-controlled cutting systems for accurate shapes and designs on multiple materials.",
      stats: "±0.1mm Accuracy"
    },
    {
      icon: Gauge,
      title: "Quality Control",
      description: "Rigorous quality control processes ensuring every product meets the highest standards.",
      stats: "100% Checked"
    },
    {
      icon: Shield,
      title: "Durability Tested",
      description: "All outdoor advertising materials are weather-tested for long-lasting performance.",
      stats: "5+ Years Life"
    }
  ]

  const materials = [
    {
      name: "Vinyl & Flex Materials",
      description: "High-quality vinyl and flex materials for outdoor advertising, available in various thicknesses and finishes.",
      applications: ["Billboards", "Vehicle Graphics", "Wall Murals", "Window Graphics"],
      features: ["Weather resistant", "UV protected", "Fade resistant", "Easy installation"]
    },
    {
      name: "Acrylic & Polycarbonate",
      description: "Premium acrylic and polycarbonate sheets for LED signage, displays, and protective applications.",
      applications: ["LED Boards", "Display Panels", "Protective Covers", "Architectural Elements"],
      features: ["Crystal clear", "Impact resistant", "Lightweight", "Easy to fabricate"]
    },
    {
      name: "Metal Composites",
      description: "Aluminum composite panels (ACP) and metal sheets for durable outdoor signage and structural applications.",
      applications: ["Building Facades", "Signage Boards", "Structural Elements", "Cladding"],
      features: ["Fire resistant", "Weatherproof", "Lightweight", "Easy maintenance"]
    },
    {
      name: "Specialty Papers",
      description: "Wide range of papers for offset printing, digital printing, and specialty applications.",
      applications: ["Brochures", "Posters", "Business Cards", "Packaging"],
      features: ["Various weights", "Coated options", "Eco-friendly", "Print ready"]
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Our Infrastructure</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Products & Equipment</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              State-of-the-art equipment and premium materials for all your printing and advertising needs. 
              Our modern infrastructure ensures quality output and fast turnaround times for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <capability.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">{capability.title}</h3>
                <p className="text-xs text-gray-600 mb-2">{capability.description}</p>
                <div className="text-sm font-bold text-blue-600">{capability.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {equipment.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className={sectionIndex % 2 === 1 ? 'lg:order-2' : ''}>
                  <Image
                    src={section.image || "/placeholder.svg"}
                    alt={section.category}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
                <div className={sectionIndex % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">{section.category}</h2>
                  <div className="space-y-8">
                    {section.products.map((product, productIndex) => (
                      <Card key={productIndex} className="p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">{product.name}</h3>
                        <p className="text-gray-600 mb-4 text-sm">{product.specs}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Premium Materials</h2>
            <p className="text-xl text-gray-600">High-quality materials for durable and impressive advertising solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{material.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{material.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Applications</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {material.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {material.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Production Capabilities</h2>
            <p className="text-xl text-gray-600">End-to-end production facility with complete in-house capabilities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Printer className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Digital Printing</h3>
              <p className="text-gray-600 mb-4">High-resolution digital printing up to 126\" width with eco-solvent inks</p>
              <div className="text-2xl font-bold text-blue-600">2400 DPI</div>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Precision Cutting</h3>
              <p className="text-gray-600 mb-4">CNC routing and laser cutting for precise shapes and designs</p>
              <div className="text-2xl font-bold text-green-600">±0.1mm</div>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Fabrication</h3>
              <p className="text-gray-600 mb-4">Complete fabrication and installation services with skilled team</p>
              <div className="text-2xl font-bold text-purple-600">24/7</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Custom Production Solutions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our state-of-the-art facility can handle projects of any size and complexity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Request Quote
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent">
                See Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
