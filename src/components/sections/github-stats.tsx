"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n";

export function GithubStats() {
  const { githubUsername } = siteConfig;
  const { t, lang } = useLanguage();
  const description =
    lang === "ur"
      ? `@${githubUsername} کے لیے حقیقی وقت میں حاصل کردہ۔`
      : `Pulled in real time for @${githubUsername}.`;

  return (
    <section id="stats" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="open-source--github-stats"
          title={t.githubStatsTitle}
          description={description}
        />

        <RevealGroup className="mt-8 grid grid-cols-3 gap-4">
          {siteConfig.githubStatBlocks.map((block) => (
            <RevealItem key={block.label}>
              <div className="glow-border rounded-xl bg-card/40 py-6 text-center">
                <div className="font-mono text-2xl font-bold sm:text-3xl">{block.value}</div>
                <p className="mt-1 text-xs text-muted-foreground">{block.label}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&bg_color=00000000&hide_border=true&title_color=a78bfa&icon_color=8b5cf6`}
              alt={`${githubUsername}'s GitHub stats`}
              className="w-full rounded-xl border border-border"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.1}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=dark&bg_color=00000000&hide_border=true&title_color=a78bfa`}
              alt={`${githubUsername}'s top languages`}
              className="w-full rounded-xl border border-border"
              loading="lazy"
            />
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://github-readme-streak-stats.herokuapp.com?user=${githubUsername}&theme=dark&background=00000000&border=30363d&ring=8b5cf6&fire=a78bfa`}
            alt={`${githubUsername}'s GitHub streak`}
            className="w-full rounded-xl border border-border"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
