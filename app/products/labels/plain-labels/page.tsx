"use client";

import React from "react";
import PageHero from "../../../components/PageHero";
import Link from "next/link";
import Image from "next/image";

export default function PlainLabelsPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Plain Labels"
        description="High-quality blank label rolls designed for seamless on-demand printing in any thermal, inkjet, or laser printer."
        backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1580983546051-fb1f2c2777df?auto=format&fit=crop&q=80&w=800"
              alt="Blank Labels on Printer"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="section-label">{"// ESSENTIAL SUPPLIES  //"}</p>
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-6">Reliable Blank Stock</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Keep your logistics, shipping, and inventory lines moving. Our plain labels are precision-die-cut to prevent printer jams and coated for crisp barcode scannability.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">📦</div>
                <div>
                  <h4 className="font-bold text-gray-900">Logistics & Shipping</h4>
                  <p className="text-gray-500 text-sm">Standard 4x6 sizes and custom dimensions for UPS, FedEx, and USPS compliance.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0">🌡️</div>
                <div>
                  <h4 className="font-bold text-gray-900">Direct Thermal</h4>
                  <p className="text-gray-500 text-sm">Perfect for short-term indoor use without the need for a ribbon.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center shrink-0">🛡️</div>
                <div>
                  <h4 className="font-bold text-gray-900">Thermal Transfer</h4>
                  <p className="text-gray-500 text-sm">Long-lasting prints resistant to sunlight, heat, and scratches when paired with ribbons.</p>
                </div>
              </li>
            </ul>

            <Link href="/contact" className="pill-btn pill-btn-dark shadow-xl hover:-translate-y-1 inline-flex items-center gap-2">
              Request a Quote
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
