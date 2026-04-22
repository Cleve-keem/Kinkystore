"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Plus, ChevronDown, X } from "lucide-react";
import { navbarLinks } from "../constants/navbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

  const toggleMobileSubmenu = (name: string) => {
    setActiveMobileMenu(activeMobileMenu === name ? null : name);
  };

  return (
    <div className="bg-white text-black sticky top-0 z-50 shadow-md font-sans">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo Placeholder */}
          <div className="font-bold text-xl tracking-tighter">Menu</div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center h-full">
            {navbarLinks.map((link) => (
              <div key={link.name} className="group h-full flex items-center">
                <Link
                  href={link.href}
                  className="hover:text-red-600 px-4 py-2 text-[11px] uppercase font-bold transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.options && <ChevronDown size={12} />}
                </Link>

                {/* Desktop Dropdown (Mega Menu Style) */}
                {link.options && (
                  <div className="absolute top-16 left-0 w-full bg-white border-t shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="container mx-auto p-8 grid grid-cols-4 gap-8">
                      {link.options.map((sub: any) => (
                        <div key={sub.name}>
                          <h4 className="text-[13px] uppercase mb-3 border-b pb-2">
                            {sub.name}
                          </h4>
                          <ul className="space-y-2">
                            {sub.options?.map((item: any) => (
                              <li key={item.name}>
                                <Link
                                  href={sub.href || "#"}
                                  className="text-[12px] text-gray-600 hover:text-black transition-colors"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navbar Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-white z-60 overflow-y-auto transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-4 divide-y">
          {navbarLinks.map((link) => (
            <div key={link.name} className="py-3">
              <div className="flex items-center justify-between">
                <Link
                  href={link.href}
                  className="text-sm font-bold uppercase"
                  onClick={() => !link.options && setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.options && (
                  <button
                    onClick={() => toggleMobileSubmenu(link.name)}
                    className="p-2 bg-gray-50 rounded"
                  >
                    <Plus
                      size={18}
                      className={`transition-transform duration-300 ${
                        activeMobileMenu === link.name ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Mobile Nested Menu */}
              {link.options && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeMobileMenu === link.name
                      ? "max-h-500 mt-4"
                      : "max-h-0"
                  }`}
                >
                  {link.options.map((sub: any) => (
                    <div key={sub.name} className="ml-4 mb-4">
                      <p className="text-xs uppercase mb-2">{sub.name}</p>
                      <div className="flex flex-col gap-3 border-l-2 border-gray-100 pl-4">
                        {sub.options?.map((item: any) => (
                          <Link
                            key={item.name}
                            href={sub.href || "#"}
                            className="text-[13px] text-gray-700"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
