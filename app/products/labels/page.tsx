"use client";

import React from "react";
import PageHero from "../../components/PageHero";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


const PRODUCT_CATEGORIES = [
  {
    id: "plain-labels",
    title: "Plain Labels",
    description: "Plain labels are versatile blank label stocks designed for flexible and on-demand printing. They are compatible with thermal transfer, direct thermal, and laser printers, making them ideal for various industries. These labels provide a reliable solution for businesses that require customizable information such as barcodes, pricing, and product details.making them ideal for various industries while providing a reliable solution for customizable information such as barcodes, pricing, and product details.",
    image: "/images/lables/coated-chromo-labels.webp",
    // hoverImage: "/barcode-printer-hover.png",
    features: ["Multiple material options", "Various adhesive strengths", "Sizes from 1\" x 1\" to 8\" x 10\""],
    buttonText: "Shop Plain Labels",
    pagePath: "/products/labels/plain-labels"
  },
  {
    id: "pre-printed-labels",
    title: "Pre Printed Labels",
    description: "Pre-printed labels are customized with your brand logo, design, and fixed information, ensuring consistency and professional presentation. They are ready to use without requiring additional printing, saving time and reducing operational effort. These labels are ideal for businesses looking to maintain brand identity while improving efficiency.professional presentation, and they are ready to use without requiring additional printing, helping save time and reduce operational effort while maintaining strong brand identity.",
    image: "/images/lables/preprintedlabel.jpeg",
    features: ["Full color printing", "Custom die-cut shapes", "Sequential numbering available"],
    buttonText: "View Pre Printed Labels",
    pagePath: "/products/labels/pre-printed-labels"
  },
  {
    id: "shrink-sleeves",
    title: "Shrink Sleeves",
    description: "Shrink sleeves provide a high-impact 360-degree labeling solution that covers the entire surface of a product. They are perfect for enhancing product visibility and branding on bottles, containers, and uniquely shaped packaging. With vibrant print quality and durability, shrink sleeves help products stand out on shelves.making them perfect for enhancing branding and visibility on bottles, containers, and uniquely shaped packaging with vibrant print quality and durability.",
    image: "/images/lables/shrink-sleeve.webp",
    features: ["360-degree branding", "Tamper-evident options", "Available in PVC, PET, and OPS"],
    buttonText: "Explore Shrink Sleeves",
    pagePath: "/products/labels/shrink-sleeves"
  },
  {
    id: "in-mold-labels",
    title: "In Mold Labels",
    description: "In-mold labels are integrated directly into the product during the manufacturing process, becoming a permanent part of the container. This results in highly durable, scratch-resistant, and visually appealing labels. They are ideal for industries that require long-lasting labeling with superior print quality and resistance to wear.permanent part of the container, which results in highly durable, scratch-resistant, and visually appealing labels ideal for long-lasting and high-quality applications.",
    image: "/images/lables/inmold-labels.webp",
    features: ["Seamless integration", "Fade and scratch resistant", "Single or multi-color printing"],
    buttonText: "View In Mold Labels",
    pagePath: "/products/labels/in-mold-labels"
  }
];

export default function ProductsPage() {
  const router = useRouter();

  const handleCategoryClick = (pagePath: string, categoryTitle: string) => {
    // Navigate to the existing page
    router.push(pagePath);

    // Optional: Track analytics
    console.log(`Navigating to ${categoryTitle} page at ${pagePath}`);
  };

  return (
    <main className="bg-white">
      <PageHero
        title="Labels"
         description="Premium wax, wax-resin, and resin ribbons engineered to provide crisp, dark, and long-lasting prints on a variety of label materials."
        backgroundImage="/images/lable.png"
      />
      {/* <PageHero
        title="Welcome to Our Platform"
        description="Experience the future of digital innovation with our cutting-edge solutions designed to transform your business."
        backgroundImage="/images/hero-bg.jpg"
        badge="✨ New Release"
        overlayOpacity={0.5}
        height="large"
        withAnimation={true}
        primaryButton={{
          text: "Get Started",
          onClick: () => console.log("Get started clicked")
        }}
        secondaryButton={{
          text: "Learn More",
          onClick: () => console.log("Learn more clicked")
        }}
      /> */}

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
             <div className="text-center max-w-4xl mx-auto mb-16">
               <h2 className="text-3 md:text-2xl font-bold text-gray-900 mb-8">
               Durable and Customizable <span className="text-[#EF7F1A]">Labels </span> for All Industries
               </h2>
               <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-5xl mx-auto px-4 text-2xl ">
               At the material level, we collaborate with world-renowned suppliers like 
Avery Dennison and UPM Raflatac to ensure quality substrates across 
every application. Our range includes Chromo paper for its economic 
value and reliable printability; polypropylene(PP) and polyethylene(PE) 
f
ilms in white, clear, and silver for both durability and elegance; PET films 
for their resistance to chemicals and heat; and ultra-durable synthetic 
f
ilms suited for industrial applications. For high-security needs, we offer 
tamper-evident, void, and ultra-destructive labels, as well as specialty 
materials engineered for cryogenic, high-temperature, and chemical
exposed environments.
               </p>
               <div className="mt-12 h-[px] w-48 bg-gray-200 mx-auto"></div>
             </div>
     
             <div className="space-y-16 lg:space-y-24">
               {PRODUCT_CATEGORIES.map((category, index) => (
                 <div
                   key={category.id}
                   id={category.id}
                   className={`flex flex-col gap-12 lg:gap-20 items-center scroll-mt-32 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                 >
                   {/* Image Side - Clickable to navigate to the page */}
                   <div className="w-full lg:w-1/2">
                     <div 
                       onClick={() => handleCategoryClick(category.pagePath, category.title)}
                       className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                     >
                       <Image
                         src={category.image}
                         alt={category.title}
                         fill
                         className={`object-cover ${(category as any).hoverImage ? 'group-hover:opacity-0' : 'group-hover:scale-105'} transition-all duration-700`}
                       />
                       {(category as any).hoverImage && (
                         <Image
                           src={(category as any).hoverImage}
                           alt={`${category.title} Hover`}
                           fill
                           className="object-cover opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-105 transition-all duration-700"
                         />
                       )}
                       
                       {/* Hover Overlay with "View Details" */}
                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                         <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 whitespace-nowrap">
                           Click to View {category.title}
                         </span>
                       </div>
                     </div>
                   </div>
     
                   {/* Text Side */}
                   <div className="w-full lg:w-1/2 lg:px-8 text-center flex flex-col items-center">
                     
                     {/* Category Title with Link */}
                     <Link 
                       href={category.pagePath}
                       className="group inline-block"
                     >
                       <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 hover:text-gray-700 transition-colors relative inline-block pb-2">
                         {category.title}
                         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                         <span className="inline-block ml-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 transform">
                           <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                           </svg>
                         </span>
                       </h3>
                     </Link>
                     
                     <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                       {category.description}
                     </p>
     
                     {/* Subtle finishing spacer for each card */}
                     <div className="h-8"></div>
                   </div>
                 </div>
               ))}
             </div>
           </section>

      {/* Footer CTA overlay for this specific page */}
      <section className="bg-section-bg2 py-20 mt-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Need a fully integrated system?</h2>
          <p className="text-xl text-gray-600 mb-10">Our solutions engineers can build a custom package combining hardware, software, and consumables perfectly tailored to your workflow.</p>
          <Link href="/solutions" className="pill-btn pill-btn-gradient text-lg px-8 py-4">Explore Custom Solutions</Link>
        </div>
      </section>
    </main>
  );
}