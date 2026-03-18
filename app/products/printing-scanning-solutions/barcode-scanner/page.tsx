"use client";

// app/products/barcode-printers/page.tsx
import { Printer, Zap, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from "../../../components/PageHero";


const BarcodeScannerPage = () => {
  const brands = [
    { name: 'TSC', description: 'Leading Manufacturer', logo: '/brands/tsc.png' },
    { name: 'ZEBRA', description: 'Leading Manufacturer', logo: '/brands/zebra.png' },
    { name: 'AZTAY', description: 'Powered On Site', logo: '/brands/aztay.png' },
    { name: 'CITIZEN', description: 'Premium Equipment', logo: '/brands/citizen.png' },
    { name: 'ARGOX', description: 'Leading Manufacturer', logo: '/brands/argox.png' },
    { name: 'Honeywell', description: 'Industrial Grade', logo: '/brands/honeywell.png' },
    { name: 'PRINTRONIX AUTO ID', description: 'Enterprise Solutions', logo: '/brands/printronix.png' },
    { name: 'TOSHIBA', description: 'Leading Innovation', logo: '/brands/toshiba.png' },
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Rapid Fast Scanning',
      description: 'Quickly capture data to streamline operations and reduce wait times.',
    },
    {
      icon: <Printer className="w-8 h-8 text-blue-600" />,
      title: 'Flexible Connectivity',
      description: 'Available in both wired and wireless options for versatile usage.',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Broad Barcode Support',
      description: 'Compatible with various barcode formats for increased flexibility.',
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Comfortable Design',
      description: 'Ergonomic structure ensures easy handling during extended use .',
    },
  ];

  return (
    <main className="bg-white">
      <PageHero
        title="Barcode Scanner"
        description="(Wired and Wireless)"
        backgroundImage="https://images.unsplash.com/photo-1580983546051-fb1f2c2777df?auto=format&fit=crop&q=80&w=1920"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">


        {/* Introduction Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-2xl text-center md:text-3xl font-bold mb-6"><span className="text-[#ef7f1a]">Barcode Scanner</span> for Effortless Data Capture</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The Barcode Scanner is an essential tool for businesses seeking efficient and accurate data capture. Whether you opt for a wired or wireless model, our barcode scanners deliver unmatched reliability and performance across various applications, including retail, inventory management, and logistics. Designed for ease of use, these scanners feature advanced technology that ensures quick and accurate scanning of barcodes, reducing manual data entry errors and streamlining operations.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our wired and wireless barcode scanners are equipped with high-resolution sensors that can read a wide range of barcode types, from traditional UPC codes to QR codes. With ergonomic designs and user-friendly interfaces, they are built for comfort and efficiency, allowing your staff to work more effectively. Investing in Scancode Auto ID’s barcode scanners means empowering your business with cutting-edge tools that enhance productivity and accuracy in data management.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Key Benefits of <span className="text-[#ef7f1a]">Barcode Scanner</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                >
                  <div className="bg-blue-50 rounded-lg w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Ransolar Label Printers?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 text-blue-200" />
                    <div>
                      <h3 className="font-semibold text-lg">Enhanced Efficiency</h3>
                      <p className="text-blue-100">Maximum productivity with minimal downtime</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 text-blue-200" />
                    <div>
                      <h3 className="font-semibold text-lg">Superior Print Quality</h3>
                      <p className="text-blue-100">State-of-the-art printing technologies</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 text-blue-200" />
                    <div>
                      <h3 className="font-semibold text-lg">User-Friendly Design</h3>
                      <p className="text-blue-100">Easy to operate and maintain</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 text-blue-200" />
                    <div>
                      <h3 className="font-semibold text-lg">Durability & Reliability</h3>
                      <p className="text-blue-100">Built to withstand harsh environments</p>
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
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
              Featuring Products from <span className="text-[#ef7f1a]">Renowned Brands</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Partnering with industry leaders to bring you the best labeling solutions
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  <div className="h-16 flex items-center justify-center mb-3">
                    {/* Placeholder for brand logo - replace with actual Image component when you have logos */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                      <span className="text-blue-800 font-bold text-xl">
                        {brand.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800 text-center text-lg">{brand.name}</h3>
                  <p className="text-sm text-gray-600 text-center mt-1">{brand.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


      </div>
    </main >
  );
};

export default BarcodeScannerPage;