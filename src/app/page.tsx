import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Expertise } from "@/components/sections/expertise";
import { Philosophy } from "@/components/sections/philosophy";
import { Projects } from "@/components/sections/projects";
import { Hackathons } from "@/components/sections/hackathons";
import { GithubStats } from "@/components/sections/github-stats";
import { Blog } from "@/components/sections/blog";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Expertise />
        <Philosophy />
        <Projects />
        <Hackathons />
        <GithubStats />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
