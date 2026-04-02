"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function TestimonialsSlider({ dict }: { dict: any }) {
  const d = dict.sections.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      content: d.items[0].content,
      author: d.items[0].author,
      designation: d.items[0].designation,
      image: "/images/image.png",
    },
    {
      id: 2,
      content: d.items[1].content,
      author: d.items[1].author,
      designation: d.items[1].designation,
      image: "/images/image.png",
    },
  ];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-[#f4f7fc]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-[#345f8c] font-semibold tracking-widest mb-2">
            {d.label}
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {d.heading_main} <br />
            <span className="text-[#EF7F1A]">
              {d.heading_highlight}
            </span>
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-1 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden">
              <Image
                src={current.image}
                alt={current.author}
                fill
                className="object-cover border border-top-6 border-right-6 "
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:pl-2">

            {/* Quote */}
            <div className="text-9xl text-[#EF7F1A] mt-4 opacity-20">
              &ldquo;
            </div>

            {/* Text */}
            <p className="text-gray-600 text-xl -mt-15 mb-8 ">
              "{current.content}"
            </p>

            {/* Author */}
            <h3 className="font-bold text-gray-900 text-2xl">
              {current.author}
            </h3>

            <p className="text-gray-500 text-sm mb-10">
              {current.designation}
            </p>

            {/* Bottom Controls */}
            <div className="flex items-center gap-6 mt-10 max-w-[500px]">

              {/* Prev Button */}
              <button
                onClick={prevSlide}
                className="w-[55px] h-[55px] rounded-full border border-[#5A6FAF] flex items-center justify-center text-[#5A6FAF] text-xl hover:bg-blue-50 transition"
              >
                &#8249;
              </button>

              {/* Progress Line */}
              <div className="flex-1 h-[4px] bg-[#c5cce5] relative rounded">
                <div
                  className="absolute top-0 left-0 h-[4px] bg-[#5A6FAF] transition-all duration-500 rounded"
                  style={{
                    width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
                  }}
                />
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="w-[55px] h-[55px] rounded-full border border-[#5A6FAF] flex items-center justify-center text-[#5A6FAF] text-xl hover:bg-blue-50 transition"
              >
                &#8250;
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
