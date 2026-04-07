"use client";
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
  }
`;

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

const cardIcons = [Award, CheckCircle, Printer, Zap];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AboutUsClient({ dict }: { dict: any }) {
  const p = dict?.pages?.about_us ?? {};
  const hero = p.hero ?? {};
  const story = p.story ?? {};
  const whyChoose = p.why_choose ?? {};
  const manufacturing = p.manufacturing ?? {};
  const stats = p.stats ?? {};

  const statIcons = [
    <svg key="time" className="w-8 h-8 text-[#EF7F1A] group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    <svg key="team" className="w-8 h-8 text-[#EF7F1A] group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    <svg key="satisfaction" className="w-8 h-8 text-[#EF7F1A] group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>,
    <svg key="globe" className="w-8 h-8 text-[#EF7F1A] group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <PageHero
        title={hero.title ?? "About Us"}
        description={hero.description ?? ""}
        backgroundImage="/aboutus.png"
      />

      {/* Origin Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <div className="relative">
            <div className="relative z-10 w-full h-100 lg:h-125 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/aboutpage.png" alt="Our Printing Facility" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-4 lg:-right-10 z-20 w-48 h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image src="/images/about1.jpeg" alt="Creative Process" fill className="object-cover" />
            </div>
          </div>

          {/* Right: Text Content */}
          <div>
            <p className="section-label">{story.label ?? "// OUR STORY //"}</p>
            <h2 className="section-heading mb-6">
              {story.heading_main ?? "Transforming Products"}
              <span className="text-[#EF7F1A]">{story.heading_highlight ? ` ${story.heading_highlight}` : " Through Premium Label Printing"}</span>
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>{story.para1}</p>
              <p>{story.para2}</p>
            </div>
          </div>
        </div>
      </section>

      <StyledWrapper>
        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <p className="text-4xl font-bold text-gray-800 leading-relaxed mb-6 text-center">
              {whyChoose.heading_main ?? "Why Choose Us"}
              <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default">
                {" "}{whyChoose.heading_highlight ?? "Scancode Auto ID"}
                <span className="absolute -bottom-1 left-0 ml-3 w-full h-3 bg-[#EF7F1A]/20 z-0 transform" />
              </span>?
            </p>
            <p className="text-gray-700 text-lg text-center leading-relaxed mb-10">
              {whyChoose.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 max-w-6xl mx-auto px-8">
              {(whyChoose.cards ?? []).map((card: { title: string; desc: string }, i: number) => {
                const Icon = cardIcons[i] ?? Award;
                return (
                  <div key={i} className="card">
                    <div className="group transition-all duration-300 p-8 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-4 rounded-full bg-blue-100 text-[#EF7F1A] transition duration-300">
                          <Icon className="w-8 h-8" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-all duration-300 transform group-hover:scale-90 group-hover:text-[#EF7F1A]">
                        {card.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </StyledWrapper>

      {/* Advanced Manufacturing */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-9xl mx-auto">
          <div className="md:p-12 text-center">
            <p className="text-4xl font-bold text-gray-800 leading-relaxed mb-6 text-center">
              {manufacturing.heading_main ?? "Driving Innovation through Reliable"}
              <span className="relative z-10 text-[#EF7F1A] hover:text-gray-800 transition-colors duration-300 cursor-default">
                {" "}{manufacturing.heading_highlight ?? "Advanced Manufacturing"}
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-[#EF7F1A]/20 z-0 transform" />
              </span>
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{manufacturing.para1}</p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{manufacturing.para2}</p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{manufacturing.para3}</p>
            <p className="text-gray-700 text-lg leading-relaxed">{manufacturing.para4}</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-label text-primary font-semibold mb-2">{stats.label ?? "// OUR IMPACT //"}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {stats.heading_main ?? "Our Story in"} <span className="highlight">{stats.heading_highlight ?? "Numbers"}</span>
            </h2>
            <p className="text-gray-600 text-lg">{stats.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(stats.items ?? []).map((item: { end: number; suffix: string; label: string }, i: number) => (
              <div key={i} className="text-center group">
                <div className="inline-block mb-4">
                  <div className="w-20 h-20 bg-[#EF7F1A]/20 rounded-2xl flex items-center justify-center group-hover:bg-[#EF7F1A]/70 group-hover:scale-110 transition-all duration-300">
                    {statIcons[i]}
                  </div>
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={item.end} suffix={item.suffix} />
                </div>
                <div className="text-gray-600 font-medium">{item.label}</div>
                <div className="w-12 h-0.5 bg-[#EF7F1A]/50 mx-auto mt-4 group-hover:w-20 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, gray 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </section>
    </main>
  );
}
