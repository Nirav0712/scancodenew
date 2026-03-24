"use client";

import React from "react";
import PageHero from "../../components/PageHero";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


const PRODUCT_CATEGORIES = [
  {
    id: "barcode-label-printer",
    title: "Barcode Label Printers",
    description: "Explore Scancode Auto ID Technology Pvt Ltd's comprehensive range of barcode label printers designed to meet the demanding needs of modern businesses. Our solutions include high-performance printers, thermal transfer ribbons, in-mold labels, and more, all engineered for reliability and long-term performance. Enhance efficiency and ensure accurate, high-quality results across diverse applications with our industry-leading printing hardware.",
    image: "/barcode-printers-trio.png",
    hoverImage: "/barcode-printer-hover.png",
    features: ["Industrial high-volume printers", "Compact desktop models", "Wireless connectivity options"],
    buttonText: "Explore Printers",
    pagePath: "/products/printing-scanning-solutions/barcode-label-printer" 
  },
  {
    id: "print-engine",
    title: "Print Engines",
    description: "Explore Scancode Auto ID Technology Pvt Ltd's cutting-edge print engine solutions, engineered for high-speed, mission-critical automated labeling. Our high-performance print engines are designed to integrate seamlessly into complex manufacturing and logistics lines, providing 24/7 reliability and precision. From industrial-grade durability to advanced integration capabilities, we offer the robust technology needed to streamline your automated print-and-apply workflows and ensure consistent, high-quality output.",
    image: "/print-engines-trio.png",
    hoverImage: "/barcode-printer-hover.png",
    features: ["Seamless integration", "High-speed throughput", "24/7 reliability"],
    buttonText: "View Print Engines",
    pagePath: "/products/printing-scanning-solutions/print-engine"
  },
  {
    id: "barcode-scanner",
    title: "Barcode Scanners",
    description: "Barcode scanners are essential devices designed to read and decode barcodes quickly and accurately, enabling businesses to streamline operations and improve efficiency. These devices play a crucial role in modern industries by automating data entry processes, reducing human errors, and enhancing productivity.Barcode scanners are widely used in industries such as retail, logistics, healthcare, and inventory management. They help automate data entry, reduce human errors, and improve operational efficiency.",
    image: "/images/printers/barcodescanners.png",
    hoverImage: "/barcode-printer-hover.png",
    features: ["Corded and cordless models", "Omnidirectional reading", "Ruggedized for drops"],
    buttonText: "Shop Scanners",
    pagePath: "/products/printing-scanning-solutions/barcode-scanner"
  },
  {
    id: "mobile-computers",
    title: "Mobile Computers & Tablets",
    description: "Explore Scancode Auto ID Technology Pvt Ltd's latest range of industrial tablets and handheld computers designed for business-critical operations. These advanced multi-functional handheld devices combine the power of a workstation with the portability of a smartphone. Engineered for the most demanding professional and industrial environments seamless wireless connectivity. From warehouse management and field service to retail and healthcare sectors, these devices empower your workforce to capture, process, and transmit data in real-time while on the move, regardless of conditions.",
    image: "/images/printers/microphone.png",
    hoverImage:"/barcode-printers-trio.png",
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
        backgroundImage="https://images.unsplash.com/photo-1580983546051-fb1f2c2777df?auto=format&fit=crop&q=80&w=1920"
        
      />

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-2xl font-bold text-gray-900 mb-8">
            High-Quality <span className="text-[#EF7F1A]">Printing & Scanning Solutions</span> Tailored for Your Needs
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed w-full max-w-5xl mx-auto px-6 text-center">
            Explore Scancode Auto ID Technology Pvt Ltd&apos;s comprehensive range of Printing & Scanning Solutions designed to meet the demanding needs of modern businesses. Our solutions include high-performance printers, thermal transfer ribbons, in-mold labels, and more, all engineered for reliability and high productivity. From barcode labeling to document scanning, we offer industry-leading products that enhance efficiency and ensure accurate, high-quality results across diverse applications. Discover the perfect solution to streamline your operations today.
          </p>
          <div className="mt-12 h-[1px] w-48 bg-gray-200 mx-auto"></div>
        </div>

        <div className="space-y-16 lg:space-y-24">
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
                    className={`object-cover ${(category as any).hoverImage ? 'group-hover:opacity-0' : 'group-hover:scale-105'} transition-all duration-700`}
                  />
                  {(category as any).hoverImage && (
                    <Image
                      src={(category as any).hoverImage}
                      alt={`${category.title} Hover`}
                      fill
                      className="object-cover opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-105 transition-all duration-700"
                    />
                  )}
                  
                  {/* Hover Overlay with "View Details" */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 whitespace-nowrap">
                      Click to View {category.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 lg:px-8 text-center flex flex-col items-center">
                
                {/* Category Title with Link */}
                <Link 
                  href={category.pagePath}
                  className="group inline-block"
                >
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 hover:text-gray-700 transition-colors relative inline-block pb-2">
                    {category.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                    <span className="inline-block ml-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 transform">
                      <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </h3>
                </Link>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  {category.description}
                </p>

                {/* Subtle finishing spacer for each card */}
                <div className="h-8"></div>
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