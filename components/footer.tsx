import Link from "next/link"
import Image from "next/image"
import { Phone, MessageCircle, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 bg-white rounded-full overflow-hidden p-1">
                <Image
                  src="/chuuma-logo.png"
                  alt="Chuuma Fabricators Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-bold">Chuuma Fabricators</div>
              </div>
            </div>
            <p className="text-steel-light text-sm leading-relaxed">
              Your trusted partner for quality metal fabrication in Wabigalo, Mityana. Excellence in every weld.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-steel-light hover:text-industrial-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-steel-light hover:text-industrial-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-steel-light hover:text-industrial-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-steel-light hover:text-industrial-orange transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-steel-light hover:text-industrial-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-steel-light text-sm">
              <li>Metal Gates</li>
              <li>Metal Doors</li>
              <li>Metal Windows</li>
              <li>Roofing Solutions</li>
              <li>Railings & Balustrades</li>
              <li>Custom Metal Works</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-industrial-orange mt-0.5 flex-shrink-0" />
                <div className="text-sm text-steel-light">
                  <a href="tel:+256705621018" className="hover:text-industrial-orange block">
                    +256 705 621 018
                  </a>
                  <a href="tel:+256781602071" className="hover:text-industrial-orange block">
                    +256 781 602 071
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-industrial-orange mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/256705621018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-steel-light hover:text-industrial-orange"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-industrial-orange mt-0.5 flex-shrink-0" />
                <span className="text-sm text-steel-light">
                  Wabigalo, Mityana
                  <br />
                  Central Region, Uganda
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-steel pt-8 text-center text-sm text-steel-light">
          <p>&copy; {new Date().getFullYear()} Chuuma Fabricators. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
