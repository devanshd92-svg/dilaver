"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewTransition } from "@/lib/motion";

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export const MotionSection = forwardRef<HTMLElement, Props>(function MotionSection(
  { id, className, children },
  ref,
) {
  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewTransition}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  );
});

MotionSection.displayName = "MotionSection";
