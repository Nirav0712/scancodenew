"use client";

import Image from "next/image";

const team = [
  {
    name: "Marvin McKinney",
    role: "Web Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    className: "w-[260px] h-[380px]", // 🔹 Small
  },
  {
    name: "Kathryn Murphy",
    role: "Medical Assistant",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    className: "w-[270px] h-[430px]", // 🔹 Bigger
  },
  {
    name: "Annette Black",
    role: "Dog Trainer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    className: "w-[270px] h-[480px]", // 🔹 Medium
  },
  {
    name: "Albert Kayle",
    role: "President Sales",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    className: "w-[280px] h-[530px]", // 🔹 Biggest
  },
];

export default function NodeJS() {
  return (
    <section className="py-24 bg-[#f4f7fc]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="">
          <p className="text-sm text-blue-500 font-semibold tracking-widest mb-2">{"// MEET OUR STAFF  //"}</p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our Dedicated Printing <br />
            <span className="text-[#ff6b6b] border-b-4 border-[#ff6b6b] pb-1">
              Professionals
            </span>
          </h2>

          <button className="mt-8 px-8 py-3 rounded-full text-white font-medium
          bg-linear-to-r from-purple-500 to-cyan-400 shadow-lg hover:scale-105 transition">
            View More
          </button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 items-end">
          {team.map((member, index) => (
            <div key={index} className="flex justify-center">

              <div className={`relative ${member.className} overflow-hidden
              rounded-t-[140px] rounded-b-[140px] shadow-lg group`}>

                {/* Image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Glass Name Box */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2
                w-[85%] text-center py-4 rounded-xl
                bg-white/20 backdrop-blur-md border border-white/30 rounded-b-[170px]
                transition-all duration-300 group-hover:bg-blue-500    ">

                  <h4 className="font-semibold text-white text-lg">
                    {member.name}
                  </h4>

                  <p className="text-white text-sm">
                    {member.role}
                  </p>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}