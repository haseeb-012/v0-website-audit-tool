"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"
import { fadeUpSoft, stagger } from "@/components/motion/primitives"

export type FAQItem = {
  q: string
  a: string
}

const homeFaqs: FAQItem[] = [
  {
    q: "What makes this different from other tools?",
    a: "Most tools check SEO and page speed. We find what breaks your user experience: broken buttons, mobile layout failures, and usability issues that cost you customers.",
  },
  {
    q: "How long does the audit take?",
    a: "The free preview takes under 60 seconds. A full paid report is generated in 3–5 minutes.",
  },
  {
    q: "What's included in the full report?",
    a: "Health score, categorized issues by severity, screenshots showing exactly where each problem appears, and step-by-step developer fixes.",
  },
  {
    q: "Do you audit Lovable, Bolt, or Replit sites?",
    a: "Yes. We&apos;re built specifically to find issues common in AI-generated websites that other tools miss.",
  },
  {
    q: "What if my site needs a login?",
    a: "We audit all publicly visible pages. The report notes which areas were excluded due to authentication requirements.",
  },
]

type FAQProps = {
  items?: FAQItem[]
  title?: string
  className?: string
}

/**
 * Accessible accordion for FAQs. Items fade up in a stagger on first view.
 * Opening/closing is a motion height + opacity spring, and the chevron
 * rotates smoothly. Single-open behavior — clicking another question
 * collapses the first.
 */
export function FAQ({
  items = homeFaqs,
  title = "Frequently asked questions",
  className,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className={cn("px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:py-28", className)}>
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center font-heading text-3xl font-black leading-tight tracking-tight text-slate sm:text-4xl"
        >
          {title}
        </motion.h2>
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {items.map((item, i) => {
            const open = openIndex === i
            return (
              <div
                key={item.q}
                className={cn(
                  "overflow-hidden rounded-lg border bg-white transition-all",
                  open ? "border-brand shadow-md" : "border-border hover:border-brand/30",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="interactive flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm font-semibold text-slate md:text-base"
                >
                  {item.q}
                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex shrink-0"
                  >
                    <ChevronDown className="size-5 text-text-muted" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-4 text-sm leading-relaxed text-text-secondary">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
