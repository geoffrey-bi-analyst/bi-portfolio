import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Geoffrey Kenga | Business Intelligence Analyst',
    template: '%s | Geoffrey Kenga',
  },
  description:
    'Business Intelligence Analyst based in Nairobi, Kenya. Specializing in SQL, Power BI, dbt, and BigQuery. Open to remote BI roles and freelance projects.',
  keywords: ['Business Intelligence', 'BI Analyst', 'SQL', 'Power BI', 'dbt', 'BigQuery', 'Nairobi', 'Remote'],
  authors: [{ name: 'Geoffrey Kenga' }],
  openGraph: {
    title: 'Geoffrey Kenga | Business Intelligence Analyst',
    description: 'Turning messy data into decisions people actually trust.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={inter.variable}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}