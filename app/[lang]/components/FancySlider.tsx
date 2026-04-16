"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";

// --- Styled Components ---

const SliderSection = styled.section`
  width: 100%;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: none;
  background-color: #2c3e50; /* Initial color from SLIDES[0] (Deep Navy) */
  color: white;
  font-family: "Instrument Sans", sans-serif;
  -webkit-font-smoothing: antialiased;

  clip-path: ellipse(90% 100% at 50% 0%); 
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const SliderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  flex-shrink: 0;
  z-index: 10;

  @media screen and (min-width: 768px) {
    padding: 40px 56px;
  }
`;

const SliderMenu = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: none;
  cursor: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.8);
  }

  span {
    width: 18px;
    height: 1px;
    background: rgba(255, 255, 255, 0.8);
  }
`;

const SliderLabel = styled.span`
  font-size: 11px;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const SliderBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 24px 60px;
  min-height: 0;
  position: relative;
  justify-content: flex-start; /* Stack from top on mobile */

  @media screen and (min-width: 768px) {
    padding: 0 48px 80px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 0 56px 56px;
    justify-content: flex-start;
  }
`;

const SliderLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto; /* Height determined by content on mobile */
  min-height: 0;
  position: relative;
  z-index: 10;
  justify-content: flex-start;
  margin-bottom: 24px;

  @media screen and (min-width: 1024px) {
    width: 55%;
    flex: 1;
    flex-shrink: 0;
    margin-bottom: 0;
  }
`;

const SliderTitle = styled.h2`
  font-size: clamp(36px, 10vw, 80px); /* Slightly smaller for stacked view */
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  letter-spacing: -0.02em;
  overflow: hidden; 
  position: relative;
  margin-top: 2vh; /* Reduced margin for stacked layout */
  margin-bottom: 0;
  word-wrap: break-word;
  hyphens: auto;

  @media screen and (min-width: 1024px) {
    font-size: clamp(80px, 15vw, 120px);
    margin-top: 10vh;
    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), 0 0 60px rgba(0, 0, 0, 0.3);
  }

  div {
    display: block;
    position: relative;
  }

  span {
    display: inline-block;
    will-change: transform;
  }
`;

const SliderFooter = styled.div`
  flex-shrink: 0;
  margin-top: 16px;
  margin-left: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    margin-left: 20px;
  }
`;

const SliderDescription = styled.p`
  font-size: 15px;
  letter-spacing: 1.2px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  text-transform: uppercase;
`;

const SliderLocation = styled.p`
  font-size: 15px;
  letter-spacing: 1.2px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  text-transform: uppercase;
  margin-top: 12px;
`;

const SliderRight = styled.div`
  position: relative; /* Changed from absolute to relative for stacked layout */
  width: 100%;
  height: 40vh; /* Fixed height to accommodate carousel logic on mobile */
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto; /* Enable interaction for carousel */
  z-index: 1;

  @media screen and (min-width: 1024px) {
    position: static;
    flex: 1;
    height: 100%;
    z-index: auto;
  }
`;

const SliderImages = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const SliderCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  will-change: transform;
  z-index: 100;
  color: rgba(255, 255, 255, 0.6);
  font-size: 24px;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    width: 88px;
    height: 88px;
  }
