"use client";

// ─────────────────────────────────────────────────────────────────────────
// LANGUAGE / TRANSLATIONS — edit the `ur` block below to change Urdu copy.
// Scope: navbar, hero, about intro, every section heading/label +
// description, and primary button/form text — per the update spec.
// Card bodies (feature cards, philosophy cards, project descriptions, blog
// excerpts, timeline entries) stay English-only for now; extend this file
// with more keys + wire them into the relevant section component if you
// want deeper translation later. Project names and tech/code terms are
// intentionally never translated.
// ─────────────────────────────────────────────────────────────────────────

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ur";

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      expertise: "Expertise",
      philosophy: "Philosophy",
      projects: "Projects",
      hackathons: "Hackathons",
      contact: "Contact",
    },
    hero: {
      badge: "Open to Collaborations & Internships · Pakistan",
      greetingPrefix: "Hi, I'm",
      greetingSuffix: "",
      name: "Asma Yaseen",
      tagline:
        "Building agentic AI systems and full-stack applications — from classroom projects to hackathons. Learning in public, shipping real work.",
      viewWork: "View My Work",
      githubProfile: "GitHub Profile",
      resume: "Download Resume",
      statLabels: [
        "GitHub Repos",
        "Hackathon Projects",
        "Code Reuse Rate",
        "Assignments Completed",
      ],
    },
    about: {
      title: "Who I am",
      intro:
        "I'm an Agentic AI Developer and Software Engineer, trained through GIAIC's Agentic AI program. I focus on building agentic AI systems and full-stack applications, and I'm currently working through the Loop Engineering / Agent Factory curriculum (Panaversity) — building classroom AI tools and hackathon projects along the way.",
    },
    skills: {
      title: "What I build with",
      description:
        "Grouped by technology, and by the role each tool plays inside an agentic system.",
      byTech: "By Technology",
      byRole: "By Agent Role",
    },
    expertise: {
      title: "Engineering Expertise",
      description: "A closer look at what I actually know how to do — skill by skill.",
    },
    philosophy: {
      title: "How I think about building agents",
      tagline: "harness × loop × graph — the framework I'm learning to apply to every build.",
    },
    projects: {
      title: "Things I've shipped",
      description:
        "Hackathon builds, classroom tools, and agentic experiments — pulled straight from my GitHub.",
      viewCode: "View Code",
      viewAll: "View All Repositories on GitHub",
    },
    hackathons: {
      title: "The build log",
      description: "Chronological — replace with real dates and topics as they're finalized.",
    },
    blog: {
      title: "Notes along the way",
      description:
        "Short write-ups on what I'm learning building agentic systems. More coming soon.",
      readArticle: "Read Article",
    },
    testimonials: {
      title: "What people say",
      description: "Coming soon — collecting feedback from collaborators and mentors.",
    },
    contact: {
      title: "Let's build something",
      description: "Open to collaborations, internships, and interesting agentic-AI problems.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
    },
    githubStatsTitle: "Live from GitHub",
  },
  ur: {
    nav: {
      about: "تعارف",
      skills: "مہارتیں",
      expertise: "مہارت",
      philosophy: "فلسفہ",
      projects: "منصوبے",
      hackathons: "ہیکاتھونز",
      contact: "رابطہ",
    },
    hero: {
      badge: "تعاون اور انٹرنشپ کے لیے دستیاب · پاکستان",
      greetingPrefix: "ہائے، میں",
      greetingSuffix: "ہوں",
      name: "آسما یاسین",
      tagline:
        "میں ایجنٹک AI سسٹمز اور فل اسٹیک ایپلیکیشنز بناتی ہوں — کلاس روم پراجیکٹس سے لے کر ہیکاتھونز تک۔ سیکھنے کا عمل سب کے سامنے، اور حقیقی کام کی ترسیل۔",
      viewWork: "میرا کام دیکھیں",
      githubProfile: "گٹ ہب پروفائل",
      resume: "ریزیومے ڈاؤن لوڈ کریں",
      statLabels: [
        "گٹ ہب ریپوزیٹریز",
        "ہیکاتھون پراجیکٹس",
        "کوڈ دوبارہ استعمال کی شرح",
        "مکمل اسائنمنٹس",
      ],
    },
    about: {
      title: "میں کون ہوں",
      intro:
        "میں ایک ایجنٹک AI ڈویلپر اور سافٹ ویئر انجینئر ہوں، جسے GIAIC کے ایجنٹک AI پروگرام سے تربیت حاصل ہے۔ میں ایجنٹک AI سسٹمز اور فل اسٹیک ایپلیکیشنز بنانے پر توجہ دیتی ہوں، اور فی الحال Loop Engineering / Agent Factory نصاب (Panaversity) مکمل کر رہی ہوں — اسی دوران کلاس روم AI ٹولز اور ہیکاتھون پراجیکٹس بھی بنا رہی ہوں۔",
    },
    skills: {
      title: "میں کن ٹیکنالوجیز سے کام کرتی ہوں",
      description: "ٹیکنالوجی کے لحاظ سے، اور ہر ٹول کے ایجنٹک سسٹم میں کردار کے لحاظ سے ترتیب دیا گیا۔",
      byTech: "ٹیکنالوجی کے لحاظ سے",
      byRole: "ایجنٹ کے کردار کے لحاظ سے",
    },
    expertise: {
      title: "انجینئرنگ کی مہارت",
      description: "ایک قریبی جائزہ کہ میں دراصل کیا کرنا جانتی ہوں — مہارت بہ مہارت۔",
    },
    philosophy: {
      title: "میں ایجنٹس بنانے کے بارے میں کیسے سوچتی ہوں",
      tagline: "harness × loop × graph — وہ فریم ورک جسے میں ہر build پر لاگو کرنا سیکھ رہی ہوں۔",
    },
    projects: {
      title: "وہ چیزیں جو میں نے مکمل کیں",
      description: "ہیکاتھون پراجیکٹس، کلاس روم ٹولز، اور ایجنٹک تجربات — سیدھا میرے GitHub سے۔",
      viewCode: "کوڈ دیکھیں",
      viewAll: "GitHub پر تمام ریپوزیٹریز دیکھیں",
    },
    hackathons: {
      title: "میرے سفر کا لاگ",
      description: "تاریخ وار ترتیب — حتمی تاریخوں اور موضوعات کے آتے ہی اپ ڈیٹ کیا جائے گا۔",
    },
    blog: {
      title: "سفر کے دوران نوٹس",
      description: "ایجنٹک سسٹمز بناتے ہوئے جو کچھ سیکھ رہی ہوں، اس پر مختصر تحریریں۔ مزید جلد آ رہی ہیں۔",
      readArticle: "مضمون پڑھیں",
    },
    testimonials: {
      title: "لوگ کیا کہتے ہیں",
      description: "جلد آ رہا ہے — ساتھیوں اور مینٹرز سے رائے اکٹھی کی جا رہی ہے۔",
    },
    contact: {
      title: "آئیے کچھ بنائیں",
      description: "تعاون، انٹرنشپ، اور دلچسپ ایجنٹک-AI مسائل کے لیے دستیاب ہوں۔",
      name: "نام",
      email: "ای میل",
      subject: "موضوع",
      message: "پیغام",
      send: "پیغام بھیجیں",
    },
    githubStatsTitle: "GitHub سے براہ راست",
  },
} satisfies Record<Lang, Translations>;

