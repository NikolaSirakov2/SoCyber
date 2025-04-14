import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const slides = [
  { id: 1, color: "#4A90E2" }, // Blue
  { id: 2, color: "#50E3C2" }, // Turquoise
  { id: 3, color: "#F5A623" }, // Orange
  { id: 4, color: "#7ED321" }, // Green
  { id: 5, color: "#BD10E0" }, // Purple
  { id: 6, color: "#E02F2F" }, // Red
];

export function Media() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(slides.length - 3, prev + 1));
  };

  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-12 underline"
        >
          Media
        </motion.h2>

        <div className="relative px-12">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden relative w-full">
            <div className="relative w-[calc(100%+8rem)] -mx-16">
              <motion.div
                className="flex gap-4 px-16"
                animate={{ x: `-${currentIndex * 29.7}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`w-[calc(33.333%-1rem)] flex-shrink-0 transition-opacity duration-300 ${
                      index < currentIndex || index >= currentIndex + 3
                        ? "opacity-0"
                        : "opacity-100"
                    }`}
                    style={{ aspectRatio: "16/9" }}
                  >
                    <div
                      className="w-full h-full rounded-lg"
                      style={{ backgroundColor: slide.color }}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
