import Image from "next/image";
import Link from "next/link";
import { brand, navLinks } from "@/content/site";
import { SocialIconLinks } from "@/components/SocialIconLinks";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#2d2d2d] py-16 text-center sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex justify-center">
          <Image
            src={brand.logoSrc}
            alt={brand.logoAlt}
            width={brand.logoWidth}
            height={brand.logoHeight}
            className="h-16 w-auto max-w-[min(100%,280px)] object-contain sm:h-20"
          />
        </div>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-400">
          {brand.address}
        </p>
        <a
          href={brand.phoneHref}
          className="mt-4 inline-block text-sm text-gray-400 transition hover:text-white"
        >
          {brand.phoneDisplay}
        </a>

        <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 text-left sm:grid-cols-3 sm:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Support
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={brand.phoneHref}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Call us
                </a>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Request quote
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Social
            </p>
            <SocialIconLinks className="mt-4 flex items-center justify-start gap-3" />
          </div>
        </div>

        <p className="mt-14 text-xs text-gray-500">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
