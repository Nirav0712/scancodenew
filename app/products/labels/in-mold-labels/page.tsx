"use client";

import React from "react";
import PageHero from "../../../components/PageHero";
import Link from "next/link";
import Image from "next/image";

export default function InMoldLabelsPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="In Mold Labels (IML)"
        description="Fuse your branding directly into the plastic container during the molding process for uncompromised durability and a zero-edge look."
        backgroundImage="https://images.unsplash.com/photo-1662998687258-7ca8b6cd8d2b?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse justify-between">

          <div>
            <p className="section-label">{"// SEAMLESS INTEGRATION  //"}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Become One with the Container</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              In-Mold Labeling (IML) is a revolutionary process where a pre-printed polypropylene label is placed into the packaging mold. When the plastic is injected, the label fuses with the container, becoming an integral part of the wall.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                <div className="w-10 h-10 bg-coral/10 text-coral rounded-full flex items-center justify-center shrink-0">💪</div>
                <div>
                  <h4 className="font-bold text-gray-900">Extreme Durability</h4>
                  <p className="text-gray-500 text-sm">The label cannot scratch, peel, blister, or fade. It easily withstands deep freezing and microwaves.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">♻️</div>
                <div>
                  <h4 className="font-bold text-gray-900">100% Recyclable</h4>
                  <p className="text-gray-500 text-sm">Because the label and container are made from the same plastic material, the entire bucket/tub can be recycled without separation.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0">🎨</div>
                <div>
                  <h4 className="font-bold text-gray-900">High-Resolution Graphics</h4>
                  <p className="text-gray-500 text-sm">Achieve exceptional print quality and colors that make ice cream tubs, butter containers, and paint buckets pop.</p>
                </div>
              </li>
            </ul>

            <Link href="/contact" className="pill-btn pill-btn-dark shadow-xl hover:-translate-y-1 inline-flex items-center gap-2">
              Explore IML Options
            </Link>
          </div>

          <div className="relative aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800"
              alt="Plastic Containers"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>
    </main>
  );
}
