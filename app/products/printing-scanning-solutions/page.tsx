"use client";

import React from "react";
import PageHero from "../../components/PageHero";
import Link from "next/link";
import Image from "next/image";

const PRODUCT_CATEGORIES = [
  {
    id: "labels",
    title: "Labels",
    description: "High-quality, durable barcode and product labels for every application, from freezing warehouse environments to pristine retail displays.",
    image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=800",
    features: ["Direct Thermal & Thermal Transfer", "Custom Pre-Printed Options", "Harsh Environment Durability"]
  },
  {
    id: "thermal-transfer-ribbons",
    title: "Thermal Transfer Ribbons",
    description: "Premium wax, wax-resin, and resin ribbons engineered to provide crisp, dark, and long-lasting prints on a variety of label materials.",
    image: "https://images.unsplash.com/photo-1620286845601-5d9c240db7f9?auto=format&fit=crop&q=80&w=800",
    features: ["Wax for standard printing", "Wax-Resin for smear resistance", "Resin for extreme durability"]
  },
  {
    id: "rfid-solutions",
    title: "RFID Solutions",
    description: "Advanced RFID tags, readers, and software to automate your inventory tracking and improve supply chain visibility with pinpoint accuracy.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    features: ["UHF tags and labels", "Fixed and handheld readers", "Integration services"]
  },
  {
    id: "barcode-label-printer",
    title: "Barcode Label Printer",
    description: "Reliable industrial and desktop printers from top manufacturers, built to keep your operations running smoothly with minimal downtime.",
    image: "https://images.unsplash.com/photo-1580983546051-fb1f2c2777df?auto=format&fit=crop&q=80&w=800",
    features: ["Industrial high-volume printers", "Compact desktop models", "Wireless connectivity options"]
  },
  {
    id: "print-engine",
    title: "Print Engine",
    description: "High-performance print engines designed for mission-critical automated print-and-apply systems in manufacturing and logistics.",
    image: "https://images.unsplash.com/photo-1563804368532-6156e792cdd5?auto=format&fit=crop&q=80&w=800",
    features: ["Seamless integration", "High-speed throughput", "24/7 reliability"]
  },
  {
    id: "barcode-scanner",
    title: "Barcode Scanner",
    description: "Fast and accurate 1D, 2D, and QR code scanners for point-of-sale, inventory management, and rugged industrial environments.",
    image: "https://images.unsplash.com/photo-1555529902-5261145633bf?auto=format&fit=crop&q=80&w=800",
    features: ["Corded and cordless models", "Omnidirectional reading", "Ruggedized for drops"]
  },
  {
    id: "mobile-computers",
    title: "Mobile Computers & Tablets",
    description: "Empower your workforce with enterprise-grade mobile computers and tablets that combine consumer-style design with industrial durability.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800",
    features: ["Android & Windows OS", "Integrated barcode scanning", "All-day battery life"]
  }
];

export default function ProductsPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Printing & Scanning Solutions"
        description="Explore our comprehensive range of Auto ID hardware, consumables, and software designed to streamline your business operations."
        backgroundImage="https://images.unsplash.com/photo-1516322311718-4a1bfbfa11bb?auto=format&fit=crop&q=80&w=1920" // Tech/scanning vibe
      />

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="section-label">{"// HARDWARE & CONSUMABLES  //"}</p>
          <h2 className="section-heading mb-6">
            Everything You Need to <span className="highlight">Track & Print</span>
          </h2>
          <p className="text-gray-600 text-lg">
            From the warehouse floor to the retail checkout, our premium product lineup ensures accuracy, efficiency, and reliability.
          </p>
        </div>

        <div className="space-y-32">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <div
              key={category.id}
              id={category.id}
              className={`flex flex-col gap-12 lg:gap-20 items-center scroll-mt-32 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >

              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 border-4 border-white/20 rounded-3xl z-10 pointer-events-none"></div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 lg:px-8">
                <div className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-bold tracking-wider mb-6">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{category.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {category.description}
                </p>

                <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm">Key Capabilities</h4>
                <ul className="space-y-3 mb-10">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="pill-btn pill-btn-dark hover:shadow-xl inline-flex group">
                  Request Pricing
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* Footer CTA overlay for this specific page */}
      <section className="bg-section-bg2 py-20 mt-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Need a fully integrated system?</h2>
          <p className="text-xl text-gray-600 mb-10">Our solutions engineers can build a custom package combining hardware, software, and consumables perfectly tailored to your workflow.</p>
          <Link href="/solutions" className="pill-btn pill-btn-gradient text-lg px-8 py-4">Explore Custom Solutions</Link>
        </div>
      </section>

    </main>
  );
}
