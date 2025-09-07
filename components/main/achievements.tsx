"use client";

import { ACHIEVEMENTS } from "@/constants";
import Image from "next/image";

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12 text-center">
          Achievements
        </h2>

        <ol className="relative border-s border-[#2A0E61] space-y-10">
          {ACHIEVEMENTS.map((item) => (
            <li key={item.title} className="ms-6">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#2A0E61] ring-2 ring-[#5b2aa6]" />
              <div className="rounded-lg border border-[#2A0E61] bg-[#0c0918]/60 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <span className="text-sm text-gray-400">{item.date}</span>
                </div>
                <p className="mt-3 text-gray-300 leading-relaxed">{item.description}</p>
                {item.image ? (
                  <div className="mt-4 overflow-hidden rounded-md border border-[#2A0E61]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1200}
                      height={675}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};


