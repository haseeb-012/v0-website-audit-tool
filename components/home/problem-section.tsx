"use client"

import { Bug, Smartphone, AlertCircle, Zap } from "lucide-react"
import { motion } from "motion/react"

import { SectionHeader } from "@/components/site/section-header"

const problems = [
  {
    icon: Bug,
    title: "Broken Features",
    description: "Interactive bugs, form validation errors, and broken functionality go unnoticed.",
  },
  {
    icon: Smartphone,
    title: "Poor Mobile UX",
    description: "Unresponsive layouts, unreadable text, and touch targets that don't work.",
  },
  {
    icon: AlertCircle,
    title: "Performance Issues",
    description: "Slow load times and bloated resources that hurt conversion rates.",
  },
  {
    icon: Zap,
    title: "Accessibility Gaps",
    description: "Missing alt text, poor color contrast, and keyboard navigation failures.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function ProblemSection() {
  return (
    <section className="px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="The Problem"
          title="Website issues cost you customers"
          description="Bugs, performance problems, and accessibility failures go undetected until it's too late."
          align="center"
        />

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {problems.map(({ icon: Icon, title, description }) => (
            <motion.article
              key={title}
              variants={itemVariants}
              whileHover={{ y: -3, boxShadow: "var(--shadow-lg)" }}
              className="interactive rounded-lg border border-border bg-white p-6"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Icon className="size-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-slate md:text-lg">
                {title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
