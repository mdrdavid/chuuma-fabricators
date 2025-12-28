import Image from "next/image"
import { Hammer, Award, MapPin, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-charcoal text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Chuuma Fabricators</h1>
          <p className="text-xl text-steel-light">Your trusted metal workshop in Wabigalo, Mityana</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality Metalwork Since Day One</h2>
              <p className="text-lg text-text-secondary mb-4 leading-relaxed">
                Chuuma Fabricators is a premier metal workshop located in Wabigalo, Mityana, specializing in custom
                metal fabrication for residential and commercial projects.
              </p>
              <p className="text-lg text-text-secondary mb-4 leading-relaxed">
                We pride ourselves on delivering high-quality gates, doors, windows, roofing, and custom metalwork that
                combines durability with aesthetic appeal.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Every project is handled with precision and care, ensuring that our clients receive metalwork that
                stands the test of time.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image src="/metal-workshop-with-workers-welding.jpg" alt="Chuuma Fabricators Workshop" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-grey py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-industrial-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Craftsmanship</h3>
              <p className="text-text-secondary">Skilled artisans with years of metalworking experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-industrial-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Materials</h3>
              <p className="text-text-secondary">We use only premium-grade steel and metals</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-industrial-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Local Service</h3>
              <p className="text-text-secondary">Based in Wabigalo, Mityana, serving the community</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-industrial-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-text-secondary">Dedicated to exceeding client expectations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-light-grey p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-industrial-orange">Our Mission</h3>
              <p className="text-text-secondary leading-relaxed">
                To provide exceptional metal fabrication services that enhance the security, beauty, and value of
                properties throughout Mityana and beyond.
              </p>
            </div>
            <div className="bg-light-grey p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-industrial-orange">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed">
                To be the most trusted and reliable metal fabrication workshop in the region, known for quality,
                innovation, and customer satisfaction.
              </p>
            </div>
            <div className="bg-light-grey p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-industrial-orange">Our Values</h3>
              <p className="text-text-secondary leading-relaxed">
                Quality craftsmanship, honest pricing, timely delivery, customer satisfaction, and continuous
                improvement in our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-light-grey">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Workshop</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image src="/metal-fabrication-workshop-equipment.jpg" alt="Workshop Equipment" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image src="/welding-metal-gate-in-workshop.jpg" alt="Welding Process" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image src="/finished-metal-products-in-workshop.jpg" alt="Finished Products" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
