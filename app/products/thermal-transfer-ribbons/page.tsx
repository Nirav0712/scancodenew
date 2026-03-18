"use client";

import React from "react";
import PageHero from "../../components/PageHero";
import Link from "next/link";
import Image from "next/image";

export default function RibbonsPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Thermal Transfer Ribbons"
        description="Premium wax, wax-resin, and resin ribbons engineered to provide crisp, dark, and long-lasting prints on a variety of label materials."
        backgroundImage="https://images.unsplash.com/photo-1620286845601-5d9c240db7f9?auto=format&fit=crop&q=80&w=1920" 
      />

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
          
          <div className="relative aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
             <Image
              src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800"
              alt="Thermal Transfer Ribbon Roll"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="section-label">// CONSUMABLES //</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">The Perfect Match for Your Printer</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              To get the sharpest barcodes and text, you need the right ribbon paired with the correct label stock. We stock ribbons compatible with Zebra, Honeywell, Datamax, and more.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="p-5 border border-gray-100 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Wax Ribbons</h4>
                  <p className="text-gray-600 text-sm">Most economical choice for standard paper labels. Ideal for shipping and retail tags.</p>
              </div>
              <div className="p-5 border border-gray-100 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Wax-Resin Ribbons</h4>
                  <p className="text-gray-600 text-sm">Excellent resistance to smudging and scratching. Best used on coated paper or synthetic labels.</p>
              </div>
              <div className="p-5 border border-gray-100 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Full Resin Ribbons</h4>
                  <p className="text-gray-600 text-sm">Maximum durability for harsh environments (chemicals, extreme heat, outdoors) on poly/synthetic stocks.</p>
              </div>
            </div>

            <Link href="/contact" className="pill-btn pill-btn-gradient inline-flex items-center gap-2">
              Get Ribbon Pricing
            </Link>
          </div>
          
        </div>
      </section>
    </main>
  );
}
