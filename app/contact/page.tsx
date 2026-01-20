"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.message || !email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      // Save to MongoDB
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: email,
          phone: formData.phone,
          service: formData.service || "General Inquiry",
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save contact");
      }

      // WhatsApp message
      const whatsappMessage = `Hello Chuuma Fabricators! 
Name: ${formData.name}
Email: ${email}
Phone: ${formData.phone}
Service: ${formData.service || "General Inquiry"}
Message: ${formData.message}`;

      const whatsappUrl = `https://wa.me/256705621018?text=${encodeURIComponent(
        whatsappMessage
      )}`;
      window.open(whatsappUrl, "_blank");

      toast({
        title: "Success!",
        description: "Your inquiry has been saved and WhatsApp opened",
      });

      // Reset form
      setFormData({ name: "", phone: "", service: "", message: "" });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save your inquiry",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <section className="bg-charcoal text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-steel-light">
            Get in touch for a free consultation and quote
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us A Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold mb-2"
                  >
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+256 XXX XXXXXX"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background"
                  >
                    <option value="">Select a service</option>
                    <option value="Gates">Metal Gates</option>
                    <option value="Doors">Metal Doors</option>
                    <option value="Windows">Metal Windows</option>
                    <option value="Roofing">Roofing Solutions</option>
                    <option value="Railings">Railings & Balustrades</option>
                    <option value="Custom">Custom Metal Works</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-industrial-orange hover:bg-industrial-orange-dark text-white"
                  disabled={submitting}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {submitting ? "Saving..." : "Send via WhatsApp"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-industrial-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone Numbers</h3>
                    <a
                      href="tel:+256705621018"
                      className="text-text-secondary hover:text-industrial-orange block"
                    >
                      +256 705 621 018
                    </a>
                    <a
                      href="tel:+256781602071"
                      className="text-text-secondary hover:text-industrial-orange block"
                    >
                      +256 781 602 071
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-industrial-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/256705621018"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-industrial-orange"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-industrial-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-text-secondary">
                      Wabigalo, Mityana
                      <br />
                      Central Region, Uganda
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-industrial-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Working Hours</h3>
                    <p className="text-text-secondary">
                      Monday - Saturday: 8:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127638.35452012677!2d32.3812!3d0.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d8c0e0a8e0e0d%3A0x0!2sMityana!5e0!3m2!1sen!2sug!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chuuma Fabricators Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
