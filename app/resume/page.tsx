"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/Container";
import { resumeData, type SkillLevel } from "@/lib/resume";

const levelConfig: Record<SkillLevel, { pct: string; label: string }> = {
  Expert: { pct: "100%", label: "Expert" },
  Advanced: { pct: "80%", label: "Advanced" },
  Proficient: { pct: "60%", label: "Proficient" },
  Familiar: { pct: "40%", label: "Familiar" },
};

function SkillBar({ name, level }: { name: string; level: SkillLevel }) {
  const cfg = levelConfig[level];
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {name}
        </span>
        <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">
          {cfg.label}
        </span>
      </div>
      <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: cfg.pct }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        />
      </div>
    </div>
  );
}

// ── FIX: bullet overlap — use padding-left on the li wrapper, NOT bulletIndent ──
function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex gap-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
      {/* The dot sits in its own fixed-width span so it can NEVER overlap the text */}
      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 block" />
      <span>{text}</span>
    </li>
  );
}

function TimelineDot({ primary = true }: { primary?: boolean }) {
  return (
    <div
      className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-white dark:border-gray-950 shadow-sm ${
        primary
          ? "bg-primary-600 dark:bg-primary-500"
          : "bg-gray-400 dark:bg-gray-600"
      }`}
    />
  );
}

function TypeBadge({ type }: { type: string }) {
  const map: Record<string, string> = {
    "Full-time":
      "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300",
    Contract:
      "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300",
    Internship:
      "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300",
  };
  return (
    <span
      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${map[type] ?? map["Full-time"]}`}
    >
      {type}
    </span>
  );
}

function EyebrowLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary-600 dark:text-primary-400 mb-2">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
      {children}
    </h2>
  );
}

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function ResumePage() {
  const {
    achievements,
    experience,
    education,
    certifications,
    skills,
    languages,
  } = resumeData;
  const completedCerts = certifications.filter((c) => c.status === "Completed");
  const inProgressCerts = certifications.filter(
    (c) => c.status === "In Progress",
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* ── Hero ── */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60">
        <Container className="py-14 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div>
                <EyebrowLabel>Resume / CV</EyebrowLabel>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  {resumeData.name}
                </h1>
                <p className="mt-3 text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-400">
                  {resumeData.title}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.75}
                        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.75}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {resumeData.location}
                  </span>
                  <a
                    href={`tel:${resumeData.phone}`}
                    className="flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.75}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {resumeData.phone}
                  </a>
                  <a
                    href={`mailto:${resumeData.email}`}
                    className="flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.75}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {resumeData.email}
                  </a>
                </div>
                <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                    {resumeData.availability}
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0 flex flex-col items-start lg:items-end gap-2">
                <a
                  href="/Geoffrey-Kenga-CV.pdf"
                  download
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors shadow-sm text-sm"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download CV (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* ── Metrics strip ── */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 dark:divide-gray-800">
            {achievements.map((a) => (
              <div key={a.metric} className="py-6 px-5 first:pl-0 last:pr-0">
                <p className="text-3xl md:text-4xl font-black text-primary-600 dark:text-primary-400 tabular-nums leading-none">
                  {a.metric}
                </p>
                <p className="text-xs font-semibold text-gray-900 dark:text-white mt-2 leading-snug">
                  {a.label}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 leading-snug">
                  {a.context}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Body ── */}
      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">
          {/* LEFT */}
          <div className="space-y-16">
            {/* Summary */}
            <FadeIn>
              <EyebrowLabel>Profile</EyebrowLabel>
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-primary-500 pl-5">
                {resumeData.summary}
              </p>
            </FadeIn>

            {/* Experience */}
            <FadeIn delay={0.05}>
              <EyebrowLabel>Career</EyebrowLabel>
              <SectionTitle>Work Experience</SectionTitle>
              <div className="relative border-l-2 border-gray-200 dark:border-gray-800 pl-8 space-y-10">
                {experience.map((job, i) => (
                  <div key={i} className="relative">
                    <TimelineDot primary={i < 3} />
                    {/* Title row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <div>
                        {/* ── FIX: role title no longer inline with a bullet ── */}
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-base font-semibold text-primary-600 dark:text-primary-400">
                            {job.company}
                          </span>
                          <TypeBadge type={job.type} />
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="inline-block px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-xs font-semibold text-gray-600 dark:text-gray-400">
                          {job.period}
                        </span>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5">
                          {job.location}
                        </p>
                      </div>
                    </div>
                    {/* Bullets — each bullet is flex row so dot is always its own column */}
                    <ul className="mt-3 space-y-2.5 list-none">
                      {job.bullets.map((b, j) => (
                        <BulletItem key={j} text={b} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Education */}
            <FadeIn delay={0.1}>
              <EyebrowLabel>Academic Background</EyebrowLabel>
              <SectionTitle>Education</SectionTitle>
              <div className="relative border-l-2 border-gray-200 dark:border-gray-800 pl-8">
                {education.map((edu, i) => (
                  <div key={i} className="relative">
                    <TimelineDot />
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-base font-semibold text-primary-600 dark:text-primary-400 mt-0.5">
                          {edu.institution}
                        </p>
                        {edu.details && (
                          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                            {edu.details}
                          </p>
                        )}
                      </div>
                      <span className="flex-shrink-0 px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-xs font-semibold text-gray-600 dark:text-gray-400">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Languages */}
            <FadeIn delay={0.12}>
              <EyebrowLabel>Languages</EyebrowLabel>
              <SectionTitle>Languages</SectionTitle>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center gap-2.5 px-5 py-3 rounded-xl border-2 border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900"
                  >
                    <span className="text-base font-bold text-gray-900 dark:text-white">
                      {lang.name}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-semibold">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* RIGHT sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">
            {/* Skills */}
            <FadeIn>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60">
                  <EyebrowLabel>Tools & Proficiency</EyebrowLabel>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Technical Skills
                  </h3>
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                  {skills.map((group) => (
                    <div key={group.category} className="px-6 py-5">
                      <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                        {group.category}
                      </p>
                      <div className="space-y-4">
                        {group.items.map((skill) => (
                          <SkillBar
                            key={skill.name}
                            name={skill.name}
                            level={skill.level}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Certs — In Progress */}
            <FadeIn delay={0.05}>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60">
                  <EyebrowLabel>Credentials — Pursuing</EyebrowLabel>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    In Progress
                  </h3>
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                  {inProgressCerts.map((cert) => (
                    <div
                      key={cert.name}
                      className="px-5 py-3.5 flex items-start justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                          {cert.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {cert.issuer}
                        </p>
                      </div>
                      <span className="flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400">
                        Pursuing
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Certs — Completed */}
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60">
                  <EyebrowLabel>Credentials — Held</EyebrowLabel>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    Completed
                  </h3>
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                  {completedCerts.map((cert) => (
                    <div
                      key={cert.name}
                      className="px-5 py-3.5 flex items-start justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                          {cert.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {cert.issuer} · {cert.year}
                        </p>
                      </div>
                      <span className="flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400">
                        ✓
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* CTA */}
            <div className="rounded-2xl bg-primary-600 dark:bg-primary-700 p-6 text-white text-center">
              <h3 className="font-bold text-lg mb-2">Ready to hire?</h3>
              <p className="text-sm text-primary-100 mb-5 leading-relaxed">
                Open to remote BI roles and freelance analytics projects
                worldwide.
              </p>
              <Link
                href="/contact"
                className="block w-full py-3 bg-white text-primary-600 font-bold rounded-xl hover:bg-primary-50 transition-colors text-sm"
              >
                Get In Touch
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
