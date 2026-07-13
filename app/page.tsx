'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/Container'

const stats = [
  { value: '5+', label: 'End-to-end BI projects shipped' },
  { value: '3+', label: 'Years in analytics & BI' },
  { value: '40%', label: 'Avg. reduction in manual reporting time' },
]

const stackBadges = ['SQL', 'Power BI', 'dbt', 'BigQuery', 'Python', 'Looker Studio']

export default function Home() {
  return (
    <Container className="py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <p className="text-sm font-medium tracking-wide uppercase text-primary-600 dark:text-primary-400 mb-4">
            Business Intelligence Analyst · Nairobi, Kenya · Remote-ready
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Geoffrey Kenga turns{' '}
            <span className="text-primary-600 dark:text-primary-400">
              messy data into decisions
            </span>{' '}
            people actually trust.
          </h1>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            I build dashboards, write SQL that scales, and ship analytics
            that hold up in front of stakeholders — not just demos. Currently
            open to remote BI roles and freelance projects.
          </p>

          {/* Stack badges — no external icon library needed */}
          <div className="mt-6 flex flex-wrap gap-2">
            {stackBadges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </Link>
          </div>
        </motion.div>

        {/* Right: mock dashboard visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 p-6 shadow-sm">
            {/* Window chrome dots */}
            <div className="flex items-center gap-1.5 mb-5">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-gray-400 dark:text-gray-500 font-mono">
                revenue_dashboard.pbix
              </span>
            </div>

            {/* Animated bar chart */}
            <div className="flex items-end gap-2 h-32 mb-4">
              {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.07 }}
                  className="flex-1 bg-primary-500/70 dark:bg-primary-400/70 rounded-t"
                />
              ))}
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-100 dark:border-gray-700">
                <p className="text-xs text-gray-400 dark:text-gray-500">Revenue</p>
                <p className="text-lg font-bold text-primary-600 dark:text-primary-400">$1.2M</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-0.5">↑ 18% MoM</p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-100 dark:border-gray-700">
                <p className="text-xs text-gray-400 dark:text-gray-500">Churn rate</p>
                <p className="text-lg font-bold text-green-600 dark:text-green-400">-12%</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-0.5">↓ vs last quarter</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-gray-200 dark:border-gray-800 pt-10"
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
    </Container>
  )
}