"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import { resumeData } from "@/lib/resume";

type FormState = "idle" | "sending" | "success" | "error";
const FORMSPREE_ID = "xzdlknob";

const services = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Business Intelligence & Analytics",
    items: [
      "Interactive dashboards (Power BI, Looker, Looker Studio)",
      "SQL analytics & data pipeline development",
      "CLV, RFM, cohort & fraud analysis",
      "dbt modelling & data quality frameworks",
    ],
    accent: "primary",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: "Website & Web Application Design",
    items: [
      "Business portfolio websites",
      "Company & product landing pages",
      "Web application UI/UX design",
      "Responsive, mobile-first builds (Next.js, React, Tailwind)",
    ],
    accent: "purple",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Graphic Design",
    items: [
      "Business cards, flyers & posters",
      "Brochures, company profiles & catalogues",
      "Logos, brand identity & banners",
      "Social media graphics, packaging & invitation cards",
      "Photo editing & retouching",
    ],
    accent: "rose",
  },
];

const accentMap: Record<string, string> = {
  primary:
    "bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400",
  purple:
    "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400",
  rose: "bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400",
};
const accentIcon: Record<string, string> = {
  primary:
    "bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400",
  purple:
    "bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400",
  rose: "bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400",
};

function ContactCard({
  icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 p-5 rounded-xl border-2 border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-200 hover:shadow-sm"
    >
      <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-0.5">
          {label}
        </p>
        <p className="text-sm font-semibold text-gray-900 dark:text-white truncate group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {value}
        </p>
      </div>
      <svg
        className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-primary-500 flex-shrink-0 transition-colors"
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
    </a>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 20)
      e.message = "Please write at least 20 characters";
    return e;
  }

  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("sending");
    setErrors({});
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full px-4 py-3 rounded-xl border-2 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none transition-colors focus:ring-0";
  const inputClass = (field: keyof typeof form) =>
    `${inputBase} ${errors[field] ? "border-red-300 dark:border-red-700 focus:border-red-400" : "border-gray-200 dark:border-gray-700 focus:border-primary-400 dark:focus:border-primary-500"}`;

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
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary-600 dark:text-primary-400 mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight max-w-3xl">
              Let&apos;s build something{" "}
              <span className="text-primary-600 dark:text-primary-400">
                worth measuring.
              </span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Whether you need a BI solution, a website, or graphic design work
              — I deliver professional results. Reach out and let&apos;s talk
              about your project.
            </p>
            <div className="mt-6 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                {resumeData.availability}
              </span>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* ── Services I Offer ── */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <Container className="py-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary-600 dark:text-primary-400 mb-2">
              Services
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10">
              What I can help you with
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((svc) => (
                <div
                  key={svc.title}
                  className={`rounded-2xl border-2 p-6 ${accentMap[svc.accent]}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${accentIcon[svc.accent]}`}
                  >
                    {svc.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 leading-snug">
                    {svc.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {svc.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                      >
                        <svg
                          className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400 dark:text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>

      {/* ── Contact form + info ── */}
      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary-600 dark:text-primary-400 mb-2">
              Send a message
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Get in touch directly
            </h2>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800"
              >
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-emerald-800 dark:text-emerald-300">
                      Message sent successfully!
                    </p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-0.5">
                      Thanks for reaching out. I&apos;ll get back to you within
                      24 hours.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {status === "error" && (
              <div className="mb-6 p-5 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                <p className="text-sm font-semibold text-red-700 dark:text-red-400">
                  Something went wrong. Please email me at{" "}
                  <a href={`mailto:${resumeData.email}`} className="underline">
                    {resumeData.email}
                  </a>
                </p>
              </div>
            )}

            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      setErrors({ ...errors, name: "" });
                    }}
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      setErrors({ ...errors, email: "" });
                    }}
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. BI dashboard project / Logo design"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  className={inputClass("subject")}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project — BI, website, or design work..."
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    setErrors({ ...errors, message: "" });
                  }}
                  className={`${inputClass("message")} resize-none`}
                />
                <div className="flex items-center justify-between mt-1.5">
                  {errors.message ? (
                    <p className="text-xs text-red-600 dark:text-red-400">
                      {errors.message}
                    </p>
                  ) : (
                    <span />
                  )}
                  <p className="text-xs text-gray-400 dark:text-gray-500 ml-auto">
                    {form.message.length} chars
                  </p>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="w-full py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2.5 text-sm"
              >
                {status === "sending" ? (
                  <>
                    <svg
                      className="w-4 h-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
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
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </>
                )}
              </button>
              <p className="text-xs text-center text-gray-400 dark:text-gray-500">
                Powered by Formspree · Your data is never shared or sold.
              </p>
            </div>
          </motion.div>

          {/* Right info panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <div>
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary-600 dark:text-primary-400 mb-2">
                Other ways to connect
              </p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Reach me directly
              </h2>
            </div>

            <ContactCard
              icon={
                <svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-400"
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
              }
              label="Email"
              value={resumeData.email}
              href={`mailto:${resumeData.email}`}
            />

            <ContactCard
              icon={
                <svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-400"
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
              }
              label="Phone / WhatsApp"
              value={resumeData.phone}
              href={`tel:${resumeData.phone}`}
            />

            <ContactCard
              icon={
                <svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              }
              label="LinkedIn"
              value="Geoffrey Kenga Gari"
              href={resumeData.linkedin}
              external
            />

            <ContactCard
              icon={
                <svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              }
              label="GitHub"
              value="geoffrey-bi-analyst"
              href={resumeData.github}
              external
            />

            <div className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-800">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0"
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
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    Response time
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                    I typically respond within <strong>24 hours</strong> on
                    weekdays. For urgent enquiries, LinkedIn or WhatsApp is
                    fastest.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
