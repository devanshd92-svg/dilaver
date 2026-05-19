import Image from "next/image";
import { galleryCategories } from "@/content/site";
import { MotionSection } from "@/components/MotionSection";

export function GallerySection() {
  return (
    <MotionSection className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Top sellers
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Categories crews ask for first
          </h2>
          <p className="mt-4 text-white/70">
            B2SEW product and facility photography—each category reflects the
            parts and quality your fleet depends on.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {galleryCategories.map((item) => (
            <article
              key={item.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 bg-navy-900/50 shadow-soft"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition duration-500 group-hover:from-black/85" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-lg font-semibold text-white">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-white/75 opacity-90 transition group-hover:text-white">
                  Request spec sheet
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
