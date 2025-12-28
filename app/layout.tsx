import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Chuuma Fabricators - Quality Metal Works in Mityana | Gates, Doors, Windows & Roofing",
  description:
    "Professional metal fabrication in Wabigalo, Mityana. Custom gates, security doors, window frames, roofing solutions, and railings. Quality craftsmanship, competitive prices. Call +256 705 621 018",
  keywords:
    "metal fabrication Mityana, metal gates Uganda, security doors Mityana, metal windows, roofing solutions, welding services, burglar bars, metal railings, custom metalwork Uganda",
  authors: [{ name: "Chuuma Fabricators" }],
  openGraph: {
    title: "Chuuma Fabricators - Quality Metal Works in Mityana",
    description: "Professional metal fabrication services. Custom gates, doors, windows, roofing & more.",
    type: "website",
    locale: "en_UG",
    siteName: "Chuuma Fabricators",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: "#F59E0B",
  },
  icons: {
    icon: "/icon.svg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
