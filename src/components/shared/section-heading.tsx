import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn(align === "center" && "text-center", className)}>
      <p className="section-label">{label}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
