"use client";

import React from "react";
import PageHero from "../../components/PageHero";
import Link from "next/link";
import Image from "next/image";

export default function MobileComputersPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Mobile Computers & Tablets"
        description="Empower your workforce with enterprise-grade mobile computers and tablets that combine consumer-style design with industrial durability."
        backgroundImage="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1920" 
      />

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
          <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
             <Image
              src="https://images.unsplash.com/photo-1512446733611-9099a758e236?auto=format&fit=crop&q=80&w=800"
              alt="Enterprise Tablet"
              fill
              className="object-cover"
            />
          </div>

          <div>
             <p className="section-label">// ENTERPRISE MOBILITY //</p>
             <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Intelligence at the Edge</h3>
             <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Consumer smartphones fail in demanding environments. Our Android and Windows rugged devices offer integrated high-performance scanners, long-life swappable batteries, and military-grade durability.
             </p>
             
             <div className="space-y-6 mb-12">
                <div className="flex gap-5 p-4 border border-gray-100 rounded-2xl bg-white shadow-sm">
                   <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl shrink-0">📱</div>
                   <div>
                      <h4 className="font-bold mb-1 text-gray-900">Handheld Computers</h4>
                      <p className="text-gray-600 text-sm">Form factors ranging from sleek retail devices to gun-grip warehouse computers for intensive picking.</p>
                   </div>
                </div>
                <div className="flex gap-5 p-4 border border-gray-100 rounded-2xl bg-white shadow-sm">
                   <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-xl shrink-0">💻</div>
                   <div>
                      <h4 className="font-bold mb-1 text-gray-900">Rugged Tablets</h4>
                      <p className="text-gray-600 text-sm">8 to 12-inch screens designed for field service, forklift mounting, and manufacturing floors.</p>
                   </div>
                </div>
                <div className="flex gap-5 p-4 border border-gray-100 rounded-2xl bg-white shadow-sm">
                   <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-xl shrink-0">🔒</div>
                   <div>
                      <h4 className="font-bold mb-1 text-gray-900">Device Management</h4>
                      <p className="text-gray-600 text-sm">Solutions like SOTI MobiControl to secure, track, and manage your entire device fleet remotely.</p>
                   </div>
                </div>
             </div>

             <div className="mt-8 flex gap-4">
                <Link href="/contact" className="pill-btn pill-btn-gradient px-8 py-3">Talk to Sales</Link>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
