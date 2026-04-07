"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// --- Helpers ---

function polarToXY(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: radius * Math.cos(rad),
    y: -radius * Math.sin(rad), // negative because y grows downward in DOM
  };
}

const ARC_START = 195;
const ARC_END = 15;
const ARC_CENTER = 90;

function getCardAngles(progress: number, numCards: number) {
  const totalArc = ARC_START - ARC_END;
  const spacing = totalArc / (numCards - 1);
  const activeFloat = progress * (numCards - 1);

  const angles = [];
  for (let i = 0; i < numCards; i++) {
    const offset = i - activeFloat;
    const angle = ARC_CENTER + offset * spacing;
    angles.push(angle);
  }
  return angles;
}

// --- Component ---

export default function FeaturesFan({ dict }: { dict: any }) {
  const d = dict.sections.features_fan;

  const CARDS = [
    {
      emoji: "🎨",
      title: d.items[0].title,
      desc: d.items[0].desc,
    },
    {
      emoji: "🔒",
      title: d.items[1].title,
      desc: d.items[1].desc,
    },
    {
      emoji: "📦",
      title: d.items[2].title,
      desc: d.items[2].desc,
    },
    {
      emoji: "🚚",
      title: d.items[3].title,
      desc: d.items[3].desc,
    },
    {
      emoji: "🖨️",
      title: d.items[4].title,
      desc: d.items[4].desc,
    },
  ];

  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const activeLabelRef = useRef<HTMLParagraphElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // -- Mobile detection --
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // -- GSAP ScrollTrigger --
  useEffect(() => {
    if (isMobile) return;

    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    if (!wrapper || !sticky) return;

    const numCards = CARDS.length;

    const getRadius = () => {
      if (window.innerWidth >= 1280) return 400;
      if (window.innerWidth >= 1024) return 340;
      return 260;
    };

    const setCardPositions = (progress: number) => {
      const angles = getCardAngles(progress, numCards);
      const radius = getRadius();
      const activeFloat = progress * (numCards - 1);
      const activeIndex = Math.round(activeFloat);

      setActiveIdx(activeIndex);

      if (activeLabelRef.current) {
        activeLabelRef.current.textContent = CARDS[activeIndex].title;
      }

      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${(progress * 100).toFixed(1)}%`;
      }

      angles.forEach((angle, i) => {
        const el = cardRefs.current[i];
        if (!el) return;

        const { x, y } = polarToXY(angle, radius);
        const cardRotation = -(angle - 90);

        const distFromActive = Math.abs(i - activeFloat);
        const scale = gsap.utils.clamp(0.7, 1.1, 1.1 - distFromActive * 0.12);
        const opacity = gsap.utils.clamp(0.3, 1, 1 - distFromActive * 0.22);
        const zIndex = Math.round(100 - distFromActive * 10);

        gsap.set(el, {
          x,
          y,
          rotation: cardRotation,
          scale,
          opacity,
          zIndex,
          transformOrigin: "center center",
        });
      });
    };

    setCardPositions(0);
    const scrollDistance = numCards * 350;

    const st = ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: `+=${scrollDistance}`,
      pin: sticky,
      pinSpacing: true,
      scrub: 1.2,
      onUpdate: (self) => {
        setCardPositions(self.progress);
      },
    });

    const handleResize = () => {
      setCardPositions(st.progress);
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      st.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  // -- Mobile scroll reveal --
  const [mobileProgress, setMobileProgress] = useState(0);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobile) return;
    const handleScroll = () => {
      const el = mobileRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, 1 - rect.bottom / (vh + rect.height)));
      setMobileProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const [radius, setRadius] = useState(340);

  useEffect(() => {
    const updateRadius = () => {
      const r = window.innerWidth >= 1280 ? 400 : window.innerWidth >= 1024 ? 340 : 260;
      setRadius(r);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const svgW = radius * 2 + 50;
  const svgH = radius + 30;

  return (
    <div ref={wrapperRef}>
      {/* Desktop Sticky Section */}
      <div
        ref={stickyRef}
        className="hidden md:flex flex-col items-center justify-center min-h-screen overflow-hidden"
        style={{ background: "#eef1f8" }}
      >
        <div className="text-center pt-10 pb-4 z-20 relative">
          <p className="section-label">{d.label}</p>
          <h2 className="section-heading">
            {d.heading_main}{" "}
            <span className="text-[#EF7F1A]">{d.heading_highlight}</span>
          </h2>
        </div>

        <div
          className="relative flex-1 w-full flex items-end justify-center"
          style={{ minHeight: `${svgH + 40}px`, paddingBottom: "0px" }}
        >
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{ width: svgW, height: svgH }}
          >
            <svg
              width={svgW}
              height={svgH}
              viewBox={`0 0 ${svgW} ${svgH}`}
              style={{ overflow: "visible" }}
            >
              <path
                d={`M 30 ${svgH} A ${radius} ${radius} 0 0 1 ${svgW - 30} ${svgH}`}
                fill="none"
                stroke="rgba(52, 95, 140, 0.18)"
                strokeWidth="18"
                strokeLinecap="round"
              />
              <path
                d={`M 30 ${svgH} A ${radius} ${radius} 0 0 1 ${svgW - 30} ${svgH}`}
                fill="none"
                stroke="#345f8c"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="8 6"
              />
              <path
                d={`M 30 ${svgH} A ${radius} ${radius} 0 0 1 ${svgW - 30} ${svgH} Z`}
                fill="url(#arcFill)"
              />
              <defs>
                <radialGradient id="arcFill" cx="50%" cy="100%" r="100%">
                  <stop offset="0%" stopColor="#345f8c" stopOpacity="1" />
                  <stop offset="100%" stopColor="#345f8c" stopOpacity="0.04" />
                </radialGradient>
              </defs>
            </svg>

            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-end pb-4"
              style={{ width: radius * 1.1, height: svgH * 0.55 }}
            >
              <p
                ref={activeLabelRef}
                className="font-bold text-center px-4 leading-tight text-[#EF7F1A]"
                style={{
                  fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)",
                  color: "#EF7F1A",
                  maxWidth: "200px",
                }}
              >
                {CARDS[activeIdx].title}
              </p>
              <div className="mt-3 w-32 h-1.5 bg-white/40 rounded-full overflow-hidden">
                <div
                  ref={progressBarRef}
                  className="h-full rounded-full transition-none"
                  style={{ background: "#EF7F1A", width: "0%" }}
                />
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-60 right-260"
            style={{ transform: "translateX(-50%)" }}
          >
            {CARDS.map((card, i) => (
              <div
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="absolute"
                style={{
                  width: "clamp(150px, 20vw, 200px)",
                  willChange: "transform, opacity",
                }}
              >
                <div
                  className="rounded-2xl p-5 flex flex-col gap-3 select-none cursor-pointer hover:scale-105 transition-all duration-300 h-80"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    boxShadow:
                      i === activeIdx
                        ? "0 24px 64px rgba(239, 127, 26, 0.25), 0 4px 16px rgba(0,0,0,0.08)"
                        : "0 4px 24px rgba(0,0,0,0.07)",
                    border:
                      i === activeIdx
                        ? "2px solid #EF7F1A"
                        : "1px solid rgba(229,231,235,0.8)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="text-4xl leading-none">{card.emoji}</div>
                  <h4 className="font-bold text-gray-900 text-sm leading-snug">
                    {card.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div
        ref={mobileRef}
        className="md:hidden py-20 px-4"
        style={{ background: "#eef1f8" }}
      >
        <div className="text-center mb-12">
          <p className="section-label">{d.label}</p>
          <h2 className="section-heading">
            {d.heading_main}{" "}
            <span className="highlight">{d.heading_highlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg mx-auto">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 bg-white shadow-md flex flex-col gap-3"
              style={{
                border: "1px solid #e5e7eb",
                opacity: Math.min(1, 0.4 + mobileProgress * 1.5),
                transform: `translateY(${Math.max(0, 30 - mobileProgress * 80)}px)`,
                transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
              }}
            >
              <div className="text-3xl">{card.emoji}</div>
              <h4 className="font-bold text-gray-900 text-sm">{card.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
