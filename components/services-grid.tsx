import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Gates",
    description: "Custom metal gates for homes and businesses",
    image: "/images/service-gates.jpg",
    href: "/services#gates",
  },
  {
    title: "Doors",
    description: "Security doors and custom designs",
    image: "/images/service-doors.jpg",
    href: "/services#doors",
  },
  {
    title: "Windows",
    description: "Window frames and burglar bars",
    image: "/images/service-windows.jpg",
    href: "/services#windows",
  },
  {
    title: "Roofing",
    description: "Quality metal roofing solutions",
    image: "/images/service-roofing.jpg",
    href: "/services#roofing",
  },
  {
    title: "Railings",
    description: "Elegant railings and balustrades",
    image: "/images/service-railings.jpg",
    href: "/services#railings",
  },
  {
    title: "Custom Works",
    description: "Specialized custom fabrication",
    image: "/images/service-custom.jpg",
    href: "/services#custom",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-light-grey">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Comprehensive metal fabrication services for all your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-steel-light mb-3">{service.description}</p>
                <div className="flex items-center text-industrial-orange group-hover:translate-x-2 transition-transform">
                  <span className="font-semibold">Learn More</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
