"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="featured-projects"
          title={t.projects.title}
          description={t.projects.description}
        />

        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <RevealItem key={project.title}>
              <div className="glow-border flex h-full flex-col rounded-xl bg-card/50 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold">{project.title}</h3>
                  <Github className="size-4 shrink-0 text-muted-foreground" />
                </div>

                <Badge
                  variant="outline"
                  className="mt-2.5 w-fit font-mono text-[10px]"
                  style={{ borderColor: "var(--accent-500)", color: "var(--accent-400)" }}
                >
                  {project.status}
                </Badge>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.chips.map((chip) => (
                    <Badge key={chip} variant="secondary" className="font-mono text-[11px]">
                      {chip}
                    </Badge>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <Button variant="outline" size="sm" className="w-fit" asChild>
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      {t.projects.viewCode}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </Button>
                  {/* Add a "View Case Study" button here once real
                      case-study write-ups exist for a project, e.g.:
                      <Button variant="ghost" size="sm" asChild>
                        <a href={`/case-studies/${slug}`}>View Case Study</a>
                      </Button> */}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-10 flex justify-center">
          <Button size="lg" variant="outline" asChild>
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
              {t.projects.viewAll}
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
