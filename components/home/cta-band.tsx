"use client"

import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "motion/react"

export function CtaBand() {
  const router = useRouter()

  const focusAudit = () => {
    router.push("/#audit-input")
    setTimeout(() => {
      const input = document.getElementById("audit-input")
      input?.focus()
    }, 100)
  }

  return (
    <section className="relative overflow-hidden bg-brand px-5 py-20 text-center md:px-12 md:py-24">
      {/* Subtle gradient orb */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand to-brand-dark" />

      <motion.div
        className="relative z-10 mx-auto max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-heading text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          Find every issue in seconds
        </h2>
        <p className="mx-auto mt-4 text-base text-white/80 sm:text-lg">
          Free preview. Full report from $9. No signup required.
        </p>
        <motion.button
          type="button"
          onClick={focusAudit}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-white px-8 font-bold text-brand shadow-lg hover:shadow-xl"
        >
          Get Free Audit
          <ArrowRight className="size-4" />
        </motion.button>
      </motion.div>
    </section>
  )
}
