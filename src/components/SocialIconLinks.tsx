import {
  InstagramIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "@/components/icons/SocialBrandIcons";
import { socialLinks, type SocialPlatform } from "@/content/site";
import type { ComponentType } from "react";

type BrandIconProps = { className?: string };

const iconByPlatform: Record<
  SocialPlatform,
  ComponentType<BrandIconProps>
> = {
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
};

type SocialIconLinksProps = {
  className?: string;
  linkClassName?: string;
};

export function SocialIconLinks({
  className = "flex gap-2",
  linkClassName = "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:border-brand hover:bg-white/10",
}: SocialIconLinksProps) {
  return (
    <div className={className}>
      {socialLinks.map((link) => {
        const Icon = iconByPlatform[link.id];
        const ariaLabel = `${link.label} - B2SEW`;

        return (
          <a
            key={link.id}
            href={link.href}
            className={linkClassName}
            aria-label={ariaLabel}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <Icon className="h-5 w-5 shrink-0" />
          </a>
        );
      })}
    </div>
  );
}
