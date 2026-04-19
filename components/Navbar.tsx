"use client";

import { Menu } from "lucide-react";
import React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white text-black">
      <div className="container mx-auto p-4">
        <nav className="w-full">
          <button
            className="w-full flex items-center justify-between cursor-pointer "
            onClick={() => setIsOpen(!isOpen)}
          >
            <h3 className="flex-1 text-left">Menu</h3>
            <Menu size={24} />
          </button>
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
        </nav>
      </div>
    </div>
  );
}
