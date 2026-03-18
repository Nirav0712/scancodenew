"use client";

import React from "react";
import PageHero from "../components/PageHero";
import Link from "next/link";
import Image from "next/image";

export default function SolutionsPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Auto ID Solutions"
        description="Streamline your operations with our enterprise-grade barcode, scanning, and RFID tracking systems."
        backgroundImage="https://images.unsplash.com/photo-1563804368532-6156e792cdd5?auto=format&fit=crop&q=80&w=1920" // Technology / scanning related
      />

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="section-label">{"// ENTERPRISE SCANNING  //"}</p>
          <h2 className="section-heading mb-6">
            Efficiency at <span className="highlight">Scale</span>
          </h2>
          <p className="text-gray-600 text-lg">
            PrintNest isn't just about promotional materials. We provide robust Auto ID (Automatic Identification and Data Capture) solutions for warehouses, retail, and healthcare.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Solution 1 */}
          <div className="group rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
            <div className="h-64 overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1580983546051-fb1f2c2777df?auto=format&fit=crop&q=80&w=800" 
                alt="Barcode Printers"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
              <h3 className="absolute bottom-6 left-8 text-2xl font-bold text-white">Barcode Label Printers</h3>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Industrial, desktop, and mobile printers built to withstand tough environments while delivering crisp, scannable labels continuously.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="text-gray-900 font-medium overflow-hidden whitespace-nowrap text-ellipsis" title="Industrial Label Printers">✓ Industrial Label Printers</li>
                <li className="text-gray-900 font-medium overflow-hidden whitespace-nowrap text-ellipsis" title="Desktop Barcode Printers">✓ Desktop Barcode Printers</li>
                <li className="text-gray-900 font-medium overflow-hidden whitespace-nowrap text-ellipsis" title="Mobile & Receipt Printers">✓ Mobile & Receipt Printers</li>
              </ul>
              <Link href="/contact" className="text-primary font-bold hover:underline flex items-center gap-2">
                Consult an Expert →
              </Link>
            </div>
          </div>

          {/* Solution 2 */}
          <div className="group rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
            <div className="h-64 overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1555529902-5261145633bf?auto=format&fit=crop&q=80&w=800" 
                alt="Barcode Scanners"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
              <h3 className="absolute bottom-6 left-8 text-2xl font-bold text-white">Barcode Scanners</h3>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6 leading-relaxed">
                From retail checkout to rugged warehouse environments, our 1D, 2D, and QR scanners offer rapid, flawless data capture.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="text-gray-900 font-medium">✓ Handheld Scanners</li>
                <li className="text-gray-900 font-medium">✓ Hands-free & Presentation</li>
                <li className="text-gray-900 font-medium">✓ Rugged Industrial Scanners</li>
              </ul>
              <Link href="/contact" className="text-coral font-bold hover:underline flex items-center gap-2">
                Consult an Expert →
              </Link>
            </div>
          </div>

          {/* Solution 3 */}
          <div className="group rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
            <div className="h-64 overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1620286845601-5d9c240db7f9?auto=format&fit=crop&q=80&w=800" 
                alt="Consumables"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
              <h3 className="absolute bottom-6 left-8 text-2xl font-bold text-white">Labels & Consumables</h3>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ensure your barcode printers run smoothly with our premium stock of blank labels, RFID tags, and thermal ribbons.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="text-gray-900 font-medium">✓ Direct Thermal & Transfer Labels</li>
                <li className="text-gray-900 font-medium">✓ Thermal Transfer Ribbons (Wax, Resin)</li>
                <li className="text-gray-900 font-medium">✓ Custom Pre-Printed Labels</li>
              </ul>
              <Link href="/contact" className="text-primary font-bold hover:underline flex items-center gap-2">
                Get a Supply Quote →
              </Link>
            </div>
          </div>

          {/* Solution 4 */}
          <div className="group rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 bg-coral">
            <div className="h-64 overflow-hidden relative bg-[#1e3a5f] p-10 flex flex-col justify-center">
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-4">Complete System Integration</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Need a custom label printing software or integration with your existing ERP/WMS system?
                </p>
                <Link href="/contact" className="pill-btn bg-white text-[#1e3a5f] hover:bg-gray-100 shadow-xl inline-flex text-sm">
                  Contact Solutions Team
                </Link>
              </div>
            </div>
            <div className="p-8 bg-coral text-white">
              <p className="font-semibold text-xl mb-2">Why Partner With Us?</p>
              <p className="text-white/90">We provide end-to-end support, from hardware selection and software integration to ongoing maintenance and consumable supply.</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
