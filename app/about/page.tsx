"use client";

import React from "react";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Hammer, Award, MapPin, Users } from "lucide-react";
import { CompanyInfo } from "@/lib/models";

const iconMap: { [key: string]: React.ReactNode } = {
  Hammer: <Hammer className="w-8 h-8 text-white" />,
  Award: <Award className="w-8 h-8 text-white" />,
  MapPin: <MapPin className="w-8 h-8 text-white" />,
  Users: <Users className="w-8 h-8 text-white" />,
};

export default function AboutPage() {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCompanyInfo() {
      try {
        const response = await fetch("/api/company");
        const data = await response.json();
        setCompanyInfo(data);
      } catch (error) {
        console.error("Failed to fetch company info:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCompanyInfo();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen">
        <section className="bg-charcoal text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About</h1>
          </div>
        </section>
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
            <p>Loading company information...</p>
          </div>
        </section>
      </main>
    );
  }

  if (!companyInfo) {
    return (
      <main className="min-h-screen">
        <section className="bg-charcoal text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About</h1>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <section className="bg-charcoal text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About {companyInfo.companyName}
          </h1>
          <p className="text-xl text-steel-light">{companyInfo.tagline}</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {companyInfo.storyTitle}
              </h2>
              {companyInfo.storyContent.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-text-secondary mb-4 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about-workshop.jpg"
                alt={companyInfo.companyName}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-grey py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyInfo.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-16 h-16 bg-industrial-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  {iconMap[feature.icon] || (
                    <Hammer className="w-8 h-8 text-white" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Mission & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-light-grey p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-industrial-orange">
                Our Mission
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {companyInfo.mission}
              </p>
            </div>
            <div className="bg-light-grey p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-industrial-orange">
                Our Vision
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {companyInfo.vision}
              </p>
            </div>
            <div className="bg-light-grey p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-industrial-orange">
                Our Values
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {companyInfo.values}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-light-grey">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Workshop
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {companyInfo.workshopImages.map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Workshop image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          {companyInfo.workshopDescription && (
            <p className="text-center text-text-secondary mt-8 text-lg">
              {companyInfo.workshopDescription}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
