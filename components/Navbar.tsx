import { Menu } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-white text-black">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between ">
          <h3>Menu</h3>
          <button className="p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
