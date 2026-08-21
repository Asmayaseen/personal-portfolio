"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { aboutFeatures } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n";

export function About() {
  const { t } = useLanguage();
  const socials = [
    { icon: Github, href: siteConfig.links.github, label: "GitHub" },
    ...(siteConfig.links.linkedin
      ? [{ icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" }]
      : []),
    ...(siteConfig.links.email
      ? [{ icon: Mail, href: `mailto:${siteConfig.links.email}`, label: "Email" }]
      : []),
  ];

  return (
    <section id="about" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="about-me" title={t.about.title} />

        <div className="mt-8 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">{t.about.intro}</p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-[var(--accent-500)]/50 hover:text-[var(--accent-400)]"
                >
                  <s.icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          <RevealGroup className="grid gap-4 sm:grid-cols-2">
            {aboutFeatures.map((feature) => (
              <RevealItem key={feature.title}>
                <div className="glow-border h-full rounded-xl bg-card/50 p-5">
                  <feature.icon
                    className="size-5"
                    style={{ color: "var(--accent-400)" }}
                    strokeWidth={1.75}
                  />
                  <h3 className="mt-3 font-semibold">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
