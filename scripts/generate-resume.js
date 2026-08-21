// One-off script that generates public/resume.pdf from the content below.
// Run with: node scripts/generate-resume.js
//
// To update resume content later WITHOUT touching this script, you can just
// replace public/resume.pdf manually with any PDF you export elsewhere —
// this script only matters if you want to regenerate it from these strings.

const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const OUT_PATH = path.join(__dirname, "..", "public", "resume.pdf");

const ACCENT = "#7c3aed"; // slightly deepened purple for AA contrast on white paper
const DARK = "#111318";
const GRAY = "#3f3f46";
const MUTED = "#6b7280";

const MARGIN = 43.2; // 0.6in
const PAGE_OPTS = {
  size: "LETTER",
  margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
  bufferPages: true,
  info: { Title: "Asma Yaseen — Resume", Author: "Asma Yaseen" },
};
const CONTENT_WIDTH = 612 - MARGIN * 2;

// ── Content ────────────────────────────────────────────────────────────
const NAME = "ASMA YASEEN";
const TITLE = "AI & Full-Stack Developer | Agentic AI Specialist";
const CONTACT_LINE1 =
  "Karachi, Pakistan   |   asmayaseen9960@gmail.com   |   0335-3047335";
const CONTACT_LINE2 = "github.com/Asmayaseen   |   linkedin.com/in/asma-yaseen-dev";

const SUMMARY =
  "Innovative AI & Full-Stack Developer with hands-on experience building agentic AI systems, context engineering workflows, and scalable web platforms using Next.js and Python. Completed the full Agentic AI curriculum trilogy (Loop, Harness, and Graph Engineering) through Panaversity/GIAIC, shipping 27+ real agent projects with Claude Code. Experienced Technical Coordinator with a strong background in mentorship, hackathon management, and cloud-native technologies including Docker and Kubernetes.";

const SKILLS = [
  {
    label: "Agentic AI",
    items:
      "Loop Engineering, Harness Engineering, Graph Engineering, Claude Code, MCP (Model Context Protocol), Context Engineering, Prompt Engineering, AI Chatbots, Automation Workflows",
  },
  { label: "Frontend", items: "Next.js, React, TypeScript, Tailwind CSS, Responsive UI Design" },
  {
    label: "Backend & Database",
    items: "Python, Node.js, FastAPI, REST APIs, Sanity CMS, MongoDB, SQLite",
  },
  {
    label: "Cloud & DevOps",
    items: "Docker, Kubernetes (Minikube), CI/CD Fundamentals, Git, GitHub Actions, Vercel Deployment",
  },
  {
    label: "Tools & Integrations",
    items: "Git, GitHub, Clerk Authentication, Stripe Payments, Figma",
  },
];

const PROJECTS = [
  {
    title: "Agentic AI Curriculum — Loop, Harness & Graph Engineering",
    tech: "Claude Code, Python, Git",
    bullets: [
      "Completed 27+ hands-on agent-engineering projects across three full courses: watch loops, maker-checker patterns, scheduled loops, GitHub Actions PR review agents, deny-rule hooks, prompt-injection fencing, and a capstone knowledge-graph system with a grounded verifier.",
      "Built entirely locally with Claude Code, version-controlled and pushed to GitHub across three dedicated repositories.",
    ],
  },
  {
    title: "Physical AI & Humanoid Robotics — Interactive Textbook",
    tech: "Python",
    bullets: [
      "Developed an interactive textbook platform covering Physical AI and humanoid robotics concepts as a hackathon submission.",
    ],
  },
  {
    title: "AI Employee Vault",
    tech: "Python",
    bullets: [
      "Built an AI-powered digital employee/agent system prototype for automating structured task workflows.",
    ],
  },
  {
    title: "CRM – Digital FTE (Hackathon 5)",
    tech: "Python",
    bullets: [
      "Designed a CRM system architected around a Digital Full-Time Employee (FTE) agent model for the Panaversity hackathon series.",
    ],
  },
  {
    title: "AI-Enabled E-Commerce Platform",
    tech: "Next.js, Sanity CMS, Stripe, Clerk",
    bullets: [
      "Architected a dynamic marketplace with scalable content management, secure Stripe payments, and Clerk authentication; optimized frontend performance and responsiveness.",
    ],
  },
  {
    title: "Bilingual AI Chatbot",
    tech: "Python, NLP, Automation",
    bullets: [
      "Engineered a bilingual (Urdu & English) AI chatbot using structured prompting, with automated task management and high-accuracy bilingual query handling.",
    ],
  },
];

