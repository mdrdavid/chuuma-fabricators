import HeroSection from "@/components/hero-section"
import ServicesGrid from "@/components/services-grid"
import DesignGallery from "@/components/design-gallery"
import PopularDesigns from "@/components/popular-designs"
import PricingExplanation from "@/components/pricing-explanation"
import CustomOrderCTA from "@/components/custom-order-cta"
import WhatsAppButton from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesGrid />
      <DesignGallery />
      <PopularDesigns />
      <PricingExplanation />
      <CustomOrderCTA />
      <WhatsAppButton />
    </main>
  )
}
