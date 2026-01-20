"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import { Design } from "@/lib/models";

export default function DesignGallery() {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDesigns() {
      try {
        const response = await fetch("/api/designs");
        const data: Design[] = await response.json();
        setDesigns(data);
        // Extract unique categories
        const uniqueCategories: string[] = [
          "All",
          ...new Set(data.map((d: Design) => d.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Failed to fetch designs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDesigns();
  }, []);

  const filteredDesigns =
    activeCategory === "All"
      ? designs
      : designs.filter((design) => design.category === activeCategory);

  const handleWhatsAppInquiry = (design: Design) => {
    const message = `Hi! I'm interested in ${design.name}. Price range: UGX ${design.pricing.base}K - ${design.pricing.max}K. Can you provide more details?`;
    const url = `https://wa.me/256705621018?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  if (loading) {
    return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center">
            <p>Loading designs...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Designs & Prices
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Browse our popular designs with transparent pricing
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 md:px-6 py-2 rounded-lg font-semibold transition-all ${
                  activeCategory === category
                    ? "bg-industrial-orange text-white"
                    : "bg-light-grey text-charcoal hover:bg-steel hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDesigns.map((design) => (
            <div
              key={design._id?.toString()}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={design.image || "/placeholder.svg"}
                  alt={design.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{design.name}</h3>
                <p className="text-sm text-text-secondary mb-2">
                  <span className="font-semibold">Specs:</span>{" "}
                  {design.specifications}
                </p>
                <p className="text-industrial-orange font-bold text-lg mb-4">
                  UGX {design.pricing.base}K - {design.pricing.max}K
                </p>
                <Button
                  onClick={() => handleWhatsAppInquiry(design)}
                  size="sm"
                  className="w-full bg-industrial-orange hover:bg-industrial-orange-dark text-white"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Inquire on WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-light-grey p-6 rounded-lg">
          <p className="text-text-secondary">
            <strong>Note:</strong> Prices are estimates and may vary based on
            size, design complexity, material thickness, finishing, and
            installation requirements. Contact us for an accurate quote.
          </p>
        </div>
      </div>
    </section>
  );
}
