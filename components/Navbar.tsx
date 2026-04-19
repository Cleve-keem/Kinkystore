"use client";

import { Menu, Plus } from "lucide-react";
import React from "react";
import Link from "next/link";
import { navbarLinks } from "../constants/navbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white text-black sticky top-0 z-50 shadow-md">
      <div className="container mx-auto p-4">
        <nav className="w-full">
          {/* Desktop navbar */}
          <div className="hidden md:flex items-center py-1">
            {navbarLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="hover:text-red-500 cursor-pointer transition-colors px-3 py-2 border-x border-gray-100 text-[12px] uppercase last:border-r-0 first:border-l-0 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              className="w-full flex items-center justify-between cursor-pointer "
              onClick={() => setIsOpen(!isOpen)}
            >
              <h3 className="flex-1 text-left">Menu</h3>
              <Menu size={24} />
            </button>

            {/* mobile navbar `*/}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-4 py-5 mt-2 uppercase">
                  {navbarLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.href}
                      className="hover:text-red-500 cursor-pointer transition-colors text-[12px] font-medium flex items-center gap-1"
                    >
                      <span className="flex-1">{link.name}</span>
                      {link.name !== "Home" && (
                        <Plus strokeWidth={3} size={15} />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
