"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  { src: "/images/nextjs.png", button: "Next.js", description: "Front-end" },
  { src: "/images/react.png", button: "React", description: "Front-end" },
  { src: "/images/laravel.png", button: "Laravel", description: "Framework" },
  { src: "/images/mysql.png", button: "MySQL", description: "Back-end" },
  { src: "/images/figma.jpg", button: "Figma", description: "Design Tool" },
  { src: "/images/strapi.png", button: "Strapi 5", description: "Back-end" },
  { src: "/images/fire.png", button: "Firebase", description: "Back-end" },
  { src: "/images/flutter.jpg", button: "Flutter", description: "Front-end" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex]);

  const startAutoSlide = () => {
    stopAutoSlide();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div className="w-4/4 mx-auto py-8 relative">
      <div className="flex justify-center items-center relative h-[400px] bg-gray-800">
        {images.map((item, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-700 ease-in-out flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 w-full max-w-xl text-center ${
              index === currentIndex ? "scale-105 opacity-100 z-10" : "scale-95 opacity-0 z-0"
            }`}
          >
            <img
              src={item.src}
              alt={item.button}
              className="w-[30%] object-contain mb-4"
            />
            <h4 className="text-gray-700 text-md mb-2">{item.description}</h4>
            <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
              {item.button}
            </button>
          </div>
        ))}
      </div>

      {/* Bullets */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-black"
                : "bg-gray-400 hover:bg-blue-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
