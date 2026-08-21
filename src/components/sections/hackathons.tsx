"use client";

import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { hackathonTimeline } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export function Hackathons() {
  const { t } = useLanguage();

  return (
    <section id="hackathons" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="hackathon-journey"
          title={t.hackathons.title}
          description={t.hackathons.description}
        />

        <RevealGroup className="relative mt-12 ml-3 border-l border-border sm:ml-6">
          {hackathonTimeline.map((entry) => (
            <RevealItem key={entry.title} direction="right" className="relative pb-10 pl-8 last:pb-0 sm:pl-10">
              <span
                className="absolute -left-[9px] top-1 flex size-4 items-center justify-center rounded-full border-2"
                style={{ borderColor: "var(--accent-500)", background: "var(--background)" }}
              >
                <span
                  className="size-1.5 rounded-full"
                  style={{ background: "var(--accent-500)" }}
                />
              </span>

              <div className="glow-border rounded-xl bg-card/40 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold">{entry.title}</h3>
                  <Badge variant="secondary" className="gap-1 font-mono text-[11px]">
                    <CheckCircle2 className="size-3" />
                    {entry.status}
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{entry.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
