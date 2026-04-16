"use client";

import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesSection({ dict }: { dict: any }) {
  const d = dict.sections.categories;

  const categories = [
    {
      label: d.items.in_mold,
      image: "/images/lable-design/in-mold.jpg",
      link: "/products/labels/in-mold-labels",
    },
    {
      label: d.items.plain,
      image: "/images/lable-design/plain-labels.jpg",
      link: "/products/labels/plain-labels",
    },
    {
      label: d.items.pre_printed,
      image: "/images/lable-design/pre-printed.jpg",
      link: "/products/labels/pre-printed-labels",
    },
    {
      label: d.items.shrink_sleeve,
      image: "/images/lable-design/shrink-label.jpg",
      link: "/products/labels/shrink-sleeves",
    },
    {
      label: d.items.ribbons,
      image: "/images/lable-design/labelsbg.jpg",
      link: "/products/thermal-transfer-ribbons",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16 pt-8">
          <p className="text-[#345f8c] font-semibold tracking-widest uppercase text-sm">{d.label}</p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            {d.heading}
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 justify-items-center">

          {categories.map((cat, i) => (
            <Link
              key={i}
              href={cat.link}
              className="group flex justify-center transform transition-all duration-500 hover:scale-105"
            >
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden cursor-pointer shadow-md group-hover:shadow-2xl transition-shadow duration-500">

                {/* Image */}
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover"
                />

                {/* Gradient hover circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-full h-full bg-linear-to-br from-[#345f8c]/90 to-[#EF7F1A]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-white backdrop-blur-sm"
                  >
                    {/* Arrow */}
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mb-2">
                      →
                    </div>

                    {/* Text */}
                    <span className="font-semibold text-center">{cat.label}</span>
                  </div>
                </div>

              </div>
            </Link>
          ))}

        </div>


        <div className="text-center mt-12 md:mt-20">
          <Link href="/products/labels" className="relative inline-block group">

            {/* offset border layer */}
            <span className="absolute inset-0 w-full h-full rounded-full border-2 border-[#EF7F1A] translate-x-1.5 translate-y-1.5 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 opacity-70"></span>

            {/* button */}
            <span className="relative z-10 px-10 py-4 rounded-full text-white font-bold bg-linear-to-r from-[#345f8c] to-[#EF7F1A] shadow-xl block transition-all duration-300 group-hover:scale-[1.02] active:scale-95">
              {d.view_more}
            </span>

          </Link>
        </div>
{/* Button */}
      </div>
    </section>
  );
}