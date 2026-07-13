'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/Container'
import { getFeaturedProject, getSecondaryProjects } from '@/lib/projects'

function ToolBadge({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400">
      {label}
    </span>
  )
}

function StatusPill({ status }: { status: string }) {
  const isComplete = status === 'Complete'
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
      isComplete
        ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
        : 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800'
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full ${isComplete ? 'bg-emerald-500' : 'bg-amber-500'}`} />
      {status}
    </span>
  )
}

export default function ProjectsPage() {
  const featured = getFeaturedProject()
  const secondary = getSecondaryProjects()

  return (
    <div className="min-h-screen">
      {/* Page hero band */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60">
        <Container className="py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-primary-600 dark:text-primary-400 mb-5">
              Portfolio Projects
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] max-w-3xl">
              Real problems.{' '}
              <span className="text-primary-600 dark:text-primary-400">Real data.</span>{' '}
              Real business impact.
            </h1>
            <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Each project mirrors a genuine business challenge — not a tutorial dataset.
              Click any project to read the full case study: problem, methodology, SQL
              logic, key insights, and business recommendations.
            </p>
          </motion.div>
        </Container>
      </div>

      <Container className="py-16">

        {/* ── FEATURED PROJECT ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold tracking-[0.15em] uppercase text-primary-600 dark:text-primary-400">
              Featured Project
            </span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
          </div>

          <Link href={`/projects/${featured.slug}`} className="group block">
            <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5">

              {/* Decorative top gradient bar */}
              <div className="h-1 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600" />

              <div className="p-8 md:p-10">
                {/* Top meta row */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
                  <div className="flex flex-wrap gap-2">
                    {featured.category.map((c) => (
                      <span key={c} className="px-3 py-1 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs font-semibold border border-primary-100 dark:border-primary-800">
                        {c}
                      </span>
                    ))}
                  </div>
                  <StatusPill status={featured.status} />
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 leading-tight mb-4">
                  {featured.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                  {featured.tagline}
                </p>

                {/* Metrics strip */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-100 dark:border-gray-800">
                  {featured.metrics.map((m) => (
                    <div key={m.label} className="space-y-1">
                      <p className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 tabular-nums">
                        {m.value}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 leading-snug">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer row */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {featured.tools.map((t) => <ToolBadge key={t} label={t} />)}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 group-hover:gap-3 transition-all duration-200">
                    View full case study
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary-100 dark:bg-primary-900/40 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 transition-all duration-200">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* ── MORE PROJECTS ── */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 dark:text-gray-500">
              More Projects
            </span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
            <span className="text-xs text-gray-400 dark:text-gray-600">{secondary.length} projects</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondary.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              >
                <Link href={`/projects/${project.slug}`} className="group block h-full">
                  <div className="h-full flex flex-col rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5 overflow-hidden">

                    {/* Slim accent bar */}
                    <div className="h-0.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-primary-600 transition-all duration-300" />

                    <div className="flex flex-col flex-1 p-6">
                      {/* Meta */}
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <div className="flex flex-wrap gap-1.5">
                          {project.category.slice(0, 2).map((c) => (
                            <span key={c} className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium">
                              {c}
                            </span>
                          ))}
                        </div>
                        <StatusPill status={project.status} />
                      </div>

                      {/* Title + tagline */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 leading-tight mb-3">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                        {project.tagline}
                      </p>

                      {/* Key metric */}
                      <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <p className="text-3xl font-bold text-primary-600 dark:text-primary-400 tabular-nums leading-none">
                              {project.metrics[0].value}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1.5 leading-snug">
                              {project.metrics[0].label}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-1.5 justify-end max-w-[55%]">
                            {project.tools.slice(0, 3).map((t) => <ToolBadge key={t} label={t} />)}
                          </div>
                        </div>

                        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 group-hover:gap-3 transition-all duration-200">
                          View case study
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── GitHub CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-16"
        >
          <div className="rounded-2xl bg-gray-900 dark:bg-gray-800 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-3">
                Open Source
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                See the code behind the work
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                All projects include full SQL queries, dbt model diagrams, README documentation,
                and data quality test results on GitHub.
              </p>
            </div>
            <a
              href="https://github.com/geoffrey-bi-analyst"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2.5 px-6 py-3 bg-white text-gray-900 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              View GitHub Profile
            </a>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}