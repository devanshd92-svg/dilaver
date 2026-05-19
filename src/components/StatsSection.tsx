"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { stats } from "@/content/site";
import { MotionSection } from "@/components/MotionSection";

function AnimatedNumber({
  value,
  suffix,
  enabled,
}: {
  value: number;
  suffix: string;
  enabled: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setDisplay(value);
      return;
    }
    let frame = 0;
    const duration = 1400;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) * (1 - t);
      setDisplay(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value, enabled]);

  return (
    <span>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });

  return (
    <MotionSection className="bg-black py-16 sm:py-20" ref={ref}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-6 lg:px-8">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            className="border border-white/10 bg-white/[0.03] px-6 py-8 text-center shadow-soft"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-4xl font-bold text-brand sm:text-5xl">
              <AnimatedNumber
                value={s.value}
                suffix={s.suffix}
                enabled={inView}
              />
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/75">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </MotionSection>
  );
}
