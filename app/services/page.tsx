"use client";

import React from "react";
import PageHero from "../components/PageHero";
import ServicesSection from "../components/ServicesSection";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Our Printing Services"
        description="From business cards to large-format banners, we offer comprehensive print solutions designed to help your brand stand out."
        backgroundImage="https://images.unsplash.com/photo-1598306441113-d3092592751f?auto=format&fit=crop&q=80&w=1920" // Focused printing/paper background
      />

      {/* Reusing Home Page Services */}
      <ServicesSection />

      {/* Expanded Details Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Commercial Printing</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our state-of-the-art commercial printing facility handles high-volume orders with exceptional speed and precision. Whether you need 10,000 brochures or 500 premium business cards, our offset and digital presses ensure perfect color matching and crisp text.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Business Cards & Letterheads",
                "Brochures & Flyers",
                "Booklets & Catalogs",
                "Presentation Folders"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-primary flex items-center justify-center text-sm">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="pill-btn pill-btn-dark">Request a Quote</Link>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?auto=format&fit=crop&q=80&w=800"
              alt="Commercial Printing"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Custom Apparel & Merch</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Elevate your team's look or create merchandise your fans will love. We offer Direct-to-Garment (DTG), screen printing, and premium embroidery services across a huge catalog of apparel and promotional products.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "T-Shirts, Hoodies & Hats",
                "Tote Bags & Backpacks",
                "Mugs, Drinkware & Pens",
                "Custom Packaging"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-coral-light/20 text-coral flex items-center justify-center text-sm">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/shop" className="pill-btn pill-btn-gradient">View Catalog</Link>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
              alt="Apparel Printing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* How it Works / FAQ */}
      <section className="py-24 bg-section-bg pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label">{"// THE PROCESS  //"}</p>
          <h2 className="section-heading mb-16">
            How It <span className="highlight">Works</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose & Customize",
                desc: "Select your product and use our online tools or upload your existing designs."
              },
              {
                step: "02",
                title: "Review & Approve",
                desc: "We provide digital proofs to ensure your design looks perfect before printing."
              },
              {
                step: "03",
                title: "Print & Deliver",
                desc: "We print with precision and ship directly to your door with tracking."
              }
            ].map((step, i) => (
              <div key={i} className="relative bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white font-bold text-xl rounded-full flex items-center justify-center border-4 border-section-bg">
                  {step.step}
                </div>
                <h3 className="mt-8 text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
