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

const InMoldPage = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Seamless Integration",
      description:
        "Directly fused to the container, our labels stay flawless without peeling or fading.",
    },
    {
      icon: <Printer className="w-8 h-8 text-blue-600" />,
      title: "Durable & Resistant",
      description:
        "Scratch, water, and UV-resistant, our labels keep products looking sharp indoors and out.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Superior Print Quality",
      description:
        "Vibrant colors and clear details make your branding stand out with premium appeal.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Cost-Effective Solution",
      description:
        "Integrated labeling reduces production steps, saving time and costs for high-volume runs.",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Environmentally Friendly",
      description:
        "Made from recyclable materials, our labels help reduce environmental impact.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: "Customizable Designs",
      description:
        "Tailored to fit any container shape or size, our labels support unique brand designs.",
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "Product Longevity",
      description:
        "Long-lasting protection ensures labels stay fresh and attractive over time.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Tamper-Evident Features",
      description:
        "Optional security features prevent tampering, ideal for sensitive products.",
    },
  ];

  return (
    <main className="bg-white">
      <PageHero
        title="In-Mold Labels"
        description="Our in-mold labels are designed to seamlessly fuse with the container during the molding process, eliminating the risk of peeling or fading over time."
        backgroundImage="/images/lable-design/in-moldbg.jpg"
      />

      <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">

        {/* Introduction Section */}
        <section className="py-20 bg-linear-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Text Content - Left Side */}
              <div className="lg:p-14">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8">
                  What Are
                  <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default block mt-2">In-Mold Labels
                    <span className="absolute -bottom-1 left-0 w-85 h-3 bg-[#EF7F1A]/20 z-0 transform" />
                  </span>?
                </h2>

                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-[#EF7F1A] pl-4">
                    In-Mold Labels are a revolutionary labelling solution where the label becomes an integral part of the product's packaging during the moulding process. This technique is most commonly used in injection moulding, blow moulding, or thermoforming processes. As the plastic product is formed, the pre-printed label is placed inside the mold and fuses with the surface, resulting in a fully integrated label that is both durable and aesthetically pleasing.
                  </p>
                </div>
              </div>

              {/* Image Content - Right Side */}
              <div className="relative h-full">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="/images/lable-design/in-mold.jpg"
                    alt="Shrink Sleeve Packaging Solutions"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <p className="text-2xl font-bold mb-2">Complete 360° product sleeving</p>
                    <p className="text-lg opacity-90">Capture attention from every angle.</p>
                  </div>
                </div>

                {/* Floating Feature Cards */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 max-w-50 transform rotate-3 hover:rotate-0 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#EF7F1A]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#EF7F1A] text-xl">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">High-End Finish</p>
                      <p className="text-sm text-gray-600">Crisp, high-resolution print</p>
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
                <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default"> In-Mold Labels
                  <span className="absolute -bottom-1 left-0 w-full h-3 bg-[#EF7F1A]/20 z-0 transform" />
                </span>?
              </p>
              <p className="text-gray-700 text-lg text-center leading-relaxed mb-6">
     At Scancode Auto ID Technology Pvt Ltd, we specialize in delivering premium label printing solutions that cater to a wide range of industries, including Food & Beverages, Pharmaceuticals, Retail, and Household Goods. Our labels are designed to provide strong adhesion on various packaging surfaces, ensuring they remain intact, clear, and professional over time. With high-quality materials and advanced printing techniques, we create labels that enhance product appearance while maintaining durability and reliability. This not only delivers a clean and polished look but also ensures long-lasting performance, making our label printing solutions ideal for businesses that require consistent and impactful branding.
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

        <section className="py-16 container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <p className="text-4xl font-bold text-gray-800 leading-relaxed mb-6 text-center">What Makes
              <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default"> Scancode <span className="absolute -bottom-1 left-0 w-full h-3 bg-[#EF7F1A]/20 z-0 transform" />
              </span>
              the Right Choice for
              <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default"> In-Mold Labels
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-[#EF7F1A]/20 z-0 transform"/>
              </span>
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
             At Scancode Auto ID Technology Pvt Ltd, we utilize advanced label printing technology and premium-quality materials to deliver labels that offer exceptional durability and striking visual appeal. Our label printing solutions are designed to ensure strong adhesion on various surfaces, preventing peeling, fading, or damage over time. This guarantees long-lasting brand visibility and a clean, professional finish for every product. Whether you operate in the food and beverage industry, pharmaceuticals, retail, or consumer goods, our labels provide a reliable and efficient solution for all your packaging requirements.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
              Beyond visual appeal, our labels are engineered to meet the highest standards of performance. They are resistant to moisture, heat, UV exposure, and regular handling, ensuring your products maintain a polished appearance in all conditions. We are also committed to sustainability, offering eco-friendly and recyclable label materials that help reduce environmental impact. With fully customizable options in size, shape, material, and finish, Scancode delivers cost-effective, high-quality label printing solutions that enhance your brand identity while meeting industry regulations and customer expectations.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
};

export default InMoldPage;