"use client";

import { Github, Linkedin, Mail, Terminal as TerminalIcon } from "lucide-react";
import { navLinks } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n";
import { DiscordIcon } from "@/components/shared/brand-icons";

const year = new Date().getFullYear();

export function Footer() {
  const { t } = useLanguage();
  const socials = [
    { icon: Github, href: siteConfig.links.github, label: "GitHub" },
    ...(siteConfig.links.linkedin
      ? [{ icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" }]
      : []),
    ...(siteConfig.links.discord
      ? [{ icon: DiscordIcon, href: siteConfig.links.discord, label: "Discord" }]
      : []),
    ...(siteConfig.links.email
      ? [{ icon: Mail, href: `mailto:${siteConfig.links.email}`, label: "Email" }]
      : []),
  ];

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold">
              <TerminalIcon className="size-4" style={{ color: "var(--accent-400)" }} />
              <span>{siteConfig.name}</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground">{t.hero.tagline}</p>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-[var(--accent-500)]/50 hover:text-[var(--accent-400)]"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="section-label mb-3">quick-links</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono">
            Built with <span className="text-foreground/80">Claude Code</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
