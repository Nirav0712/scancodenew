"use client";

// app/products/barcode-printers/page.tsx
import {
  Printer,
  Zap,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../../../components/PageHero";
import Cardsscroll from "../../../components/Cardsscroll";

const PlainLabelsPage = () => {
  const brands = [
    {
      name: "Coated Chromo Labels",
      img: "/images/lables/coated-chromo-labels.webp",
    },
    {
      name: "TT2C Labels",
      img: "/images/lables/tt2c-labels.webp",
    },
    {
      name: "Direct Thermal Labels",
      img: "/images/lables/direct-thermal-labels.webp",
    },
    {
      name: "Removable Labels",
      img: "/images/lables/pet-labels.webp",
    },
    {
      name: "Mirror Coat Labels",
      img: "/images/lables/pp-labels.webp",
    },
    {
      name: "Pharma Grade Labels",
      img: "/images/lables/pvc-labels.webp",
    },
    {
      name: "Piggy Back Labels",
      img: "/images/lables/piggy-back-labels.webp",
    },
    {
      name: "FSC Certified Labels",
      img: "/images/lables/synthetic-labels.webp",
    },
    {
      name: "FSC Certified Labels",
      img: "/images/lables/tamper-evident-labels.webp",
    },

  ];
  const polysterlabel = [
    {
      name: "P.P Labels",
      img: "/images/lables/coated-chromo-labels.webp",
    },
    {
      name: "PET Labels",
      img: "/images/lables/pet-labels.webp",
    },
    {
      name: "PE Labels",
      img: "/images/lables/direct-thermal-labels.webp",
    },
    {
      name: "Synthetic Labels",
      img: "/images/lables/pet-labels.webp",
    },
    {
      name: "Security Labels",
      img: "/images/lables/pp-labels.webp",
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Customizable Versatility",
      description:
        "Easily tailored to specific business needs, offering flexibility for a wide range of applications.",
    },
    {
      icon: <Printer className="w-8 h-8 text-blue-600" />,
      title: "Clear Print Compatibility",
      description:
        "Compatible with thermal printers, delivering sharp, readable prints for professional presentation.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Durability for Handling",
      description:
        "Made from robust materials that withstand frequent handling and storage conditions.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Cost-Effective Solution",
      description:
        "Provides an economical labeling option without compromising on quality or performance.",
    },
  ];

  return (
    <main className="bg-white">
      <PageHero
        title="Plain Labels"
        description="Our plain labels are available in two high-quality, versatile materials."
        backgroundImage="https://images.unsplash.com/photo-1580983546051-fb1f2c2777df?auto=format&fit=crop&q=80&w=1920"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Introduction Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <p className="text-2xl font-bold text-gray-800 leading-relaxed mb-6 text-center">
                <span className="text-[#EF7F1A]">Plain Labels </span>for Versatile Business Applications
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Plain Labels from Scancode ID are essential for businesses requiring a reliable, adaptable solution for various labeling needs. These blank, unprinted labels provide the flexibility to be customized according to specific requirements, making them ideal for applications in retail, logistics, manufacturing, and healthcare. Scancode ID’s plain labels ensure high-quality print clarity and compatibility with most thermal printers, giving your business the confidence of consistent, professional labeling.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Designed to meet a range of industry demands, our plain labels are made from durable materials that withstand handling, shipping, and storage, all while delivering cost-effectiveness and quality. Scancode ID’s plain labels support efficient workflows, allowing you to enhance organization and traceability across your operations.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:50px_50px]" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#EF7F1A]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header with animated underline */}
            <div className="text-center mb-16">
              <p className="text-4xl md:text-5xl font-bold text-gray-800 leading-relaxed mb-4">
                Core Benefits of
                <span className="relative inline-block ml-3">
                  <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default">
                    Plain Labels
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#EF7F1A]/20 -z-0 transform -rotate-1" />
                </span>
              </p>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover why businesses choose our plain labels for their superior quality and performance
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  {/* Animated gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#EF7F1A]/0 via-[#EF7F1A]/0 to-blue-500/0 group-hover:from-[#EF7F1A]/5 group-hover:via-[#EF7F1A]/5 group-hover:to-blue-500/5 transition-all duration-700" />

                  {/* Top accent bar with animation */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#EF7F1A] to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                  {/* Corner decorations */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#EF7F1A]/0 group-hover:border-[#EF7F1A]/30 transition-all duration-500 rounded-tl-lg" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#EF7F1A]/0 group-hover:border-[#EF7F1A]/30 transition-all duration-500 rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#EF7F1A]/0 group-hover:border-[#EF7F1A]/30 transition-all duration-500 rounded-bl-lg" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#EF7F1A]/0 group-hover:border-[#EF7F1A]/30 transition-all duration-500 rounded-br-lg" />

                  {/* Card Content */}
                  <div className="relative p-8 flex flex-col items-center text-center">
                    {/* Icon Container with enhanced styling */}
                    <div className="relative mb-6">
                      {/* Glow effect behind icon */}
                      <div className="absolute inset-0 bg-[#EF7F1A]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-75 group-hover:scale-100" />

                      {/* Icon background with gradient */}
                      <div className="relative w-20 h-20 bg-gradient-to-br from-[#EF7F1A]/10 to-blue-500/10 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <div className="w-16 h-16 bg-white rounded-xl shadow-md group-hover:shadow-xl flex items-center justify-center transform group-hover:-rotate-3 transition-all duration-500">
                          <div className="text-[#EF7F1A] group-hover:text-blue-600 transition-colors duration-300">
                            {benefit.icon}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Title with hover effect */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#EF7F1A] group-hover:to-blue-600 transition-all duration-300">
                      {benefit.title}
                    </h3>

                    {/* Description (if available) */}
                    {benefit.description && (
                      <p className="text-gray-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        {benefit.description}
                      </p>
                    )}

                    {/* Bottom decorative element */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-[#EF7F1A] to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-16" />
                  </div>
                </div>
              ))}
            </div>

            {/* Optional CTA Button */}
            <div className="text-center mt-16">
              <button className="px-8 py-3 bg-gradient-to-r from-[#EF7F1A] to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Learn More About Our Labels
              </button>
            </div>
          </div>
        </section>


        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl font-bold text-gray-800 leading-relaxed mb-6 text-center">Explore Our Range of
              <span className="text-[#EF7F1A]"> Plain Label Types</span>
            </p>
            <p className="text-gray-700 text-lg text-center leading-relaxed mb-6">
              Our plain labels are available in two high-quality, versatile materials: Paper Labels and Polyester Labels. Crafted to meet diverse industry needs, each label type offers unique advantages that support reliable, professional labeling for a range of applications. Whether you need cost-effective labels for everyday use or durable options that withstand challenging environments, our plain labels provide consistent performance, adaptability, and clarity across various settings.
            </p>
          </div>
        </section>

        <Cardsscroll />
        {/* paper labels Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <p className="text-4xl font-bold text-gray-800 leading-relaxed mb-6 text-center ">Paper<span className="text-[#EF7F1A] hover:text-gray-800 transition duration-300"> Labels</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:scale-105"
                >
                  <div className="p-8 flex flex-col items-center">
                    {/* Image container that expands significantly on hover */}
                    <div className="relative mb-6 w-full flex justify-center">
                      <div className="w-36 h-36 group-hover:w-52 group-hover:h-52 transition-all duration-500 ease-out">
                        <div className="relative w-full h-full">
                          {/* Background glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                          {/* Image background */}
                          <div className="relative w-full h-full p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md group-hover:shadow-xl">
                            <img
                              src={brand.img}
                              alt={brand.name}
                              className="w-full h-full object-contain transform group-hover:scale-125 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Brand name with animation */}
                    <h3 className="font-bold text-lg text-gray-800 text-center group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300">
                      {brand.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* polyster labels section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <p className="text-4xl font-bold text-gray-800 leading-relaxed mb-6 text-center ">Polyester<span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default"> Labels
              <span className="absolute -bottom-1 left-2 w-full h-3 bg-[#EF7F1A]/20 -z-0 transform -rotate-1" />
            </span></p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
              {polysterlabel.map((polysterlabel, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:scale-105"
                >
                  <div className="p-8 flex flex-col items-center">
                    {/* Image container that expands significantly on hover */}
                    <div className="relative mb-6 w-full flex justify-center">
                      <div className="w-36 h-36 group-hover:w-52 group-hover:h-52 transition-all duration-500 ease-out">
                        <div className="relative w-full h-full">
                          {/* Background glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                          {/* Image background */}
                          <div className="relative w-full h-full p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md group-hover:shadow-xl">
                            <img
                              src={polysterlabel.img}
                              alt={polysterlabel.name}
                              className="w-full h-full object-contain transform group-hover:scale-125 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Brand name with animation */}
                    <h3 className="font-bold text-lg text-gray-800 text-center group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300">
                      {polysterlabel.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>






        {/* Benefits Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 hover:border-blue-200">
            <p className="text-3xl font-bold text-gray-800 leading-relaxed mb-6 text-center hover:border-blue-200">
              Core Benefits of
              <span className="text-[#EF7F1A] hover:text-gray-800 transition duration-300"> Plain Labels</span>
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                >
                  <div className="bg-blue-50 rounded-lg w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PlainLabelsPage;