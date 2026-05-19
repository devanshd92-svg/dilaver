"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { brand, heroSlides } from "@/content/site";

const SLIDE_MS = 7000;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (reduce || heroSlides.length < 2) return;
    const id = window.setInterval(() => {
      setSlideIndex((i) => (i + 1) % heroSlides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [reduce]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, 140],
  );
  const activeIndex = reduce ? 0 : slideIndex;

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <h1 className="sr-only">
        {brand.name} — Premium auto parts for heavy machinery
      </h1>
      <motion.div
        className="absolute inset-0 -z-20 bg-navy-900"
        style={{ y }}
        aria-hidden
      >
        {heroSlides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${
              i === activeIndex
                ? "z-10 opacity-100 transition-opacity duration-1000 ease-in-out"
                : "z-0 opacity-0 transition-none"
            }`}
          />
        ))}
      </motion.div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 hidden h-16 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/40 to-transparent sm:block"
        aria-hidden
      />
    </section>
  );
}
