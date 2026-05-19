"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { brand, navLinks } from "@/content/site";

const SCROLL_SOLID_AT = 24;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= SCROLL_SOLID_AT);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const barSolid = scrolled || open;

  return (
    <header
      className={
        barSolid
          ? "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-900/78 backdrop-blur-lg backdrop-saturate-150 transition-[background-color,backdrop-filter,border-color] duration-300"
          : "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-navy-900/35 backdrop-blur-md backdrop-saturate-150 transition-[background-color,backdrop-filter,border-color] duration-300"
      }
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Link
          href="#top"
          className={`relative flex shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/80 focus-visible:ring-offset-2 ${
            barSolid
              ? "focus-visible:ring-offset-navy-900"
              : "focus-visible:ring-offset-transparent"
          }`}
        >
          <Image
            src={brand.logoSrc}
            alt={brand.logoAlt}
            width={brand.logoWidth}
            height={brand.logoHeight}
            priority
            className="h-9 w-auto max-h-9 object-contain object-left sm:h-11 sm:max-h-11"
          />
        </Link>

        <nav
          className="hidden items-center gap-10 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-sm border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand hover:bg-brand/15"
          >
            Get a quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-navy-900 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-md px-3 py-3 text-base font-medium text-white/90 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-2 rounded-sm bg-brand px-4 py-3 text-center text-base font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Get a quote
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
