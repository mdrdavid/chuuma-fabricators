import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Metal Gates",
    description:
      "Custom-designed gates for homes, businesses, and estates. From simple swing gates to elaborate automated entrance gates.",
    image: "/images/services-detail-gates.jpg",
    features: [
      "Swing gates",
      "Sliding gates",
      "Automated gates",
      "Pedestrian gates",
      "Driveway gates",
    ],
    useCases:
      "Residential properties, commercial buildings, estates, and industrial facilities.",
  },
  {
    title: "Metal Doors",
    description:
      "Secure and stylish metal doors for interior and exterior applications. Built for maximum security and durability.",
    image: "/images/services-detail-doors.jpg",
    features: [
      "Security doors",
      "Burglar-proof doors",
      "Interior metal doors",
      "Fire-rated doors",
      "Custom designs",
    ],
    useCases: "Homes, offices, shops, warehouses, and high-security areas.",
  },
  {
    title: "Metal Windows",
    description:
      "Durable metal window frames and burglar bars that provide security without compromising aesthetics.",
    image: "/images/services-detail-windows.jpg",
    features: [
      "Window frames",
      "Burglar bars",
      "Security grilles",
      "Decorative windows",
      "Custom patterns",
    ],
    useCases:
      "Residential buildings, commercial properties, and renovation projects.",
  },
  {
    title: "Roofing Solutions",
    description:
      "Professional metal roofing installation and fabrication. Long-lasting protection for your property.",
    image: "/images/services-detail-roofing.jpg",
    features: [
      "Iron sheets",
      "Box profile roofing",
      "Corrugated sheets",
      "Ridge capping",
      "Gutter systems",
    ],
    useCases:
      "New construction, roof replacements, and commercial roofing projects.",
  },
  {
    title: "Railings & Balustrades",
    description:
      "Elegant railings for staircases, balconies, and terraces. Safety combined with visual appeal.",
    image: "/images/services-detail-railings.jpg",
    features: [
      "Staircase railings",
      "Balcony railings",
      "Terrace barriers",
      "Decorative balustrades",
      "Glass & metal combinations",
    ],
    useCases:
      "Multi-story buildings, balconies, staircases, and outdoor spaces.",
  },
    {
    title: "Office Furniture",
    description: "Durable and stylish metal office furniture designed for comfort, productivity, and longevity.",
    image: "/images/services-detail-office.jpg",
    features: [
      "Office desks & workstations",
      "Filing cabinets & storage",
      "Office chairs & seating",
      "Metal shelving units",
      "Custom office solutions",
    ],
    useCases: "Corporate offices, home offices, schools, government institutions, and commercial spaces.",
  },
  {
    title: "Custom Metal Works",
    description:
      "Specialized metal fabrication for unique projects. We bring your custom ideas to life.",
    image: "/images/services-detail-custom.jpg",
    features: [
      "Metal furniture",
      "Decorative pieces",
      "Industrial structures",
      "Repair & modifications",
      "Special orders",
    ],
    useCases:
      "Unique architectural features, custom furniture, and specialized industrial needs.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-charcoal text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-steel-light max-w-3xl">
            Comprehensive metal fabrication services for all your residential
            and commercial needs
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">What We Offer:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="w-2 h-2 bg-industrial-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">Use Cases:</h3>
                    <p className="text-text-secondary">{service.useCases}</p>
                  </div>

                  <div className="bg-light-grey p-4 rounded-lg mb-6">
                    <p className="text-sm font-semibold text-charcoal">
                      ✓ Quality Assurance: All work comes with a satisfaction
                      guarantee
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-industrial-orange hover:bg-industrial-orange-dark text-white"
                    >
                      <a href="tel:+256705621018">
                        <Phone className="mr-2 h-5 w-5" />
                        Call Now
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-industrial-orange text-industrial-orange hover:bg-industrial-orange hover:text-white bg-transparent"
                    >
                      <a
                        href="https://wa.me/256705621018"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        WhatsApp Us
                      </a>
                    </Button>
                  </div>
                </div>

                <div
                  className={`relative h-96 rounded-lg overflow-hidden shadow-xl ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-industrial-orange text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and quote
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-industrial-orange hover:bg-light-grey"
          >
            <Link href="/contact">Get A Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
