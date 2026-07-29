"use client";

import React from "react";
import Link from "next/link";

export default function CustomPrintServices({ dict }: { dict: any }) {
  const d = dict.sections.custom_print;
  const services = d.items;

  return (
    <section className="py-24" style={{ background: "#f0f3f9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left — content */}
          <div className="flex flex-col justify-center">
            <p className="section-label text-[#EF7F1A]">{d.label}</p>
            <h2
              className="mb-6 text-[#121212] font-extrabold"
              style={{
                fontSize: "clamp(22px, 3.5vw, 46px)",
                lineHeight: "1.15",
                letterSpacing: "-0.03em",
              }}
            >
              {d.heading_main}{" "}
              <span className="text-[#EF7F1A]">{d.heading_highlight}</span>
            </h2>

            <p className="text-gray-500 text-base mb-8 leading-relaxed max-w-lg">
              {d.description}
            </p>

            <ul className="space-y-3 mb-10">
              {services.map((svc: string, i: number) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ background: "#EF7F1A" }}
                  >
                    ✓
                  </span>
                  {svc}
                </li>
              ))}
            </ul>

            {/* Clean pill button */}
            <div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2
                           px-6 py-2.5 rounded-full
                           bg-gradient-to-r from-[#345f8c] to-[#EF7F1A]
                           text-white text-sm font-bold tracking-wide
                           shadow-md
                           transition-all duration-300 ease-in-out
                           hover:shadow-[0_6px_24px_rgba(239,127,26,0.45)]
                           hover:scale-105 hover:from-[#EF7F1A] hover:to-[#345f8c]
                           active:scale-95"
              >
                {d.button}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — image */}
          <div className="relative flex justify-center mt-10 lg:mt-0">
            <div
              className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-32 h-32 md:w-40 md:h-40 z-10 rounded-xl"
              style={{ background: "url('/images/custom.png')" }}
            />
            <div
              className="relative z-20 rounded-2xl overflow-hidden shadow-2xl w-full"
              style={{ height: "420px" }}
            >
              <img
                src="/images/servicesection/customeprint.png"
                className="h-full w-full object-cover"
                alt="Custom Print Services"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
