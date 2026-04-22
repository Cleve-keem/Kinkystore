"use client";

import { Menu, Plus } from "lucide-react";
import React from "react";
import Link from "next/link";
import { navbarLinks } from "../constants/navbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = React.useState<string | null>(
    null,
  );

  const toggleMobileSubmenu = (name: string) => {
    setActiveMobileMenu(activeMobileMenu === name ? null : name);
  };

  return (
    <div className="bg-white text-black sticky top-0 z-50 shadow-md">
      <div className="container mx-auto p-4">
        <nav className="w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <h3 className="flex-1 font-bold text-xl tracking-tighter">Menu</h3>
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
            {/* Mobile Toggle */}
            <button
              className="md:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={24} />
            </button>
          </div>

          <div className="md:hidden">
            {/* Mobile navbar `*/}
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
                    <div key={link.name}>
                      <div className="flex items-center justify-between">
                        <Link
                          href={link.href}
                          className="text-sm font-semibold uppercase"
                          onClick={() => !link.options && setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                        {link.options && (
                          <button
                            onClick={() => toggleMobileSubmenu(link.name)}
                            className="p-1 bg-gray-50 rounded"
                          >
                            <Plus
                              size={18}
                              className={`transition-transform duration-300 ${
                                activeMobileMenu === link.name
                                  ? "rotate-45"
                                  : ""
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
                              <p className="text-xs uppercase font-medium mb-2">
                                {sub.name}
                              </p>
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
          </div>
        </nav>
      </div>
    </div>
  );
}
