import { Ruler, Layers, Wrench, Palette, Truck } from "lucide-react"

const factors = [
  {
    icon: Ruler,
    title: "Size & Dimensions",
    description: "Larger gates and structures require more material and labor",
  },
  {
    icon: Layers,
    title: "Material Thickness",
    description: "Heavier gauge steel provides better security and durability",
  },
  {
    icon: Wrench,
    title: "Design Complexity",
    description: "Intricate patterns and custom designs require more craftsmanship",
  },
  {
    icon: Palette,
    title: "Finishing",
    description: "Paint quality, powder coating, and rust protection treatments",
  },
  {
    icon: Truck,
    title: "Transport & Installation",
    description: "Distance to site and installation complexity affect final cost",
  },
]

export default function PricingExplanation() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Understanding Our Pricing</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Several factors influence the final price of your metalwork project
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {factors.map((factor) => {
            const Icon = factor.icon
            return (
              <div key={factor.title} className="text-center">
                <div className="w-16 h-16 bg-industrial-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{factor.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{factor.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-light-grey p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Need an Accurate Quote?</h3>
          <p className="text-text-secondary mb-6">
            Contact us with your project details for a personalized estimate. We'll provide a detailed breakdown and
            help you stay within budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+256705621018"
              className="px-6 py-3 bg-industrial-orange text-white rounded-lg font-semibold hover:bg-industrial-orange-dark transition-colors"
            >
              Call for Quote
            </a>
            <a
              href="https://wa.me/256705621018"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-industrial-orange text-industrial-orange rounded-lg font-semibold hover:bg-industrial-orange hover:text-white transition-colors"
            >
              WhatsApp Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
