"use client";

import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // No backend wired up yet, so this opens the visitor's email client
    // with the form pre-filled, addressed to siteConfig.links.email.
    // Swap this for a real submission — e.g. an /api/contact route, or a
    // service like Formspree / Resend — if you want it sent without the
    // visitor leaving the page.
    if (siteConfig.links.email) {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name")?.toString() ?? "";
      const email = formData.get("email")?.toString() ?? "";
      const subject = formData.get("subject")?.toString() ?? "";
      const message = formData.get("message")?.toString() ?? "";
      const body = `${message}\n\n— ${name} (${email})`;

      window.location.href = `mailto:${siteConfig.links.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    }

    setSubmitted(true);
  }

  const contactCards = [
    siteConfig.links.email && {
      icon: Mail,
      label: "Email",
      value: siteConfig.links.email,
      href: `mailto:${siteConfig.links.email}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@" + siteConfig.githubUsername,
      href: siteConfig.links.github,
    },
    siteConfig.links.linkedin && {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: siteConfig.links.linkedin,
    },
    siteConfig.links.whatsapp && {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Message me",
      href: siteConfig.links.whatsapp,
    },
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href: string }[];

  return (
    <section id="contact" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="get-in-touch"
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-border bg-card/40 p-5 sm:p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.contact.name}</Label>
                  <Input id="name" name="name" placeholder={t.contact.name} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t.contact.email}</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">{t.contact.subject}</Label>
                <Input id="subject" name="subject" placeholder={t.contact.subject} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t.contact.message}</Label>
                <Textarea id="message" name="message" placeholder={t.contact.message} rows={5} required />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                {t.contact.send}
                <Send className="size-4" />
              </Button>
              {submitted && (
                <p className="font-mono text-xs" style={{ color: "var(--accent-400)" }}>
                  ✓ Opening your email client to send this to {siteConfig.links.email}.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1} className="space-y-3">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-border flex items-center gap-4 rounded-xl bg-card/40 p-4"
              >
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "var(--accent-glow)" }}
                >
                  <card.icon className="size-4.5" style={{ color: "var(--accent-400)" }} />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">{card.label}</p>
                  <p className="text-sm font-medium">{card.value}</p>
                </div>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
