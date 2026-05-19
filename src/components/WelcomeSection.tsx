"use client";

import Image from "next/image";
import {
  Globe2,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { SocialIconLinks } from "@/components/SocialIconLinks";
import { motion } from "framer-motion";
import { features, images } from "@/content/site";
import { MotionSection } from "@/components/MotionSection";
import { staggerContainer, staggerItem } from "@/lib/motion";

const icons = [ShieldCheck, Truck, Wrench, Globe2];

export function WelcomeSection() {
  return (
    <MotionSection className="border-y border-white/10 bg-navy-900/30 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative order-2 aspect-square overflow-hidden rounded-sm border border-white/10 shadow-soft lg:order-1">
          <Image
            src={images.welcome}
            alt="B2SEW corporate reception with backlit logo, desk, and city views through floor-to-ceiling windows"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>

        <motion.div
          className="order-1 space-y-8 lg:order-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Welcome
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your uptime is our engineering brief
            </h2>
            <div
              className="mt-6 h-px max-w-lg bg-gradient-to-r from-white/50 via-brand/80 to-transparent"
              aria-hidden
            />
            <p className="mt-6 text-base leading-relaxed text-white/75">
              We line up inventory, documentation, and support so a parts order
              feels like a technical partnership—not a guessing game on
              tolerances and lead times.
            </p>
          </motion.div>

          <motion.ul variants={staggerItem} className="space-y-6">
            {features.map((f, i) => {
              const Icon = icons[i % icons.length];
              return (
                <li
                  key={f.title}
                  className="flex gap-4 border-b border-white/10 pb-6 last:border-0 last:pb-0"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-brand/40 bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/70">{f.body}</p>
                  </div>
                </li>
              );
            })}
          </motion.ul>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Connect
            </span>
            <SocialIconLinks
              linkClassName="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:border-brand hover:bg-white/10"
            />
          </motion.div>
        </motion.div>
      </div>
    </MotionSection>
  );
}
