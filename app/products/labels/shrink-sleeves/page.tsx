"use client";

// app/products/barcode-printers/page.tsx
import {
  Printer,
  Zap,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Cpu,
  Briefcase,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../../../components/PageHero";
import Cardsscroll from "../../../components/Cardsscroll";
import { Activity } from "react";

const ShrinkSleevesPage = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "360-Degree Branding",
      description:
        "Our sleeves cover all angles, offering full branding space for standout product visibility from every perspective.",
    },
    {
      icon: <Printer className="w-8 h-8 text-blue-600" />,
      title: "High-Quality Printing",
      description:
        "Advanced printing delivers vibrant colors and crisp details, elevating your brand’s appearance on every shelf.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Tamper-Evident Security",
      description:
        "Designed with tamper-evident seals, our shrink sleeves enhance security and maintain product integrity.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Eco-Friendly Materials",
      description:
        "We offer recyclable shrink sleeves, helping brands reduce their environmental impact without sacrificing quality.",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Durability & Resistance",
      description:
        "Resistant to moisture, UV, and temperature, our sleeves ensure your label stays intact through any conditions.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: "Tailored Custom Solutions",
      description:
        "Our team customizes each shrink sleeve to suit your product’s unique design, enhancing its shelf appeal.",
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "Flexible Application",
      description:
        "Suitable for all container shapes—round, square, or irregular—our sleeves create a seamless product fit.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Enhanced Shelf Appeal",
      description:
        "Our shrink sleeves are designed to make your products stand out, boosting shelf visibility and customer interest.",
    },
  ];

  return (
    <main className="bg-white">
      <PageHero
        title="Shrink Sleeves"
        description="Our shrink sleeves deliver a 360-degree branding solution that wraps around your product, creating a striking, all-around display that maximizes visibility on crowded shelves."
        backgroundImage="/images/lable-design/labelsbg.jpg"
      />

      <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">

        {/* Introduction Section */}
        <section className="py-20 bg-linear-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Text Content - Left Side */}
              <div className="lg:p-14">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8">
                  Custom
                  <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default block mt-2">Shrink Sleeves
                    <span className="absolute bottom-0 left-0 w-80 h-3 bg-[#EF7F1A]/20 z-0 transform -rotate-1" />

                  </span>
                  <span className="text-2xl lg:text-3xl font-medium text-gray-600 block mt-4">
                    Superior Branding and Protection
                  </span>
                </h2>

                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-[#EF7F1A] pl-4">
                    At Scancode Auto ID Technology Pvt Ltd, we specialize in producing high-quality
                    shrink sleeves tailored to the diverse packaging demands of industries like
                    food and beverages, pharmaceuticals, cosmetics, and more. Our shrink sleeves
                    deliver a 360-degree branding solution that wraps around your product, creating
                    a striking, all-around display that maximizes visibility on crowded shelves.
                    Crafted to conform to various shapes, these sleeves provide a seamless, vibrant
                    look that enhances brand appeal and product differentiation.
                  </p>
                </div>
              </div>

              {/* Image Content - Right Side */}
              <div className="relative h-full">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="/images/lable-design/shrink-label.jpg"
                    alt="Shrink Sleeve Packaging Solutions"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <p className="text-2xl font-bold mb-2">360° Branding Solution</p>
                    <p className="text-lg opacity-90">Full-wrap coverage for maximum shelf impact</p>
                  </div>
                </div>

                {/* Floating Feature Cards */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 max-w-50 transform rotate-3 hover:rotate-0 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#EF7F1A]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#EF7F1A] text-xl">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Fine Quality</p>
                      <p className="text-sm text-gray-600">Sharp print output</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-size-[50px_50px]" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#EF7F1A]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header with animated underline */}
            <div className="max-w-4xl mx-auto">
              <p className="text-4xl font-bold text-gray-800 leading-relaxed mb-6 text-center">Why Choose Our
                <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default"> Shrink Sleeves
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-[#EF7F1A]/20 z-0 transform -rotate-1" />
                </span>?
              </p>
              <p className="text-gray-700 text-lg text-center leading-relaxed mb-6">
                Our shrink sleeves provide full 360-degree branding, vibrant high-quality prints, and durable protection, tailored to meet the unique needs of your product. With options for tamper-evident features and eco-friendly materials, we offer a complete packaging solution designed to elevate and secure your brand.
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
                  <div className="absolute inset-0 bg-linear-to-br from-[#EF7F1A]/0 via-[#EF7F1A]/0 to-blue-500/0 group-hover:from-[#EF7F1A]/5 group-hover:via-[#EF7F1A]/5 group-hover:to-blue-500/5 transition-all duration-700" />

                  {/* Top accent bar with animation */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#EF7F1A] to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

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
                      <div className="relative w-20 h-20 bg-linear-to-br from-[#EF7F1A]/10 to-blue-500/10 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <div className="w-16 h-16 bg-white rounded-xl shadow-md group-hover:shadow-xl flex items-center justify-center transform group-hover:-rotate-3 transition-all duration-500">
                          <div className="text-[#EF7F1A] group-hover:text-blue-600 transition-colors duration-300">
                            {benefit.icon}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Title with hover effect */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-[#EF7F1A] group-hover:to-blue-600 transition-all duration-300">
                      {benefit.title}
                    </h3>

                    {/* Description (if available) */}
                    {benefit.description && (
                      <p className="text-gray-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        {benefit.description}
                      </p>
                    )}

                    {/* Bottom decorative element */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-linear-to-r from-[#EF7F1A] to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-16" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* cardscroller section  */}
        <Cardsscroll />

        {/* why choose us */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <p className="text-4xl font-bold text-gray-800 leading-relaxed mb-6 text-center">What Makes
              <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default"> Scancode <span className="absolute bottom-0 left-0 w-full h-3 bg-[#EF7F1A]/20 z-0 transform -rotate-1" /></span>the Right Choice for<span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default"> Shrink Sleeves
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#EF7F1A]/20 z-0 transform -rotate-1" />

              </span>
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
              At Scancode Auto ID Technology Pvt Ltd, we bring together years of industry expertise, cutting-edge printing technology, and a dedication to quality that makes our shrink sleeves the ideal choice for a wide range of packaging needs. Our shrink sleeves are meticulously designed to not only enhance your product's shelf appeal with vibrant colors and sharp details but also to provide robust protection against environmental factors like moisture and UV light. This ensures that your products remain visually striking and intact from the moment they're packaged to when they reach the consumer.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
              In addition to aesthetics and durability, we prioritize compliance with industry regulations, providing options like tamper-evident features that reinforce product security, especially for sensitive sectors like food, pharmaceuticals, and cosmetics. Scancode's solutions also cater to eco-conscious brands with sustainable, recyclable shrink sleeve options that help reduce environmental impact. With a focus on customization, we work closely with each client to create a shrink sleeve that truly reflects their brand identity, allowing for a seamless fit on various container shapes and sizes. Trust Scancode to provide a packaging solution that combines visual impact, protection, and compliance for unmatched product presentation.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
};

export default ShrinkSleevesPage;