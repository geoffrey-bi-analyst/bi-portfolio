// app/projects/[slug]/page.tsx — Next.js 15 compatible params type
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, projects } from "@/lib/projects";
import Container from "@/components/Container";

// Next.js 15: params must be typed as Promise<{slug: string}>
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Geoffrey Kenga`,
    description: project.tagline,
  };
}

/* ── Small components ── */
function EyebrowLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary-600 dark:text-primary-400 mb-3">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
      {children}
    </h2>
  );
}

function Divider() {
  return <hr className="border-gray-100 dark:border-gray-800 my-12" />;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4 list-none">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-3 text-gray-700 dark:text-gray-300 text-base leading-relaxed"
        >
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 block" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InsightCard({ number, text }: { number: number; text: string }) {
  return (
    <div className="flex gap-5 p-5 rounded-xl bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-900/40">
      <span className="text-2xl font-black text-primary-300 dark:text-primary-700 tabular-nums flex-shrink-0 leading-none mt-0.5">
        {String(number).padStart(2, "0")}
      </span>
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function DashboardGallery({
  images,
}: {
  images: { src: string; alt: string; caption: string }[];
}) {
  return (
    <section>
      <EyebrowLabel>Dashboard Screenshots</EyebrowLabel>
      <SectionHeading>The deliverable</SectionHeading>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
        These are the actual dashboards built for this project. Click any image
        to open full size.
      </p>
      <div className="space-y-5">
        {images.map((img, i) => (
          <div
            key={i}
            className="group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/40"
          >
            <a
              href={img.src}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative"
            >
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top group-hover:scale-[1.01] transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                  priority={i === 0}
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white rounded-lg text-sm font-medium shadow-lg">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Open full size
                </span>
              </div>
            </a>
            <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-800">
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Fig {i + 1}.
                </span>{" "}
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== project.slug);

  return (
    <div className="min-h-screen">
      {/* ── Hero band ── */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60">
        <Container className="py-12 md:py-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-8 group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            All Projects
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-6">
            {project.category.map((c) => (
              <span
                key={c}
                className="px-3 py-1 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-semibold border border-primary-200 dark:border-primary-800"
              >
                {c}
              </span>
            ))}
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border ${
                project.status === "Complete"
                  ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800"
                  : "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${project.status === "Complete" ? "bg-emerald-500" : "bg-amber-500"}`}
              />
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight max-w-4xl mb-5">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {project.duration}
            </span>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View on GitHub
            </a>
          </div>
        </Container>
      </div>

      {/* ── Metrics strip ── */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 dark:divide-gray-800">
            {project.metrics.map((m) => (
              <div key={m.label} className="py-7 px-6 first:pl-0 last:pr-0">
                <p className="text-3xl md:text-4xl font-black text-primary-600 dark:text-primary-400 tabular-nums leading-none">
                  {m.value}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 leading-snug max-w-[140px]">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Body ── */}
      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">
          {/* LEFT */}
          <div>
            <section>
              <EyebrowLabel>The Business Problem</EyebrowLabel>
              <SectionHeading>What needed solving</SectionHeading>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.problem}
              </p>
            </section>

            <Divider />

            <section>
              <EyebrowLabel>Objective</EyebrowLabel>
              <SectionHeading>What I set out to build</SectionHeading>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.objective}
              </p>
            </section>

            <Divider />

            <section>
              <EyebrowLabel>Dataset</EyebrowLabel>
              <SectionHeading>The data</SectionHeading>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.dataset}
              </p>
            </section>

            <Divider />

            <section>
              <EyebrowLabel>Methodology</EyebrowLabel>
              <SectionHeading>How I approached it</SectionHeading>
              <BulletList items={project.approach} />
            </section>

            <Divider />

            {project.dashboards && project.dashboards.length > 0 && (
              <>
                <DashboardGallery images={project.dashboards} />
                <Divider />
              </>
            )}

            <section>
              <EyebrowLabel>Key Insights</EyebrowLabel>
              <SectionHeading>What the data revealed</SectionHeading>
              <div className="space-y-4">
                {project.keyInsights.map((insight, i) => (
                  <InsightCard key={i} number={i + 1} text={insight} />
                ))}
              </div>
            </section>

            <Divider />

            <section>
              <EyebrowLabel>Recommendations</EyebrowLabel>
              <SectionHeading>What I recommended</SectionHeading>
              <BulletList items={project.recommendations} />
            </section>

            <Divider />

            <section>
              <EyebrowLabel>Challenges</EyebrowLabel>
              <SectionHeading>What was hard</SectionHeading>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.challenges}
              </p>
            </section>

            <Divider />

            <section>
              <EyebrowLabel>Lessons Learned</EyebrowLabel>
              <SectionHeading>What I took away</SectionHeading>
              <blockquote className="relative pl-6 border-l-4 border-primary-500">
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
                  &ldquo;{project.lessonsLearned}&rdquo;
                </p>
              </blockquote>
            </section>

            <div className="mt-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                  Interested in working together?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Open to remote BI roles and freelance analytics projects.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <Link
                  href="/projects"
                  className="px-5 py-2.5 rounded-xl border-2 border-gray-300 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  All Projects
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-xl bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-24">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60">
                <EyebrowLabel>Tech Stack</EyebrowLabel>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {project.techStack.map((tech) => (
                  <div key={tech.name} className="px-5 py-4">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-0.5">
                      {tech.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">
                      {tech.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
              <h3 className="font-bold text-gray-900 dark:text-white mb-1.5">
                View the code
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Full SQL queries, dbt models, and documentation on GitHub.
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full px-4 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl text-sm font-bold hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                Open Repository
              </a>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-800">
                <h3 className="font-bold text-sm text-gray-900 dark:text-white">
                  More projects
                </h3>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {otherProjects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="flex items-start justify-between gap-3 px-5 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors group"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug mb-1">
                        {p.title}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 truncate">
                        {p.tools.slice(0, 3).join(" · ")}
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-primary-500 transition-colors flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
