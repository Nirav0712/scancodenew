"use client";

import React from "react";
import Link from "next/link";

interface Service {
  image: string;
  title: string;
  number: string;
  imagePosition?: string;
  arrowBg: string;
}

const services: Service[] = [
  {
    image: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?auto=format&fit=crop&q=80&w=800",
    title: "Printing Service",
    number: "SERVICES_01",
    imagePosition: "center",
    arrowBg: "linear-gradient(135deg, #7b61ff 0%, #22d3c5 100%)",
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    title: "Printing Service",
    number: "SERVICES_02",
    imagePosition: "center",
    arrowBg: "linear-gradient(135deg, #7b61ff 0%, #22d3c5 100%)",
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    title: "Printing Service",
    number: "SERVICES_03",
    imagePosition: "center",
    arrowBg: "linear-gradient(135deg, #7b61ff 0%, #22d3c5 100%)",
  },
];

export default function ServicesSection() {
  const newLocal = "relative isolate group-hover:translate-x-0.75 group-hover:-translate-y-0.5 transition-transform duration-500";
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-gray-500 uppercase mb-3">{"// OUR SERVICES  //"}</p>

            <h2 className="text-[42px] md:text-[56px] leading-none font-semibold text-black">
              <span className="relative inline-block">
                Print Solutions
                <span className="absolute left-0 bottom-1 w-full h-0.5 bg-white" />
              </span>
              <br />
              for Every Need
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="text-gray-500 text-base max-w-sm">
              Custom prints, fast delivery, premium quality — tailored to your
              needs.
            </p>

            <Link href="/services" className="relative inline-block group">
            <span className="absolute inset-0 rounded-full border-2 border-teal-400 translate-x-2 translate-y-2 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>

            {/* button */}
            <span className="relative px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-purple-500 to-teal-400 shadow-lg block">
             View More
            </span>
            </Link>
          </div>
        </div>

        <div className="services-wrap flex flex-col xl:flex-row gap-6">
          {services.map((svc, i) => (
            <div
              key={i}
              className="service-card group relative h-137.5 flex-1 overflow-hidden rounded-[28px] cursor-pointer transition-all duration-500 ease-in-out bg-white"
            >
              {/* Content Wrapper that shrinks on hover to reveal bg-white */}
              <div className="absolute inset-0 transition-all duration-500 ease-in-out group-hover:inset-3 overflow-hidden rounded-[28px] group-hover:rounded-[22px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${svc.image})`,
                    backgroundPosition: svc.imagePosition || "center",
                  }}
                />

                {/* Arrow Button Container */}
                <div className="absolute top-0 right-0 z-30 ">
                  <div className={newLocal}>
                    <div className="absolute top-0 right-0 w-25 h-25 bg-white rounded-bl-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative p-4">
                      <div
                        className="box-border flex h-16 w-16 items-center justify-center rounded-full text-white transition-all duration-300 group-hover:scale-95 group-hover:rotate-12"
                        style={{
                          background: svc.arrowBg,
                        }}
                      >
                        <span className="text-[28px] font-light leading-none -mt-0.5">
                          ↗
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 right-0 bottom-0 z-20 px-0">
                  <div
                    className="mx-0 translate-y-18 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(124,77,255,0.88) 0%, rgba(69,170,242,0.82) 45%, rgba(32,214,199,0.88) 100%)",
                      borderTopLeftRadius: "22px",
                      borderTopRightRadius: "22px",
                      borderBottomLeftRadius: "28px",
                      borderBottomRightRadius: "28px",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <div className="px-8 py-8">
                      <p className="text-white/85 text-[15px] font-medium text-center mb-3">
                        {svc.number}
                      </p>
                      <h3 className="text-white text-[24px] text-center font-semibold leading-tight">
                        {svc.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1280px) {
          .services-wrap:hover .service-card {
            flex: 0.9;
          }

          .services-wrap .service-card:hover {
            flex: 1.25;
          }
        }
      `}</style>
    </section>
  );
}