const LEADERSHIP = {
  role: "Coordinator — GIAIC (Governor's Initiative for AI, Web3 & Metaverse)",
  meta: "Karachi, Pakistan | 2024 – Present",
  bullets: [
    "Lead technical mentorship sessions, guiding students through AI, Agentic AI, DevOps, and Full-Stack development coursework and assignments.",
    "Organize and manage hackathons, fostering a collaborative learning environment for emerging tech talent.",
    "Facilitate workshops on cloud computing, agentic AI, and web technologies to bridge theory and practice.",
  ],
};

const EDUCATION = [
  {
    title: "Advanced Training in Agentic AI, Cloud Computing & Web Development — GIAIC",
    meta: "Karachi, Pakistan | 2024 – Present",
  },
  { title: "Bachelor of Arts (B.A.)", meta: "Karachi, Pakistan | Graduated 2004" },
];

const COMPETENCIES = [
  "Problem Solving — Strong analytical thinking applied to complex debugging and architectural challenges",
  "Communication — Clear technical documentation and mentorship capabilities",
  "Collaboration — Experienced in agile team environments and project management",
  "Adaptability — Rapid learner of emerging technologies and frameworks",
];

// ── Rendering ──────────────────────────────────────────────────────────
// Draws the full resume at a given font/spacing scale. Called once per
// candidate scale to test fit (via bufferedPageRange), then once more at
// the final chosen scale to produce the real file — see fitScale() below.
function drawResume(doc, scale) {
  const sz = (n) => n * scale;
  const gp = (n) => n * scale;
  let y = MARGIN;

  function sectionHeading(text) {
    y += gp(9);
    doc.font("Helvetica-Bold").fontSize(sz(10.5)).fillColor(ACCENT);
    doc.text(text, MARGIN, y, { width: CONTENT_WIDTH });
    const h = doc.heightOfString(text, { width: CONTENT_WIDTH });
    const lineY = y + h + 1.5;
    doc.moveTo(MARGIN, lineY).lineTo(MARGIN + CONTENT_WIDTH, lineY).lineWidth(0.75).strokeColor(ACCENT).stroke();
    y = lineY + gp(4.5);
  }

  function bodyText(text, opts = {}) {
    const { size = 8.3, font = "Helvetica", color = GRAY, gapAfter = 3, indent = 0, bullet = false } = opts;
    doc.font(font).fontSize(sz(size)).fillColor(color);
    const width = CONTENT_WIDTH - indent;
    const t = bullet ? `•  ${text}` : text;
    doc.text(t, MARGIN + indent, y, { width, lineGap: gp(1.2) });
    y = doc.y + gp(gapAfter);
  }

  function labelItemsLine(label, items) {
    doc.font("Helvetica-Bold").fontSize(sz(8.3)).fillColor(DARK);
    doc.text(`${label}:  `, MARGIN, y, { continued: true, width: CONTENT_WIDTH, lineGap: gp(1.2) });
    doc.font("Helvetica").fillColor(GRAY);
    doc.text(items, { lineGap: gp(1.2) });
    y = doc.y + gp(2.5);
  }

  // Header
  doc.font("Helvetica-Bold").fontSize(sz(19)).fillColor(DARK);
  doc.text(NAME, MARGIN, y, { width: CONTENT_WIDTH });
  y = doc.y + gp(1);

  doc.font("Helvetica").fontSize(sz(11.5)).fillColor(ACCENT);
  doc.text(TITLE, MARGIN, y, { width: CONTENT_WIDTH });
  y = doc.y + gp(4);

  doc.font("Helvetica").fontSize(sz(8.6)).fillColor(MUTED);
  doc.text(CONTACT_LINE1, MARGIN, y, { width: CONTENT_WIDTH });
  y = doc.y + gp(1.5);
  doc.text(CONTACT_LINE2, MARGIN, y, { width: CONTENT_WIDTH });
  y = doc.y + gp(6);

  doc.moveTo(MARGIN, y).lineTo(MARGIN + CONTENT_WIDTH, y).lineWidth(1.1).strokeColor(ACCENT).stroke();
  y += gp(8);

  // Summary
  sectionHeading("PROFESSIONAL SUMMARY");
  bodyText(SUMMARY, { gapAfter: 0 });

  // Skills
  sectionHeading("TECHNICAL SKILLS");
  SKILLS.forEach((cat) => labelItemsLine(cat.label, cat.items));

  // Projects
  sectionHeading("SELECTED PROJECTS");
  doc.font("Helvetica-Oblique").fontSize(sz(7.8)).fillColor(MUTED);
  doc.text("github.com/Asmayaseen — 75+ repositories", MARGIN, y, { width: CONTENT_WIDTH });
  y = doc.y + gp(4);

  PROJECTS.forEach((p) => {
    doc.font("Helvetica-Bold").fontSize(sz(9)).fillColor(DARK);
    doc.text(p.title, MARGIN, y, { continued: true, width: CONTENT_WIDTH });
    doc.font("Helvetica-Oblique").fontSize(sz(8)).fillColor(MUTED);
    doc.text(`   |  ${p.tech}`);
    y = doc.y + gp(2);
    p.bullets.forEach((b, i) => {
      bodyText(b, { bullet: true, indent: 10, gapAfter: i === p.bullets.length - 1 ? 0 : 1.5 });
    });
    y += gp(5);
  });

  // Leadership
  sectionHeading("LEADERSHIP EXPERIENCE");
  doc.font("Helvetica-Bold").fontSize(sz(9)).fillColor(DARK);
  doc.text(LEADERSHIP.role, MARGIN, y, { width: CONTENT_WIDTH });
  y = doc.y + gp(1);
  doc.font("Helvetica-Oblique").fontSize(sz(8)).fillColor(MUTED);
  doc.text(LEADERSHIP.meta, MARGIN, y, { width: CONTENT_WIDTH });
  y = doc.y + gp(3);
  LEADERSHIP.bullets.forEach((b, i) => {
    bodyText(b, { bullet: true, indent: 10, gapAfter: i === LEADERSHIP.bullets.length - 1 ? 0 : 1.5 });
  });

  // Education
  sectionHeading("EDUCATION");
  EDUCATION.forEach((e, i) => {
    doc.font("Helvetica-Bold").fontSize(sz(8.6)).fillColor(DARK);
    doc.text(e.title, MARGIN, y, { width: CONTENT_WIDTH });
    y = doc.y + gp(1);
    doc.font("Helvetica-Oblique").fontSize(sz(8)).fillColor(MUTED);
    doc.text(e.meta, MARGIN, y, { width: CONTENT_WIDTH });
    y = doc.y + gp(i === EDUCATION.length - 1 ? 0 : 4);
  });

  // Key Competencies
  sectionHeading("KEY COMPETENCIES");
  COMPETENCIES.forEach((c, i) => {
    bodyText(c, { bullet: true, indent: 10, gapAfter: i === COMPETENCIES.length - 1 ? 0 : 2 });
  });

  return y;
}

function fits(scale) {
  const doc = new PDFDocument(PAGE_OPTS);
  drawResume(doc, scale);
  return doc.bufferedPageRange().count <= 1;
}

function fitScale() {
  let scale = 1.0;
  const FLOOR = 0.82;
  while (scale > FLOOR && !fits(scale)) {
    scale = Math.round((scale - 0.02) * 100) / 100;
  }
  if (!fits(scale)) {
    console.warn(
      `Warning: content still overflows one page even at scale ${scale.toFixed(2)}. ` +
        `Trim SUMMARY or the longest project bullet in scripts/generate-resume.js.`
    );
  }
  return scale;
}

const scale = fitScale();

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
const finalDoc = new PDFDocument(PAGE_OPTS);
finalDoc.pipe(fs.createWriteStream(OUT_PATH));
drawResume(finalDoc, scale);
finalDoc.end();

console.log(`Resume generated: ${OUT_PATH} (scale=${scale.toFixed(2)})`);
