"use client";

import { AnimatePresence } from "framer-motion";
import { useKey } from "react-use";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

// Slides
import Slide1 from "@/components/chapter-2/slide-1";
import Slide2 from "@/components/chapter-2/slide-2";
import Slide3 from "@/components/chapter-2/slide-3";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = ["?current-slide=1", "?current-slide=2", "?current-slide=3"];

export default function Chapter2Page() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const currentSlide = searchParams.get("current-slide");

  // useKey("ArrowRight", () => {
  //   const currentSlideIndex = slides.indexOf(`?current-slide=${currentSlide}`);
  //   const nextSlide = slides.at(currentSlideIndex + 1) ?? slides[0];
  //   router.push(nextSlide);
  // });

  // useKey("ArrowLeft", () => {
  //   router.push(slides[0]);
  // });

  const handleNextSlide = () => {
    const currentSlideIndex = slides.indexOf(`?current-slide=${currentSlide}`);
    const nextSlide = slides.at(currentSlideIndex + 1) ?? slides[0];
    router.push(nextSlide);
  };

  const handlePrevSlide = () => {
    const currentSlideIndex = slides.indexOf(`?current-slide=${currentSlide}`);
    const prevSlide = slides.at(currentSlideIndex - 1) ?? slides[0];
    router.push(prevSlide);
  };

  useEffect(() => {
    currentSlide === null && router.push("?current-slide=1");
  }, [currentSlide, router]);

  return (
    <div className="relative h-screen w-full">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <AnimatePresence>{currentSlide === "1" && <Slide1 />}</AnimatePresence>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <AnimatePresence>{currentSlide === "2" && <Slide2 />}</AnimatePresence>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <AnimatePresence>{currentSlide === "3" && <Slide3 />}</AnimatePresence>
      </div>
      <div className="flex justify-center">
        <div className="absolute bottom-10 space-x-4">
          <button
            className="p-2 rounded-md text-zinc-400 transition-all duration-300 ease-in-out hover:bg-zinc-200 hover:text-zinc-900"
            onClick={handlePrevSlide}
          >
            <ChevronLeft />
          </button>
          <button
            className="p-2 rounded-md text-zinc-400 transition-all duration-300 ease-in-out hover:bg-zinc-200 hover:text-zinc-900"
            onClick={handleNextSlide}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}