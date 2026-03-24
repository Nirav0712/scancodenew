"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    label: "In-Mold Labels",
    image: "/images/lable-design/in-mold.jpg",
  },
  {
    label: "Plain Labels",
    image: "/images/lable-design/plain-labels.jpg",
  },
  {
    label: "Pre-printed Labels",
    image: "/images/lable-design/pre-printed.jpg",
  },
  {
    label: "Shrink-Sleeve Labels",
    image: "/images/lable-design/shrink-label.jpg",
  },
  {
    label: "Tamper-Evident Labels",
    image: "/images/lable-design/labelsbg.jpg",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium tracking-widest">{"// TOP CATEGORIES  //"}</p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Explore Our Label Print{" "}
            <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default block mt-2">Categories
            </span>
          </h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-10">

          {categories.map((cat, i) => (
            <Link
              key={i}
              href="/shop"
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
                    className="w-40 h-40 rounded-full bg-linear-to-br from-purple-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white"
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
            <span className="absolute inset-0 -top-4 -left-4 w-40 h-16 rounded-full border-2 border-teal-400 translate-x-2 translate-y-2 transition-all duration-300"></span>

            {/* button */}
            <span className="relative z-10 px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-purple-500 to-teal-400 shadow-lg block group-hover:scale-y-123 group-hover:scale-x-111">
              View More
            </span>

          </Link>
        </div>{/* Button */}

        {/* <div className="text-center mt-16">
          <Link
            href="/shop"
            className="px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-purple-500 to-teal-400 shadow-lg"
          >
            View More
          </Link>
        </div> */}

      </div>
    </section>
  );
}