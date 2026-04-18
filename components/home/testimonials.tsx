"use client"

import { Star } from "lucide-react"
import { motion } from "motion/react"

import { SectionHeader } from "@/components/site/section-header"

const testimonials = [
  {
    quote:
      "Found broken buttons and mobile issues my team missed. The screenshot evidence made fixes instant.",
    name: "James M.",
    role: "SaaS Founder",
  },
  {
    quote:
      "Clear, actionable report. My developer fixed everything the same day without questions.",
    name: "Sarah R.",
    role: "eCommerce Owner",
  },
  {
    quote:
      "Caught navigation and form issues that would kill conversions. Worth every penny.",
    name: "Alex K.",
    role: "Freelance Developer",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function Testimonials() {
  return (
    <section className="px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="What Customers Say"
          title="Builders trust QAlaunch"
          description="Teams use it to catch critical issues before launch."
        />
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="interactive flex flex-col rounded-lg border border-border bg-white p-6"
            >
              <div className="mb-3 flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-text-secondary">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 pt-4 border-t border-border">
                <div className="font-heading text-sm font-bold text-slate">
                  {t.name}
                </div>
                <div className="text-xs text-text-muted">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
