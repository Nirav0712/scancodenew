"use client";

import React from "react";
import Link from "next/link";
import {
  Printer,
  Zap,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

interface Service {
  icon?: React.ReactNode;
  image: string;
  title: string;
  description: string;
  // number: string;
  imagePosition?: string;
  arrowBg: string;
}

const services: Service[] = [
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    image: "/images/lable-design/Frame6.png",
    title: "Efficient Labeling Solutions",
    description: "Designed to boost output while conserving resources, ensuring efficient operations with minimal environmental impact.",
    // number: "SERVICES_01",
    imagePosition: "center",
    arrowBg: "linear-gradient(135deg, #7b61ff 0%, #22d3c5 100%)",
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    image: "/images/lable-design/1.jpeg",
    title: "Reliable and Durable Labels",
    description: "Built to withstand harsh environments, these labels maintain performance and clarity in tough industrial settings.",
    // number: "SERVICES_02",
    imagePosition: "center",
    arrowBg: "linear-gradient(135deg, #7b61ff 0%, #22d3c5 100%)",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,

    image: "/images/lable-design/Frame7.png",
    title: "Smart ID Label Technology",
    description: "Utilizing advanced printing and scanning to create precise, high-performance labels for modern industrial needs.",
    // number: "SERVICES_03",
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
                Labels That
                <span className="absolute left-0 bottom-1 w-full h-0.5 bg-white" />
              </span>
              <br />
              Imprint Your Brand
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="text-gray-500 text-base max-w-sm">
              Precision-Crafted Labels, Delivered Fast — Designed Around You
            </p>

            <Link href="/products/labels" className="relative inline-block group">
              <span className="absolute inset-0 -top-4 -left-4 w-40 h-16 rounded-full border-2 border-[#EF7F1A] translate-x-2 translate-y-2 transition-all duration-300"></span>

              {/* button */}
              <span className="relative z-10 px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#345f8c] to-[#EF7F1A] shadow-lg block group-hover:scale-y-130 group-hover:scale-x-113">
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
                          background: "linear-gradient(135deg, #345f8c 0%, #6f7a7c 45%, #EF7F1A 100%)",
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
                        "linear-gradient(135deg, rgba(52,95,140,0.9) 0%, rgba(120,110,110,0.85) 45%, rgba(239,127,26,0.9) 100%)",
                      borderTopLeftRadius: "22px",
                      borderTopRightRadius: "22px",
                      borderBottomLeftRadius: "28px",
                      borderBottomRightRadius: "28px",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <div className="px-8 py-8">

                      <h3 className="text-white text-[24px] text-center font-semibold leading-tight mb-3">
                        {svc.title}
                      </h3>
                      <p className="text-white/85 text-[15px] font-medium text-center ">
                        {svc.description}
                      </p>
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