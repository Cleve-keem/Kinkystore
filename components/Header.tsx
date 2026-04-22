"use client";

import { Search, X, ShoppingCart, Flame, Heart, User } from "lucide-react";
import React from "react";
import Searchbar from "./Searchbar";

export default function Header() {
  const [showMobileSearch, setShowMobileSearch] = React.useState(false);

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto py-1 px-4">
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
          <div className="header-search hidden md:block flex-1 max-w-4xl mx-5">
            <Searchbar />
          </div>
          {/* search toggle */}
          <div className="header-search-toggle w-full md:hidden flex items-center justify-end mx-5">
            <button
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              className="flex items-center"
            >
              {showMobileSearch ? <X size={24} /> : <Search size={24} />}
            </button>
          </div>
          <div className="header-right">
            <div className="flex items-center gap-4">
              <Heart size={24} className="cursor-pointer" />
              <User size={24} className="cursor-pointer" />
              <span className="relative">
                <span className="absolute -top-2.5 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  0
                </span>
                <ShoppingCart size={24} className="cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
        <div
          className={`mobile-search p-4 ${showMobileSearch ? "block" : "hidden"} md:hidden`}
        >
          <Searchbar />
        </div>
      </div>
    </header>
  );
}
