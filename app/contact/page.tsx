"use client";

import React from "react";
import PageHero from "../components/PageHero";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Get In Touch"
        description="Whether you have a question about our printing services, need a custom quote, or want to discuss a partnership, our team is ready to help."
        backgroundImage="/contact.png" // Contact/Support themed
      />

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Information (Left Column) */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <p className="section-label">{"// CONTACT US  //"}</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's start a <span className="highlight">conversation</span></h2>
              <p className="text-gray-600 leading-relaxed text-lg">
               Fill out the form with your requirements, and our label printing experts will get back to you within 24 hours. Whether you need custom labels, barcode solutions, or bulk printing, we're here to deliver high-quality results tailored to your business needs.
              </p>
            </div>

            <div className="space-y-8">
              {/* Info Block 1 */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-section-bg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary text-xl shrink-0 shadow-sm">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-lg">Visit Us</h4>
                  <p className="text-gray-600">123 Print Avenue, Design District<br />New York, NY 10001</p>
                </div>
              </div>

              {/* Info Block 2 */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-section-bg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary text-xl shrink-0 shadow-sm">
                  📞
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-lg">Call Us</h4>
                  <p className="text-gray-600">+91 99044 61888<br />+91 99245 61888 <br />+91 99048 85999</p>
                </div>
              </div>

              {/* Info Block 3 */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-section-bg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary text-xl shrink-0 shadow-sm">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-lg">Email Us</h4>
                  <p className="text-gray-600">hello@printnest.com<br />support@printnest.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium placeholder-gray-400"
                      placeholder="Jane"
                    />
                  </div>
                  
                  {/* Last Name */}
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium placeholder-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium placeholder-gray-400"
                    placeholder="jane@company.com"
                  />
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <label htmlFor="inquiryType" className="text-sm font-semibold text-gray-700">How can we help?</label>
                  <select 
                    id="inquiryType" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an option...</option>
                    <option value="quote">Request a Custom Quote</option>
                    <option value="support">Customer Support</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium placeholder-gray-400 resize-none"
                    placeholder="Tell us about your project, timeline, and requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="button" 
                  className="w-full pill-btn pill-btn-dark justify-center text-lg mt-4 py-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
