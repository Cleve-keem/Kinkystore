"use client";

import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <div
      className={`search-input w-full h-14 p-1 gap-2 border border-gray-300 rounded-md overflow-hidden flex transition-all duration-300`}
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
  );
}
