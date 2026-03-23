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
    hoverImage: "/print-engine-hover.png",
    features: ["Seamless integration", "High-speed throughput", "24/7 reliability"],
    buttonText: "View Print Engines",
    pagePath: "/products/printing-scanning-solutions/print-engine"
  },
  {
    id: "barcode-scanner",
    title: "Barcode Scanner",
    description: "Barcode scanners are essential devices designed to read and decode barcodes quickly and accurately, enabling businesses to streamline operations and improve efficiency. These devices play a crucial role in modern industries by automating data entry processes, reducing human errors, and enhancing productivity.",
    image: "https://images.unsplash.com/photo-1555529902-5261145633bf?auto=format&fit=crop&q=80&w=800",
    features: ["Corded and cordless models", "Omnidirectional reading", "Ruggedized for drops"],
    buttonText: "Shop Scanners",
    pagePath: "/images/printers/Barcode scanners.png"
  },
  {
    id: "mobile-computers",
    title: "Mobile Computers & Tablets",
    description: "Mobile computers and tablets are advanced handheld devices designed to deliver high-performance computing in a compact, portable form. Unlike standard consumer smartphones or tablets, these devices are built specifically for professional and industrial environments where durability, efficiency, and real-time data access are critical.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800",
    features: ["Android & Windows OS", "Integrated barcode scanning", "All-day battery life"],
    buttonText: "See Mobile Computers",
    pagePath: "/images/printers/microphone.png"
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
        backgroundImage="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1920"
        
      />

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-28">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-10">
            High-Quality <span className="text-[#F05A28]">Printing & Scanning Solutions</span> Tailored for Your Needs
          </h2>
          <p className="text-gray-500 text-[12px] md:text-[14px] leading-relaxed max-w-5xl mx-auto px-4">
            Explore Scancode Auto ID Technology Pvt Ltd&apos;s comprehensive range of Printing & Scanning Solutions designed to meet the demanding needs of modern businesses. Our solutions include high-performance printers, thermal transfer ribbons, in-mold labels, and more, all engineered for reliability and product. From barcode labeling to document scanning, we offer industry-leading products that enhance efficiency and ensure accurate, high-quality results across diverse applications. Discover the perfect solution to streamline your operations today.
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
                    <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Click to View {category.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className={`w-full lg:w-1/2 lg:px-8 ${index < 2 ? 'text-center flex flex-col items-center' : ''}`}>
                {index >= 2 && (
                  <div className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-bold tracking-wider mb-6">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                )}
                
                {/* Category Title with Link */}
                <Link 
                  href={category.pagePath}
                  className="group inline-block"
                >
                  <h3 className={`text-3xl lg:text-4xl font-bold text-gray-900 ${index === 0 ? 'mb-10' : 'mb-6'} hover:text-primary transition-colors`}>
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

                {/* {index >= 2 && (
                  <>
                    <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm">Key Capabilities</h4>
                    <ul className="space-y-3 mb-10">
                      {category.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700 text-left">
                          <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </>
                )} */}

                {/* Dynamic Button based on category */}
                {index > 2 && (
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
{/*                     
                    <Link 
                      href={`/contact?product=${encodeURIComponent(category.title)}`}
                      className="text-gray-600 hover:text-primary transition-colors underline underline-offset-4"
                    >
                      Request Quote
                    </Link> */}
                  </div>
                )}

                {/* Quick Navigation Hint */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  {/* <p className="text-sm text-gray-500 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Click on the image or title to view the complete {category.title} collection
                  </p> */}
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