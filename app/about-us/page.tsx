"use client";

import React from "react";
import PageHero from "../components/PageHero";
import TeamSection from "../components/TeamSection";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <PageHero
        title="About PrintNest"
        description="We are a team of passionate print professionals dedicated to bringing your creative visions to life with premium quality and unmatched reliability."
        backgroundImage="https://images.unsplash.com/photo-1541888060867-2708ee663ea1?auto=format&fit=crop&q=80&w=1920" // Printing facility / clean workspace
      />

      {/* Origin Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <div className="relative">
            <div className="relative z-10 w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                alt="Our Printing Facility"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlapping small image */}
            <div className="absolute -bottom-10 -right-4 lg:-right-10 z-20 w-48 h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600"
                alt="Creative Process"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div>
            <p className="section-label">{"// OUR STORY  //"}</p>
            <h2 className="section-heading mb-6">
              A Legacy of <span className="highlight">Craftsmanship</span>
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Founded on the principle that every print tells a story, PrintNest began as a small boutique shop and has grown into a leading provider of custom printing solutions for businesses and individuals worldwide.
              </p>
              <p>
                We believe in the power of physical media. In an increasingly digital world, a beautifully printed business card, a custom-branded hoodie, or a vibrant promotional flyer leaves a lasting, tangible impact that pixels simply cannot match.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-black text-coral mb-2">14+</h4>
                <p className="font-semibold text-gray-900">Years Experience</p>
                <p className="text-sm text-gray-500 mt-1">Mastering the art of print</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-coral mb-2">50k+</h4>
                <p className="font-semibold text-gray-900">Happy Clients</p>
                <p className="text-sm text-gray-500 mt-1">Trusted globally</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission / Values */}
      <section className="py-24 bg-section-bg2">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="section-label">{"// OUR VALUES  //"}</p>
          <h2 className="section-heading mb-16">
            What Drives <span className="highlight">Us</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: "🌟",
                title: "Uncompromising Quality",
                desc: "We use state-of-the-art equipment and premium materials to ensure every print exceeds expectations."
              },
              {
                icon: "🤝",
                title: "Customer First",
                desc: "Your success is our success. We provide dedicated support from design to delivery."
              },
              {
                icon: "🌱",
                title: "Sustainable Practices",
                desc: "We are committed to eco-friendly printing processes and sustainably sourced materials."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-50 text-3xl flex items-center justify-center rounded-full mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Reused) */}
      <TeamSection />

      {/* CTA Section */}
      <section className="py-24 bg-coral text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Let's collaborate to create something amazing. Explore our shop or reach out for custom solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/shop" className="pill-btn bg-white text-coral hover:bg-gray-50 shadow-xl">
              Shop Now
            </Link>
            <Link href="/contact" className="pill-btn border-2 border-white text-white hover:bg-white hover:text-coral transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
