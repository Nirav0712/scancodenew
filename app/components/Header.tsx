"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { FaSearch, FaShoppingCart, FaUser, FaHeart, FaBars } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('hardware');

  // ✅ Proper scroll listener for Next.js + TypeScript
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "shadow-lg" : ""
        }`}
    >
      {/* TOP BAR */}
      {/* <div className="text-center text-white text-sm py-2.5 bg-linear-to-r from-[#1e3a5f] via-[#2b4b7a] to-[#345f8c] font-medium tracking-wide relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 shimmer"></div>

        <span className="relative inline-block animate-bounce-slow">✨</span>
        Free metro delivery* Sign Up for $30 off your order!
        <span className="relative inline-block animate-bounce-slow ml-1">✨</span>
      </div> */}

      {/* MAIN HEADER */}
      <div
        className={`transition-all duration-500 ${isScrolled
          ? "bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20"
          : "bg-white/40 backdrop-blur-lg border-b border-white/10"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-4">
            {/* LOGO */}
            <div className="relative shrink-0 group">
              <div className="absolute inset-0 bg-linear-to-r from-[#1e3a5f]/10 to-[#345f8c]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <Image
                src="/images/scancode-logo.webp"
                alt="PrintNest"
                width={200}
                height={80}
                className="relative hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                priority
              />
            </div>

            {/* SEARCH DESKTOP */}
            {/* <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full group">
                <input
                  type="text"
                  placeholder="Search products, services, and more..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 pl-5 pr-12 
                  text-gray-700 placeholder-gray-400 outline-none
                  focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 
                  transition-all duration-300 hover:border-gray-300
                  shadow-sm hover:shadow"
                />

                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 
                  bg-linear-to-r from-[#1e3a5f] to-[#345f8c] 
                  text-white rounded-full hover:shadow-lg 
                  transition-all duration-300 group-hover:scale-110"
                >
                  <FaSearch className="text-white text-sm" />
                </button>
              </div>
            </div> */}

            {/* NAVIGATION */}
            <nav className="hidden md:block flex-1 mx-8 pt-1">
              <div className="flex justify-center gap-10 text-[#1e3a5f] font-bold">

                <Link href="/" className="nav-link hover:underline hover:text-orange-400">
                  Home
                </Link>

                <Link href="/about-us" className="nav-link hover:underline hover:text-orange-400">
                  About Us
                </Link>

                {/* PRODUCTS MEGA MENU */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <button className="nav-link flex items-center gap-1 hover:underline hover:text-orange-400">
                    Products <ChevronDown size={16} />
                  </button>

                  {open && (
                    <div className="absolute left-1/2 -translate-x-1/2 w-[600px] bg-[#2b2b2b] text-white shadow-xl rounded-md overflow-hidden grid grid-cols-2">

                      {/* LEFT COLUMN */}
                      <div className="border-r border-gray-600 relative">

                        <Link
                          href="/products/printing-scanning-solutions"
                          onMouseEnter={() => setActiveCategory('hardware')}
                          className={`px-5 py-3 font-semibold flex justify-between items-center transition-colors cursor-pointer ${activeCategory === 'hardware' ? 'bg-[#f58220]' : 'hover:bg-[#3d3d3d]'}`}
                        >
                          <span className="flex items-center justify-between w-full">
                            Printing Scanning Solutions
                            <ChevronRight size={16} />
                          </span>
                        </Link>

                        <Link
                          href="/products/labels"
                          onMouseEnter={() => setActiveCategory('labels')}
                          className={`px-5 py-3 font-semibold flex justify-between items-center transition-colors cursor-pointer ${activeCategory === 'labels' ? 'bg-[#f58220]' : 'hover:bg-[#3d3d3d]'}`}
                        >
                          <span className="flex items-center justify-between w-full">
                            Labels <ChevronRight size={14} className="opacity-50" />
                          </span>
                        </Link>

                        <ul className="p-4 space-y-3 text-sm">
                          {/* <li
                        className="cursor-pointer"
                        onMouseEnter={() => setActiveCategory('labels')}
                      >
                        <Link href="/products/labels" className={`flex justify-between items-center w-full transition-colors ${activeCategory === 'labels' ? 'text-orange-400' : 'hover:text-orange-400'}`}>
                          Labels <ChevronRight size={14} className="opacity-50" />
                        </Link>

                      </li> */}

                          <li
                            className="cursor-pointer"
                            onMouseEnter={() => setActiveCategory('ribbons')}
                          >
                            <Link href="/products/thermal-transfer-ribbons" className={`flex justify-between items-center w-full transition-colors ${activeCategory === 'ribbons' ? 'text-orange-400' : 'hover:text-orange-400'}`}>
                              Thermal Transfer Ribbons <ChevronRight size={14} className="opacity-50" />
                            </Link>
                          </li>

                          <li
                            className="cursor-pointer"
                            onMouseEnter={() => setActiveCategory('rfid')}
                          >
                            <Link href="/products/rfid-solutions" className={`flex justify-between items-center w-full transition-colors ${activeCategory === 'rfid' ? 'text-orange-400' : 'hover:text-orange-400'}`}>
                              RFID Solutions <ChevronRight size={14} className="opacity-50" />
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* RIGHT COLUMN (FEED) */}
                      <div className="p-5 space-y-4 text-sm bg-[#2b2b2b]">
                        {activeCategory === 'hardware' && (
                          <div className="animate-fade-in space-y-4">
                            <Link href="/products/printing-scanning-solutions/barcode-label-printer" className="hover:text-orange-400 cursor-pointer block transition-colors">
                              Barcode Label Printer
                            </Link>
                            <Link href="/products/printing-scanning-solutions/print-engine" className="hover:text-orange-400 cursor-pointer block transition-colors">
                              Print Engine
                            </Link>
                            <Link href="/products/printing-scanning-solutions/barcode-scanner" className="hover:text-orange-400 cursor-pointer block transition-colors">
                              Barcode Scanner
                            </Link>
                            <Link href="/products/printing-scanning-solutions/mobile-computers" className="hover:text-orange-400 cursor-pointer block transition-colors">
                              Mobile Computers & Tablets
                            </Link>
                          </div>
                        )}

                        {activeCategory === 'labels' && (
                          <div className="animate-fade-in space-y-4">
                            <Link href="/products/labels/plain-labels" className="hover:text-orange-400 cursor-pointer block transition-colors">
                              Plain Labels
                            </Link>
                            <Link href="/products/labels/pre-printed-labels" className="hover:text-orange-400 cursor-pointer block transition-colors">
                              Pre Printed Labels
                            </Link>
                            <Link href="/products/labels/shrink-sleeves" className="hover:text-orange-400 cursor-pointer block transition-colors">
                              Shrink Sleeves
                            </Link>
                            <Link href="/products/labels/in-mold-labels" className="hover:text-orange-400 cursor-pointer block transition-colors">
                              In Mold Labels
                            </Link>
                          </div>
                        )}

                        {activeCategory === 'ribbons' && (
                          <div className="animate-fade-in flex flex-col items-center justify-center h-full text-center p-4">
                            <p className="text-gray-400 italic mb-4">
                              Explore our premium wax, wax-resin, and resin ribbons perfectly matched for your print applications.
                            </p>
                            <Link href="/products/thermal-transfer-ribbons" className="text-orange-400 hover:underline">
                              View Ribbons
                            </Link>
                          </div>
                        )}

                        {activeCategory === 'rfid' && (
                          <div className="animate-fade-in flex flex-col items-center justify-center h-full text-center p-4">
                            <p className="text-gray-400 italic mb-4">
                              Discover advanced UHF, HF, and NFC tags and encoding solutions for unparalleled asset tracking.
                            </p>
                            <Link href="/products/rfid-solutions" className="text-orange-400 hover:underline">
                              View RFID
                            </Link>
                          </div>
                        )}
                      </div>

                    </div>
                  )}
                </div>

                <Link href="/AutoIdSolution" className="nav-link hover:underline hover:text-orange-400">
                  Auto ID Solutions
                </Link>

                <Link href="/contact" className="nav-link hover:underline hover:text-orange-400">
                  Contact Us
                </Link>

              </div>
            </nav>


            {/* ICONS */}
            <div className="hidden md:flex items-center gap-3">
              {/* <button
                type="button"
                className="relative p-3 bg-gray-100 rounded-full hover:scale-110 transition-all"
              >
                <FaShoppingCart className="text-gray-600 text-xl" />
              </button>

              <button
                type="button"
                className="p-3 bg-gray-100 rounded-full hover:scale-110 transition-all"
              >
                <FaUser className="text-gray-600 text-xl" />
              </button>

              <button
                type="button"
                className="p-3 bg-gray-100 rounded-full hover:scale-110 transition-all"
              >
                <FaHeart className="text-gray-600 text-xl" />
              </button> */}
              {/* SEARCH DESKTOP */}
              <div className="hidden md:flex flex-1 max-w-xl mx-8">
                <div className="relative w-full group">
                  <input
                    type="text"
                    placeholder="Search products, services, and more..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 pl-5 pr-12 
                  text-gray-700 placeholder-gray-400 outline-none
                  focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 
                  transition-all duration-300 hover:border-gray-300
                  shadow-sm hover:shadow"
                  />

                  <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 
                  bg-linear-to-r from-[#1e3a5f] to-[#345f8c] 
                  text-white rounded-full hover:shadow-lg 
                  transition-all duration-300 group-hover:scale-110"
                  >
                    <FaSearch className="text-white text-sm" />
                  </button>
                </div>
              </div>
            </div>

            {/* MOBILE BUTTONS */}
            <div className="flex md:hidden items-center gap-3">
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2.5 bg-gray-100 rounded-full"
              >
                <FaSearch className="text-gray-600 text-lg" />
              </button>

              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 bg-gray-100 rounded-full"
              >
                <FaBars className="text-gray-600 text-lg" />
              </button>
            </div>
          </div>

          {/* MOBILE SEARCH */}
          {isSearchOpen && (
            <div className="md:hidden pb-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 pl-5 pr-12"
                />
                <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          )}
        </div>
      </div>



    </header>
  );
}