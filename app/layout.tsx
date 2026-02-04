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
  title: "Chuuma Fabricators | Best Metal Fabrication in Uganda - Kampala & Mityana",
  description:
    "Top-rated metal fabrication services in Uganda. We specialize in custom gates, security doors, window frames, roofing, and railings in Kampala, Mityana, and nationwide. Expert welding and quality craftsmanship. Call +256 705 621 018",
  keywords:
    "metal fabrication Uganda, metal fabricators Kampala, metal gates Uganda, security doors Mityana, welding services Kampala, metal roofing Uganda, window frames Uganda, burglar bars Kampala, custom metal work Uganda, Chuuma Fabricators, Wabigalo Mityana, metal works Uganda, steel fabrication Kampala, welders in Mityana",
  authors: [{ name: "Chuuma Fabricators" }],
  openGraph: {
    title: "Chuuma Fabricators - Quality Metal Works in Uganda",
    description: "Professional metal fabrication services in Kampala, Mityana, and across Uganda. Custom gates, doors, windows, roofing & more.",
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
    icon: "/chuuma-logo.png",
    apple: "/chuuma-logo.png",
  },
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
