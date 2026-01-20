"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/lib/models";

export default function ServicesGrid() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch("/api/services");
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-light-grey">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center">
            <p>Loading services...</p>
          </div>
        </div>
      </section>
    );
  }

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
              key={service._id?.toString()}
              href={`/services?category=${service.category}`}
              className="group relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                <p className="text-steel-light mb-3">
                  {service.shortDescription}
                </p>
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
