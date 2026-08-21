// ─────────────────────────────────────────────────────────────────────────
// CONTENT DATA — projects, skills, hackathons, testimonials, blog previews.
// This is the #2 file to touch: swap in real projects, real hackathon
// dates/descriptions, and real testimonials as they become available.
// ─────────────────────────────────────────────────────────────────────────

import type { LucideIcon } from "lucide-react";
import {
  Bot,
  GraduationCap,
  Trophy,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

// `key` maps to translations.<lang>.nav.<key> in src/lib/i18n.tsx — labels
// are looked up there so the navbar translates with the language toggle.
export const navLinks = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "expertise", href: "#expertise" },
  { key: "philosophy", href: "#philosophy" },
  { key: "projects", href: "#projects" },
  { key: "hackathons", href: "#hackathons" },
  { key: "contact", href: "#contact" },
] as const;

// ── About: feature cards ───────────────────────────────────────────────
export const aboutFeatures: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Bot,
    title: "AI/Agentic Builder",
    description:
      "Hands-on with Claude Code, agent workflows, and the Agent Factory curriculum — building systems that plan, act, and iterate.",
  },
  {
    icon: GraduationCap,
    title: "Educator & Builder",
    description:
      "Creates interactive AI learning tools — quizzes, slideshows, and mini-apps — to help younger students learn by doing.",
  },
  {
    icon: Trophy,
    title: "Hackathon Contributor",
    description:
      "Has built and shipped multiple hackathon projects, from CRM agents to interactive robotics textbooks, under real deadlines.",
  },
  {
    icon: ShieldCheck,
    title: "Spec-First Learner",
    description:
      "A practical, plan-before-build approach to every project — write the spec, then let the code follow.",
  },
];

// ── Skills: grouped two ways (by technology, by agent role) ─────────────
export type SkillItem = { name: string; icon: string; kind: "devicon" | "lucide" };

export const skillsByTechnology: { category: string; items: SkillItem[] }[] = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", icon: "typescript-original", kind: "devicon" },
      { name: "JavaScript", icon: "javascript-original", kind: "devicon" },
      { name: "Python", icon: "python-original", kind: "devicon" },
      { name: "HTML5", icon: "html5-original", kind: "devicon" },
      { name: "CSS3", icon: "css3-original", kind: "devicon" },
      { name: "SQL", icon: "azuresqldatabase-original", kind: "devicon" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "Next.js", icon: "nextjs-original", kind: "devicon" },
      { name: "React", icon: "react-original", kind: "devicon" },
      { name: "FastAPI", icon: "fastapi-original", kind: "devicon" },
      { name: "Node.js", icon: "nodejs-original", kind: "devicon" },
      { name: "Tailwind CSS", icon: "tailwindcss-original", kind: "devicon" },
    ],
  },
  {
    category: "AI & Agents",
    items: [
      { name: "OpenAI Agents SDK", icon: "Bot", kind: "lucide" },
      { name: "Claude Code / MCP", icon: "Sparkles", kind: "lucide" },
      { name: "LangChain", icon: "Network", kind: "lucide" },
      { name: "Prompt Engineering", icon: "Workflow", kind: "lucide" },
      { name: "RAG Basics", icon: "Server", kind: "lucide" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Docker", icon: "docker-original", kind: "devicon" },
      { name: "GitHub Actions", icon: "githubactions-plain", kind: "devicon" },
      { name: "Vercel", icon: "vercel-original", kind: "devicon" },
    ],
  },
  {
    category: "Platforms & Tools",
    items: [
      { name: "Git", icon: "git-original", kind: "devicon" },
      { name: "GitHub", icon: "github-original", kind: "devicon" },
      { name: "VS Code", icon: "vscode-original", kind: "devicon" },
      { name: "Figma", icon: "figma-original", kind: "devicon" },
      { name: "Postman", icon: "postman-original", kind: "devicon" },
    ],
  },
];

export const skillsByAgentRole: { category: string; items: SkillItem[] }[] = [
  {
    category: "Perception & Interface",
    items: [
      { name: "Next.js", icon: "nextjs-original", kind: "devicon" },
      { name: "React", icon: "react-original", kind: "devicon" },
      { name: "Tailwind CSS", icon: "tailwindcss-original", kind: "devicon" },
      { name: "HTML5", icon: "html5-original", kind: "devicon" },
      { name: "CSS3", icon: "css3-original", kind: "devicon" },
    ],
  },
  {
    category: "Reasoning & Planning",
    items: [
      { name: "Claude Code / MCP", icon: "Sparkles", kind: "lucide" },
      { name: "OpenAI Agents SDK", icon: "Bot", kind: "lucide" },
      { name: "Prompt Engineering", icon: "Workflow", kind: "lucide" },
      { name: "LangChain", icon: "Network", kind: "lucide" },
    ],
  },
  {
    category: "Memory & Retrieval",
    items: [
      { name: "RAG Basics", icon: "Server", kind: "lucide" },
      { name: "SQL", icon: "azuresqldatabase-original", kind: "devicon" },
      { name: "Python", icon: "python-original", kind: "devicon" },
    ],
  },
  {
    category: "Execution & Backend",
    items: [
      { name: "FastAPI", icon: "fastapi-original", kind: "devicon" },
      { name: "Node.js", icon: "nodejs-original", kind: "devicon" },
      { name: "TypeScript", icon: "typescript-original", kind: "devicon" },
      { name: "JavaScript", icon: "javascript-original", kind: "devicon" },
    ],
  },
  {
    category: "Deployment & Ops",
    items: [
      { name: "Docker", icon: "docker-original", kind: "devicon" },
      { name: "GitHub Actions", icon: "githubactions-plain", kind: "devicon" },
      { name: "Vercel", icon: "vercel-original", kind: "devicon" },
      { name: "Git", icon: "git-original", kind: "devicon" },
      { name: "GitHub", icon: "github-original", kind: "devicon" },
    ],
  },
];

