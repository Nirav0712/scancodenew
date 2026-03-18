"use client";

import React from "react";
import PageHero from "../../../components/PageHero";
import Link from "next/link";
import Image from "next/image";

export default function ScannersPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Barcode Scanners"
        description="Fast and accurate 1D, 2D, and QR code scanners for point-of-sale, inventory management, and rugged industrial environments."
        backgroundImage="https://images.unsplash.com/photo-1555529902-5261145633bf?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
              alt="Retail Scanner"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="section-label">{"// DATA CAPTURE  //"}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Scan Smarter, Not Harder</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We offer a complete portfolio of scanners tailored to capture data in milliseconds, even if the barcode is damaged, poorly printed, or under shrinkwrap.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">🛒</div>
                <div>
                  <h4 className="font-bold text-gray-900">General Purpose Scanners</h4>
                  <p className="text-gray-500 text-sm">Corded and cordless handhelds perfect for retail checkouts and office tracking.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center shrink-0">🏗️</div>
                <div>
                  <h4 className="font-bold text-gray-900">Rugged Scanners</h4>
                  <p className="text-gray-500 text-sm">Built to survive 6-foot drops to concrete, extreme temperatures, and heavy dust/water exposure.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                <div className="w-10 h-10 bg-coral/10 text-coral rounded-full flex items-center justify-center shrink-0">🤲</div>
                <div>
                  <h4 className="font-bold text-gray-900">Presentation & Wearables</h4>
                  <p className="text-gray-500 text-sm">Hands-free scanning options for rapid sorting, high-volume POS, or ring scanners for picking.</p>
                </div>
              </li>
            </ul>

            <Link href="/contact" className="pill-btn pill-btn-dark shadow-xl hover:-translate-y-1 inline-flex items-center gap-2">
              View Product Guide
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
