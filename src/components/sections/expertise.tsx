"use client";

import { Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { TechIcon } from "@/components/shared/tech-icon";
import { expertiseCards } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export function Expertise() {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="engineering-expertise"
          title={t.expertise.title}
          description={t.expertise.description}
        />

        <RevealGroup className="mt-10 grid gap-5 md:grid-cols-2">
          {expertiseCards.map((card, i) => {
            const cardClassName =
              "glow-border flex h-full flex-col gap-4 rounded-2xl bg-card/50 p-5";
            const body = (
              <>
                <div className="flex items-start justify-between">
                  <span className="font-mono text-2xl font-bold text-muted-foreground/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary/40">
                    <TechIcon item={card.icon} size={22} />
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="section-label mt-1">{card.category}</p>
                </div>

                <ul className="mt-1 space-y-2">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check
                        className="mt-0.5 size-3.5 shrink-0"
                        style={{ color: "var(--accent-400)" }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </>
            );

            return (
              <RevealItem key={card.title}>
                {card.href ? (
                  <a href={card.href} className={cardClassName}>
                    {body}
                  </a>
                ) : (
                  <div className={cardClassName}>{body}</div>
                )}
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
