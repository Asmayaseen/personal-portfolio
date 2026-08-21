"use client";

import { ArrowRight, Download, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Terminal } from "@/components/shared/terminal";
import { ProfileImage } from "@/components/shared/profile-image";
import { FloatingBadge } from "@/components/shared/floating-badge";
import { CountUp } from "@/components/shared/count-up";
import { MarqueeStrip } from "@/components/shared/marquee";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";
import { marqueeIcons, type SkillItem } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";

// The 4 skills that float around the hero avatar — index order matches
// their corner position below (upper-left, upper-right, lower-left, lower-right).
const heroBadgeSkills: SkillItem[] = [
  { name: "Python", icon: "python-original", kind: "devicon" },
  { name: "Claude Code", icon: "Sparkles", kind: "lucide" },
  { name: "Docker", icon: "docker-original", kind: "devicon" },
  { name: "Next.js", icon: "nextjs-original", kind: "devicon" },
];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-24">
      <div className="bg-grid absolute inset-0 -z-10 h-[600px]" />
      <div
        className="absolute -top-40 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: "var(--accent-500)" }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground">
                <span className="relative flex size-2">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                    style={{ background: "var(--accent-500)" }}
                  />
                  <span
                    className="relative inline-flex size-2 rounded-full"
                    style={{ background: "var(--accent-500)" }}
                  />
                </span>
                {t.hero.badge}
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {t.hero.greetingPrefix}{" "}
                <span className="text-glow" style={{ color: "var(--accent-400)" }}>
                  {t.hero.name}
                </span>{" "}
                {t.hero.greetingSuffix}
              </h1>
              <p className="mt-2 font-mono text-sm text-muted-foreground sm:text-base">
                {siteConfig.title}
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t.hero.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button size="lg" asChild>
                  <a href="#projects">
                    {t.hero.viewWork}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="size-4" />
                    {t.hero.githubProfile}
                  </a>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <a href={siteConfig.resumeUrl} download target="_blank" rel="noopener noreferrer">
                    <Download className="size-4" />
                    {t.hero.resume}
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {siteConfig.stats.map((stat, i) => (
                  <div key={stat.label}>
                    <div className="font-mono text-2xl font-bold sm:text-3xl">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {t.hero.statLabels[i]}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col items-center gap-4 lg:items-end">
            {/* Avatar + badges. Wrapper shrink-wraps to ProfileImage's actual
                200px (sm+) box — badge offsets below are small and hug the
                circle's edge directly, no ring/trig math. Badges hidden < sm. */}
            <div className="relative">
              <ProfileImage />
              <FloatingBadge item={heroBadgeSkills[0]} position="-left-3 top-2" delay={0} />
              <FloatingBadge item={heroBadgeSkills[1]} position="-right-3 top-2" delay={0.6} />
              <FloatingBadge item={heroBadgeSkills[2]} position="-left-4 bottom-3" delay={1.2} />
              <FloatingBadge item={heroBadgeSkills[3]} position="-right-4 bottom-3" delay={1.8} />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[280px]">
                <div
                  className="absolute -inset-2 -z-10 rounded-2xl opacity-25 blur-xl"
                  style={{ background: "var(--accent-glow)" }}
                />
                <Terminal />
                <div className="mt-2 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <Sparkles className="size-3.5" style={{ color: "var(--accent-400)" }} />
                  spec-first, iteration always
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <MarqueeStrip items={marqueeIcons} />
      </div>
    </section>
  );
}
