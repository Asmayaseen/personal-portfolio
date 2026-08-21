"use client";

import { siteConfig } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/shared/brand-icons";

// WhatsApp's own brand green is used deliberately here (not the site's
// purple accent) — it's a recognizable utility affordance, not a design
// accent. Update siteConfig.links.whatsapp to change the destination.
export function FloatingWhatsApp() {
  if (!siteConfig.links.whatsapp) return null;

  return (
    <a
      href={siteConfig.links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message me on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-110 sm:bottom-6 sm:right-6"
      style={{ boxShadow: "0 8px 24px -4px rgba(37,211,102,0.55)" }}
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30 group-hover:opacity-50" />
      <WhatsAppIcon className="relative size-7" />
    </a>
  );
}
