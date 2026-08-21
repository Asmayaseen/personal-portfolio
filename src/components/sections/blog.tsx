"use client";

import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export function Blog() {
  const { t } = useLanguage();

  return (
    <section id="blog" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="learning-journey"
          title={t.blog.title}
          description={t.blog.description}
        />

        <RevealGroup className="mt-10 flex flex-col gap-5">
          {blogPosts.map((post) => (
            <RevealItem key={post.title}>
              <a
                href={post.href}
                className="glow-border group flex flex-col gap-3 rounded-xl bg-card/50 p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-snug sm:text-xl">{post.title}</h3>
                  <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {post.excerpt}
                </p>

                <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-mono text-[11px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span
                    className="font-mono text-xs font-medium"
                    style={{ color: "var(--accent-400)" }}
                  >
                    {t.blog.readArticle} →
                  </span>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
