"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Star, Users, Award, TrendingUp, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const highlights = [
    { icon: Users, value: "50+", label: "Expert Team" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: TrendingUp, value: "500+", label: "Happy Clients" },
    { icon: Clock, value: "24/7", label: "Support" },
  ]

  const whyChoosePoints = [
    "People spend more time in vehicle than they do reading newspapers or watching television.",
    "Outdoor advertising has the lowest cost per thousand. These ads cost 80% lesser than TV commercials and 60% lesser than print ads.",
    "Ads on billboards are free to consumers. (they do not have to purchase a magazine or TV cable to view the product)",
    "Outdoor advertising is the only medium with constant exposure. No other media allows a 24/7 display of advertisements!",
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Leading Advertising Company in UP</Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="text-red-500">c</span>
                  <span className="text-orange-500">o</span>
                  <span className="text-yellow-500">l</span>
                  <span className="text-green-500">o</span>
                  <span className="text-blue-500">r</span>
                  <span className="text-purple-500">s</span>
                  <br />
                  <span className="text-gray-800">Signs & Copiers</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  State-of-the-art technology for outdoor and indoor advertising. We specialize in digital printing,
                  signage fabrication, and innovative advertising solutions across Uttar Pradesh.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Explore Services
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Get Free Quote
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {highlights.map((item, index) => (
                  <div key={index} className="text-center">
                    <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-800">{item.value}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0001.jpg-UaSxo5cldKbwE4IGBAYn6qiY8pzxwR.jpeg"
                  alt="Colors Signs & Copiers Equipment"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl -z-10"></div>
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
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0014.jpg-XNVpMkOxYfo85jV9sMqgdiPTUoMgIW.jpeg"
                alt="Billboard Advertising"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Billboards & Hoardings</h3>
                <p className="text-gray-600 mb-4">
                  High-impact roadside advertising with maximum visibility for your brand
                </p>
                <Link href="/services">
                  <Button variant="outline" size="sm">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0010.jpg-dibHvly0jA8374y1oBo1eaD0gcmYn0.jpeg"
                alt="Mobile Van Advertising"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile Van Advertising</h3>
                <p className="text-gray-600 mb-4">Dynamic mobile advertising solutions reaching customers everywhere</p>
                <Link href="/services">
                  <Button variant="outline" size="sm">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0008.jpg-6RTKRGY5Nvksz1GYCtnhBvP5VKeomw.jpeg"
                alt="LED Signage"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">LED Signage</h3>
                <p className="text-gray-600 mb-4">
                  Bright, eye-catching LED displays for businesses and retail outlets
                </p>
                <Link href="/services">
                  <Button variant="outline" size="sm">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
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
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
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
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_compressed_page-0007.jpg-nad05Ye7diP3V75hGmqUz0AUrQuCgW.jpeg"
              alt="Our Valuable Clients"
              width={1200}
              height={600}
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-gray-600 mb-6">and many more...</p>
            <Link href="/clients">
              <Button variant="outline" size="lg">
                View All Clients
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
