"use client";

import cloudinaryLoader from "@/libs/cloudinary-loader";
import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  images: string[];
  productName: string;
};

export default function ProductImageGallery({ images, productName }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      nextSlide();
    }

    if (distance < -50) {
      prevSlide();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full aspect-square max-h-120 overflow-hidden rounded-2xl bg-gray-50">
        <Image
          loader={cloudinaryLoader}
          src={images[currentIndex]}
          alt={productName}
          fill
          className="object-cover transition-transform duration-500 ease-in-out"
          priority
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        {/* Mobile Swipe Indicators */}
        <div
          className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-2 md:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${currentIndex === i ? "w-6 bg-black" : "w-1.5 bg-black/50"}`}
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          &gt;
        </button>
      </div>

      {/* DESKTOP THUMBNAILS: The mark of a pro UI */}
      <div className="hidden md:grid grid-cols-5 gap-4">
        {images.map((url, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${currentIndex === i ? "border-black/40 scale-95" : "border-transparent opacity-60 hover:opacity-100"}`}
          >
            <Image src={url} alt="thumbnail" fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