`;

// --- Data ---

// const SLIDES = [
//     {
//         name: "Print",
//         color: "#2c3e50", // Deep Navy
//         // image: "/images/slider/print.png",
//         image: "/images/herosection/post1.jpeg",
//     },
//     {
//         name: "Brand",
//         color: "#e67e22", // Vibrant Orange
//         // image: "/images/slider/brand.png",
//         image: "/images/herosection/post2.jpeg",
//     },
//     {
//         name: "Craft",
//         color: "#8e44ad", // Royal Purple
//         // image: "/images/slider/craft.png",
//         image: "/images/herosection/post3.jpeg",
//     },
//     {
//         name: "Next",
//         color: "#16a085", // Teal Green
//         // image: "/images/slider/next.png",
//         image: "/images/herosection/post4.jpeg",

//     },
//     {
//         name: "Next",
//         color: "#16a085", // Teal Green
//         // image: "/images/slider/next.png",
//         image: "/images/herosection/post5.jpeg",

//     },
//     {
//         name: "Next",
//         color: "#16a085", // Teal Green
//         // image: "/images/slider/next.png",
//         image: "/images/herosection/post6.jpeg",

//     },
// ];


// SLIDES moved inside the component to use dict prop

const AUTOPLAY_DELAY = 5000;

// --- Utilities ---

const throttle = (callback: Function, limit: number) => {
    let waiting = false;
    return function (this: any, ...args: any[]) {
        if (!waiting) {
            callback.apply(this, args);
            waiting = true;
            setTimeout(() => {
                waiting = false;
            }, limit);
        }
    };
};

const debounce = (func: Function, wait: number, immediate?: boolean) => {
    let timeout: any;
    return function (this: any, ...args: any[]) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const FancySlider: React.FC<{ dict: any }> = ({ dict }) => {
    const d = dict.sections.fancy_slider;
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    const SLIDES = [
        {
            name: d.slides[0],
            color: "#2c3e50",
            image: "/images/herosection/post1.jpeg",
        },
        {
            name: d.slides[1],
            color: "#e67e22",
            image: "/images/herosection/post2.jpeg",
        },
        {
            name: d.slides[2],
            color: "#8e44ad",
            image: "/images/herosection/post3.jpeg",
        },
        {
            name: d.slides[3],
            color: "#16a085",
            image: "/images/herosection/post4.jpeg",
        },
        {
            name: d.slides[4],
            color: "#27ae60",
            image: "/images/herosection/post5.jpeg",
        },
        {
            name: d.slides[5],
            color: "#c0392b",
            image: "/images/herosection/post6.jpeg",
        },
    ];

    const state = useRef<{
        current: number;
        animating: boolean;
        total: number;
        slideEls: { el: HTMLDivElement; step: number }[];
        currentLine: HTMLDivElement | null;
        cursorVisible: boolean;
        autoPlayId: any;
        reducedMotion: boolean;
        cursorMoveX: any;
        cursorMoveY: any;
    }>({
        current: 0,
        animating: false,
        total: SLIDES.length,
        slideEls: [],
        currentLine: null,
        cursorVisible: false,
        autoPlayId: null,
        reducedMotion: false,
        cursorMoveX: null,
        cursorMoveY: null,
    });

    const mod = (n: number) => ((n % state.current.total) + state.current.total) % state.current.total;

    const preload = () => {
        SLIDES.forEach((s) => {
            new Image().src = s.image;
        });
    };

    const setTitle = (text: string) => {
        if (!titleRef.current) return;
        titleRef.current.innerHTML = "";
        const line = document.createElement("div");
        [...text].forEach((ch) => {
            const span = document.createElement("span");
            span.textContent = ch === " " ? "\u00A0" : ch;
            line.appendChild(span);
        });
        titleRef.current.appendChild(line);
        state.current.currentLine = line;
    };

    const getSlideProps = (step: number) => {
        if (!imagesRef.current) return { x: 0, y: 0, rotation: 0, scale: 1, blur: 0, opacity: 1, zIndex: 1 };
        const h = imagesRef.current.offsetHeight;
        const absStep = Math.abs(step);
        const positions = [
            { x: -0.35, y: -0.95, rot: -30, s: 1.35, b: 16, o: 0 },
            { x: -0.18, y: -0.5, rot: -15, s: 1.15, b: 8, o: 0.55 },
            { x: 0, y: 0, rot: 0, s: 1, b: 0, o: 1 },
            { x: -0.06, y: 0.5, rot: 15, s: 0.75, b: 6, o: 0.55 },
            { x: -0.12, y: 0.95, rot: 30, s: 0.55, b: 14, o: 0 },
        ];
        const idx = Math.max(0, Math.min(4, step + 2));
        const p = positions[idx];

        return {
            x: p.x * h,
            y: p.y * h,
            rotation: p.rot,
            scale: p.s,
            blur: p.b,
            opacity: p.o,
            zIndex: absStep === 0 ? 3 : absStep === 1 ? 2 : 1,
        };
    };

    const positionSlide = (slide: HTMLDivElement, step: number) => {
        const props = getSlideProps(step);
        gsap.set(slide, {
            xPercent: -50,
            yPercent: -50,
            x: props.x,
            y: props.y,
            rotation: props.rotation,
            scale: props.scale,
            opacity: props.opacity,
            filter: `blur(${props.blur}px)`,
            zIndex: props.zIndex,
        });
    };

    const makeSlide = (idx: number) => {
        const div = document.createElement("div");
        div.className = "slider__slide";
        // Add essential styles that were in CSS but tied to class
        div.style.position = "absolute";
        div.style.top = "50%";
        div.style.left = "50%";
        const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
        const isTablet = typeof window !== "undefined" && window.innerWidth >= 768;
        div.style.width = isDesktop ? "68%" : isTablet ? "60%" : "55%";
        div.style.aspectRatio = "1.4";
        div.style.overflow = "hidden";
        div.style.willChange = "transform, filter, opacity";

        const img = document.createElement("img");
        img.src = SLIDES[idx].image;
        img.alt = SLIDES[idx].name;
        img.width = 600;
        img.height = 420;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "contain";
        img.style.filter = "brightness(0.9)";

        div.appendChild(img);
        return div;
    };

    const buildCarousel = () => {
        if (!imagesRef.current || imagesRef.current.offsetHeight === 0) return;
        imagesRef.current.innerHTML = "";
        state.current.slideEls = [];

        for (let step = -1; step <= 1; step++) {
            const idx = mod(state.current.current + step);
            const slide = makeSlide(idx);
            imagesRef.current.appendChild(slide);
            positionSlide(slide, step);
            state.current.slideEls.push({ el: slide, step: step });
        }
    };

    const animateTitle = (newText: string, direction: "next" | "prev") => {
        if (!titleRef.current) return gsap.timeline();
        const h = titleRef.current.offsetHeight;
        const dir = direction === "next" ? 1 : -1;
        const oldLine = state.current.currentLine;
        if (!oldLine) return gsap.timeline();

        const oldChars = Array.from(oldLine.querySelectorAll("span"));
        oldLine.style.cssText = "position:absolute;top:0;left:0;width:100%";

        const newLine = document.createElement("div");
        newLine.style.cssText = "position:absolute;top:0;left:0;width:100%";
        [...newText].forEach((ch) => {
            const span = document.createElement("span");
            span.textContent = ch === " " ? "\u00A0" : ch;
            newLine.appendChild(span);
        });
        titleRef.current.appendChild(newLine);
        titleRef.current.style.height = h + "px";

        const newChars = Array.from(newLine.querySelectorAll("span"));
        gsap.set(newChars, { y: h * dir });

        const duration = state.current.reducedMotion ? 0.01 : 1;
        const stagger = state.current.reducedMotion ? 0 : 0.04;

        const tl = gsap.timeline({
            onComplete: () => {
                oldLine.remove();
                newLine.style.cssText = "";
                gsap.set(newChars, { clearProps: "all" });
                if (titleRef.current) titleRef.current.style.height = "";
                state.current.currentLine = newLine;
            },
        });

        tl.to(
            oldChars,
            {
                y: -h * dir,
                stagger: stagger,
                duration: duration,
                ease: "expo.inOut",
            },
            0
        );

        tl.to(
            newChars,
            {
                y: 0,
                stagger: stagger,
                duration: duration,
                ease: "expo.inOut",
            },
            0
        );

        return tl;
    };

    const animateCarousel = (direction: "next" | "prev") => {
        if (!imagesRef.current || imagesRef.current.offsetHeight === 0) return gsap.timeline();

        const shift = direction === "next" ? -1 : 1;
        const enterStep = direction === "next" ? 2 : -2;
        const newIdx = direction === "next" ? mod(state.current.current + 2) : mod(state.current.current - 2);

        const newSlide = makeSlide(newIdx);
        imagesRef.current.appendChild(newSlide);
        positionSlide(newSlide, enterStep);
        state.current.slideEls.push({ el: newSlide, step: enterStep });

        state.current.slideEls.forEach((s) => {
            s.step += shift;
        });

        const duration = state.current.reducedMotion ? 0.01 : 1.2;

        const tl = gsap.timeline({
            onComplete: () => {
                state.current.slideEls = state.current.slideEls.filter((s) => {
                    if (Math.abs(s.step) >= 2) {
                        s.el.remove();
                        return false;
                    }
                    return true;
                });
            },
        });

        state.current.slideEls.forEach((s) => {
            const props = getSlideProps(s.step);
            s.el.style.zIndex = props.zIndex.toString();

            tl.to(
                s.el,
                {
                    x: props.x,
                    y: props.y,
                    rotation: props.rotation,
                    scale: props.scale,
                    opacity: props.opacity,
                    filter: `blur(${props.blur}px)`,
                    duration: duration,
                    ease: "power3.inOut",
                },
                0
            );
        });

        return tl;
    };

    const go = (direction: "next" | "prev") => {
        if (state.current.animating) return;
        state.current.animating = true;
        startAutoPlay();

        const nextIdx = direction === "next" ? mod(state.current.current + 1) : mod(state.current.current - 1);

        const master = gsap.timeline({
            onComplete: () => {
                state.current.current = nextIdx;
                state.current.animating = false;
            },
        });

        master.to(
            containerRef.current,
            {
                backgroundColor: SLIDES[nextIdx].color,
                duration: state.current.reducedMotion ? 0.01 : 1.2,
                ease: "power2.inOut",
            },
            0
        );

        master.add(animateTitle(SLIDES[nextIdx].name, direction), 0);
        master.add(animateCarousel(direction), 0);
    };

    const startAutoPlay = () => {
        stopAutoPlay();
        state.current.autoPlayId = setInterval(() => {
            if (!state.current.animating) go("next");
        }, AUTOPLAY_DELAY);
    };

    const stopAutoPlay = () => {
        if (state.current.autoPlayId) {
            clearInterval(state.current.autoPlayId);
            state.current.autoPlayId = null;
        }
    };

    useEffect(() => {
        state.current.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        preload();
        setTitle(SLIDES[0].name);
        buildCarousel();

        if (cursorRef.current) {
            gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50, opacity: 0 });
            state.current.cursorMoveX = gsap.quickTo(cursorRef.current, "x", { duration: 0.5, ease: "power3" });
            state.current.cursorMoveY = gsap.quickTo(cursorRef.current, "y", { duration: 0.5, ease: "power3" });
        }

        const onWheel = throttle((e: WheelEvent) => {
            if (state.current.animating) return;
            go(e.deltaY > 0 ? "next" : "prev");
        }, 1800);

        let touchStartY = 0;
        const onTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };

        const onTouchEnd = throttle((e: TouchEvent) => {
            if (state.current.animating) return;
            const diff = touchStartY - e.changedTouches[0].clientY;
            if (Math.abs(diff) < 40) return;
            go(diff > 0 ? "next" : "prev");
        }, 1800);

        const onKeyDown = (e: KeyboardEvent) => {
            if (state.current.animating) return;
            if (e.key === "ArrowDown" || e.key === "ArrowRight") go("next");
            if (e.key === "ArrowUp" || e.key === "ArrowLeft") go("prev");
        };

        const onResize = debounce(() => {
            if (!state.current.animating && imagesRef.current && imagesRef.current.offsetHeight > 0) {
                state.current.slideEls.forEach((s) => {
                    positionSlide(s.el, s.step);
                });
            }
        }, 300);

        const onVisibilityChange = () => {
            if (document.visibilityState === "hidden") {
                state.current.animating = false;
                stopAutoPlay();
            } else {
                startAutoPlay();
            }
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!state.current.cursorVisible) {
                gsap.to(cursorRef.current, { opacity: 1, duration: 0.3 });
                state.current.cursorVisible = true;
            }
            if (state.current.cursorMoveX) state.current.cursorMoveX(e.clientX);
            if (state.current.cursorMoveY) state.current.cursorMoveY(e.clientY);
        };

        const onMouseLeave = () => {
            gsap.to(cursorRef.current, { opacity: 0, duration: 0.3 });
            state.current.cursorVisible = false;
        };

        window.addEventListener("wheel", onWheel, { passive: true });
        window.addEventListener("touchstart", onTouchStart, { passive: true });
        window.addEventListener("touchend", onTouchEnd, { passive: true });
        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("resize", onResize);
        document.addEventListener("visibilitychange", onVisibilityChange);

        const container = containerRef.current;
        if (container) {
            container.addEventListener("mousemove", onMouseMove);
            container.addEventListener("mouseleave", onMouseLeave);
        }

        startAutoPlay();

        return () => {
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchend", onTouchEnd);
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("resize", onResize);
            document.removeEventListener("visibilitychange", onVisibilityChange);
            if (container) {
                container.removeEventListener("mousemove", onMouseMove);
                container.removeEventListener("mouseleave", onMouseLeave);
            }
            stopAutoPlay();
        };
    }, []);

    return (
        <>
            <SliderSection ref={containerRef} className="slider mb-20">
                <SliderHeader className="slider__header">
                    <SliderMenu className="slider__menu" aria-label="Open menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </SliderMenu>
                    <SliderLabel className="slider__label">SCAN-CODE '26 — NR.1</SliderLabel>
                </SliderHeader>

                <SliderBody className="slider__body">
                    <SliderLeft className="slider__left">
                        <SliderTitle ref={titleRef} className="slider__title" aria-live="polite"></SliderTitle>
                        <SliderFooter className="slider__footer">
                            <div className="slider__info">
                                <SliderDescription className="slider__description">
                                    {d.description}
                                </SliderDescription>
                                <SliderLocation className="slider__location">
                                    {d.location}
                                </SliderLocation>
                            </div>
                        </SliderFooter>
                    </SliderLeft>
                    <SliderRight className="slider__right">
                        <SliderImages ref={imagesRef} className="slider__images"></SliderImages>
                    </SliderRight>
                </SliderBody>

                <SliderCursor ref={cursorRef} className="slider__cursor">
                    +
                </SliderCursor>
            </SliderSection>

            {/* Feature Box overlapping the curved transition */}
            <div className="absolute -bottom-10 md:bottom-10 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-5xl translate-y-1/2 z-20">
                <div className="rounded-[30px] md:rounded-[40px] p-6 lg:p-12 flex flex-col sm:flex-row gap-6 md:gap-10 items-center justify-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl bg-white/20 border border-white/30 transition-all duration-500 hover:bg-white/25">

                    {/* Feature 1 */}
                    <div className="flex-1 flex-col items-center sm:items-start text-center sm:text-left">
                        <div className="w-16 h-16 bg-[#1e3a5f]/10 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-inner border border-[#1e3a5f]/20">
                            🏷️
                        </div>
                        <h3 className="text-[#1e3a5f] text-2xl font-bold mb-3">
                            {d.features[0].title}
                        </h3>
                        <p className="text-[#1e3a5f]/70 text-base leading-relaxed max-w-xs font-medium">
                            {d.features[0].desc}
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="hidden sm:block w-px h-32 bg-[#1e3a5f]/10 self-center" />

                    {/* Feature 2 */}
                    <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                        <div className="w-16 h-16 bg-[#1e3a5f]/10 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-inner border border-[#1e3a5f]/20">
                            ⚡
                        </div>
                        <h3 className="text-[#1e3a5f] text-2xl font-bold mb-3">
                            {d.features[1].title}
                        </h3>
                        <p className="text-[#1e3a5f]/70 text-base leading-relaxed max-w-xs font-medium">
                            {d.features[1].desc}
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default FancySlider;
