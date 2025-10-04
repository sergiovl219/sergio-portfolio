"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import { Section, SectionTitle, TechBadge } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import profile from "@/data/profile.json";

export default function Page() {
  return (
    <div>
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-indigo-500 border-b border-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-bold text-white hover:text-indigo-200">
            Sergio Vargas
          </a>

          {/* Links + Toggle alineados a la derecha */}
          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-indigo-200">About</a>
            <a href="#tech" className="hover:text-indigo-200">Tech Stack</a>
            <a href="#experience" className="hover:text-indigo-200">Experience</a>
            <a href="#projects" className="hover:text-indigo-200">Projects</a>
            <a href="#contact" className="hover:text-indigo-200">Contact</a>

            {/* Botón ThemeToggle pegado a los links */}
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero / About */}
      <Section id="about">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              {profile.about.title}
            </motion.h1>
            <p className="mt-4 text-lg text-secondary">
              {profile.about.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {profile.about.ctas.map((cta) => (
                <Button
                  key={cta.label}
                  asChild
                  variant={cta.outline ? "outline" : "solid"}
                  href={cta.href}
                >
                  {cta.label}
                </Button>
              ))}
              {/* Nota: usamos el path desde profile.json; ya lo cambiaste a /Updated_CV_Sergio_Vargas.pdf */}
              <Button asChild variant="outline" href={profile.about.cvHref}>
                Download CV
              </Button>
            </div>
          </div>
          <div className="flex md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-40 h-40 md:w-56 md:h-56"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-500 blur-2xl opacity-30" />
              <Image
                src={profile.about.avatar}
                alt="Sergio Vargas avatar"
                width={224}  // 56 * 4px; ajusta a tu tamaño
                height={224}
                className="relative w-40 h-40 md:w-56 md:h-56 object-cover rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Tech Stack */}
      <div className="bg-[var(--background)] border-y border-slate-200 dark:border-slate-800">
        <Section id="tech">
          <SectionTitle kicker="Capabilities">🚀 Tech Stack</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Backend", items: profile.tech.backend },
              { title: "Frontend", items: profile.tech.frontend },
              { title: "Databases", items: profile.tech.databases },
              { title: "Cloud & DevOps", items: profile.tech.cloud },
              { title: "AI/LLM", items: profile.tech.ai }
            ].map((b) => (
              <Card key={b.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 space-y-3">
                  <p className="font-semibold dark:text-white">{b.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {b.items.map((t) => (
                      <TechBadge key={t} label={t} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      {/* Experience */}
      <Section id="experience">
        <SectionTitle kicker="Career">💼 Experience</SectionTitle>
        <div className="space-y-6 max-w-4xl mx-auto">
          {profile.experience.map((job) => (
            <Card
              key={job.company}
              className="border-slate-200 dark:border-slate-800"
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">{job.company}</h4>
                    <p className="text-sm text-secondary">
                      {job.role} • {job.period}
                    </p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-sm text-secondary mt-3 space-y-1">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <div className="bg-[var(--background)] border-y border-slate-200 dark:border-slate-800">
        <Section id="projects">
          <SectionTitle kicker="Selected Work">📂 Projects</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {profile.projects.map((p) => (
              <a key={p.title} href={p.href} className="group">
                <Card className="h-full transition-all group-hover:shadow-md group-hover:-translate-y-0.5">
                  <CardContent className="p-5 flex flex-col h-full">
                    <h4 className="font-bold text-lg mb-1 dark:text-white">
                      {p.title}
                    </h4>
                    <p className="text-secondary flex-1">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((t: string) => (
                        <TechBadge key={t} label={t} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </Section>
      </div>

      {/* Competitive Programming */}
      <Section id="cp">
        <SectionTitle kicker="Competitive">🏆 Competitive Programming</SectionTitle>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-4">
              <Image
                src={`https://leetcard.jacoblin.cool/${profile.links.github.split("/").pop()}?theme=dark&font=Roboto&ext=heatmap`}
                alt="LeetCode Stats"
                width={1200}
                height={420}
                className="w-full rounded-md border border-slate-200 dark:border-slate-700"
              />
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <div className="bg-[var(--background)]">
        <Section id="contact">
          <SectionTitle kicker="Reach out">📫 Get in Touch</SectionTitle>
          <div className="text-center space-y-2">
            <p>
              Email:{" "}
              <a
                href={`mailto:${profile.links.email}`}
                className="text-indigo-600 dark:text-violet-400"
              >
                {profile.links.email}
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href={profile.links.linkedin}
                className="text-indigo-600 dark:text-violet-400"
              >
                Profile
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href={profile.links.github}
                className="text-indigo-600 dark:text-violet-400"
              >
                {profile.links.github.replace("https://github.com/", "")}
              </a>
            </p>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-10 text-sm text-slate-500 dark:text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Sergio Vargas. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="font-medium text-slate-700 dark:text-slate-200">
              Next.js
            </span>
            , Tailwind, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}
