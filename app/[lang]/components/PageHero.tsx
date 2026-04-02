"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface PageHeroProps {
  title: string;
  description?: string;
  backgroundImage: string;
  overlayOpacity?: number; // 0-1
  height?: "small" | "medium" | "large" | "full";
  withAnimation?: boolean;
  badge?: string;
  primaryButton?: {
    text: string;
    onClick: () => void;
  };
  secondaryButton?: {
    text: string;
    onClick: () => void;
  };
}

export default function PageHero({
  title,
  description,
  backgroundImage,
  overlayOpacity = 0.6,
  height = "large",
  withAnimation = true,
  badge,
  primaryButton,
  secondaryButton
}: PageHeroProps) {

  const heightClasses = {
    small: "pt-32 pb-20 lg:pt-40 lg:pb-28",
    medium: "pt-32 pb-20 lg:pt-48 lg:pb-32",
    large: "pt-32 pb-24 lg:pt-56 lg:pb-40",
    full: "min-h-screen pt-32 pb-20 lg:pt-48 lg:pb-32"
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Ensure motion props are only passed to motion components
  const containerProps = withAnimation ? {
    variants: staggerVariants,
    initial: "hidden",
    animate: "visible",
  } : {};

  const elementProps = withAnimation ? {
    variants: fadeInUpVariants,
  } : {};

  return (
    <div className="relative flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Gradient Overlay for better text readability and modern look */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
        style={{ opacity: overlayOpacity }}
      />

      {/* Optional: Animated gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* Content Container */}
      <div className={`relative z-10 max-w-5xl mx-auto px-6 ${heightClasses[height]}`}>
        {withAnimation ? (
          <motion.div
            {...containerProps}
            className="space-y-8"
          >
            {badge && (
              <motion.div
                variants={fadeInUpVariants}
                className="inline-block"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold border border-white/20 shadow-lg">
                  {badge}
                </span>
              </motion.div>
            )}

            <motion.h1
              variants={fadeInUpVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight"
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p
                variants={fadeInUpVariants}
                className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-light"
              >
                {description}
              </motion.p>
            )}

            {(primaryButton || secondaryButton) && (
              <motion.div
                variants={fadeInUpVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                {primaryButton && (
                  <button
                    onClick={primaryButton.onClick}
                    className="group relative px-8 py-4 bg-white text-gray-900 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <span className="relative z-10">{primaryButton.text}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                )}

                {secondaryButton && (
                  <button
                    onClick={secondaryButton.onClick}
                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  >
                    {secondaryButton.text}
                  </button>
                )}
              </motion.div>
            )}
          </motion.div>
        ) : (
          <div className="space-y-8">
            {badge && (
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold border border-white/20 shadow-lg">
                  {badge}
                </span>
              </div>
            )}

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight">
              {title}
            </h1>

            {description && (
              <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-light">
                {description}
              </p>
            )}

            {(primaryButton || secondaryButton) && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                {primaryButton && (
                  <button
                    onClick={primaryButton.onClick}
                    className="group relative px-8 py-4 bg-white text-gray-900 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <span className="relative z-10">{primaryButton.text}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                )}

                {secondaryButton && (
                  <button
                    onClick={secondaryButton.onClick}
                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  >
                    {secondaryButton.text}
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Animated Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm tracking-wider">SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-2 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div> */}

      {/* Decorative Bottom Wave/Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-[60px] md:h-[200px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              {/* <stop offset="100%" stopColor="white" stopOpacity="0.5" /> */}
            </linearGradient>
          </defs>
          <path
            d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,58.7C1120,53,1280,75,1360,85.3L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="url(#waveGradient)"
            className="transition-all duration-500"
          />
        </svg>
      </div>

    </div>
  );
}

