"use client";

import React from "react";
import Link from "next/link";

export default function AboutSection({ dict }: { dict: any }) {
  const d = dict.sections.about;

  return (
    <section className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/herosection/Frame3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "120vh"
      }}>
{/* ... SVG ... */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Images collage */}
          <div className="relative mb-10">
            {/* ... */}
            <div
              className="relative z-10 w-64 h-80 lg:w-90 lg:h-130 rounded-2xl overflow-hidden shadow-2xl"
              style={{ marginLeft: "0" }}
            >
              <img
                src="/images/lables/pharma-grade-labels.webp"
                alt="Industrial printing"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute bottom-25 right-20 z-20 w-48 h-52 lg:w-60 lg:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src="/images/lables/tt2c-Labels.webp"
                alt="Creative tools"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div>
            <p className="section-label">{d.label}</p>

            <h2 className="section-heading mb-6">
              {d.heading_main}{" "}
              <span className="text-[#EF7F1A]">{d.heading_highlight}</span>
            </h2>

            <p className="text-gray-600 text-base mb-8 leading-relaxed">
             {d.description}
            </p>

            {/* Feature list */}
            <div className="space-y-6 mb-10">
              {d.features.map((item: any, i: number) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-2xl"
                    style={{ background: "#fef3f2", border: "1px solid #fecaca" }}
                  >
                    {["🏷️", "🖨️", "📦", "⚙️"][i]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/products/labels"
              className="relative inline-block group"
            >
              <span className="absolute inset-0 -top-4 -left-4 w-46 h-16 rounded-full border-2 border-[#EF7F1A] translate-x-2 translate-y-2 transition-all duration-300"></span>

              {/* button */}
              <span className="relative z-10 px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#345f8c] to-[#EF7F1A] shadow-lg block group-hover:scale-y-130 group-hover:scale-x-113">
                {d.button}
              </span> 
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
