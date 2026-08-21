"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { MarqueeStrip } from "@/components/shared/marquee";
import { TechIcon } from "@/components/shared/tech-icon";
import { skillsByTechnology, skillsByAgentRole, marqueeIcons } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="skills--tech-stack"
          title={t.skills.title}
          description={t.skills.description}
        />

        <div className="mt-10">
          <Tabs defaultValue="technology">
            <TabsList>
              <TabsTrigger value="technology">{t.skills.byTech}</TabsTrigger>
              <TabsTrigger value="role">{t.skills.byRole}</TabsTrigger>
            </TabsList>

            <TabsContent value="technology" className="mt-8">
              <SkillGrid groups={skillsByTechnology} />
            </TabsContent>
            <TabsContent value="role" className="mt-8">
              <SkillGrid groups={skillsByAgentRole} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16">
          <p className="section-label mb-4">always-in-the-toolbelt</p>
          <MarqueeStrip items={marqueeIcons} speed="slow" reverse />
        </div>
      </div>
    </section>
  );
}

function SkillGrid({ groups }: { groups: { category: string; items: { name: string; icon: string; kind: "devicon" | "lucide" }[] }[] }) {
  return (
    <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <RevealItem key={group.category}>
          <div className="glow-border h-full rounded-xl bg-card/40 p-5">
            <h3 className="font-mono text-sm text-muted-foreground">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  title={item.name}
                  className="flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-3 py-2"
                >
                  <TechIcon item={item} size={18} />
                  <span className="text-xs">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
