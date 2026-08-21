"use client";

import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { useLanguage } from "@/lib/i18n";

export function Testimonials() {
  const placeholderSlots = [1, 2, 3];
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="testimonials"
          title={t.testimonials.title}
          description={t.testimonials.description}
        />

        {/* Add real testimonials here once available. Replace this placeholder
            grid with cards mapped from `testimonials` in src/lib/data.ts. */}
        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-3">
          {placeholderSlots.map((slot) => (
            <RevealItem key={slot}>
              <div className="flex h-full min-h-[180px] flex-col justify-between rounded-xl border border-dashed border-border bg-card/20 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent-500)]/40 hover:bg-card/40">
                <Quote className="size-6 text-muted-foreground/40" />
                <p className="text-sm text-muted-foreground/60">
                  Testimonial coming soon.
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
