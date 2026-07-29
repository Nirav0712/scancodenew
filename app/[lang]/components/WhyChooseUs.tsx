"use client";

import Image from "next/image";
import React from "react";

export default function WhyChooseUs({ dict }: { dict: any }) {
  const d = dict.sections.why_choose_us;

  const featuresLeft = [
    {
      icon: "🖨️",
      title: d.features_left[0].title,
      desc: d.features_left[0].desc,
    },
    {
      icon: "🔧",
      title: d.features_left[1].title,
      desc: d.features_left[1].desc,
    },
  ];

  const featuresRight = [
    {
      icon: "🚚",
      title: d.features_right[0].title,
      desc: d.features_right[0].desc,
    },
    {
      icon: "🤝",
      title: d.features_right[1].title,
      desc: d.features_right[1].desc,
    },
  ];

  return (
    <section
      className="relative py-5 overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(180deg, #345f8c 0%, #6f7a7c 45%, #EF7F1A 100%)",
      }}
    >
      {/* Header */}
      <div className="text-center">
        <p className="text-sm tracking-widest uppercase opacity-80">{d.label}</p>

        <h2 className="text-4xl lg:text-5xl font-bold mt-3">
          {d.heading_main} <br />
          <span className="text-[#EF7F1A]">
            {d.heading_highlight}
          </span>
        </h2>
      </div>

      {/* Main layout */}
      <div className="max-w-8xl mx-auto  grid lg:grid-cols-3 gap-10 items-center ">

        {/* LEFT FEATURES */}
        <div className="flex flex-col gap-8 items-end">
          {featuresLeft.map((feat, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl w-70 text-center"
            >
              {/* <div className="text-6xl mb-4">{feat.icon}</div> */}
              <div className="group text-center p-6">
                <div className="text-5xl transition-transform duration-300 group-hover:scale-145">
                  {feat.icon}
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">{feat.title}</h3>
              <p className="text-xl opacity-80">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* CENTER IMAGE */}
        <div className="relative flex justify-center top-28">
{/* ... animated circles ... */}
          <img
            src="/images/whychoosingusimg3.png"
            alt="whychoosingusimg3"
            width={800}
            height={900}
            className="relative z-10 w-137.5 lg:w-150 h-200"
          />

        </div>

        {/* RIGHT FEATURES */}
        <div className="flex flex-col gap-8 ">
          {featuresRight.map((feat, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl  w-70  text-center"
            >
              <div className="group text-center p-6">
                <div className="text-5xl transition-transform duration-300 group-hover:scale-145">
                  {feat.icon}
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">{feat.title}</h3>
              <p className="text-xl opacity-80">{feat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}