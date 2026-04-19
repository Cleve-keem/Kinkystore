"use client";

import {
  Search,
  X,
  Command,
  ShoppingCart,
  Menu,
  Flame,
  Heart,
  User,
} from "lucide-react";
import React from "react";

export default function Header() {
  const [showMobileSearch, setShowMobileSearch] = React.useState(false);

  return (
    <header>
      <div className="bg-white text-black py-1 px-4">
        <div className="row flex items-center justify-between py-4">
          {/* Logo */}
          <div className="header-logo">
            <a
              href="/"
              className="flex items-center gap-2 font-bold text-xl tracking-tighter"
            >
              <Flame className="text-red-500" fill="currentColor" />
              <span>KINKY</span>
            </a>
          </div>
          {/* Desktop */}
          <div className="header-search">
            <div
              className={`search-input w-full h-14 p-1 gap-2 border border-gray-300 rounded-md overflow-hidden hidden md:flex transition-all duration-300`}
            >
              <input
                type="text"
                placeholder="Search for products here..."
                className="w-full h-full px-4 outline-none"
              />
              <button className="h-full flex items-center p-3 bg-black text-white rounded-md">
                <Search size={24} />
              </button>
            </div>
          </div>
          {/* search toggle */}
          <div className="header-search-toggle md:hidden">
            <button
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              className="flex items-center"
            >
              {showMobileSearch ? <X size={24} /> : <Search size={24} />}
            </button>
          </div>
          <div className="header-right">
            <div className="flex items-center gap-4">
              <Heart size={22} className="cursor-pointer" />
              <User size={22} className="cursor-pointer" />
              <span className="relative">
                <span className="absolute -top-2.5 -right-1 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  0
                </span>
                <ShoppingCart size={22} className="cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
