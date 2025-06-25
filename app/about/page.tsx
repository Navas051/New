"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { Users, Award, Clock, Shield } from "lucide-react"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("aboutTitle")}</h1>
            <p className="text-xl max-w-3xl mx-auto">{t("aboutContent")}</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("ourMission")}</h2>
              <p className="text-lg text-gray-600 mb-6">{t("missionContent")}</p>
              <p className="text-gray-600">
                With years of experience in the AC repair industry, we have built a reputation for excellence,
                reliability, and customer satisfaction. Our team of certified technicians uses the latest tools and
                techniques to ensure your AC systems run efficiently.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-blue-600">500+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Happy Customers</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-green-600">5+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Years Experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SNOW ZONE AC SERVICE?</h2>
            <p className="text-xl text-gray-600">
              We are committed to providing the best AC repair services in the city
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
              <p className="text-gray-600">Fast response time for all service requests</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Certified and experienced professionals</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all services</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-600">Customer satisfaction is our top priority</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
