"use client";

import React from "react";
import PageHero from "../components/PageHero";
import Link from "next/link";
import Image from "next/image";

const PRODUCTS = [
  { id: 1, name: "Premium Hoodie", category: "Apparel", price: "$45.00", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=500" },
  { id: 2, name: "Classic T-Shirt", category: "Apparel", price: "$25.00", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=500" },
  { id: 3, name: "Canvas Tote Bag", category: "Accessories", price: "$18.00", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=500" },
  { id: 4, name: "Matte Business Cards", category: "Stationery", price: "$30.00", image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=500" },
  { id: 5, name: "Glossy Flyers (100x)", category: "Marketing", price: "$40.00", image: "https://images.unsplash.com/photo-1541888060867-2708ee663ea1?auto=format&fit=crop&q=80&w=500" },
  { id: 6, name: "Branded Mug", category: "Accessories", price: "$15.00", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=500" },
  { id: 7, name: "Vinyl Stickers (50x)", category: "Marketing", price: "$20.00", image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=500" },
  { id: 8, name: "Custom Notebook", category: "Stationery", price: "$22.00", image: "https://images.unsplash.com/photo-1531346878377-a541e4ab0d4b?auto=format&fit=crop&q=80&w=500" },
];

const CATEGORIES = ["All", "Apparel", "Accessories", "Stationery", "Marketing"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <main className="bg-white">
      <PageHero
        title="Shop Our Collection"
        description="Browse our extensive range of customizable products. High-quality materials meet state-of-the-art printing."
        backgroundImage="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1920" // Clothing rack / retail style
      />

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar / Filters */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider">Categories</h3>
              <ul className="space-y-3">
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left w-full px-4 py-2 rounded-lg transition-colors ${
                        activeCategory === cat 
                          ? "bg-primary text-white font-semibold shadow-md" 
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
              
              {/* Promo Banner */}
              <div className="mt-10 bg-linear-to-br from-purple-600 to-blue-500 rounded-2xl p-6 text-white text-center shadow-lg">
                <h4 className="font-bold text-xl mb-2">Bulk Discount</h4>
                <p className="text-sm text-white/90 mb-4">Get 20% off on orders over 100 items.</p>
                <Link href="/contact" className="inline-block px-4 py-2 bg-white text-purple-600 rounded-full font-semibold text-sm hover:scale-105 transition-transform">
                  Contact Sales
                </Link>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="group flex flex-col cursor-pointer">
                  {/* Image Container */}
                  <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden bg-gray-100 mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="pill-btn bg-white text-gray-900 hover:bg-gray-100 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <span className="font-semibold text-gray-900">{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500">Try selecting a different category.</p>
              </div>
            )}

            {/* Pagination Placeholder */}
            {filteredProducts.length > 0 && (
              <div className="mt-16 flex justify-center gap-2">
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">&lt;</button>
                <button className="w-10 h-10 rounded-full bg-primary text-white font-semibold flex items-center justify-center shadow-md">1</button>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">2</button>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">&gt;</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
