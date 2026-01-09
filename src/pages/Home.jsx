import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, Star, Users, Award, TrendingUp, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const highlights = [
    { icon: Users, value: '50+', label: 'Expert Team' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '5000+', label: 'Happy Clients' },
    { icon: Clock, value: '24/7', label: 'Support' },
  ]

  const whyChoosePoints = [
    'People spend more time in vehicle than they do reading newspapers or watching television.',
    'Outdoor advertising has the lowest cost per thousand. These ads cost 80% lesser than TV commercials and 60% lesser than print ads.',
    'Ads on billboards are free to consumers. (they do not have to purchase a magazine or TV cable to view the product)',
    'Outdoor advertising is the only medium with constant exposure. No other media allows a 24/7 display of advertisements!',
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* CONTENT */}
            <div className="space-y-8 order-1 lg:order-none">
              <div className="space-y-4">
                <Badge
                  className="bg-blue-100 text-blue-800 hover:bg-blue-100 block max-w-[300px] mt-4 sm:max-w-full whitespace-normal sm:whitespace-nowrap text-center"
                >
                  Trusted Outdoor Advertising Partner in UP for 15+ Years
                </Badge>


                <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="text-red-500">C</span>
                  <span className="text-orange-500">O</span>
                  <span className="text-yellow-500">L</span>
                  <span className="text-green-500">O</span>
                  <span className="text-blue-500">R</span>
                  <span className="text-purple-500">S</span>
                  <br />
                  <p className="text-black text-2xl md:text-4xl">Signs & Copiers</p>                </h1>


                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Technology for <b className='text-blue-500'>Outdoor and Indoor Advertising</b> Solutions including Billboards, Hoardings, Mobile Van Advertising, LED Signage, & Innovative Advertising Solutions across <b>Uttar Pradesh, INDIA </b>
                </p>
                <ul>
                  <li> Digital Printing, </li> <li> Signage Fabrication </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/services" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Explore Services
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>

                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
Get Advertising that work                  </Button>
                </Link>
              </div>

              {/* HIGHLIGHTS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
                {highlights.map((item, index) => (
                  <div key={index} className="text-center">
                    <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-xl sm:text-2xl font-bold text-gray-800">
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative order-2 lg:order-none">
              <div className="relative z-10">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0001.jpg-UaSxo5cldKbwE4IGBAYn6qiY8pzxwR.jpeg"
                  alt="Colors Signs & Copiers Equipment"
                  width={600}
                  height={400}
                  className="w-full max-w-sm sm:max-w-md lg:max-w-full mx-auto rounded-2xl shadow-2xl"
                />
              </div>

              {/* Decorative background */}
              <div className="absolute inset-0 lg:-top-4 lg:-right-4 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Advertising Solutions</h2>
            <p className="text-xl text-gray-600">
              Comprehensive outdoor advertising services for maximum brand visibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform hover:scale-105">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0014.jpg-XNVpMkOxYfo85jV9sMqgdiPTUoMgIW.jpeg"
                alt="Billboard Advertising"
                className="w-full h-48 object-cover transition-transform duration-300"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Billboards & Hoardings</h3>
                <p className="text-gray-600 mb-4">
                  High-impact roadside advertising with maximum visibility for your brand
                </p>
                <Link to="/services" className="block">
                  <Button variant="outline" size="sm" className="w-full transition-all duration-300 hover:bg-blue-50">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform hover:scale-105">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0010.jpg-dibHvly0jA8374y1oBo1eaD0gcmYn0.jpeg"
                alt="Mobile Van Advertising"
                className="w-full h-48 object-cover transition-transform duration-300"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile Van Advertising</h3>
                <p className="text-gray-600 mb-4">Dynamic mobile advertising solutions reaching customers everywhere</p>
                <Link to="/services" className="block">
                  <Button variant="outline" size="sm" className="w-full transition-all duration-300 hover:bg-blue-50">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform hover:scale-105">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0008.jpg-6RTKRGY5Nvksz1GYCtnhBvP5VKeomw.jpeg"
                alt="LED Signage"
                className="w-full h-48 object-cover transition-transform duration-300"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">LED Signage</h3>
                <p className="text-gray-600 mb-4">
                  Bright, eye-catching LED displays for businesses and retail outlets
                </p>
                <Link to="/services" className="block">
                  <Button variant="outline" size="sm" className="w-full transition-all duration-300 hover:bg-blue-50">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Outdoor Advertising */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why choose <span className="text-orange-600">Outdoor Advertising</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Outdoor advertising is not just about hoarding or billboards! It aims at targeting the masses at all
              times. Outdoor advertising is great because you can't turn it off, throw it away, or click on the next
              page.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyChoosePoints.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <Star className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-800">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Trusted by Leading Brands</h2>
            <p className="text-xl text-gray-600">We've successfully executed campaigns for India's top companies</p>
          </div>

          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0007.jpg-nad05Ye7diP3V75hGmqUz0AUrQuCgW.jpeg"
              alt="Our Valuable Clients"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-gray-600 mb-6">and many more...</p>
            <Link to="/clients">
              <Button variant="outline" size="lg" className="transition-all duration-300 transform hover:scale-105 hover:bg-blue-50">
                View All Clients
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
