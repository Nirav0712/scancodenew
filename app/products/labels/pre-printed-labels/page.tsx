"use client";

import React from "react";
import PageHero from "../../../components/PageHero";
import Link from "next/link";
import Image from "next/image";

export default function PrePrintedLabelsPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Pre Printed Labels"
        description="Vibrant, full-color custom labels that elevate your brand packaging and catch the consumer's eye."
        backgroundImage="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=1920" 
      />

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
          <div className="relative aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1557827983-01eeceab8e84?auto=format&fit=crop&q=80&w=800"
              alt="Colorful Product Labels"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="section-label">// BRAND IDENTITY //</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Stand Out on the Shelf</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We utilize advanced flexographic and digital printing presses to deliver stunning graphics, exact color matching, and special finishes that make your products shine.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="p-5 border border-gray-100 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Prime Consumer Goods</h4>
                  <p className="text-gray-600 text-sm">Perfect for food and beverage, cosmetics, and household products requiring high visual appeal.</p>
              </div>
              <div className="p-5 border border-gray-100 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Variable Data Ready</h4>
                  <p className="text-gray-600 text-sm">We print your colorful branding and leave a blank section for you to overprint barcodes or expiration dates.</p>
              </div>
              <div className="p-5 border border-gray-100 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Special Finishes</h4>
                  <p className="text-gray-600 text-sm">Enhance your labels with metallic foils, embossed textures, matte or high-gloss UV varnishes.</p>
              </div>
            </div>

            <Link href="/contact" className="pill-btn pill-btn-gradient inline-flex items-center gap-2">
              Start Custom Design
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
