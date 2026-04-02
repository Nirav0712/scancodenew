"use client";

import React from "react";
import Link from "next/link";

export default function CustomPrintServices() {
  const services = [
    "Barcode Label Printing",
    "QR Code Label Printing",
    "Product Label Printing",
    "Custom Sticker Label Printing",
    "Business Label Printing",
    "Packaging Label Printing",
  ];


  return (
    <section className="py-24" style={{ background: "#f0f3f9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — content */}
          <div>
            <p className="section-label text-[#EF7F1A]">{"// WHAT WE DO  //"}</p>
            <h2 className="section-heading mb-6 ">
              Custom Label Printing Services{" "}
              <span className="text-[#EF7F1A]">We Offer</span>
            </h2>
            <p className="text-gray-500 text-base mb-8 leading-relaxed">
              Custom label printing solutions are designed to meet the unique identification and branding needs of modern businesses. From barcode labels and QR code labels to product and packaging labels, these solutions ensure clear, durable, and high-quality printing for various applications. With advanced printing technology and customizable materials, businesses can create labels that enhance product visibility, improve operational efficiency, and maintain compliance with industry standards.
            </p>
            <ul className="space-y-3 mb-10">
              {services.map((svc, i) => (
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
            <Link href="/services" className="relative inline-block group ">

              <span className="absolute inset-0 -top-4 -left-4 w-41 h-16 rounded-full border-2 border-[#EF7F1A] translate-x-2 translate-y-2 transition-all duration-300"></span>

              {/* button */}
              <span className="relative z-10 px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#345f8c] to-[#EF7F1A] shadow-lg block group-hover:scale-y-130 group-hover:scale-x-113">
                Learn More
              </span>
            </Link>
          </div>

          {/* Right — image with shape overlay */}
          <div className="relative">
            <div
              className="absolute -top-8 -left-8 w-40 h-40 z-10 rounded-xl"
              style={{ background: "url('/images/custom.png')" }}
            />
            <div
              className="relative z-20 rounded-2xl overflow-hidden shadow-2xl"
              style={{ height: "400px" }}>
              <div className="w-full h-full bg-linear-to-br from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center text-8xl">
                <img src="/images/servicesection/customeprint.png" className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
