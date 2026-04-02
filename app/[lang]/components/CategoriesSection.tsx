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
        <div className="text-center mb-16">
          <p className="text-[#345f8c]z font-medium tracking-widest">{d.label}</p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            {d.heading}
          </h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-10">

          {categories.map((cat, i) => (
            <Link
              key={i}
              href={cat.link}
              className="group flex justify-center transform transition-transform duration-500 hover:scale-130"
            >
              <div className="relative w-52 h-52 rounded-full overflow-hidden cursor-pointer">

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
                    className="w-40 h-40 rounded-full bg-linear-to-br from-[#345f8c] to-[#EF7F1A] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white"
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


        <div className="text-center mt-16">
          <Link href="/products/labels" className="relative inline-block group  ">

            {/* offset border layer */}
            <span className="absolute inset-0 -top-4 -left-4 w-40 h-16 rounded-full border-2 border-[#EF7F1A] translate-x-2 translate-y-2 transition-all duration-300"></span>

            {/* button */}
            <span className="relative z-10 px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#345f8c] to-[#EF7F1A] shadow-lg block group-hover:scale-y-130 group-hover:scale-x-113">
              {d.view_more}
            </span>

          </Link>
        </div>{/* Button */}
      </div>
    </section>
  );
}