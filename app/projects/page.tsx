"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const projects = [
  {
    title: "Modern Estate Gate",
    location: "Mityana",
    image: "/images/project-estate-gate.jpg",
    category: "gates",
  },
  {
    title: "Security Door Installation",
    location: "Wabigalo",
    image: "/images/project-security-door.jpg",
    category: "doors",
  },
  {
    title: "Decorative Window Grilles",
    location: "Mityana",
    image: "/images/project-window-grilles.jpg",
    category: "windows",
  },
  {
    title: "Commercial Roofing",
    location: "Central Region",
    image: "/images/project-roofing.jpg",
    category: "roofing",
  },
  {
    title: "Balcony Railings",
    location: "Mityana",
    image: "/images/project-balcony.jpg",
    category: "railings",
  },
  {
    title: "Automated Sliding Gate",
    location: "Wabigalo",
    image: "/images/project-sliding-gate.jpg",
    category: "gates",
  },
  {
    title: "Custom Metal Furniture",
    location: "Mityana",
    image: "/images/project-furniture.jpg",
    category: "custom",
  },
  {
    title: "Residential Gate & Fence",
    location: "Central Region",
    image: "/images/project-gate-fence.jpg",
    category: "gates",
  },
  {
    title: "Staircase Railing",
    location: "Wabigalo",
    image: "/images/project-staircase.jpg",
    category: "railings",
  },
];

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      <section className="bg-charcoal text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-steel-light">
            A showcase of our completed metalwork installations
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-steel-light">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-0">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute -top-12 right-0 text-white hover:text-industrial-orange transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          {selectedImage && (
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Project detail"
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
