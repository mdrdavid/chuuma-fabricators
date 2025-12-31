"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

const categories = [
  "All",
  "Gates",
  "Doors",
  "Windows",
  "Roofing",
  "Railings",
  "Office Furniture",
];

const designs = [
  {
    name: "Modern Gate MG-01",
    category: "Gates",
    material: "40x40mm Steel",
    price: "UGX 1.5M - 2.5M",
    image: "/images/design-gate-modern.jpg",
  },
  {
    name: "Security Door SD-02",
    category: "Doors",
    material: "50x50mm Steel",
    price: "UGX 800K - 1.2M",
    image: "/images/design-door-security.jpg",
  },
  {
    name: "Decorative Window DW-03",
    category: "Windows",
    material: "20x20mm Steel",
    price: "UGX 300K - 500K",
    image: "/images/design-window-decorative.jpg",
  },
  {
    name: "Box Profile Roof",
    category: "Roofing",
    material: "Gauge 28 Iron Sheets",
    price: "UGX 35K - 45K per sheet",
    image: "/images/design-roof-box.jpg",
  },
  {
    name: "Balcony Railing BR-01",
    category: "Railings",
    material: "32x32mm Steel",
    price: "UGX 80K - 120K per meter",
    image: "/images/design-railing-balcony.jpg",
  },
  {
    name: "Executive Desk ED-01",
    category: "Office Furniture",
    material: "Steel frame with wood top",
    price: "UGX 600K - 900K",
    image: "/images/design-office-desk.jpg",
  },
  {
    name: "Filing Cabinet FC-02",
    category: "Office Furniture",
    material: "16-gauge steel",
    price: "UGX 400K - 650K",
    image: "/images/design-office-cabinet.jpg",
  },
  {
    name: "Office Chair OC-03",
    category: "Office Furniture",
    material: "Steel frame with cushioning",
    price: "UGX 250K - 450K",
    image: "/images/design-office-chair.jpg",
  },
  {
    name: "Workstation WS-04",
    category: "Office Furniture",
    material: "Steel partition system",
    price: "UGX 1.2M - 1.8M",
    image: "/images/design-office-workstation.jpg",
  },
  {
    name: "Sliding Gate SG-04",
    category: "Gates",
    material: "50x50mm Steel",
    price: "UGX 2.5M - 3.5M",
    image: "/images/design-gate-sliding.jpg",
  },
  {
    name: "French Door FD-01",
    category: "Doors",
    material: "40x40mm Steel",
    price: "UGX 1M - 1.5M",
    image: "/images/design-door-french.jpg",
  },
  {
    name: "Burglar Bars BB-02",
    category: "Windows",
    material: "16mm Round Bar",
    price: "UGX 150K - 250K",
    image: "/images/design-window-bars.jpg",
  },
];

export default function DesignGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDesigns =
    activeCategory === "All"
      ? designs
      : designs.filter((design) => design.category === activeCategory);

  const handleWhatsAppInquiry = (design: (typeof designs)[0]) => {
    const message = `Hi! I'm interested in ${design.name}. Price range: ${design.price}. Can you provide more details?`;
    const url = `https://wa.me/256705621018?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

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
              key={design.name}
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
                  <span className="font-semibold">Material:</span>{" "}
                  {design.material}
                </p>
                <p className="text-industrial-orange font-bold text-lg mb-4">
                  {design.price}
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
