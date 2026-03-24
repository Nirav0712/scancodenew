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
      title: "Enhanced Efficiency",
      description:
        "Achieve faster printing speeds to meet high demand effortlessly.",
    },
    {
      icon: <Printer className="w-8 h-8 text-blue-600" />,
      title: "Superior Print Quality",
      description:
        "Product technology ensures clear, scannable barcodes every time.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "User-Friendly Design",
      description:
        "Intuitive controls make setup and daily operations seamless.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Durability and Reliability",
      description:
        "Built to withstand heavy use, reducing downtime and maintenance needs.",
    },
  ];

  return (
    <main className="bg-white">
      <PageHero
        title="Barcode Label Printers"
        description="Reliable industrial and desktop printers from top manufacturers, built to keep your operations running smoothly with minimal downtime."
        backgroundImage="/images/lable-design/barcodebg.jpg"
      />

      <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
        {/* Introduction Section */}
        <section className="py-20 bg-linear-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Text Content - Left Side */}
              <div className="lg:p-14">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8">
                  Reliable 
                  <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default block mt-2">Barcode Label Printers
                    <span className="absolute bottom-0 left-0 w-45 h-3 bg-[#EF7F1A]/20 z-0 transform -rotate-1" />
                  </span>to Streamline Your Operations
                </h2>
              </div>

              {/* Image Content - Right Side */}
              <div className="relative h-full">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="/images/lable-design/barcodeLabel.jpg"
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
            <div className="space-y-2 leading-relaxed border-l-4 border-[#EF7F1A] ml-16">
                  <p className="text-gray-700 text-xl pl-4 text-justify">
                   Barcode label printers are essential for businesses looking to boost efficiency, improve accuracy, and reduce manual work in their daily operations. Scancode Auto ID offers a range of reliable barcode label printers designed to support seamless product tracking, inventory management, and retail processes. Our advanced printers deliver high-speed, high-quality printing that helps businesses keep up with demand while ensuring every label is clear, accurate, and easy to scan.
                  </p>
                  <br />
                  <p className="text-gray-700 text-xl pl-4 text-justify">
                   Our printers are available in various models to suit any business size or industry need, including thermal printers, direct thermal printers, and industrial-grade barcode printers. Built with durable materials and user-friendly interfaces, Scancode Auto ID's printers are engineered to reduce downtime, increase productivity, and provide consistent performance across high-demand settings.
                  </p>
                  <br />
                  <p className="text-gray-700 text-xl pl-4 text-justify">
                  By choosing Scancode Auto ID, you're investing in reliable printing technology that simplifies labeling processes, minimizes errors, and enhances workflow. Whether you're in retail, manufacturing, healthcare, or logistics, our barcode label printers offer the perfect balance of speed, accuracy, and durability to keep your operations running smoothly. 
                  </p>
            </div>
          </div>
          
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 hover:border-blue-200">
            <p className="text-2xl font-bold text-gray-800 leading-relaxed mb-6 text-center hover:border-blue-200">
              Key Benefits of <span className="text-[#EF7F1A]"> Barcode Label Printers </span>
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

        {/* Why Choose Us Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-linear-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl overflow-hidden">
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