// Flat icon list for the marquee strip — mixes categories on purpose.
export const marqueeIcons: SkillItem[] = [
  { name: "TypeScript", icon: "typescript-original", kind: "devicon" },
  { name: "Python", icon: "python-original", kind: "devicon" },
  { name: "Next.js", icon: "nextjs-original", kind: "devicon" },
  { name: "React", icon: "react-original", kind: "devicon" },
  { name: "FastAPI", icon: "fastapi-original", kind: "devicon" },
  { name: "Tailwind CSS", icon: "tailwindcss-original", kind: "devicon" },
  { name: "Node.js", icon: "nodejs-original", kind: "devicon" },
  { name: "Docker", icon: "docker-original", kind: "devicon" },
  { name: "Git", icon: "git-original", kind: "devicon" },
  { name: "GitHub", icon: "github-original", kind: "devicon" },
  { name: "JavaScript", icon: "javascript-original", kind: "devicon" },
  { name: "HTML5", icon: "html5-original", kind: "devicon" },
  { name: "CSS3", icon: "css3-original", kind: "devicon" },
  { name: "VS Code", icon: "vscode-original", kind: "devicon" },
  { name: "Vercel", icon: "vercel-original", kind: "devicon" },
  { name: "Postman", icon: "postman-original", kind: "devicon" },
];

// ── Agent Engineering Philosophy ─────────────────────────────────────────
export const philosophyCards = [
  {
    title: "Harness Engineering",
    key: "harness",
    description:
      "The tools, memory, and permissions around an AI agent — what it can see, touch, and remember. Getting the harness right is what makes an agent safe and useful, not just clever.",
    icon: ShieldCheck,
  },
  {
    title: "Loop Engineering",
    key: "loop",
    description:
      "How an agent evaluates and improves its own work through iteration, testing, and feedback — turning a single attempt into a converging process.",
    icon: Workflow,
  },
  {
    title: "Graph Engineering",
    key: "graph",
    description:
      "Orchestrating multi-step workflows: branching, retries, approvals — turning one agent into a dependable system instead of a single fragile call.",
    icon: Network,
  },
];

// (Philosophy tagline now lives in src/lib/i18n.tsx as `philosophy.tagline`,
// alongside its Urdu translation.)

// ── Engineering Expertise — detailed skill inventory ──────────────────
export type ExpertiseCard = {
  title: string;
  category: string;
  icon: SkillItem;
  bullets: string[];
  href?: string; // optional deep-link, e.g. back to the Philosophy section
};

export const expertiseCards: ExpertiseCard[] = [
  {
    title: "Python",
    category: "Core Language",
    icon: { name: "Python", icon: "python-original", kind: "devicon" },
    bullets: ["Core Syntax & Data Structures", "OOP Basics", "Scripting", "Testing & Debugging"],
  },
  {
    title: "AI Agent Development",
    category: "Agentic Systems",
    icon: { name: "AI Agents", icon: "Bot", kind: "lucide" },
    bullets: [
      "Claude Code workflows",
      "OpenAI Agents SDK basics",
      "Prompt Engineering",
      "Agent Loops",
    ],
  },
  {
    title: "Web Development",
    category: "Frontend",
    icon: { name: "Next.js", icon: "nextjs-original", kind: "devicon" },
    bullets: ["Next.js", "React", "Tailwind CSS", "TypeScript basics"],
  },
  {
    title: "Git & Collaboration",
    category: "Workflow",
    icon: { name: "Git", icon: "git-original", kind: "devicon" },
    bullets: ["Git workflows", "GitHub", "Branching strategies", "PR reviews"],
  },
  {
    title: "Agent Engineering Concepts",
    category: "Systems Thinking",
    icon: { name: "Agent Engineering", icon: "Network", kind: "lucide" },
    bullets: ["Harness Engineering", "Loop Engineering", "Graph Engineering"],
    href: "#philosophy",
  },
];

// ── Projects ──────────────────────────────────────────────────────────
export type Project = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  featured?: boolean;
  // "Completed" for finished standalone builds, "Hackathon Project" for
  // hackathon submissions. Stat chips reuse tech tags + a hackathon label
  // where relevant — no invented numbers.
  status: "Completed" | "Hackathon Project";
  chips: string[];
};

