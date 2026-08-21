"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

// ── Swap in your real photo ──────────────────────────────────────────────
// Save your photo as /public/profile.jpg (exact filename, .jpg). Recommended
// spec: 500×500px square (min 400×400px), JPG or PNG, face/subject centered
// and filling the frame — this circular crop keeps only the center visible.
// Until that file exists, the "AY" initials placeholder below renders
// automatically (the <Image> onError handler catches the missing file) —
// no code changes needed once you drop the real photo in.
//
// This is the ONLY place the avatar's size is defined (200px on sm+, 150px
// on mobile). The hero's floating badges are positioned in pixels computed
// from this same box (see hero.tsx) — if you resize the avatar, recompute
// those offsets to match.
// ───────────────────────────────────────────────────────────────────────
export function ProfileImage() {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative size-[150px] shrink-0 sm:size-[200px]"
    >
      <div
        className="relative size-full overflow-hidden rounded-full border-2 shadow-lg shadow-black/20"
        style={{
          borderColor: "var(--accent-500)",
          boxShadow: "0 0 12px -6px var(--accent-glow)",
        }}
      >
        {!imgError ? (
          <Image
            src="/profile.jpg"
            alt={siteConfig.name}
            fill
            sizes="(min-width: 640px) 200px, 150px"
            className="object-cover"
            priority
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="flex size-full items-center justify-center"
            style={{ background: "linear-gradient(135deg, var(--accent-500), #4c1d95)" }}
          >
            <span className="font-mono text-2xl font-bold text-white sm:text-3xl">
              {siteConfig.initials}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