export type Translations = {
  nav: {
    about: string;
    skills: string;
    expertise: string;
    philosophy: string;
    projects: string;
    hackathons: string;
    contact: string;
  };
  hero: {
    badge: string;
    greetingPrefix: string;
    greetingSuffix: string;
    name: string;
    tagline: string;
    viewWork: string;
    githubProfile: string;
    resume: string;
    statLabels: string[];
  };
  about: { title: string; intro: string };
  skills: { title: string; description: string; byTech: string; byRole: string };
  expertise: { title: string; description: string };
  philosophy: { title: string; tagline: string };
  projects: { title: string; description: string; viewCode: string; viewAll: string };
  hackathons: { title: string; description: string };
  blog: { title: string; description: string; readArticle: string };
  testimonials: { title: string; description: string };
  contact: {
    title: string;
    description: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
  };
  githubStatsTitle: string;
};

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    // Read the persisted choice only after mount (localStorage isn't
    // available during SSR) — starting from "en" on both server and first
    // client render, then correcting here, keeps hydration output matching.
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored === "en" || stored === "ur") setLangState(stored);
  }, []);

  function setLang(next: Lang) {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  // Reflect the active language on <html> (lang attribute + a class used to
  // swap in an Urdu-capable font) instead of wrapping `children` in an
  // extra DOM node, which would break the flex layout in layout.tsx.
  useEffect(() => {
    document.documentElement.lang = lang === "ur" ? "ur" : "en";
    document.documentElement.classList.toggle("lang-ur", lang === "ur");
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
