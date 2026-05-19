import Image from "next/image";
import Link from "next/link";
import { images } from "@/content/site";
import { MotionSection } from "@/components/MotionSection";

export function SustainabilitySection() {
  return (
    <MotionSection className="relative min-h-[420px] overflow-hidden py-24 sm:min-h-[480px] sm:py-32">
      <Image
        src={images.sustain}
        alt="Industrial hardware pile of lug bolts, nuts, and fasteners"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-white/90">
          Responsibility
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Sustainability in how we source and ship
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/85">
          Lean logistics, durable components, and partners who invest in
          long-life materials—so fewer cycles and less waste across the life of
          your fleet.
        </p>
        <Link
          href="#contact"
          className="mt-10 inline-flex min-h-11 items-center rounded-sm border border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-navy-900"
        >
          Read more
        </Link>
      </div>
    </MotionSection>
  );
}
