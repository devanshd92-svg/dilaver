"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/content/site";
import { MotionSection } from "@/components/MotionSection";

export function ProductCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => {
      const len = products.length;
      return (prev + newDirection + len) % len;
    });
  }, []);

  useEffect(() => {
    const t = setInterval(() => paginate(1), 7000);
    return () => clearInterval(t);
  }, [paginate]);

  const item = products[index];

  return (
    <MotionSection
      id="products"
      className="relative overflow-hidden bg-navy-900 py-20 sm:py-28"
    >
      <div className="absolute inset-0 opacity-40">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-900/90 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Applications
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A comprehensive range for every job site
          </h2>
          <p className="mt-4 text-white/75">
            Undercarriage, hydraulics, and wear items engineered for reliability
            when payloads and timelines refuse to flex.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={item.title}
              custom={direction}
              variants={{
                enter: (dir: number) => ({
                  x: dir > 0 ? 48 : -48,
                  opacity: 0,
                }),
                center: { x: 0, opacity: 1 },
                exit: (dir: number) => ({
                  x: dir < 0 ? 48 : -48,
                  opacity: 0,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-xl border border-white/15 bg-white/95 shadow-xl backdrop-blur"
            >
              <div className="grid md:grid-cols-2 md:gap-0">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <h3 className="font-display text-2xl font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-navy-900/75">
                    {item.blurb}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand transition hover:gap-3"
                  >
                    Read more{" "}
                    <span aria-hidden className="text-lg">
                      ›
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-brand hover:bg-brand/20"
              aria-label="Previous product"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {products.map((_, i) => (
                <button
                  key={products[i].title}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition ${
                    i === index ? "bg-brand w-6" : "bg-white/30 hover:bg-white/50"
                  }`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                />
              ))}
            </div>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-brand hover:bg-brand/20"
              aria-label="Next product"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
