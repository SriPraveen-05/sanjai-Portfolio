"use client";

import { FOOTER_DATA } from "@/constants";

import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { MdEmail, MdPhone } from "react-icons/md";

const iconMap: { [key: string]: React.ElementType } = {
  RxGithubLogo,
  RxLinkedinLogo,
  MdEmail,
  MdPhone,
};

export default function Footer() {
  const isExternal = (url: string) => url.startsWith("http");

  return (
    <footer className="w-full bg-[#0b0b0b] text-white py-10 mt-16">
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-10 px-6">
        {FOOTER_DATA.map((section) => (
          <div key={section.title}>
            <h3 className="mb-4 text-lg font-semibold text-gray-200">{section.title}</h3>
            <ul className="space-y-3">
              {section.data.map((item) => {
                const Icon = iconMap[item.iconName];
                const external = isExternal(item.link);
                return (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                      <span>{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-xs text-gray-400 px-6">
        © {new Date().getFullYear()} Sanjai S. All rights reserved.
      </div>
    </footer>
  );
}
