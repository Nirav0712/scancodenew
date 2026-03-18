"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      content:
        "I recently placed a bulk order for custom T-shirt printing for our company's annual event, and I couldn't be happier with the results. From start to finish, the team was incredibly helpful through the process, suggested material and printing options, and ensured that everything was completed well before the deadline.",
      author: "Arlene McCoy",
      designation: "Web Designer",
      image: "/images/image.png",
    },
    {
      id: 2,
      content:
        "Amazing experience! The prints were vibrant and the team was very helpful throughout the process.",
      author: "Sarah Johnson",
      designation: "Marketing Director",
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
  }, []);

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
          <p className="text-sm text-blue-500 font-semibold tracking-widest mb-2">
            // CLIENT'S FEEDBACK //
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Success Stories From <br />
            <span className="text-[#ff6b6b] border-b-4 border-[#ff6b6b]">
              Our Customers
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
            <div className="text-9xl text-pink-200  mt-4 ">
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
