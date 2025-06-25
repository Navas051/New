"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "ta"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    contact: "Contact",
    bookService: "Book Service",

    // Homepage
    heroTitle: "Professional AC Repair Services",
    heroSubtitle:
      "Expert AC repair and maintenance services in your city. Fast, reliable, and affordable solutions for all your cooling needs.",
    ourServices: "Our Services",
    getQuote: "Get Quote",
    bookNow: "Book Now",

    // Services
    acRepair: "AC Repair",
    acInstallation: "AC Installation",
    acMaintenance: "AC Maintenance",
    acCleaning: "AC Cleaning",
    gasRefilling: "Gas Refilling",
    compressorRepair: "Compressor Repair",

    // About
    aboutTitle: "About SNOW ZONE AC SERVICE",
    aboutContent:
      "We are a leading AC repair service provider with years of experience in the industry. Our team of certified technicians provides reliable, efficient, and affordable AC repair solutions.",
    ourMission: "Our Mission",
    missionContent:
      "To provide exceptional AC repair services that ensure customer satisfaction and comfort in every home and office.",

    // Contact
    contactTitle: "Contact Us",
    phone: "Phone",
    email: "Email",
    address: "Address",
    sendMessage: "Send Message",

    // Form
    name: "Name",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    service: "Service",
    selectService: "Select a Service",
    message: "Message",
    submit: "Submit",

    // Booking
    bookingTitle: "Book a Service",
    bookingSuccess: "Booking request sent successfully!",
  },
  ta: {
    // Navigation
    home: "முகப்பு",
    about: "எங்களைப் பற்றி",
    contact: "தொடர்பு",
    bookService: "சேவை பதிவு",

    // Homepage
    heroTitle: "தொழில்முறை ஏசி பழுதுபார்ப்பு சேவைகள்",
    heroSubtitle: "உங்கள் நகரத்தில் நிபுணர் ஏசி பழுதுபார்ப்பு மற்றும் பராமரிப்பு சேவைகள். வேகமான, நம்பகமான மற்றும் மலிவு விலையில்.",
    ourServices: "எங்கள் சேவைகள்",
    getQuote: "மதிப்பீடு பெறுங்கள்",
    bookNow: "இப்போது பதிவு செய்யுங்கள்",

    // Services
    acRepair: "ஏசி பழுதுபார்ப்பு",
    acInstallation: "ஏசி நிறுவல்",
    acMaintenance: "ஏசி பராமரிப்பு",
    acCleaning: "ஏசி சுத்தம்",
    gasRefilling: "வாயு நிரப்புதல்",
    compressorRepair: "கம்ப்ரசர் பழுதுபார்ப்பு",

    // About
    aboutTitle: "SNOW ZONE AC SERVICE பற்றி",
    aboutContent:
      "நாங்கள் பல ஆண்டுகள் அனுபவம் கொண்ட முன்னணி ஏசி பழுதுபார்ப்பு சேவை வழங்குநர். எங்கள் சான்றிதழ் பெற்ற தொழில்நுட்ப வல்லுநர்கள் நம்பகமான, திறமையான மற்றும் மலிவு விலையில் ஏசி பழுதுபார்ப்பு தீர்வுகளை வழங்குகிறார்கள்.",
    ourMission: "எங்கள் நோக்கம்",
    missionContent:
      "ஒவ்வொரு வீட்டிலும் அலுவலகத்திலும் வாடிக்கையாளர் திருப்தி மற்றும் வசதியை உறுதி செய்யும் சிறந்த ஏசி பழுதுபார்ப்பு சேவைகளை வழங்குவது.",

    // Contact
    contactTitle: "எங்களை தொடர்பு கொள்ளுங்கள்",
    phone: "தொலைபேசி",
    email: "மின்னஞ்சல்",
    address: "முகவரி",
    sendMessage: "செய்தி அனுப்பு",

    // Form
    name: "பெயர்",
    phoneNumber: "தொலைபேசி எண்",
    emailAddress: "மின்னஞ்சல் முகவரி",
    service: "சேவை",
    selectService: "ஒரு சேவையை தேர்ந்தெடுக்கவும்",
    message: "செய்தி",
    submit: "சமர்ப்பிக்கவும்",

    // Booking
    bookingTitle: "சேவை பதிவு செய்யுங்கள்",
    bookingSuccess: "பதிவு கோரிக்கை வெற்றிகரமாக அனுப்பப்பட்டது!",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
