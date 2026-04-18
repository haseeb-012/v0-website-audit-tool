"use client"

import { motion } from "motion/react"

const steps = [
  {
    n: 1,
    title: "Enter Your URL",
    description: "Paste your website link and click audit. No signup required.",
  },
  {
    n: 2,
    title: "Get Free Preview",
    description: "In 60 seconds, see your top 3 critical issues with screenshots.",
  },
  {
    n: 3,
    title: "Full Report",
    description: "Get detailed PDF with fixes and recommendations. Starting at $9.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function HowItWorks() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center font-heading text-3xl font-black tracking-tight text-slate sm:text-4xl md:text-5xl"
        >
          How it works
        </motion.h2>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.n}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="text-center"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-xl font-black text-white">
                {step.n}
              </div>
              <h3 className="font-heading text-lg font-bold text-slate md:text-xl">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary md:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
