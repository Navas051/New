"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Snowflake, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ta" : "en")
  }

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Snowflake className="h-8 w-8 text-blue-200" />
            <span className="font-bold text-xl">SNOW ZONE AC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              {t("home")}
            </Link>
            <Link href="/about" className="hover:text-blue-200 transition-colors">
              {t("about")}
            </Link>
            <Link href="/contact" className="hover:text-blue-200 transition-colors">
              {t("contact")}
            </Link>
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language === "en" ? "தமிழ்" : "English"}
            </Button>
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link href="/book">{t("bookService")}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              {language === "en" ? "த" : "En"}
            </Button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-blue-200">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-700">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-blue-200"
                onClick={() => setIsOpen(false)}
              >
                {t("home")}
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:text-blue-200"
                onClick={() => setIsOpen(false)}
              >
                {t("about")}
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white hover:text-blue-200"
                onClick={() => setIsOpen(false)}
              >
                {t("contact")}
              </Link>
              <Link
                href="/book"
                className="block px-3 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                onClick={() => setIsOpen(false)}
              >
                {t("bookService")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
