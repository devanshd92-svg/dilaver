"use client";

import Image from "next/image";
import { images } from "@/content/site";
import { MotionSection } from "@/components/MotionSection";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function IntroSection() {
  return (
    <MotionSection
      id="about"
      className="border-y border-white/10 bg-navy-900/40 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-white/5 shadow-soft">
          <Image
            src={images.intro}
            alt="B2SEW premium track pins and bushes flyer with product photography, key benefits, and compatible part references"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 border border-white/10"
            aria-hidden
          />
        </div>

        <motion.div
          className="max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={staggerContainer}
        >
          <motion.p
            variants={staggerItem}
            className="text-sm font-semibold uppercase tracking-wider text-brand"
          >
            Built for harsh cycles
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Precision inventory. Field-proven quality.
          </motion.h2>
          <motion.div
            variants={staggerItem}
            className="mt-6 h-px max-w-md bg-gradient-to-r from-brand via-white/30 to-transparent"
            aria-hidden
          />
          <motion.p
            variants={staggerItem}
            className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg"
          >
            B2SEW supplies critical wear parts and assemblies for loaders,
            excavators, and support equipment—spec’d to real operating
            conditions, not brochure duty cycles. From sourcing to shipment,
            we prioritize traceability, metallurgy, and fitment you can stake
            a production calendar on.
          </motion.p>
        </motion.div>
      </div>
    </MotionSection>
  );
}
