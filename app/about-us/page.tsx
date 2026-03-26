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
import React from "react";
import PageHero from "../components/PageHero";
// import TeamSection from "../components/TeamSection";
import Image from "next/image";
import Link from "next/link";
import styled from 'styled-components';

const StyledWrapper = styled.div`
            .card {
              width: 250px;
            height: 274px;
            border-radius: 30px;
            background: white;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;
  }`;

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = React.useState(0);
  const [hasStarted, setHasStarted] = React.useState(false);
  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return <div ref={elementRef}>{count}{suffix}</div>;
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <PageHero
        title="About Us"
        description="We are a team of passionate print professionals dedicated to bringing your creative visions to life with premium quality and unmatched reliability."
        backgroundImage="/aboutus.png" // Printing facility / clean workspace
      />

      {/* Origin Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <div className="relative">
            <div className="relative z-10 w-full h-100 lg:h-125 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/aboutpage.png"
                alt="Our Printing Facility"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlapping small image */}
            <div className="absolute -bottom-10 -right-4 lg:-right-10 z-20 w-48 h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/about1.jpeg"
                alt="Creative Process"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div>
            <p className="section-label">{"// OUR STORY  //"}</p>
            <h2 className="section-heading mb-6">
            Transforming Products<span className="text-[#EF7F1A]"> Through Premium Label Printing</span>
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                At Scancode Auto ID Technology Pvt Ltd, we specialize in delivering high-quality label printing solutions tailored to meet the diverse needs of modern businesses. Since our establishment in 2016, we have been committed to producing durable, precise, and visually appealing labels that enhance product identification and brand value. Our wide range of offerings includes barcode labels, product labels, packaging labels, and customized label solutions designed for various industries.
              </p>
              <p>
                With a strong focus on innovation and quality, we utilize advanced printing technology and premium materials to ensure long-lasting performance and clarity. Our label printing products are engineered to support efficient operations, accurate tracking, and strong brand presentation. Backed by reliable customer support and technical expertise, we aim to provide consistent, cost-effective solutions to clients across India and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>



      <StyledWrapper>
        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <p className="text-4xl font-bold text-gray-800 leading-relaxed mb-6 text-center ">Why Choose Us
              <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default">  ScanCode Auto ID<span className="absolute bottom-0 left-0 w-full h-3 bg-[#EF7F1A]/20 z-0 transform " /></span>?
            </p>
            <p className="text-gray-700 text-lg text-center leading-relaxed mb-10">
         In today's competitive business environment, high-quality label printing plays a crucial role in product presentation and brand recognition. Advanced label printing solutions simplify the entire labeling process, ensuring every product is clearly marked with accurate and professional information. From barcode and QR code labels to fully customized packaging labels, these solutions enable businesses to enhance operational efficiency, ensure regulatory compliance, and build a strong brand presence.At Scancode Auto ID Technology Pvt Ltd, we provide premium label printing sharp print quality, and reliable performance, helping businesses achieve consistency and excellence in every label.
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
                    Product Engineering
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">High-quality labels and solutions crafted with precision to ensure flawless performance.</p>
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
                    Innovative Solutions
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Cutting-edge label printing technologies designed to enhance efficiency and streamline operations.</p>
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
                    Industry Expertise
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Years of experience in label printing, providing customized solutions for diverse industries.</p>
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
                    Customer-Centric Approach
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Collaborative label printing services focused on understanding and exceeding client needs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </StyledWrapper>

      {/* Our Mission / Values */}
      {/* <section className="py-24 bg-section-bg2">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="section-label">{"// OUR VALUES  //"}</p>
          <h2 className="section-heading mb-16">
            What Drives <span className="highlight">Us</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: "🌟",
                title: "Uncompromising Quality",
                desc: "We use state-of-the-art equipment and premium materials to ensure every print exceeds expectations."
              },
              {
                icon: "🤝",
                title: "Customer First",
                desc: "Your success is our success. We provide dedicated support from design to delivery."
              },
              {
                icon: "🌱",
                title: "Sustainable Practices",
                desc: "We are committed to eco-friendly printing processes and sustainably sourced materials."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-50 text-3xl flex items-center justify-center rounded-full mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* advanced manufacturing */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-9xl mx-auto">
          <div className="  md:p-12 text-center">
            <p className="text-4xl font-bold text-gray-800 leading-relaxed mb-6 text-center">Driving Innovation through
              Reliable <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default"> Advanced Manufacturing<span className="absolute bottom-0 left-0 w-full h-3 bg-[#EF7F1A]/20 z-0 transform" /></span>
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At Scancode Auto ID Technology Pvt. Ltd., our infrastructure is the cornerstone of our commitment to excellence in premium label printing solutions. We understand that leveraging top-quality raw materials and state-of-the-art label manufacturing technologies leads to exceptional products that empower businesses to enhance their brand presence and operational accuracy.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
             As a leading manufacturer in the label printing industry, we adhere to strict quality standards to ensure every label meets industry requirements and customer expectations. Our label printing solutions are designed to deliver excellent print clarity, strong adhesion, and long-lasting durability, making them suitable for a wide range of applications including packaging, branding, and product identification.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Most of our labeling components are produced in-house, allowing us to maintain tight control over print quality and turnaround times. We also partner with reputable specialists for essential processes such as custom label design, material testing, and environmental compliance checks. This comprehensive approach enables us to deliver high-quality, innovative label printing solutions that meet the diverse and evolving needs of our clients.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
            By prioritizing quality and technological advancement in label printing, Scancode is committed to helping businesses enhance their product presentation, streamline packaging processes, and achieve long-term success.Focused on quality and innovation, Scancode empowers businesses with reliable label printing solutions for better packaging and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section (Reused) */}
      {/* <TeamSection /> */}

      {/* states section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-label text-primary font-semibold mb-2">{"// OUR IMPACT //"}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story in <span className="highlight">Numbers</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Years of dedication and expertise, delivering exceptional results for our clients worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Years of Industry Expertise */}
            <div className="text-center group">
              <div className="inline-block mb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">
                <AnimatedCounter end={8} suffix="+" />
              </div>
              <div className="text-gray-600 font-medium">Years of Industry Expertise</div>
              <div className="w-12 h-0.5 bg-primary/30 mx-auto mt-4 group-hover:w-20 transition-all duration-300"></div>
            </div> 
            

            {/* Skilled Team */}
            <div className="text-center group">
              <div className="inline-block mb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">
                <AnimatedCounter end={20} suffix="+" />
              </div>
              <div className="text-gray-600 font-medium">Skilled Team</div>
              <div className="w-12 h-0.5 bg-primary/30 mx-auto mt-4 group-hover:w-20 transition-all duration-300"></div>
            </div>

            {/* Customer Satisfaction */}
            <div className="text-center group">
              <div className="inline-block mb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <div className="text-gray-600 font-medium">Customer Satisfaction</div>
              <div className="w-12 h-0.5 bg-primary/30 mx-auto mt-4 group-hover:w-20 transition-all duration-300"></div>
            </div>

            {/* Clients Worldwide */}
            <div className="text-center group">
              <div className="inline-block mb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-gray-600 font-medium">Clients Worldwide</div>
              <div className="w-12 h-0.5 bg-primary/30 mx-auto mt-4 group-hover:w-20 transition-all duration-300"></div>
            </div>
          </div>

          {/* Optional: Add a subtle background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, gray 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-24 bg-coral text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Let's collaborate to create something amazing. Explore our shop or reach out for custom solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/shop" className="pill-btn bg-white text-coral hover:bg-gray-50 shadow-xl">
              Shop Now
            </Link>
            <Link href="/contact" className="pill-btn border-2 border-white text-white hover:bg-white hover:text-coral transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section> */}
    </main>
  );
}