export const projects: Project[] = [
  {
    title: "Hackathon Book",
    description:
      "An interactive textbook for Physical AI & Humanoid Robotics — built for a hackathon to make dense robotics concepts explorable.",
    tech: ["Python"],
    href: "https://github.com/Asmayaseen",
    status: "Hackathon Project",
    chips: ["Python", "Physical AI"],
  },
  {
    title: "AI Employee Vault",
    description:
      "An AI-powered digital employee / agent system exploring how autonomous agents can own recurring work end-to-end.",
    tech: ["Python"],
    href: "https://github.com/Asmayaseen",
    status: "Completed",
    chips: ["Python", "Agentic AI"],
  },
  {
    title: "CRM – Digital FTE (Hackathon 5)",
    description:
      "A CRM built around a Digital Full-Time Employee agent concept — an AI teammate that manages customer relationships.",
    tech: ["Python"],
    href: "https://github.com/Asmayaseen",
    status: "Hackathon Project",
    chips: ["Python", "Hackathon 5"],
  },
  {
    title: "Hackathon 2",
    description: "A hackathon build exploring agentic workflows under a tight deadline.",
    tech: ["Python"],
    href: "https://github.com/Asmayaseen",
    status: "Hackathon Project",
    chips: ["Python", "Hackathon 2"],
  },
  {
    title: "Hackathon 3",
    description: "A hackathon build focused on shipping a working agent prototype fast.",
    tech: ["Python"],
    href: "https://github.com/Asmayaseen",
    status: "Hackathon Project",
    chips: ["Python", "Hackathon 3"],
  },
  {
    title: "Hackathon 4",
    description: "A hackathon build continuing the Agent Factory track of projects.",
    tech: ["Python"],
    href: "https://github.com/Asmayaseen",
    status: "Hackathon Project",
    chips: ["Python", "Hackathon 4"],
  },
  {
    title: "AI Homework Helper",
    description:
      "A classroom/family project with a neon UI that helps students work through homework step by step.",
    tech: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/Asmayaseen",
    featured: true,
    status: "Completed",
    chips: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "EduCore School Management System",
    description:
      "A school management system with a neon dashboard UI — students, classes, and records in one place.",
    tech: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/Asmayaseen",
    featured: true,
    status: "Completed",
    chips: ["HTML", "CSS", "JavaScript"],
  },
];

// ── Hackathon timeline ───────────────────────────────────────────────
// TODO: replace with real dates + one-line descriptions as you supply them.
export type HackathonEntry = {
  title: string;
  description: string;
  status: "Completed" | "Participant" | "In Progress";
};

export const hackathonTimeline: HackathonEntry[] = [
  { title: "Hackathon 1", description: "[topic] — placeholder entry, replace with real details.", status: "Completed" },
  { title: "Hackathon 2", description: "[topic] — placeholder entry, replace with real details.", status: "Completed" },
  { title: "Hackathon 3", description: "[topic] — placeholder entry, replace with real details.", status: "Completed" },
  { title: "Hackathon 4", description: "[topic] — placeholder entry, replace with real details.", status: "Completed" },
  { title: "Hackathon 5 — CRM Digital FTE", description: "Built a CRM around a Digital Full-Time Employee agent concept.", status: "Completed" },
];

// ── Learning journey / blog previews ─────────────────────────────────
// Drafts — approve/edit the copy, then it's ready to publish. Each `href`
// is "#" for now; if you want real article pages later, add a
// src/app/blog/[slug]/page.tsx route and point these at /blog/<slug>.
export type BlogPost = {
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  readTime: string;
  href: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Harness Engineering: What 'Harness' Actually Means for an AI Agent",
    excerpt:
      "Before an agent can be smart, it needs a harness — the tools, memory, and permissions that decide what it's even allowed to see or touch. Notes from the Harness Engineering course on why most agent failures are harness failures, not model failures.",
    tags: ["Agentic AI", "Harness Engineering", "Learning Journey"],
    date: "March 2026",
    readTime: "5 min read",
    href: "#",
  },
  {
    title: "12 Projects Later: Finishing the Loop Engineering Course",
    excerpt:
      "Loop Engineering is the course where an agent stops doing one-shot work and starts iterating on itself — plan, act, evaluate, retry. Here's what changed in how I build after shipping all 12 projects in the course.",
    tags: ["Agentic AI", "Loop Engineering", "Agent Factory"],
    date: "May 2026",
    readTime: "6 min read",
    href: "#",
  },
  {
    title: "Building the Graph Engineering Capstone",
    excerpt:
      "The capstone project meant turning a single agent into a real system: branches, retries, and approval steps wired together as a graph instead of one long prompt. What broke, what I had to redesign, and what finally held together.",
    tags: ["Agentic AI", "Graph Engineering", "Capstone"],
    date: "July 2026",
    readTime: "7 min read",
    href: "#",
  },
];

// ── Testimonials — intentionally empty until real ones exist ─────────
export type Testimonial = { name: string; role: string; quote: string };
export const testimonials: Testimonial[] = [];
