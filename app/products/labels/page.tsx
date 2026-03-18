"use client";

import React from "react";
import PageHero from "../../components/PageHero";
import Link from "next/link";
import Image from "next/image";

export default function LabelsPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Custom Labels"
        description="High-quality, durable barcode and product labels for every application, from freezing warehouse environments to pristine retail displays."
        backgroundImage="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=1920" 
      />

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="relative aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1603533867307-e4359dcbd215?auto=format&fit=crop&q=80&w=800"
              alt="Roll of printed labels"
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <p className="section-label">// PREMIUM STOCK //</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Built for Durability & Clarity</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Whether you need direct thermal labels for fast-moving shipping or rugged thermal transfer labels for outdoor equipment, we supply materials engineered to stick and stay readable.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0">🌡️</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Direct Thermal Labels</h4>
                  <p className="text-gray-600">Perfect for shipping, receipts, and short-term tracking without needing a ribbon.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shrink-0">🛡️</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Thermal Transfer Labels</h4>
                  <p className="text-gray-600">Requires a ribbon but offers superior longevity against scratching, fading, and chemicals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center shrink-0">🎨</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Custom Pre-Printed</h4>
                  <p className="text-gray-600">Full-color branding with blank areas left for your variable barcode data printing.</p>
                </div>
              </div>
            </div>

            <Link href="/contact" className="pill-btn pill-btn-dark shadow-xl hover:-translate-y-1 inline-flex items-center gap-2">
              Request Samples
            </Link>
          </div>
          
        </div>
      </section>
    </main>
  );
}
