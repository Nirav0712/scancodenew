"use client";

import React, { useState } from "react";
import PageHero from "../components/PageHero";

// Social Link Component
const SocialLink = ({ href, icon, bgColor, iconColor = "#fff" }: { href: string; icon?: string; bgColor: string; iconColor?: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
    style={{ background: bgColor }}
  >
    <i className={`${icon} text-lg`} style={{ color: iconColor }}></i>
  </a>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Construct WhatsApp message
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919904461888?text=${whatsappMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    setLoading(false);
  };

  return (
    <main className="bg-white">
      <PageHero
        title="Get In Touch"
        description="Whether you have a question about our printing services, need a custom quote, or want to discuss a partnership, our team is ready to help."
        backgroundImage="/contact.png" // Contact/Support themed
      />

      <section className="py-10 md:py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">

            {/* LEFT SIDE */}
            <div className="space-y-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#EF7F1A] mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <i className="fas fa-phone text-primary"></i>
                  </div>

                  <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg text-sm text-1xl">
                        <b>Regd. Office</b>
                        <div className="mt-1 flex flex-col">
                          <a href="tel:+919904461888"> +91 9427061888</a>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <i className="fas fa-map-marker-alt text-primary"></i>
                        </div>
                        <div className="text-sm sm:text-base text-gray-600 text-2xl">
                          <b>Regd. Office:</b><br />
                          Gala No. C-2, Dungra Park, Plot No. 28, Survey No. 376/1/P3/P5, Mahavir Nagar,<br />
                          Nr. Mazda Colour Ltd., 100 Shed Area Gidc, Vapi, Gujarat-396195.<br /><br />

                          {/* <b>Manufacturing Unit:</b><br />
                          Plot No. 822/1, Block No. 2024/1, Rakanpur Gam Road, Nr. Leo Polymer,<br />
                          Rakanpur, Tal. Kalol, Dist. Gandhinagar, Gujarat-382721. */}
                        </div>
                      </div>



                      {/* <div className="bg-gray-50 p-3 rounded-lg text-sm text-1xl">
                        <b>Manufacturing Unit</b>
                        <div className="mt-1 flex flex-col">
                          <a href="tel:+919924561888"> +91 99245 61888</a>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base">
                    <b> Email</b><br />
                    <a href="mailto:contact@scancodeautoid" className="hover:text-primary transition-colors">
                      contact@scancodeautoid.com
                    </a>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-2xl">
                    Follow Us
                  </h3>
                  <div className="space-y-4 w-full">
                    <div>
                      <span className="text-[#EF7F1A] font-medium mb-2 block text-2xl">Our Social Channels</span>
                      <div className="flex justify-start gap-3">
                        <SocialLink href="" icon="fab fa-facebook-f" bgColor="#1877F2" />
                        <SocialLink href="www.youtube.com/@ScancodeAutoIDTechnology" icon="fab fa-youtube" bgColor="#FF0000" />
                        <SocialLink href="https://www.instagram.com/scancodeautoid/" icon="fab fa-instagram" bgColor="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-6 md:p-10">

                <h2 className="text-3xl sm:text-3xl font-bold text-[#EF7F1A] mb-8">
                  Send Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 text-1xl">Full Name</label>
                      <input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 text-1xl">Email Address</label>
                      <input
                        name="email"
                        type="email"
                        placeholder="jane@company.com"
                        value={formData.email}
















































































































































































































































































































































































































































































































































































































































































































                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 text-1xl">Phone Number</label>
                      <input
                        name="phone"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 text-1xl">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                      >
                        <option value="">Select Subject</option>
                        {/* <option value="quote">Request a Quote</option>
                        <option value="support">Customer Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other Inquiry</option> */}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 text-1xl">Your Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#EF7F1A] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#EF7F1A] shadow-lg shadow-[#EF7F1A]/20 transition-all active:scale-[0.98] disabled:opacity-70"
                  >
                    {loading ? "Preparing..." : "Send Message via WhatsApp"}
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
