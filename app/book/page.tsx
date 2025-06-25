"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/language-context"
import { MessageCircle } from "lucide-react"

const services = ["acRepair", "acInstallation", "acCleaning", "acMaintenance", "gasRefilling", "compressorRepair"]

export default function BookingPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format message for WhatsApp
    const whatsappMessage = `
🔧 *New Service Booking Request*

👤 *Customer Details:*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email}

🛠️ *Service Required:*
• ${t(formData.service)}

💬 *Additional Message:*
${formData.message || "No additional message"}

---
*Sent from SNOW ZONE AC SERVICE website*
    `.trim()

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/919080772334?text=${encodeURIComponent(whatsappMessage)}`

    // Open WhatsApp
    window.open(whatsappUrl, "_blank")

    setIsSubmitting(false)

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    })

    alert(t("bookingSuccess"))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg">
          <CardHeader className="text-center bg-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl md:text-3xl">{t("bookingTitle")}</CardTitle>
            <CardDescription className="text-blue-100">
              Fill out the form below and we'll contact you via WhatsApp
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">{t("name")} *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">{t("phoneNumber")} *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">{t("emailAddress")}</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="service">{t("service")} *</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => handleInputChange("service", value)}
                  required
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder={t("selectService")} />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {t(service)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">{t("message")}</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  className="mt-1"
                  placeholder="Describe your AC problem or any specific requirements..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                disabled={isSubmitting}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {isSubmitting ? "Sending..." : `${t("submit")} via WhatsApp`}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> After submitting this form, you'll be redirected to WhatsApp where you can send
                your booking request directly to our team at <strong>9080772334</strong>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
