import Image from "next/image"
import { Button } from "./ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function CustomOrderCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Custom Metal Fabrication"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/80" />

      <div className="relative container mx-auto px-4 md:px-8 max-w-7xl text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Have a Custom Design in Mind?</h2>
        <p className="text-xl md:text-2xl text-steel-light mb-10 max-w-3xl mx-auto text-pretty">
          We specialize in bringing unique visions to life. From concept to installation, we'll work with you every step
          of the way.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-industrial-orange hover:bg-industrial-orange-dark text-white text-lg px-8"
          >
            <Link href="/contact">Get A Custom Quote</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-charcoal text-lg px-8 bg-transparent"
          >
            <a href="https://wa.me/256705621018" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
