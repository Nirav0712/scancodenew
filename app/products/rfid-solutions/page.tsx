"use client";

import React from "react";
import PageHero from "../../components/PageHero";
import Link from "next/link";
import Image from "next/image";

export default function RFIDPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="RFID Solutions"
        description="Advanced RFID tags, readers, and software to automate your inventory tracking and improve supply chain visibility with pinpoint accuracy."
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920" 
      />

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="section-label">// NEXT GEN TRACKING //</p>
          <h2 className="section-heading mb-6">Stop Scanning.<br/><span className="highlight">Start Knowing.</span></h2>
          <p className="text-gray-600 text-lg">
            Radio Frequency Identification (RFID) technology allows you to track hundreds of items simultaneously without line-of-sight reading. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-section-bg rounded-3xl p-8 text-center hover:shadow-xl transition-shadow">
               <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <span className="text-3xl">🏷️</span>
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">RFID Tags & Inlays</h3>
               <p className="text-gray-600 text-sm leading-relaxed">UHF, HF, and NFC tags suited for metal, liquid, or standard retail packaging.</p>
            </div>
            
            <div className="bg-section-bg rounded-3xl p-8 text-center hover:shadow-xl transition-shadow relative top-0 md:-top-8">
               <div className="w-20 h-20 mx-auto bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                  <span className="text-3xl">📡</span>
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">RFID Readers & Antennas</h3>
               <p className="text-gray-600 text-sm leading-relaxed">Fixed portal readers for dock doors or handheld sleds for mobile cycle counting.</p>
            </div>

            <div className="bg-section-bg rounded-3xl p-8 text-center hover:shadow-xl transition-shadow">
               <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <span className="text-3xl">💻</span>
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">Encoding & Integration</h3>
               <p className="text-gray-600 text-sm leading-relaxed">Complete setup services to integrate RFID hardware seamlessly with your WMS/ERP.</p>
            </div>
        </div>

        <div className="mt-20 text-center">
            <Link href="/contact" className="pill-btn pill-btn-dark px-10 py-4 text-lg">Talk to an RFID Expert</Link>
        </div>
      </section>
    </main>
  );
}
