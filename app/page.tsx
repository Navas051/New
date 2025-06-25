"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { Wrench, Settings, Sparkles, Wind, Gauge, PenToolIcon as Tool, Phone, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Wrench,
    nameKey: "acRepair",
    price: "₹500 - ₹2000",
    description: "Complete AC repair and troubleshooting",
  },
  {
    icon: Settings,
    nameKey: "acInstallation",
    price: "₹1500 - ₹5000",
    description: "Professional AC installation service",
  },
  {
    icon: Sparkles,
    nameKey: "acCleaning",
    price: "₹300 - ₹800",
    description: "Deep cleaning and sanitization",
  },
  {
    icon: Wind,
    nameKey: "acMaintenance",
    price: "₹400 - ₹1200",
    description: "Regular maintenance and servicing",
  },
  {
    icon: Gauge,
    nameKey: "gasRefilling",
    price: "₹800 - ₹1500",
    description: "Gas refilling and pressure check",
  },
  {
    icon: Tool,
    nameKey: "compressorRepair",
    price: "₹1000 - ₹3000",
    description: "Compressor repair and replacement",
  },
]

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{t("heroTitle")}</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{t("heroSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/book">{t("bookNow")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">{t("getQuote")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("ourServices")}</h2>
            <p className="text-xl text-gray-600">Professional AC services with transparent pricing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{t(service.nameKey)}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-blue-600">{service.price}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button asChild className="w-full">
                      <Link href="/book">{t("bookNow")}</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Technicians</h3>
              <p className="text-gray-600">Our team consists of certified and experienced AC technicians</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
              <p className="text-gray-600">We provide high-quality service with customer satisfaction guarantee</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for emergency services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Fix Your AC?</h2>
          <p className="text-xl mb-8">Contact us today for fast and reliable AC repair services</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="/book">{t("bookService")}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Link href="tel:9080772334">Call Now: 9080772334</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
