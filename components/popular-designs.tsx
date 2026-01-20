"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { MessageCircle, Star } from "lucide-react";
import { Design } from "@/lib/models";

export default function PopularDesigns() {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDesigns() {
      try {
        const response = await fetch("/api/designs");
        const data = await response.json();
        // Get first 3 designs
        setDesigns(data.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch designs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDesigns();
  }, []);

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-light-grey">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center">
            <p>Loading popular designs...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-light-grey">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-industrial-orange text-white px-4 py-2 rounded-full mb-4">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-semibold">Popular Choices</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Customer Favorites
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our most requested designs loved by clients across Uganda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {designs.map((design) => (
            <div
              key={design._id?.toString()}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-80">
                <Image
                  src={design.image || "/placeholder.svg"}
                  alt={design.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-industrial-orange text-white px-3 py-1 rounded-full text-sm font-bold">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{design.name}</h3>
                <p className="text-industrial-orange font-bold text-2xl mb-4">
                  UGX {design.pricing.base}K - {design.pricing.max}K
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-industrial-orange hover:bg-industrial-orange-dark text-white"
                >
                  <a
                    href="https://wa.me/256705621018"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Order Now
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
