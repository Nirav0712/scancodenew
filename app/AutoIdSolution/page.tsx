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
import PageHero from "../components/PageHero";
import Cardsscroll from "../components/Cardsscroll";

const BarcodePrintersPage = () => {
  const brands = [
    {
      name: "TSC",
      description: "Leading Manufacturer",
      logo: "/images/brands/tsc.webp",
      img: "/images/brands/tsc.webp",
    },
    {
      name: "ZEBRA",
      description: "Leading Manufacturer",
      logo: "/brands/zebra.png",
      img: "/images/brands/zebra.webp",
      
    },
    {
      name: "AZTAY",
      description: "Powered On Site",
      logo: "/brands/aztay.png",
      img: "/images/brands/sato.webp",
      
    },
    {
      name: "CITIZEN",
      description: "Premium Equipment",
      logo: "/brands/citizen.png",
      img: "/images/brands/citizen.webp",

    },
    {
      name: "ARGOX",
      description: "Leading Manufacturer",
      logo: "/brands/argox.png",
      img: "/images/brands/argox.webp",
      
    },
    {
      name: "Honeywell",
      description: "Industrial Grade",
      logo: "/brands/honeywell.png",
      img: "/images/brands/6.webp",

    },
    {
      name: "PRINTRONIX AUTO ID",
      description: "Enterprise Solutions",
      logo: "/brands/printronix.png",
      img: "/images/brands/printronix.webp",

    },
    {
      name: "TOSHIBA",
      description: "Leading Innovation",
      logo: "/brands/toshiba.png",
      img: "/images/brands/toshiba.webp",

    },
  ];

 
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "360-Degree Branding",
      description:
        "Our labels are designed to maximize branding space, ensuring clear visibility and impactful product presentation from every angle.",
    },
    {
      icon: <Printer className="w-8 h-8 text-blue-600" />,
      title: "High-Quality Printing",
      description:
        "Advanced label printing delivers vibrant colors and crisp details, elevating your brand's appearance on every product.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Tamper-Evident Security",
      description:
        "Designed with tamper-evident features, our labels enhance security and help maintain product integrity.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Eco-Friendly Materials",
      description:
        "We offer recyclable labels, helping brands reduce their environmental impact without compromising on quality.",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Durability & Resistance",
      description:
        "Resistant to moisture, UV, and temperature, our labels ensure your product information stays clear and intact in any conditions.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: "Tailored Custom Solutions",
      description:
        "Our team customizes each label to match your product’s unique design, enhancing its overall shelf appeal.",
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "Flexible Application",
      description:
        "Suitable for all packaging types—round, square, or irregular—our labels ensure a seamless application on every product.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Enhanced Shelf Appeal",
      description:
        "Our labels are designed to make your products stand out, boosting shelf visibility and customer interest.",
    },
  ];

  return (
    <main className="bg-white">
      <PageHero
        title="Auto Id Solution"
        description="Reliable industrial and desktop printers from top manufacturers, built to keep your operations running smoothly with minimal downtime."
        backgroundImage="/images/lable-design/autoidbg.jpg"
      />

      <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
        {/* Introduction Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-9xl mx-auto text-center">
            <div className=" p-8 md:p-12">
              <p className="text-4xl font-bold text-gray-800 leading-relaxed mb-6 text-center">
               Focused on Comprehensive <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default"> Auto ID Solutions <span className="absolute -bottom-1 left-0  w-full h-3 bg-[#EF7F1A]/20 z-0 transform " /></span>
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
               Scancode Auto ID Technology Pvt Ltd focuses on redefining efficiency through innovative label printing solutions. Our expertly developed labeling systems are tailored to suit the specific needs of diverse industries, simplifying even the most complex labeling tasks into smooth and reliable processes. From pharmaceutical and automotive to FMCG and food & beverage sectors, we support businesses with premium-quality labels that ensure precision, strengthen product identification, enhance operational speed, and significantly reduce the chances of errors.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
     Our team of experts collaborates closely with clients to develop label printing solutions that integrate seamlessly with existing systems, offering complete customization to meet industry-specific requirements. From barcode labeling and product packaging to compliance labels and brand identification, Scancode Auto ID delivers high-quality printing and consistent reliability, setting new benchmarks for excellence in label printing solutions.

              </p>
              {/* <p className="text-gray-700 text-lg leading-relaxed">
                By choosing Scancode Auto ID, you’re investing in reliable
                printing technology that simplifies labeling processes,
                minimizes errors, and enhances workflow. Whether you’re in
                retail, manufacturing, healthcare, or logistics, our barcode
                label printers offer the perfect balance of speed, accuracy, and
                durability to keep your operations running smoothly.
              </p> */}
            </div>
          </div>
        </section>

        {/* cardscroller section  */}
        <Cardsscroll />

        {/* Benefits Grid */}
        <section className="py-20 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-size-[50px_50px]" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#EF7F1A]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header with animated underline */}
            <div className="max-w-4xl mx-auto">
              <p className="text-4xl font-bold text-gray-800 leading-relaxed mb-6 text-center">Why Choose
                <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default"> Auto ID Technology Matters
                  <span className="absolute -bottom-1 left-0 w-full h-3 bg-[#EF7F1A]/20 z-0 transform" />
                </span>?
              </p>
              <p className="text-gray-700 text-lg text-center leading-relaxed mb-6">
               In today's fast-paced business world, managing data and inventory with speed and product is crucial. Auto ID technology simplifies complex identification tasks, making data capture, tracking, and product labeling more reliable and efficient. From barcodes and RFID to QR codes, these solutions are essential for businesses aiming to improve operational accuracy, maintain compliance, and stay competitive in their industries. At Scancode, we empower organizations to leverage these technologies effectively, transforming everyday processes and driving business growth.
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

        {/* Why Choose Us Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-linear-to-r from-[#345f8c] to-[#EF7F1A] rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Ransolar Label Printers?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 shrink-0 text-blue-200" />
                    <div>
                      <h3 className="font-semibold text-lg">
                        Enhanced Efficiency
                      </h3>
                      <p className="text-blue-100">
                        Maximum productivity with minimal downtime
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 shrink-0 text-blue-200" />
                    <div>
                      <h3 className="font-semibold text-lg">
                        Superior Print Quality
                      </h3>
                      <p className="text-blue-100">
                        State-of-the-art printing technologies
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 shrink-0 text-blue-200" />
                    <div>
                      <h3 className="font-semibold text-lg">
                        User-Friendly Design
                      </h3>
                      <p className="text-blue-100">
                        Easy to operate and maintain
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 shrink-0 text-blue-200" />
                    <div>
                      <h3 className="font-semibold text-lg">
                        Durability & Reliability
                      </h3>
                      <p className="text-blue-100">
                        Built to withstand harsh environments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <p className="text-4xl font-bold text-gray-800 leading-relaxed mb-6 text-center ">
              Featuring Products fro <span className="text-[#EF7F1A]"> Renowned Brands </span>
            </p>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Partnering with industry leaders to bring you the best labeling
              solutions
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-15 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  <div className="h-16 flex items-center justify-center mb-3">
                    {/* Placeholder for brand logo - replace with actual Image component when you have logos */}
                    <div className="w-25 h-25 mb-4 bg-linear-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                      <img
                        src={brand.img}
                        alt="brand"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800 text-center text-lg">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center mt-1">
                    {brand.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default BarcodePrintersPage;