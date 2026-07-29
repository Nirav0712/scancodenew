"use client";

import React from "react";

export default function FeaturesFan({ dict }: { dict: any }) {
  const d = dict.sections.features_fan;

  const CARDS = [
    { emoji: "🎨", title: d.items[0].title, desc: d.items[0].desc },
    { emoji: "🔒", title: d.items[1].title, desc: d.items[1].desc },
    { emoji: "📦", title: d.items[2].title, desc: d.items[2].desc },
    { emoji: "🚚", title: d.items[3].title, desc: d.items[3].desc },
    { emoji: "🖨️", title: d.items[4].title, desc: d.items[4].desc },
  ];

  return (
    <section
      className="py-20 px-4"
      style={{ background: "#eef1f8" }}
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="section-label">{d.label}</p>
        <h2 className="section-heading">
          {d.heading_main}{" "}
          <span className="text-[#EF7F1A]">{d.heading_highlight}</span>
        </h2>
      </div>

      {/* Cards Row */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {CARDS.map((card, i) => (
          <div
            key={i}
            className="group rounded-2xl p-6 flex flex-col gap-4 cursor-pointer
                       bg-white border border-gray-200
                       shadow-[0_4px_24px_rgba(0,0,0,0.07)]
                       transition-all duration-300 ease-in-out
                       hover:-translate-y-2 hover:scale-[1.03]
                       hover:shadow-[0_24px_64px_rgba(239,127,26,0.22)]
                       hover:border-[#EF7F1A]"
          >
            {/* Emoji */}
            <div className="text-4xl leading-none">{card.emoji}</div>

            {/* Gradient accent bar */}
            <div className="w-10 h-1 rounded-full bg-gradient-to-r from-[#345f8c] to-[#EF7F1A]
                            transition-all duration-300 group-hover:w-16" />

            {/* Title */}
            <h4 className="font-bold text-gray-900 text-sm leading-snug">
              {card.title}
            </h4>

            {/* Description */}
            <p className="text-gray-500 text-xs leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
