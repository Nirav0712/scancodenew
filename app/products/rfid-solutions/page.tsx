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
import PageHero from "../../components/PageHero";
import Cardsscroll from "../../components/Cardsscroll";
import { Activity } from "react";
import styled from 'styled-components';


const RFIDPage = () => {
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
      img: "/images/lables/removable-labels.webp",
    },
    {
      name: "Mirror Coat Labels",
      img: "/images/lables/mirror-coat-labels.webp",
    },
    {
      name: "Pharma Grade Labels",
      img: "/images/lables/pharma-grade-labels.webp",
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
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Enhanced Tracking",
      description:
        "Track assets, inventory, and personnel in real-time for improved operational visibility.",
    },
    {
      icon: <Printer className="w-8 h-8 text-blue-600" />,
      title: "Improved Accuracy",
      description:
        "Reduce human errors and achieve precise data collection and management.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Accelerated Workflows",
      description:
        "Automate data capture and processing to streamline your operations.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Cost Optimization",
      description:
        "Minimize labor requirements and reduce inefficiencies to lower costs.",
    },
  ];
  const StyledWrapper = styled.div`
            
            .card {
          
              width: 250px;
            height: 274px;
            border-radius: 30px;
            background: white;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;
  }`;


  return (
    <main className="bg-white">
      <PageHero
        title="RFID Solutions"
        description="Advanced RFID tags, readers, and software to automate your inventory tracking and improve supply chain visibility with pinpoint accuracy."
        backgroundImage="/images/lable-design/rfidbg.jpg"
      />

      <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">

        {/* Introduction Section */}
        <section className="py-20 bg-linear-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Text Content - Left Side */}
              <div className="lg:p-14">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8">
                  Unlock
                  <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default block mt-2">Efficiency and Accuracy
                    <span className="absolute bottom-0 left-0 w-45 h-3 bg-[#EF7F1A]/20 z-0 transform -rotate-1" />
                  </span>
                  <span className="text-2xl lg:text-3xl font-medium text-gray-600 block mt-4">
                    with RFID Technology
                  </span>
                </h2>

                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-[#EF7F1A] pl-4">
                    At ScanCode Auto ID Technology Pvt Ltd, we specialize in delivering advanced RFID (Radio Frequency Identification) solutions that empower businesses to operate smarter and more efficiently. By leveraging the latest innovations in RFID technology, our solutions redefine operational standards with enhanced precision, real-time data access, and streamlined processes. Whether it's tracking assets, managing inventory, or ensuring compliance, our RFID systems are designed to meet the unique needs of modern industries, providing unmatched accuracy and reliability. With a focus on seamless integration, we ensure that our solutions easily adapt to existing workflows, minimizing disruptions while maximizing productivity.
                    <br />
                    Our RFID solutions go beyond traditional methods, offering unparalleled visibility and control over every aspect of your operations. Real-time tracking capabilities enable businesses to monitor assets and inventory effortlessly, reducing errors and improving decision-making. 
                  </p>
                </div>
              </div>

              {/* Image Content - Right Side */}
              <div className="relative h-full">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="/images/lable-design/rfid-solutions.jpg"
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
                      <p className="font-semibold text-gray-800">Premium Quality</p>
                      <p className="text-sm text-gray-600">High-definition print</p>
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
            <div className="max-w-6xl mx-auto mb-10">
              <p className="text-4xl font-bold text-gray-800 leading-relaxed mb-6 text-center">Why Choose Our
                <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default"> RFID Solutions
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-[#EF7F1A]/20 z-0 transform -rotate-1" />
                </span>?
              </p>
              <p className="text-gray-700 text-lg text-center leading-relaxed mb-6">
                Our RFID solutions go beyond traditional methods, offering unparalleled visibility and control over every aspect of your operations. Real-time tracking capabilities enable businesses to monitor assets and inventory effortlessly, reducing errors and improving decision-making. By automating data capture and processing, our systems significantly reduce manual workloads, allowing your team to focus on strategic priorities. Whether you operate in pharmaceuticals, automotive, logistics, or FMCG, our RFID solutions are engineered to deliver measurable value, helping businesses stay competitive in a fast-paced, technology-driven landscape. Experience the difference of working with a trusted partner committed to transforming the way you work.
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

        {/* paper labels Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <p className="text-4xl font-bold text-gray-800 leading-relaxed mb-6 text-center ">Our
              <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default">  RFID Solution <span className="absolute bottom-0 left-0 w-full h-3 bg-[#EF7F1A]/20 z-0 transform -rotate-1" /></span>Capabilities
            </p>
            <p className="text-gray-700 text-lg text-center leading-relaxed mb-10">
              At ScanCode Auto ID Technology Pvt Ltd, we provide innovative and tailored RFID solutions that enhance efficiency, accuracy, and data management for businesses. From robust hardware to seamless software integration, our offerings are designed to meet diverse industry needs and ensure optimized workflows.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
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
                          <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                          {/* Image background */}
                          <div className="relative w-full h-full p-4 bg-linear-to-br from-gray-50 to-white rounded-2xl shadow-md group-hover:shadow-xl">
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

        <StyledWrapper>
          {/* benefits odf rfid technologies */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <p className="text-4xl font-bold text-gray-800 leading-relaxed mb-6 text-center ">Benifits of
                <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default">  RFID Technology <span className="absolute bottom-0 left-0 w-full h-3 bg-[#EF7F1A]/20 z-0 transform -rotate-1" /></span>for Your<span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default">  Business<span className="absolute bottom-0 left-0 w-full h-3 bg-[#EF7F1A]/20 z-0 transform -rotate-1" /></span>
              </p>
              <p className="text-gray-700 text-lg text-center leading-relaxed mb-10">
                At ScanCode Auto ID Technology Pvt. Ltd., we deliver advanced and customized RFID solutions that help businesses improve operational efficiency, ensure data accuracy, and streamline asset tracking. Our comprehensive offerings combine reliable hardware with intelligent software integration to support real-time visibility and better decision-making.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 max-w-6xl mx-auto px-8">
                {/* 1 */}
                <div className="card">
                  <div className="group transition-all duration-300 p-8 text-center ">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-blue-100 text-[#EF7F1A]  transition duration-300">
                        <Briefcase className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-all duration-300 transform group-hover:scale-90 group-hover:text-[#EF7F1A]">
                      Real-Time Operations
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Monitor inventory and workflows anytime, anywhere, with real-time updates.</p>
                  </div>
                </div>
                {/* 2 */}
                <div className="card">
                  <div className="group transition-all duration-300 p-8 text-center ">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-blue-100 text-[#EF7F1A]  transition duration-300">
                        <Cpu className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-all duration-300 transform group-hover:scale-90 group-hover:text-[#EF7F1A]">
                      Advanced Security
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Prevent theft and control access with RFID-enabled security systems.</p>
                  </div>
                </div>
                {/* 3 */}
                <div className="card">
                  <div className="group transition-all duration-300 p-8 text-center ">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-blue-100 text-[#EF7F1A]  transition duration-300">
                        <ArrowRight className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-all duration-300 transform group-hover:scale-90 group-hover:text-[#EF7F1A]">
                      Business Scalability
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Adopt flexible RFID systems that grow alongside your business needs.</p>
                  </div>
                </div>
                {/* 4 */}
                <div className="card">
                  <div className="group transition-all duration-300 p-8 text-center ">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-blue-100 text-[#EF7F1A]  transition duration-300">
                        <Star className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-all duration-300 transform group-hover:scale-90 group-hover:text-[#EF7F1A]">
                      Regulatory Compliance
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Meet industry standards with advanced tracking and traceability tools.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Why Choose Us */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <p className="text-4xl font-bold text-gray-800 leading-relaxed mb-6 text-center ">Why Choose Us
                <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default">  ScanCode Auto ID<span className="absolute bottom-0 left-0 w-full h-3 bg-[#EF7F1A]/20 z-0 transform -rotate-1" /></span>?
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 max-w-6xl mx-auto px-8">
                {/* 1 */}
                <div className="card">
                  <div className="group transition-all duration-300 p-8 text-center ">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-blue-100 text-[#EF7F1A]  transition duration-300">
                        <Award className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-all duration-300 transform group-hover:scale-90 group-hover:text-[#EF7F1A]">
                      Customized Solutions
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Tailored RFID solutions designed to meet your unique business requirements.</p>
                  </div>
                </div>
                {/* 2 */}
                <div className="card">
                  <div className="group transition-all duration-300 p-8 text-center ">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-blue-100 text-[#EF7F1A]  transition duration-300">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-all duration-300 transform group-hover:scale-90 group-hover:text-[#EF7F1A]">
                      End-to-End Support
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Complete assistance from consultation to implementation and after-sales service.</p>
                  </div>
                </div>
                {/* 3 */}
                <div className="card">
                  <div className="group transition-all duration-300 p-8 text-center ">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-blue-100 text-[#EF7F1A]  transition duration-300">
                        <Printer className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-all duration-300 transform group-hover:scale-90 group-hover:text-[#EF7F1A]">
                      Trusted RFID Expertise
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Relied upon by industries for reliable, effective RFID solutions.</p>
                  </div>
                </div>
                {/* 4 */}
                <div className="card">
                  <div className="group transition-all duration-300 p-8 text-center ">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-blue-100 text-[#EF7F1A]  transition duration-300">
                        <Zap className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-all duration-300 transform group-hover:scale-90 group-hover:text-[#EF7F1A]">
                      Durable RFID Products
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">High-performance, durable RFID tags, readers, and printers for optimal operations.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </StyledWrapper>


      </div>
    </main>
  );
}

export default RFIDPage;