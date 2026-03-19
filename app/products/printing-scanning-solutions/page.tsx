"use client";

import React from "react";
import PageHero from "../../components/PageHero";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


const PRODUCT_CATEGORIES = [
  {
    id: "barcode-label-printer",
    title: "Barcode Label Printer",
    description: "Reliable industrial and desktop printers from top manufacturers, built to keep your operations running smoothly with minimal downtime.",
    image: "https://images.unsplash.com/photo-1580983546051-fb1f2c2777df?auto=format&fit=crop&q=80&w=800",
    features: ["Industrial high-volume printers", "Compact desktop models", "Wireless connectivity options"],
    buttonText: "Explore Printers",
    pagePath: "/products/printing-scanning-solutions/barcode-label-printer" 
  },
  {
    id: "print-engine",
    title: "Print Engine",
    description: "High-performance print engines designed for mission-critical automated print-and-apply systems in manufacturing and logistics.",
    image: "https://images.unsplash.com/photo-1563804368532-6156e792cdd5?auto=format&fit=crop&q=80&w=800",
    features: ["Seamless integration", "High-speed throughput", "24/7 reliability"],
    buttonText: "View Print Engines",
    pagePath: "/products/printing-scanning-solutions/print-engine"
  },
  {
    id: "barcode-scanner",
    title: "Barcode Scanner",
    description: "Fast and accurate 1D, 2D, and QR code scanners for point-of-sale, inventory management, and rugged industrial environments.",
    image: "https://images.unsplash.com/photo-1555529902-5261145633bf?auto=format&fit=crop&q=80&w=800",
    features: ["Corded and cordless models", "Omnidirectional reading", "Ruggedized for drops"],
    buttonText: "Shop Scanners",
    pagePath: "/products/printing-scanning-solutions/barcode-scanner"
  },
  {
    id: "mobile-computers",
    title: "Mobile Computers & Tablets",
    description: "Empower your workforce with enterprise-grade mobile computers and tablets that combine consumer-style design with industrial durability.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800",
    features: ["Android & Windows OS", "Integrated barcode scanning", "All-day battery life"],
    buttonText: "See Mobile Computers",
    pagePath: "/products/printing-scanning-solutions/mobile-computers"
  }
];

export default function ProductsPage() {
  const router = useRouter();

  const handleCategoryClick = (pagePath: string, categoryTitle: string) => {
      // Navigate to the existing page
  router.push(pagePath);
    
    // Optional: Track analytics
    console.log(`Navigating to ${categoryTitle} page at ${pagePath}`);
  };

  return (
    <main className="bg-white">
      <PageHero
        title="Printing & Scanning Solutions"
        description="Explore our comprehensive range of Auto ID hardware, consumables, and software designed to streamline your business operations."
        backgroundImage="https://images.unsplash.com/photo-1516322311718-4a1bfbfa11bb?auto=format&fit=crop&q=80&w=1920"
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
              {/* Image Side - Clickable to navigate to the page */}
              <div className="w-full lg:w-1/2">
                <div 
                  onClick={() => handleCategoryClick(category.pagePath, category.title)}
                  className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 border-4 border-white/20 rounded-3xl z-10 pointer-events-none"></div>
                  
                  {/* Hover Overlay with "View Details" */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Click to View {category.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 lg:px-8">
                <div className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-bold tracking-wider mb-6">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* Category Title with Link */}
                <Link 
                  href={category.pagePath}
                  className="group inline-block"
                >
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 hover:text-primary transition-colors">
                    {category.title}
                    <span className="inline-block ml-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 transform">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </h3>
                </Link>
                
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

                {/* Dynamic Button based on category */}
                <div className="flex flex-wrap gap-4 items-center">
                  <Link 
                    href={category.pagePath}
                    className="pill-btn pill-btn-dark hover:shadow-xl inline-flex group"
                  >
                    {category.buttonText}
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  
                  <Link 
                    href={`/contact?product=${encodeURIComponent(category.title)}`}
                    className="text-gray-600 hover:text-primary transition-colors underline underline-offset-4"
                  >
                    Request Quote
                  </Link>
                </div>

                {/* Quick Navigation Hint */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Click on the image or title to view the complete {category.title} collection
                  </p>
                </div>
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