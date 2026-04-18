"use client"

import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  const router = useRouter()
  const [url, setUrl] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const submit = () => {
    const value = url.trim()
    const target = `/audit${value ? `?url=${encodeURIComponent(value)}` : ""}`
    router.push(target)
  }

  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-br from-white via-brand-light to-white">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Minimal gradient orbs in corners */}
      <div className="absolute -left-40 -top-40 size-80 rounded-full bg-gradient-to-br from-brand/10 to-transparent blur-3xl" />
      <div className="absolute -right-32 bottom-0 size-72 rounded-full bg-gradient-to-tl from-accent/10 to-transparent blur-3xl" />

      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-5 py-16 sm:px-8 md:px-12 md:py-20">
        <motion.div
          className="w-full max-w-2xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl font-black leading-tight tracking-tight text-slate sm:text-5xl md:text-6xl"
          >
            Find what&apos;s wrong with your{" "}
            <span className="text-brand">website</span> in seconds
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-text-secondary sm:text-xl md:mt-8"
          >
            Comprehensive QA audits instantly. Catch bugs, performance issues,
            and UX problems before your users do.
          </motion.p>

          {/* URL input + CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-0 md:mt-12"
          >
            <motion.input
              type="text"
              placeholder="https://your-website.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="interactive h-14 flex-1 rounded-lg border border-border bg-white px-5 text-sm placeholder-text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 md:text-base"
            />
            <motion.button
              type="button"
              onClick={submit}
              disabled={!url.trim()}
              whileHover={url.trim() ? { y: -2 } : undefined}
              whileTap={url.trim() ? { scale: 0.98 } : undefined}
              className="interactive group h-14 rounded-lg bg-brand px-8 font-bold text-white shadow-lg disabled:cursor-not-allowed disabled:opacity-50 sm:ml-3 md:px-10"
            >
              <span className="flex items-center justify-center gap-2">
                Get Free Audit
                <motion.span
                  animate={isFocused || url.trim() ? { x: 3 } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ArrowRight className="size-4" />
                </motion.span>
              </span>
            </motion.button>
          </motion.div>

          {/* Trust markers */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-text-muted md:mt-10 md:gap-6"
          >
            <span>✓ No credit card</span>
            <span>✓ 60 seconds</span>
            <span>✓ Full report</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
