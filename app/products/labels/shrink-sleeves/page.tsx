"use client";

import React from "react";
import PageHero from "../../../components/PageHero";
import Link from "next/link";
import Image from "next/image";

export default function ShrinkSleevesPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Shrink Sleeves"
        description="360-degree, form-fitting graphics that provide maximum brand exposure and tamper-evident security for complex containers."
        backgroundImage="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="section-label">{"// FULL COVERAGE  //"}</p>
          <h2 className="section-heading mb-6">Shape-Shifting <span className="highlight">Branding</span></h2>
          <p className="text-gray-600 text-lg">
            Unlike traditional flat labels, shrink sleeves conform perfectly to the unique contours of your bottles and cans, maximizing your real estate for graphics and nutritional information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-section-bg rounded-3xl p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-3xl">🧃</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">360° Design Space</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Wrap your graphics completely around the container without seams or blank edges.</p>
          </div>

          <div className="bg-section-bg rounded-3xl p-8 text-center hover:shadow-xl transition-shadow relative top-0 md:-top-8">
            <div className="w-20 h-20 mx-auto bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-md text-3xl">🔒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Tamper-Evident</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Extend the sleeve over the cap with a perforated seal to guarantee product safety and freshness.</p>
          </div>

          <div className="bg-section-bg rounded-3xl p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-3xl">💧</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Durability & Resistances</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Graphics are printed on the inside of the sleeve, naturally protecting them from scuffs and moisture.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20 items-center">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=800"
              alt="Beverage Cans"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-4">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ideal for the Beverage Industry</h3>
            <p className="text-gray-600 mb-8">
              Craft breweries, energy drinks, and dairy products frequently rely on shrink sleeves to differentiate themselves in crowded coolers and ensure their packaging survives condensation.
            </p>
            <Link href="/contact" className="pill-btn pill-btn-dark px-10 py-4 text-lg">Discuss Your Project</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
