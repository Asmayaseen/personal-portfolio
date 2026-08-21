"use client";

import { motion } from "framer-motion";
import { TechIcon } from "./tech-icon";
import type { SkillItem } from "@/lib/data";
import { cn } from "@/lib/utils";

// Sits hugging the hero avatar's edge. `position` is a small negative
// top/left/right/bottom offset (e.g. "-left-3 top-2") anchored by the
// badge's own edge, not its center — no translate-centering involved.
//
// Two-layer structure: the OUTER div carries the static position classes,
// the INNER motion.div only animates opacity/y-bob. Framer Motion writes
// its own inline `transform`, which would otherwise fight a translate
// utility class on the same element — splitting them avoids that.
export function FloatingBadge({
  item,
  position,
  delay = 0,
}: {
  item: SkillItem;
  position: string;
  delay?: number;
}) {
  return (
    <div className={cn("absolute z-10 hidden sm:block", position)}>
      <motion.div
        className="flex items-center gap-1 rounded-full border border-border bg-card/90 px-2.5 py-1 font-mono text-[11px] backdrop-blur-sm"
        style={{ boxShadow: "0 3px 8px -3px var(--accent-glow)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -5, 0] }}
        transition={{
          opacity: { duration: 0.5, delay },
          y: { duration: 3.4, repeat: Infinity, ease: "easeInOut", delay },
        }}
      >
        <TechIcon item={item} size={12} />
        {item.name}
      </motion.div>
    </div>
  );
}
