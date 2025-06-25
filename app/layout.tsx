import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SNOW ZONE AC SERVICE - Professional AC Repair Services",
  description:
    "Expert AC repair and maintenance services. Fast, reliable, and affordable solutions for all your cooling needs.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Navigation />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  )
}
