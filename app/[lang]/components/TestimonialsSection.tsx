"use client";

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

  const nextSlide = () =>
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-[#f4f7fc]">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Header */}
        <p className="text-sm text-[#345f8c] font-semibold tracking-widest uppercase mb-3">
          {d.label}
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-14 leading-tight">
          {d.heading_main}{" "}
          <span className="text-[#EF7F1A]">{d.heading_highlight}</span>
        </h2>

        {/* Opening quote mark */}
        <div className="text-6xl text-[#EF7F1A] leading-none mb-4 select-none opacity-60">
          &ldquo;
        </div>

        {/* Testimonial content */}
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
          {current.content}
        </p>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-[#EF7F1A] rounded-full mb-6" />

        {/* Author */}
        <h3 className="font-bold text-gray-900 text-xl mb-1">
          {current.author}
        </h3>
        <p className="text-gray-400 text-sm mb-10">
          {current.designation}
        </p>

        {/* Controls: Prev — Progress bar — Next */}
        <div className="flex items-center gap-5 w-full max-w-xs">

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="w-12 h-12 shrink-0 rounded-full border border-[#5A6FAF] flex items-center justify-center
                       text-[#5A6FAF] text-2xl hover:bg-[#5A6FAF] hover:text-white
                       transition-all duration-300"
          >
            &#8249;
          </button>

          {/* Progress Line */}
          <div className="flex-1 h-[3px] bg-[#c5cce5] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#5A6FAF] transition-all duration-500 rounded-full"
              style={{
                width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
              }}
            />
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="w-12 h-12 shrink-0 rounded-full border border-[#5A6FAF] flex items-center justify-center
                       text-[#5A6FAF] text-2xl hover:bg-[#5A6FAF] hover:text-white
                       transition-all duration-300"
          >
            &#8250;
          </button>

        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-[#5A6FAF] w-5"
                  : "bg-[#c5cce5]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
