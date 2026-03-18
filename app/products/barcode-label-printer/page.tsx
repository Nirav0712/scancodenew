"use client";

import React from "react";
import PageHero from "../../components/PageHero";
import Link from "next/link";
import Image from "next/image";

export default function PrintersPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Barcode Label Printers"
        description="Reliable industrial and desktop printers from top manufacturers, built to keep your operations running smoothly with minimal downtime."
        backgroundImage="https://images.unsplash.com/photo-1580983546051-fb1f2c2777df?auto=format&fit=crop&q=80&w=1920" 
      />

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?auto=format&fit=crop&q=80&w=800"
              alt="Industrial Barcode Printer"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="section-label">// HARDWARE //</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Printers for Every Environment</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              From compact office setups requiring a few shipping labels a day, to rugged warehouse floors printing thousands of compliant pallet tags.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                 <div className="w-10 h-10 bg-coral/10 text-coral rounded-full flex items-center justify-center shrink-0">🏭</div>
                 <div>
                    <h4 className="font-bold text-gray-900">Industrial Printers</h4>
                    <p className="text-gray-500 text-sm">Rugged metal frames designed for 24/7 high-volume operation.</p>
                 </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                 <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">🖥️</div>
                 <div>
                    <h4 className="font-bold text-gray-900">Desktop Printers</h4>
                    <p className="text-gray-500 text-sm">Compact footprints perfect for retail, healthcare, and light manufacturing.</p>
                 </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                 <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0">📱</div>
                 <div>
                    <h4 className="font-bold text-gray-900">Mobile Printers</h4>
                    <p className="text-gray-500 text-sm">Wireless printing on the move. Ideal for forklift mounting or DSD routing.</p>
                 </div>
              </li>
            </ul>

            <Link href="/contact" className="pill-btn pill-btn-dark shadow-xl hover:-translate-y-1 inline-flex items-center gap-2">
              Compare Models
            </Link>
          </div>
          
        </div>
      </section>
    </main>
  );
}
