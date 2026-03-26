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
        backgroundImage="/images/lable-design/servicebg.jpg" // Focused printing/paper background
      />

      {/* Reusing Home Page Services */}
      <ServicesSection />

      {/* Expanded Details Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-[#EF7F1A]">Professional Label Printing</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our state-of-the-art label printing facility delivers high-volume production with exceptional speed and precision. Whether you need thousands of product labels or custom-designed packaging stickers, our advanced flexo and digital printing technologies ensure vibrant colors, sharp details, and consistent quality across every batch.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Custom Product Labels",
                "Smart Barcode & QR Labels",
                "Premium Packaging Labels",
                "Die-Cut Designer Labels",
                "RFID & Intelligent Labels",
                "Heavy-Duty Industrial Labels"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-[#EF7F1A] flex items-center justify-center text-sm">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/products/labels" className="relative inline-block group">
              <span className="absolute inset-0 -top-4 -left-4 w-40 h-16 rounded-full border-2 border-[#EF7F1A] translate-x-2 translate-y-2 transition-all duration-300"></span>

              {/* button */}
              <span className="relative z-10 px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#345f8c] to-[#EF7F1A] shadow-lg block group-hover:scale-y-130 group-hover:scale-x-113">
                View More
              </span>
            </Link>
          </div>
          <div className="relative h-160 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/lable-design/3.jpeg"
              alt="Commercial Printing"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
          <div>
            <h3 className="text-3xl font-bold text-[#EF7F1A] mb-6">Custom Apparel & Merch</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Elevate your brand with high-quality label printing that adds a professional touch to every product. We specialize in custom woven labels, printed tags, heat transfers, and premium packaging labels—perfect for apparel, merchandise, and promotional items.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Woven Labels & Printed Labels",
                "Heat Transfer Labels",
                "Hang Tags & Care Labels",
                "Custom Packaging Labels",
                "Brand Labels"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-[#EF7F1A] flex items-center justify-center text-sm">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/products/thermal-transfer-ribbons" className="relative inline-block group">
              <span className="absolute inset-0 -top-4 -left-4 w-40 h-16 rounded-full border-2 border-[#EF7F1A] translate-x-2 translate-y-2 transition-all duration-300"></span>

              {/* button */}
              <span className="relative z-10 px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#345f8c] to-[#EF7F1A] shadow-lg block group-hover:scale-y-130 group-hover:scale-x-113">
                View More
              </span>
            </Link>
          </div>
          <div className="relative h-160 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/lable-design/2.jpeg"
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
            How It <span className="text-[#EF7F1A]">Works</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Understand & Plan",
                desc: "We analyze your requirements and craft a customized label solution aligned with your brand."
              },
              {
                step: "02",
                title: "Design & Print",
                desc: "Our team creates impactful designs and produces them using advanced printing technology."
              },
              {
                step: "03",
                title: "Quality & Delivery",
                desc: "We ensure strict quality checks followed by timely delivery and reliable support."
              }
            ].map((step, i) => (
              <div key={i} className="relative bg-white p-8 rounded-2xl shadow-sm text-center hover:scale-115 transition-300">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#EF7F1A] opacity-50 text-white font-bold text-xl rounded-full flex items-center justify-center border-4 border-section-bg">
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
