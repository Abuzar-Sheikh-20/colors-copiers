import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Zap, Package } from 'lucide-react'

export default function ProductsPage() {
  const capabilities = [
    {
      icon: '⚙️',
      title: 'State-of-the-art Manufacturing',
      description: 'Equipped with latest technology for precision production'
    },
    {
      icon: '🎨',
      title: 'Advanced Design Studio',
      description: 'Professional design team for custom solutions'
    },
    {
      icon: '🖨️',
      title: 'Multiple Printing Options',
      description: 'Various printing technologies for different needs'
    },
    {
      icon: '✂️',
      title: 'Precision Cutting',
      description: 'Laser and CNC cutting for accurate fabrication'
    },
    {
      icon: '🎯',
      title: 'Quality Assurance',
      description: 'Rigorous testing at every production stage'
    },
    {
      icon: '📦',
      title: 'Complete Logistics',
      description: 'Efficient handling and timely delivery'
    }
  ]

  const printers = [
    {
      name: 'Digital Solvent Flex Printer',
      specs: ['High speed printing', 'Flexible materials', 'Wide color gamut', 'Long durability']
    },
    {
      name: 'Digital Solvent Flex Printer',
      specs: ['Color efficiency', 'Flexible support', 'Wide width', 'Multiple support']
    },
    {
      name: 'EPSON EcO Solvent Printer',
      specs: ['Fast production', 'Precision printing', 'Eco-friendly']
    },
    {
      name: 'Digital Printer',
      specs: ['Office printing', 'Fast speeds', 'High resolution', 'Professional quality']
    }
  ]

  const cuttingEquipment = [
    {
      name: 'CNC Router',
      description: 'Heavy-duty CNC router: laser efficiency, cutting edge, MDF, wood'
    },
    {
      name: 'Laser Cutting Machine',
      description: 'Dual-head cutting: acrylic, glass, leather, plastic, paper, stainless'
    },
    {
      name: 'Jaguar QCC Plotter',
      description: 'All-in-one digital: printer, cutting, vinyl transfer & self adhesive'
    }
  ]

  const materials = [
    {
      title: 'Vinyl & Flex Materials',
      description: 'High-quality vinyl and flex materials for outdoor advertising available in various specifications',
      applications: ['Vehicle Wrap', 'Stickers', 'Signage', 'Banners'],
      features: ['UV protected', 'Easy installation']
    },
    {
      title: 'Acrylic & Polycarbonate',
      description: 'Premium acrylic and polycarbonate sheets for LED signage, displays, and protective applications',
      applications: ['Signs & Posters', 'Shop signage', 'Displays', 'Protective covers'],
      features: ['Durable finish', 'Lightweight']
    },
    {
      title: 'Metal Composites',
      description: 'Aluminum composite panels, ACM and metal sheets for durable outdoor signage and wall cladding',
      applications: ['Outdoor Boards', 'Wall cladding', 'Signage', 'Building accents'],
      features: ['Fire resistant', 'Easy maintenance']
    },
    {
      title: 'Specialty Papers',
      description: 'Wide range of papers for offset printing, digital printing, and specialist applications',
      applications: ['Brochures', 'Business Cards', 'Flyers', 'Reports'],
      features: ['Various finishes', 'Premium quality']
    }
  ]

  const productionCapabilities = [
    {
      title: 'Digital Printing',
      description: 'High speed color printing with eco-solvent inks',
      metric: '2400 DPI',
      icon: '🖨️'
    },
    {
      title: 'Precision Cutting',
      description: 'CNC cutting with utmost accuracy and precision',
      metric: '±0.5mm',
      icon: '✂️'
    },
    {
      title: 'Fabrication',
      description: 'Complete production facility with expert team',
      metric: '24/7',
      icon: '⚙️'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Our Products</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Products & Equipment</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            State-of-the-art equipment and premium materials deployed at every step. Our modern infrastructure ensures quality output and fast turnaround times for every project.
          </p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {capabilities.map((item, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg hover:shadow-lg hover:bg-blue-100 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-3 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-snug">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure & Digital Printing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Our Infrastructure */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Infrastructure</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50">
                  <h3 className="font-bold text-gray-800 mb-2">Digital Solvent Printer</h3>
                  <p className="text-sm text-gray-600">High-speed large-format printing with eco-solvent inks. Print width: 3.2 meter, Output quality: 1440 DPI</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50">
                  <h3 className="font-bold text-gray-800 mb-2">CNC Router</h3>
                  <p className="text-sm text-gray-600">Heavy-duty CNC router for precision cutting of MDF, wood, and acrylic. Working area: 2.5m x 1.2m</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50">
                  <h3 className="font-bold text-gray-800 mb-2">Digital Flex Printer</h3>
                  <p className="text-sm text-gray-600">Multi-head precision printer for flexible materials. Output: Large size prints with consistent quality</p>
                </div>
              </div>
            </div>

            {/* Digital Printing Solutions */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Digital Printing Solutions</h2>
              <div className="space-y-6">
                {printers.map((printer, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50">
                    <h3 className="font-bold text-gray-800 mb-3">{printer.name}</h3>
                    <ul className="space-y-2">
                      {printer.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cutting & Fabrication */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Cutting & Fabrication</h2>
              <div className="space-y-6">
                {cuttingEquipment.map((equipment, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50">
                    <h3 className="font-bold text-gray-800 mb-2">{equipment.name}</h3>
                    <p className="text-sm text-gray-600">{equipment.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Infrastructure</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 transition-all duration-300 hover:shadow-lg hover:bg-blue-50">
                  <p className="text-sm text-gray-700 font-semibold mb-2">State-of-the-art Equipment</p>
                  <p className="text-xs text-gray-600">Latest machinery for precise and efficient production</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500 transition-all duration-300 hover:shadow-lg hover:bg-purple-50">
                  <p className="text-sm text-gray-700 font-semibold mb-2">Quality Control Lab</p>
                  <p className="text-xs text-gray-600">Rigorous testing and quality assurance at every stage</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 transition-all duration-300 hover:shadow-lg hover:bg-green-50">
                  <p className="text-sm text-gray-700 font-semibold mb-2">Skilled Workforce</p>
                  <p className="text-xs text-gray-600">Expert technicians with years of industry experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Materials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Premium Materials</h2>
            <p className="text-gray-600">High-quality materials for durable and impressive advertising solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{material.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{material.description}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-600 mb-2">Applications:</p>
                  <div className="flex flex-wrap gap-2">
                    {material.applications.map((app, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded transition-all duration-200 hover:bg-blue-200">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-2">Key Features:</p>
                  <ul className="space-y-1">
                    {material.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-3 h-3 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Production Capabilities</h2>
            <p className="text-gray-600">End-to-end production facility with complete in-house capabilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productionCapabilities.map((capability, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg hover:bg-blue-50 transition-all duration-300">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{capability.title}</h3>
                <p className="text-sm text-gray-600 mb-6">{capability.description}</p>
                <div className="text-3xl font-bold text-blue-600">{capability.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Custom Production Solutions?</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Our state-of-the-art facility can handle projects of any size and complexity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">Request Proposal</Button>
            <Button variant="outline" className="text-black hover:text-white border-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">View Services</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
