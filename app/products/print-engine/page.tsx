"use client";

import React from "react";
import PageHero from "../../components/PageHero";
import Link from "next/link";
import Image from "next/image";

export default function PrintEnginePage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Print Engines"
        description="High-performance print engines designed for mission-critical automated print-and-apply systems in manufacturing and logistics."
        backgroundImage="https://images.unsplash.com/photo-1563804368532-6156e792cdd5?auto=format&fit=crop&q=80&w=1920" 
      />

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="section-label">// AUTOMATED SYSTEMS //</p>
          <h2 className="section-heading mb-6">Designed for <span className="highlight">Non-Stop Integration</span></h2>
          <p className="text-gray-600 text-lg">
            Print engines are the heart of automated packaging lines. They are built specifically to be integrated into print-and-apply applicators that run 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
          <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
             <Image
              src="https://images.unsplash.com/photo-1587293852726-694754117fd3?auto=format&fit=crop&q=80&w=800"
              alt="Automated Print Engine"
              fill
              className="object-cover"
            />
          </div>

          <div>
             <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Engineering Features</h3>
             
             <div className="space-y-8">
                <div className="flex gap-5">
                   <div className="w-14 h-14 rounded-2xl bg-coral/10 text-coral flex items-center justify-center text-2xl shrink-0">⚙️</div>
                   <div>
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Heavy-Duty Hardware</h4>
                      <p className="text-gray-600 leading-relaxed">Solid cast metal frames protect the print mechanism in dusty, vibrating industrial environments.</p>
                   </div>
                </div>
                <div className="flex gap-5">
                   <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl shrink-0">⚡</div>
                   <div>
                      <h4 className="font-bold text-lg mb-2 text-gray-900">High-Speed Throughput</h4>
                      <p className="text-gray-600 leading-relaxed">Capable of printing up to 14 inches per second to keep up with fast-moving conveyor systems.</p>
                   </div>
                </div>
                <div className="flex gap-5">
                   <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center text-2xl shrink-0">🔌</div>
                   <div>
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Applicator Interfaces</h4>
                      <p className="text-gray-600 leading-relaxed">Standard 15-pin GPIO ports ensure seamless communication with PLCs and applicator arms.</p>
                   </div>
                </div>
             </div>

             <div className="mt-12">
                <Link href="/contact" className="pill-btn pill-btn-gradient px-8 py-3">Consult Integration Team</Link>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
