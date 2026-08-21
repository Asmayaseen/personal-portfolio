// ─────────────────────────────────────────────────────────────────────────
// SITE CONFIG — edit this file to update personal info, links, and resume.
// This is the #1 file to touch when personalizing the site.
// ─────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Asma Yaseen",
  initials: "AY",
  title: "Agentic AI Developer | Software Engineer",
  location: "Karachi, Pakistan",
  tagline:
    "Building agentic AI systems and full-stack applications — from classroom projects to hackathons. Learning in public, shipping real work.",
  heroBadge: "Open to Collaborations & Internships · Pakistan",

  // Update these once available.
  links: {
    github: "https://github.com/Asmayaseen",
    linkedin: "https://www.linkedin.com/in/asma-yaseen-dev",
    email: "asmayaseen9960@gmail.com",
    whatsapp: "https://wa.me/923353047335",
    discord: "https://discord.gg/BAR5AEDkG2",
  },

  // Drop your resume file at /public/resume.pdf — this link will start working immediately.
  resumeUrl: "/resume.pdf",

  // Hero stat counters — placeholders, tune to your real numbers.
  stats: [
    { label: "GitHub Repos", value: 75, suffix: "+" },
    { label: "Hackathon Projects", value: 6, suffix: "+" },
    { label: "Code Reuse Rate", value: 60, suffix: "%" }, // TODO: replace with a real measured value
    { label: "Assignments Completed", value: 120, suffix: "+" }, // TODO: replace with a real count
  ],

  // GitHub username used for the live stats cards + all github-readme-stats embeds.
  githubUsername: "Asmayaseen",
  githubStatBlocks: [
    { label: "Repositories", value: "75+" },
    { label: "Stars", value: "17+" },
    { label: "Followers", value: "11+" },
  ],

  seo: {
    title: "Asma Yaseen — Agentic AI Developer & Software Engineer",
    description:
      "Portfolio of Asma Yaseen — Agentic AI Developer and Software Engineer, trained through GIAIC's Agentic AI program, building agentic AI systems and full-stack applications from Karachi, Pakistan.",
    url: "https://asmayaseen.dev", // TODO: replace with real deployed URL once you have one
  },
} as const;
