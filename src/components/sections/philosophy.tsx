"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { philosophyCards } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export function Philosophy() {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="agent-engineering-philosophy"
          title={t.philosophy.title}
          align="center"
        />

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {philosophyCards.map((card, i) => (
            <RevealItem key={card.key}>
              <div className="glow-border relative h-full rounded-2xl bg-card/50 p-5">
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <card.icon
                  className="mt-3 size-7"
                  style={{ color: "var(--accent-400)" }}
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-10 text-center font-mono text-sm text-muted-foreground">
          {t.philosophy.tagline}
        </p>
      </div>
    </section>
  );
}
