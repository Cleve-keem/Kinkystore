"use client";

import { Menu, Plus, X, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { navbarLinks } from "../constants/navbar";

const NavNode = ({
  item,
  depth = 0,
  closeMobile,
}: {
  item: any;
  depth?: number;
  closeMobile: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasOptions = item.options && item.options.length > 0;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-2 border-b border-gray-50">
        <Link
          href={item.href || "#"}
          onClick={() => !hasOptions && closeMobile()}
          className={`${
            depth === 0
              ? "font-bold text-sm"
              : "font-medium text-[13px] text-gray-600"
          } uppercase tracking-wide`}
        >
          {item.name}
        </Link>

        {hasOptions && (
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded">
            <Plus
              size={16}
              className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
            />
          </button>
        )}
      </div>

      {hasOptions && (
        <div
          className={`overflow-hidden transition-all duration-300 pl-4 border-l-2 border-gray-100 ${
            isOpen ? "max-h-500 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {item.options.map((subItem: any) => (
            <NavNode
              key={subItem.name}
              item={subItem}
              depth={depth + 1}
              closeMobile={closeMobile}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="bg-white text-black sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <h3 className="flex-1 font-bold text-xl tracking-tighter">Menu</h3>
          {/* Desktop Navbar: Pop-up Container logic */}
          <div className="hidden md:flex items-center h-full">
            {navbarLinks.map((link) => (
              <div key={link.name} className="group h-full flex items-center">
                <Link
                  href={link.href}
                  className="hover:text-red-500 px-4 py-2 text-[12px] uppercase font-bold transition-colors"
                >
                  {link.name}
                </Link>

                {/* Desktop Dropdown (The "Pop up" container) */}
                {link.options && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="container mx-auto p-8 grid grid-cols-4 gap-8">
                      {link.options.map((sub: any) => (
                        <div key={sub.name}>
                          <h4 className="font-bold text-red-600 text-sm uppercase mb-4 border-b pb-2">
                            {sub.name}
                          </h4>
                          <ul className="flex flex-col gap-2">
                            {sub.options?.map((deepItem: any) => (
                              <li key={deepItem.name}>
                                <Link
                                  href={sub.href || "#"}
                                  className="text-[13px] text-gray-500 hover:text-black hover:translate-x-1 transition-all inline-block"
                                >
                                  {deepItem.name}
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
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <Menu size={24} />
          </button>
        </nav>

        {/* MOBILE MENU: Recursive Area */}
        <div className="md:hidden">
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              isMobileOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-y-auto max-h-[80vh] scrollbar-hide">
              <div className="flex flex-col pb-10 pt-2">
                {navbarLinks.map((link) => (
                  <NavNode
                    key={link.name}
                    item={link}
                    closeMobile={() => setIsMobileOpen(false)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
