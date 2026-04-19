"use client";

import { Menu } from "lucide-react";
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
          <div className="hidden md:grid grid-cols-5 gap-4 py-4 divide-x divide-grey-200">
            {navbarLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="hover:text-red-500 cursor-pointer transition-colors"
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
                <ul className="flex flex-col gap-4 py-4">
                  {navbarLinks.map((link) => (
                    <li
                      key={link.href}
                      className="hover:text-red-500 cursor-pointer transition-colors"
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hover:text-red-500 cursor-pointer transition-colors">
              About
            </div>
            <div className="hover:text-red-500 cursor-pointer transition-colors">
              Services
            </div>
            <div className="hover:text-red-500 cursor-pointer transition-colors">
              Contact
            </div>
            <div className="hover:text-red-500 cursor-pointer transition-colors">
              Blog
            </div>
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
                <ul className="flex flex-col gap-4 py-4">
                  <li className="hover:text-red-500 cursor-pointer transition-colors">
                    Home
                  </li>
                  <li className="hover:text-red-500 cursor-pointer transition-colors">
                    About
                  </li>
                  <li className="hover:text-red-500 cursor-pointer transition-colors">
                    Services
                  </li>
                  <li className="hover:text-red-500 cursor-pointer transition-colors">
                    Contact
                  </li>
                  <li className="hover:text-red-500 cursor-pointer transition-colors">
                    Blog
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
