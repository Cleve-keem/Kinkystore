"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <button
      onClick={handleBack}
      className="z-20 w-10 h-10 rounded-full absolute top-4 left-4 bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors text-black"
    >
      &larr;
    </button>
  );
}
