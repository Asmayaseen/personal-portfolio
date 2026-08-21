import * as LucideIcons from "lucide-react";
import type { SkillItem } from "@/lib/data";
import { cn } from "@/lib/utils";

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

// A few devicon glyphs render solid black/near-black — give those a light
// chip so they stay visible on the dark background.
const NEEDS_LIGHT_CHIP = new Set(["nextjs-original", "github-original", "vercel-original"]);

export function TechIcon({
  item,
  size = 28,
  className,
}: {
  item: SkillItem;
  size?: number;
  className?: string;
}) {
  if (item.kind === "lucide") {
    const Icon = (LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>)[item.icon];
    if (!Icon) return null;
    return (
      <Icon
        size={size * 0.8}
        strokeWidth={1.75}
        className={cn("text-[var(--accent-400)]", className)}
      />
    );
  }

  const folder = item.icon.split("-")[0];
  const src = `${DEVICON_BASE}/${folder}/${item.icon}.svg`;
  const lightChip = NEEDS_LIGHT_CHIP.has(item.icon);

  return (
    // Devicon serves per-tech SVGs from a CDN at unpredictable/varying
    // aspect ratios — next/image's optimizer adds no value here.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={item.name}
      width={size}
      height={size}
      loading="lazy"
      className={cn(lightChip && "rounded-full bg-white p-0.5", className)}
      style={{ width: size, height: size }}
    />
  );
}
