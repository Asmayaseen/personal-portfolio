import type { SkillItem } from "@/lib/data";
import { TechIcon } from "./tech-icon";
import { cn } from "@/lib/utils";

export function MarqueeStrip({
  items,
  className,
  speed = "normal",
  reverse = false,
}: {
  items: SkillItem[];
  className?: string;
  speed?: "normal" | "slow";
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />
      <div
        className={cn(
          "flex w-max items-center gap-10",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex shrink-0 items-center gap-2.5 rounded-lg border border-border bg-card/60 px-4 py-2.5"
            title={item.name}
          >
            <TechIcon item={item} size={22} />
            <span className="whitespace-nowrap font-mono text-xs text-muted-foreground">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
