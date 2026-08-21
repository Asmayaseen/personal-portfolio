"use client";

import { useEffect, useState } from "react";
import { Menu, X, Terminal as TerminalIcon } from "lucide-react";
import { navLinks } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { LanguageToggle } from "@/components/shared/language-toggle";
import { DiscordIcon } from "@/components/shared/brand-icons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <TerminalIcon className="size-4" style={{ color: "var(--accent-400)" }} />
          <span>
            asma<span style={{ color: "var(--accent-400)" }}>.</span>dev
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 md:flex">
          <LanguageToggle />
          <ThemeToggle />
          {siteConfig.links.discord && (
            <a
              href={siteConfig.links.discord}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-[var(--accent-500)]/50 hover:text-[var(--accent-400)]"
            >
              <DiscordIcon className="size-4" />
            </a>
          )}
          <Button asChild size="sm">
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 font-mono text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {t.nav[link.key]}
              </a>
            ))}
            <div className="mt-2 px-3">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
