'use client'

import { motion } from 'framer-motion'
import Container from '@/components/Container'
import Link from 'next/link'

const coreValues = [
  {
    title: 'Data Integrity',
    desc: 'Every dashboard is built on validated, reconciled data. I treat accuracy as non-negotiable.',
    icon: (
      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    title: 'Business Impact',
    desc: 'I measure success by decisions influenced and revenue/cost outcomes, not just charts shipped.',
    icon: (
      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Continuous Learning',
    desc: 'Currently deepening dbt, advanced SQL window functions, and exploring ML for forecasting.',
    icon: (
      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Stakeholder Collaboration',
    desc: 'I sit with business teams before building anything, so the output answers the real question.',
    icon: (
      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

const quickFacts = [
  { label: 'Experience', value: '3.5+ Years' },
  { label: 'Location', value: 'Nairobi, Kenya' },
  { label: 'Remote', value: 'Available', isAvailable: true },
  { label: 'Specialization', value: 'BI & Analytics' },
  { label: 'Core Tools', value: 'SQL, BigQuery, Looker Studio, Power BI, dbt, Python' },
]

const stats = [
  { value: '3.5+', label: 'Years of experience' },
  { value: '10+', label: 'Dashboards delivered' },
  { value: '5+', label: 'End-to-end BI projects' },
  { value: '100%', label: 'Remote-ready' },
]

export default function About() {
  return (
    <Container className="py-20 md:py-24">

      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <p className="text-sm font-medium tracking-wide uppercase text-primary-600 dark:text-primary-400 mb-3">
          About Me
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          I turn messy data into decisions people actually trust.
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Business Intelligence Analyst — Insights Architect
        </p>
      </motion.div>

      {/* Stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-y border-gray-200 dark:border-gray-800 py-6"
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {stat.value}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Content Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Main Bio */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="md:col-span-2 space-y-6"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold">My Journey</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a Business Intelligence Analyst who got into data because I
              wanted to answer one question well: <em>why</em>. My background
              spans business intelligence, analytics, and financial services,
              where I learned that data only becomes valuable once it is
              translated into a decision someone is willing to act on.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Day to day, that means building interactive dashboards,
              validating data before anyone trusts it, writing SQL that
              actually scales, and analyzing business and financial datasets
              using SQL, Power BI, dbt, Excel, and Python. My portfolio
              includes fraud detection, customer lifetime value, and
              e-commerce analytics projects — each one built to mirror a real
              business problem, not a tutorial.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My approach pairs technical depth with a genuine read on
              business needs: ask the right question first, protect data
              quality at every step, then communicate insights so stakeholders
              can act on them without a translator.
            </p>
          </div>

          {/* How I Work */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-5">How I Work</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="p-5 bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center mb-3">
                    {value.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1.5 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Avatar block */}
          <div className="bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 rounded-xl p-6 text-center">
            <div className="w-28 h-28 mx-auto rounded-full bg-primary-600 text-white flex items-center justify-center text-3xl font-bold">
              GK
            </div>
            <h3 className="mt-4 font-semibold text-lg">Geoffrey Kenga</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1 mt-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Nairobi, Kenya
            </p>
          </div>

          {/* Quick Facts */}
          <div className="bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
            <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Quick Facts
            </h3>
            <ul className="space-y-3 text-sm">
              {quickFacts.map((fact) => (
                <li
                  key={fact.label}
                  className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2.5 last:border-0 last:pb-0"
                >
                  <span className="text-gray-500 dark:text-gray-400">{fact.label}</span>
                  <span className="font-medium text-right max-w-[55%] flex items-center gap-1.5 justify-end">
                    {fact.isAvailable && (
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {fact.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-900/40 p-6 rounded-xl text-center">
            <h4 className="font-semibold mb-2">Let&apos;s Work Together</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Have a project, a role, or a dataset that needs answers? I would
              love to hear about it.
            </p>
            <Link
              href="/contact"
              className="inline-block w-full px-6 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium text-center"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </Container>
  )
}