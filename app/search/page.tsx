"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X, Command, ShoppingCart, Menu, Flame } from "lucide-react";

// --- Types ---
interface Product {
  id: number;
  name: string;
  category: string;
}

const SearchInterface = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // 1. Keyboard Shortcut (Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 2. Focus Management
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scroll
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // 3. Debounced Search Logic
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    const delayDebounceFn = setTimeout(() => {
      // Mock API Call
      const mockResults = [
        { id: 1, name: "Silk Sleep Mask", category: "Accessories" },
        { id: 2, name: "Scented Soy Candle", category: "Atmosphere" },
        { id: 3, name: "Lace Bodysuit", category: "Apparel" },
      ].filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

      setResults(mockResults);
      setIsSearching(false);
    }, 400); // 400ms debounce

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
      {/* --- STICKY NAV BAR --- */}
      <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter italic">
            <Flame className="text-red-500" fill="currentColor" />
            <span>KINKY</span>
          </div>

          {/* Desktop Search Trigger */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-all border border-transparent"
            >
              <div className="flex items-center gap-2">
                <Search size={18} />
                <span className="text-sm">Search the collection...</span>
              </div>
              <kbd className="flex items-center gap-1 px-2 py-0.5 rounded border bg-white text-[10px] font-mono shadow-sm">
                <Command size={10} />K
              </kbd>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setIsOpen(true)} className="md:hidden p-2">
              <Search size={22} />
            </button>
            <ShoppingCart size={22} className="cursor-pointer" />
            <Menu size={22} className="cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* --- SEARCH OVERLAY --- */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          {/* Header of Overlay */}
          <div className="flex items-center px-4 py-4 md:px-8 border-b border-gray-100">
            <Search className="text-gray-400 mr-4" size={24} />
            <input
              ref={inputRef}
              type="text"
              placeholder="Searching for something specific?"
              className="flex-1 text-xl md:text-2xl outline-none bg-transparent"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={() => setIsOpen(false)}
              className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
            >
              <X size={28} />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto px-4 py-8 md:px-8 max-w-4xl mx-auto w-full">
            {/* Horizontal "Slide" Categories */}
            <section className="mb-10">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                Explore Categories
              </h3>
              <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
                {[
                  "Bestsellers",
                  "New In",
                  "Discreet Packaging",
                  "Bundles",
                  "Apparel",
                  "Leather",
                  "Wellness",
                ].map((item) => (
                  <button
                    key={item}
                    className="whitespace-nowrap px-6 py-2.5 rounded-full border border-gray-200 text-sm font-medium hover:bg-black hover:text-white hover:border-black transition-all"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

            {/* Results Section */}
            <section>
              {isSearching ? (
                <div className="flex items-center justify-center py-20">
                  <div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
                </div>
              ) : results.length > 0 ? (
                <div className="grid gap-4">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Products Found
                  </h3>
                  {results.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 cursor-pointer group transition-colors"
                    >
                      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden shrink-0" />
                      <div>
                        <h4 className="font-semibold group-hover:text-red-600 transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {product.category}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : query ? (
                <div className="text-center py-20">
                  <p className="text-gray-400 italic">
                    No results found for "{query}"
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="h-32 bg-gray-100 rounded-2xl flex items-end p-4 text-sm font-bold">
                    Trending Now
                  </div>
                  <div className="h-32 bg-gray-100 rounded-2xl flex items-end p-4 text-sm font-bold">
                    Staff Picks
                  </div>
                  <div className="h-32 bg-gray-100 rounded-2xl flex items-end p-4 text-sm font-bold">
                    Sale
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      )}

      {/* --- PAGE CONTENT (MOCK) --- */}
      <main className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-black mb-4">The New Standard of Play.</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-64 bg-slate-200 rounded-3xl" />
          <div className="h-64 bg-slate-200 rounded-3xl" />
          <div className="h-64 bg-slate-200 rounded-3xl" />
        </div>
      </main>
    </div>
  );
};

export default SearchInterface;
